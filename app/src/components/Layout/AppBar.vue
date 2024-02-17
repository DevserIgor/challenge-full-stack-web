<script setup lang="ts">
import { useAuth } from '@/hooks/useAuth';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTheme } from 'vuetify';
const theme = useTheme();

const { logout } = useAuth();
const { storedValue, setValue } = useLocalStorage<{ theme: string }>('Theme');
const handleTheme = () => {
  if (storedValue.value.theme === 'light') {
    setValue({ theme: 'dark' });
    theme.global.name.value = 'dark';
    document.querySelector('html')?.classList.add('dark');
    return;
  }
  setValue({ theme: 'light' });
  theme.global.name.value = 'light';
  document.querySelector('html')?.classList.remove('dark');
};
</script>

<template>
  <v-app-bar color="primary" title="Grupo A">
    <template v-slot:append>
      <v-btn
        v-if="storedValue?.theme == 'dark'"
        icon="mdi-lightbulb-outline"
        @click="handleTheme"
      />
      <v-btn
        v-if="storedValue?.theme == 'light'"
        icon="mdi-lightbulb"
        @click="handleTheme"
      />
      <v-btn icon="mdi-logout" @click="logout" />
    </template>
  </v-app-bar>
</template>
