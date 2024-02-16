<script setup lang="ts">
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'vue-router/auto';

const router = useRouter();

const { logout } = useAuth();
const handleLogout = () => {
  logout();
  router.push('/login');
  window.location.reload();
};
</script>

<template>
  <v-app-bar title="Grupo A">
    <template v-slot:append>
      <v-btn icon @click="handleLogout"> Sair </v-btn>
    </template>
  </v-app-bar>
</template>
