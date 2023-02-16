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
    <v-container v-if="props.task.type == 2">
      {{ props.task.gaps }}
      <v-for :key="key" v-for="(key, value) in props.task.choices">
        <div>
          {{ value + 1 }}: <input type="text" placeholder="das/dass" v-model="answers[value]" />
        </div>
      </v-for>
    </v-container>
    <v-container v-else-if="props.task.type == 3">
      Sortierung!
    </v-container>
    <v-container>
      <v-btn color="success" @click="submit">Submit</v-btn>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  task: Object,
  lastPage: Boolean,
  callback: Function,
});

const answers = ref({});
const error = ref(false);
const errorMessage = ref("");


function showError(message) {
  errorMessage.value = message;
  error.value = true;
}

function checkAnswer() {
  if (Object.keys(answers.value).length != props.task.choices.length) {
    showError("Bitte fülle alle Antwortmöglichkeiten aus.");
    return 'error';
  }

  var isCorrect = true;

  for (var i = 0; i < props.task.choices.length; i++) {
    var choice = props.task.choices[i][i + 1].toLowerCase();
    var answer = answers.value[i].toLowerCase();
    console.log(choice, answer)
    if (choice != answer) {
      console.log(i + " ist falsch");
      isCorrect = false;
    }
  }
  return isCorrect;
}

function submit() {
  var check = checkAnswer();
  if (check == 'error') return;
  props.callback(check);
}
</script>



<style>
.taskContainer input {
  color: white;
  border-bottom: 1px solid white;
  width: 120px;
}
</style>