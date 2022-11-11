<template>
        <v-navigation-drawer
          expand-on-hover
          rail
          class="bg-primary"
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/81.jpg"
              title="Alexander Adams"
              subtitle="alex.a88@gmail.com"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <template v-for="listItem in listItems" :key="listItem">
              <v-list-item :prepend-icon="listItem.icon" :title="listItem.title" :to="listItem.url"></v-list-item>
            </template>
          </v-list>
        </v-navigation-drawer>
  </template>

  <script lang="ts" src="~/scripts/components/base/navigation.ts"></script>