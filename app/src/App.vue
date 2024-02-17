<script setup lang="ts">
import { useAuth } from '@/hooks/useAuth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router/auto';
import AppLayout from './components/Layout/AppLayout.vue';
const router = useRouter();

const { isLogged } = useAuth();
onMounted(() => {
  !isLogged() && router.push('/login');
});
</script>
<template>
  <v-app>
    <AppLayout v-if="isLogged()">
      <template v-slot:page-content>
        <router-view />
      </template>
    </AppLayout>

    <v-layout v-else>
      <content />
    </v-layout>
  </v-app>
</template>
