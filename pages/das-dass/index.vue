<template>
  <!-- Zeig task bei  -->
  <div class="container">
    <v-container class="mx-auto" style="max-width:750px;">
    <v-card>
      <v-card-title>{{ Exercise.taskTitle }}</v-card-title>
      <v-card-text>{{ Exercise.taskDescription }}</v-card-text>
      <v-card-text>
        <!-- <div v-if="Exercise.tasks[page - 1].type == 0">
          Single Choice
        </div>
        <div v-elseif="Exercise.tasks[page - 1].type == 1">
          MultipleChoice
        </div>
        <div v-elseif="Exercise.tasks[page - 1].type == 2">
          Gap Text
        </div>
        <div v-elseif="Exercise.tasks[page - 1].type == 3">
          Gap Sorting
        </div> -->
        <SingleChoice :task="Exercise.tasks[page - 1]">
          
        </SingleChoice>
      </v-card-text>
    </v-card>
    <v-pagination
      v-model="page"
      :length="Exercise.tasks.length"
    ></v-pagination>
<!--    <img class="img_rick" src="assets/Rick.png" height="300px"/>-->
  </v-container>
  </div>


</template>

<script setup>
import { ref } from "vue";
import SingleChoice from "../../components/exercise/single-choice";
import MultipleChoice from "../../components/exercise/multiple-choice";
import GapText from "../../components/exercise/gap-text";

import Exercise from "../../data/task-templates/dasDass.json"

const page = ref(1);
const task = Exercise.task[page - 1];
task.value = JSON.parse(task.value);
// console.log(task.value);
</script>

<style scoped>
.container {
  margin: 50px 0 0 100px;
}
</style>