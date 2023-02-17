<template>
  <div class="container">
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

    <v-container class="mx-auto" style="width: auto">
      <v-card v-if="!showTasks">
        <v-card-title>
          <h2>{{ Exercise.taskTitle }}</h2>
        </v-card-title>
        <v-card-text>
          <h3>{{ Exercise.taskDescription }}</h3>
        </v-card-text>
        <v-card-text class="Content">
          <div class="video">
            <v-container>
              <v-for :key="externalLink" v-for="externalLink in externalLinks">
                <v-row>
                  <ExerciseExternalLink :url="externalLink.url" :title="externalLink.title">
                  </ExerciseExternalLink>
                </v-row>
              </v-for>
            </v-container>
          </div>
          <div>
            <v-btn @click="showTasks = true" color="success" class="right-button">Aufgaben anzeigen</v-btn>
          </div>
        </v-card-text>
      </v-card>
      <v-card v-else>
        <v-card-title>
          <h1>{{ Exercise.taskTitle }}</h1>
        </v-card-title>
        <v-card-text>
          <h3>{{ Exercise.taskDescription }}</h3>
        </v-card-text>
        <div v-if="exerciseFinished">
          <v-container>
            <span v-html="resultText"></span>
            <v-btn @click="$router.go()" class="right-button" color="success">Neustart</v-btn>
          </v-container>
        </div>
        <div v-else>
          <v-card-text v-if="!loading">
            <template v-if="Exercise.tasks[page - 1].type == 0">
              <SingleChoice :task="Exercise.tasks[page - 1]" :lastPage="page + 1 > Exercise.tasks.length"
                :callback="(correct) => submit(correct)">
              </SingleChoice>
            </template>
            <template v-else-if="Exercise.tasks[page - 1].type == 1">
              <MultipleChoice :task="Exercise.tasks[page - 1]" :lastPage="page + 1 > Exercise.tasks.length"
                :callback="(correct) => submit(correct)"></MultipleChoice>
            </template>
            <template v-else-if="Exercise.tasks[page - 1].type == 2">
              <GapText :task="Exercise.tasks[page - 1]" :lastPage="page + 1 > Exercise.tasks.length"
                :callback="(correct) => submit(correct)"></GapText>
            </template>
            <template v-else-if="Exercise.tasks[page - 1].type == 3">
              <GapText :task="Exercise.tasks[page - 1]" :lastPage="page + 1 > Exercise.tasks.length"
                :callback="(correct) => submit(correct)"></GapText>
            </template>
            <template v-else>
              Error
            </template>
          </v-card-text>
          <v-card-text v-else>
            Loading...
          </v-card-text>
          <v-container v-if="allTaskCompleted">
            <v-btn color="danger" @click="page = 1">Aufgaben erneut angucken</v-btn>
            <v-btn color="warning" @click="finishExercise" class="right-button">Finish Exercise</v-btn>
          </v-container>
        </div>
      </v-card>

      <!--    <img class="img_rick" src="assets/Rick.png" height="300px"/>-->
    </v-container>
    <v-container class="pagination-container" v-if="Exercise.tasks.length >= 2 && !exerciseFinished && showTasks">
      <v-pagination class="pagination" v-model="page" :length="Exercise.tasks.length" :total-visible="5"></v-pagination>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SingleChoice from "../../components/exercise/single-choice";
import MultipleChoice from "../../components/exercise/multiple-choice";
import GapText from "../../components/exercise/gap-text";
import ExternalLink from "../../components/exercise/external-link";

import Exercise from "../../data/task-templates/zusammen-getrennt.json"

const showTasks = ref(false);
const loading = ref(true);
const allTaskCompleted = ref(false);
const page = ref(Exercise.tasks.length);
const exerciseFinished = ref(false)
const results = ref({});
const resultText = ref('');
const error = ref(false);
const errorMessage = ref("");
const externalLinks = ref([
  { title: "Video", url: "https://leon-dankbar.de/misc/school/Zusammenschreiben_und_Getrenntschreiben_720p_V3.mp4" }
]);


function showError(message) {
  errorMessage.value = message;
  error.value = true;
}


function finishExercise() {
  //check if all tasks has been completed
  if (Object.keys(results.value).length == Exercise.tasks.length) {
    showResults();
  } else {
    showError("Nicht alle Aufgbaben sind erledigt!");
    return;
  }
}

function showResults() {
  var text = "";
  for (var resultKey in results.value) {
    var result = results.value[resultKey];
    var string = "Seite " + (result.page) + ": ";
    var isCorrect = (result.wasCorrect) ? "Richtig" : "Falsch";
    string += isCorrect + "<br>";
    text += string + "\n";
  }

  resultText.value = text;
  exerciseFinished.value = true;
}

function submit(answer) {
  var task = Exercise.tasks[page.value - 1];
  results.value[task.id] = {
    id: task.id,
    page: page.value,
    wasCorrect: answer,
    task: task
  }
  if (Object.keys(results.value).length == Exercise.tasks.length) {
    allTaskCompleted.value = true;
  } else {
    page.value++;
  }

}
onMounted(() => {
  if (loading.value) {
    page.value = 1;
  }
  loading.value = false;
})
</script>

<style>
.container {
  margin: 50px 0 0 100px;
}

.pagination-container {
  display: flex;
  justify-content: center;
  z-index: 9999;
}

.pagination-container * {
  z-index: 9999;
}

.pagination {
  display: flex;
  position: absolute;
  bottom: 0px;
  margin: 0 auto 10px auto;
  z-index: 9999;
}

.right-button {
  float: right;
  bottom: 15px;
}
</style>