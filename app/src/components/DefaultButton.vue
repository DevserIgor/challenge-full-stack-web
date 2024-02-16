<script setup lang="ts">
interface SearchProps {
  icon: string;
  onAddStudent: () => void;
}
const props = defineProps<SearchProps>();
</script>
<template>
  <v-sheet>
    <v-card-text>
      <v-btn @click:append-inner="props.onAddStudent()">
        <v-icon>{{ $props.icon }}</v-icon>
        <slot></slot>
      </v-btn>
    </v-card-text>
  </v-sheet>
</template>
