<!--<v-card>-->
<!--<v-card-title>Thema Dass-Dass Leon Decker</v-card-title>-->
<!--<v-card-text class="Content">-->
<!--  beschreibung-->
<!--  <div class="video">-->
<!--    <ExerciseExternalLink url="https://youtu.be/7ehiHejhjWk" title="Das als Artikel"></ExerciseExternalLink>-->
<!--  </div>-->
<!--</v-card-text>-->
<!--</v-card>-->

<template>
  <div class="container">
    <v-container class="mx-auto" style="max-width:750px;">
      <v-card>
        <v-card-title>{{ Exercise.taskTitle }}</v-card-title>
        <v-card-text>{{ Exercise.taskDescription }}</v-card-text>
        <div v-if="exerciseFinished || !results">
          Results 
        </div>
        <div v-else>
          <v-card-text>
            <div v-if="Exercise.tasks[page - 1].type == 0">
              Single Choice
              <SingleChoice :task="Exercise.tasks[page - 1]" :lastPage="page + 1 > Exercise.tasks.length"
                :callback="(correct) => submit(correct)"></SingleChoice>
            </div>
            <div v-else-if="Exercise.tasks[page - 1].type == 1">
              MultipleChoice
              <MultipleChoice :task="Exercise.tasks[page - 1]" :lastPage="page + 1 > Exercise.tasks.length"
                :callback="(correct) => submit(correct)"></MultipleChoice>
            </div>
            <div v-else-if="Exercise.tasks[page - 1].type == 2">
              Gap Text
              <GapText :task="Exercise.tasks[page - 1]" :lastPage="page + 1 > Exercise.tasks.length"
                :callback="(correct) => submit(correct)"></GapText>
            </div>
            <div v-else-if="Exercise.tasks[page - 1].type == 3">
              Gap Sorting
              <GapText :task="Exercise.tasks[page - 1]" :lastPage="page + 1 > Exercise.tasks.length"
                :callback="(correct) => submit(correct)"></GapText>
            </div>
            <div v-else>
              Error
            </div>
          </v-card-text>
          <v-container v-if="page + 1 > Exercise.tasks.length">
            <v-btn variant="success" @click="finishExercise">Finish Exercise</v-btn>
          </v-container>
        </div>
      </v-card>
      <!--    <img class="img_rick" src="assets/Rick.png" height="300px"/>-->
    </v-container>
    <v-container class="pagination-container">
      <v-pagination class="pagination" v-model="page" :length="Exercise.tasks.length"></v-pagination>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SingleChoice from "../../components/exercise/single-choice";
import MultipleChoice from "../../components/exercise/multiple-choice";
import GapText from "../../components/exercise/gap-text";

import Exercise from "../../data/task-templates/dasDass.json"

const page = ref(5);
const exerciseFinished = ref(false)
const results = ref({});

function finishExercise() {
  exerciseFinished.value = true;
}

function showResults() {
  results.value = { test: true }
}

function submit(awnser) {
  console.log("Submit called", awnser)
  if (page + 1 > Exercise.tasks.length) {
    showResults();
    return;
  }
  page.value++;
}
</script>

<style scoped>
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
</style>