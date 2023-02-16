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
    <v-radio-group>
      <v-for :key="item" v-for="item in props.task.choices">
        <v-radio :label="item.text" :value="item.id" @click="setClicked(item)"></v-radio>
      </v-for>
    </v-radio-group>
    <v-container>
      <v-btn color="success" @click="submit">Submit</v-btn>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted  } from "vue";
const props = defineProps({
  task: Object,
  lastPage: Boolean,
  callback: Function,
});

const clicked = ref();
const error = ref(false);
const errorMessage = ref("");

function showError(message) {
  errorMessage.value = message;
  error.value = true;
}

function setClicked(i) {
  clicked.value = i;
}

function checkAwnser() {
  if (!clicked.value) {
    showError("Bitte wähle eine Antwortmöglichkeit aus.");
    return 'error';
  }
  return clicked.value.rightChoice;
}

function submit() {
  var check = checkAwnser();
  if (check == 'error') return;
  props.callback(check);
}
</script>

<style scoped>
.taskContainer {
  margin: 25px 0 0 0;
}
</style>