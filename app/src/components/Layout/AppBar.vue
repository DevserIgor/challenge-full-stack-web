<script setup lang="ts">
import { useAuth } from '@/hooks/useAuth';
const { logout } = useAuth();
</script>

<template>
  <v-app-bar title="Grupo A">
    <template v-slot:append>
      <v-btn icon @click="logout"> Sair </v-btn>
    </template>
  </v-app-bar>
</template>
