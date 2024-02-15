<script setup lang="ts">
import { ref } from 'vue';

defineProps({ msg: String });

const count = ref(0);
const increment = () => {
  const test = 'teste';
  console.log(test);
  count.value++;
};
</script>

<template>
  <h1>{{ count }}</h1>

  <button v-on:click="increment">Adicionar</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
