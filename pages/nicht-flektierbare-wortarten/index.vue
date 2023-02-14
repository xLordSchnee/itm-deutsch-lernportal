<template>
  <v-container class="mx-auto" style="max-width:750px;">
    <v-card>
      <v-card-title>Thema Nicht flektierbare wortarten</v-card-title>
      <v-card-text class="Content">
        beschreibung
        <div class="video">
          <ExerciseExternalLink url="https://www.google.com" title="google"></ExerciseExternalLink>
        </div>
      </v-card-text>
    </v-card>

    <!--    <img class="img_rick" src="assets/Rick.png" height="300px"/>-->
  </v-container>
</template>

<script>
import MultipleChoice from "../../components/exercise/multiple-choice";
import GapText from "../../components/exercise/gap-text";
import SingleChoice from "../../components/exercise/single-choice";
import ExternalLink from "../../scripts/components/exercise/external-link";
export default {
  name: "index",
  data() {
    return {
      exercise: {
        default: Object,
        type: Object
      }
    }
  },
  mounted() {
    this.getExercise()
  },
  methods: {
    getExercise() {
      //TODO: get exercise-object from json & save object to exercise
    }
  }
}
</script>

<style scoped>

</style>