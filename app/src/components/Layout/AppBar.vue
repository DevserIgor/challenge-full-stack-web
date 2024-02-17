<script setup lang="ts">
import { HandleLogout } from '@/service/HandlerLogout';
</script>

<template>
  <v-app-bar title="Grupo A">
    <template v-slot:append>
      <v-btn icon @click="HandleLogout"> Sair </v-btn>
    </template>
  </v-app-bar>
</template>
