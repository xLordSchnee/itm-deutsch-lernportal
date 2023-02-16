<template>
  <div class="taskContainer">
    <div class="text-center">
      <v-dialog v-model="error" width="auto">
        <v-card>
          <v-card-text>
            {{ errorMessage }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="error = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    {{ props.task.title }}
    <v-for :key="item" v-for="item in props.task.choices">
      <v-checkbox :label="item.text" :value="item.id" v-model="answers[item.id]" :true-value="true" :false-value="false"></v-checkbox>
    </v-for>
    <v-container>
      <v-btn color="success" class="right-button" @click="submit" >Submit</v-btn>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate } from "vue";
const props = defineProps({
  task: Object,
  lastPage: Boolean,
  callback: Function,
});


const preparedAnswers = props.task.choices.reduce((acc, cur) => {
  acc[cur.id] = false;
  return acc;
}, {});
const answers = ref(preparedAnswers);
const error = ref(false);
const errorMessage = ref("");

function showError(message) {
  errorMessage.value = message;
  error.value = true;
}

function checkAwnser() {
  const hasTrueAnswer = Object.values(answers.value).some(answer => answer === true);
  if (!hasTrueAnswer) {
    showError("Bitte fülle alle Antwortmöglichkeiten aus.");
    return 'error';
  }

  var isCorrect = true;

  const reducedObj = props.task.choices.reduce((acc, cur) => {
    acc[cur.id] = cur.rightChoice;
    return acc;
  }, {});
  
  for (var choice in reducedObj) {
    var answer = answers.value[choice]; 
    
    if (reducedObj[choice] != answer) {
      isCorrect = false;
    }
  }

  return isCorrect;
}

function submit() {
  var check = checkAwnser();
  if (check == 'error') return;
  props.callback(check);
}

onBeforeUpdate(() => {
  answers.value = preparedAnswers;
})
</script>

<style scoped>

</style>