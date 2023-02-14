<template>
  {{ task.title }}
  <v-checkbox v-for="item in task.choices" :label="item.text"></v-checkbox>
</template>

<script>
export default {
  name: "multiple-choice",
  props: {
    task: {
      default: Object,
      type: Object
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>