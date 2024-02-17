<script setup lang="ts">
const emit = defineEmits(['onAddStudent']);
interface SearchProps {
  icon: string;
}
const props = defineProps<SearchProps>();

const handleClick = () => {
  emit('onAddStudent');
};
</script>
<template>
  <v-sheet>
    <v-card-text>
      <v-btn color="primary" @click:append-inner="handleClick">
        <v-icon>{{ props.icon }}</v-icon>
        <slot></slot>
      </v-btn>
    </v-card-text>
  </v-sheet>
</template>
