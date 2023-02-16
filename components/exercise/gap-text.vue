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
    <v-container>
      {{ props.task.gaps}}
      <v-for :key="key" v-for="(key, value) in props.task.choices">
        <div>
          {{ value + 1 }}: <input type="text" placeholder="das/dass" v-model="awnsers[value]" />
        </div>
      </v-for>
    </v-container>
    <v-container v-if="!lastPage">
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

const awnsers = ref({});
const error = ref(false);
const errorMessage = ref("");



function showError(message) {
  errorMessage.value = message;
  error.value = true;
}

function checkAwnser() {
  
}

function submit() {

}
</script>



<style>
.taskContainer input {
  color: white;
  border-bottom: 1px solid white;
  width: 120px;
}
</style>