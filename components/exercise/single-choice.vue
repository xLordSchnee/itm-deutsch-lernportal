<template>
  <div class="taskContainer">
    {{ props.task.title }}
  </div>
</template>

<script setup>
const props = defineProps({
  task: Object
});

console.log(props.task)
</script>

<style scoped>
.taskContainer {
  margin: 25px 0 0 0;
}
</style>