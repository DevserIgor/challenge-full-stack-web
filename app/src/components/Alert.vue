<script setup lang="ts">
import { watch } from 'vue';

const isActive = defineModel<boolean>();
const props = defineProps<{
  title: string;
  message: string;
}>();

const emit = defineEmits(['onClose']);

const handleClose = () => {
  isActive.value = false;
  emit('onClose');
};

watch([isActive], () => {
  if (isActive.value == false) {
    emit('onClose');
  }
});
</script>

<template>
  <v-snackbar v-model="isActive" color="indigo-lighten-5" vertical>
    <div class="text-subtitle-1 pb-2">{{ props.title }}</div>

    <p>{{ props.message }}</p>

    <template v-slot:actions>
      <v-btn color="indigo" variant="text" @click="handleClose"> Fechar </v-btn>
    </template>
  </v-snackbar>
</template>
