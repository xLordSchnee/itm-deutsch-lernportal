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
          {{ value + 1 }}: <input type="text" placeholder="Hier eintragen" v-model="answers[value]" />
        </div>
      </v-for>
    </v-container>
    <v-container v-else-if="props.task.type == 3">
      <v-for :key="key" v-for="(key, value) in props.task.choices">
        <div>
          {{ key.title }}: <input type="number" placeholder="Zahl eintragen" v-model="answers[value]" />
        </div>
      </v-for>
    </v-container>
    <v-container>
      <v-btn color="success" class="right-button" @click="submit">Submit</v-btn>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate, onMounted, onBeforeMount } from "vue";
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

  if (props.task.type == 2) {
    for (var i = 0; i < props.task.choices.length; i++) {
      var choice = props.task.choices[i][i + 1].toLowerCase();
      var answer = answers.value[i].toLowerCase();
      if (choice != answer) {
        isCorrect = false;
      }
    }
  } else if (props.task.type == 3) {
    var values = Object.values(answers.value);

    var isDuplicate = values.some((value, index) => values.indexOf(value) !== index);

    if (isDuplicate) {
      showError("In der Sortierung darf es keine doppelten Belegungen geben.")
      return 'error';
    }

    for (var i = 0; i < props.task.choices.length; i++) {
      var choice = props.task.choices[i].position;
      var answer = answers.value[i];
      if (choice != answer - 1) {
        isCorrect = false;
      }
    }
  }

  return isCorrect;
}

function submit() {
  var check = checkAnswer();
  if (check == 'error') return;
  props.callback(check);
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

onMounted(() => {
  if (props.task.type == 3) {
    props.task.choices = shuffle(props.task.choices);
  }
})

onBeforeUpdate(() => {
  answers.value = {};
  if (props.task.type == 3) {
    props.task.choices = shuffle(props.task.choices);
  }
})

onBeforeMount(() => {
  if (props.task.type == 3) {
    props.task.choices = shuffle(props.task.choices);
  }
})
</script>



<style>
.taskContainer input {
  color: white;
  border-bottom: 1px solid white;
  width: 120px;
}
</style>