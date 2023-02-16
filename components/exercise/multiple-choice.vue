<template>
  <div>
    {{ props.task.title }}
    <v-checkbox :key="item" v-for="item in props.task.choices" :label="item.text" :value="item.id"  @click="setClicked(item)"></v-checkbox>
    <v-container>
      <v-btn variant="success" @click="submit">Submit</v-btn>
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

const clicked = ref();

function setClicked(i) {
  clicked.value = i;
}

function checkAwnser() {
  return clicked.value.rightChoice;
}

function submit() {
  props.callback(checkAwnser());
  console.log("submitted")
}
</script>

<style scoped>

</style>