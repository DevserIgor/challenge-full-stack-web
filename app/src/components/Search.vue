<script setup lang="ts">
import { ref } from 'vue';

interface SearchProps {
  onSearch: (search: string) => void;
}
const loading = ref(false);
const search = ref('');
const props = defineProps<SearchProps>();
</script>
<template>
  <v-card color="grey-lighten-2" width="400">
    <v-card-text>
      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Buscar alunos"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="props.onSearch(search)"
        v-model="search"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>
