<template>
  <v-btn
      class="externalButton"
      color="primary"
      variant="flat"
      target="_blank"
      :href="url"
  >{{ title }}</v-btn>
</template>

<script lang="ts" src="~/scripts/components/exercise/external-link.ts"></script>

<style scoped>
.externalButton {
  margin-bottom: 50px
}
</style>