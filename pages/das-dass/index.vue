<template>
  <!-- Zeig task bei  -->
  <div class="container">
    <h1>{{ Exercise.taskTitle }}</h1>
    <h3>{{ Exercise.taskDescription }}</h3>

    <SingleChoice :task="Exercise.tasks[0]"></SingleChoice>
    <MultipleChoice></MultipleChoice>
  </div>


</template>

<script setup>
import { ref } from "vue";
import SingleChoice from "../../components/exercise/single-choice";
import MultipleChoice from "../../components/exercise/multiple-choice";
import GapText from "../../components/exercise/gap-text";

import Exercise from "../../data/task-templates/dasDass.json"
</script>

<style scoped>
.container {
  margin: 50px 0 0 100px;
}
</style>