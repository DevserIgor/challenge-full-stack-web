<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['onSearch']);

const loading = ref(false);
const search = ref('');

const handleSubmit = () => {
  loading.value = true;
  emit('onSearch', search.value);
  loading.value = false;
};
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
        @click:append-inner="handleSubmit"
        v-model="search"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>
