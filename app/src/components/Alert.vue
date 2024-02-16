<script setup lang="ts">
const isActive = defineModel<boolean>();
const props = defineProps<{
  title: string;
  message: string;
}>();
</script>

<template>
  <v-dialog width="500" v-model="isActive">
    <v-card :title="props.title">
      <v-card-text>
        {{ props.message }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="Fechar" @click="isActive = false"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
