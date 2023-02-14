<template>
  <v-container class="mx-auto" style="max-width:750px;">
    <v-card>
      <v-card-title>Kommasetzung</v-card-title>
      <v-card-text>
        beschreibung
        VIDEO UND SO
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>Aufgaben</v-card-title>
      <v-card-text>
        <template v-for="task in exercise.tasks">
          <ExerciseGapText v-if="task.type === 'gap'" :task="task"></ExerciseGapText>
          <ExerciseMultipleChoice v-if="task.type === 'multiple'" :task="task"></ExerciseMultipleChoice>
          <ExerciseSingleChoice v-if="task.type === 'single'" :task="task"></ExerciseSingleChoice>
        </template>
      </v-card-text>
    </v-card>

<!--    <img class="img_rick" src="assets/Rick.png" height="300px"/>-->
  </v-container>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>