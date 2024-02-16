<script setup lang="ts">
const searchstudents = (search: string) => {
  console.log('searching students', search);
};
</script>
<template>
  <v-container class="w-100 px-0">
    <v-card class="w-100">
      <v-card-title>Alunos</v-card-title>
      <v-card-text class="w-100 d-flex justify-space-between">
        <Search @onSearch="searchstudents" />

        <DefaultButton
          icon="mdi-plus"
          @onAddStudent="$router.push(`/students/add`)"
        >
          Adicionar aluno
        </DefaultButton>
      </v-card-text>
      <TableCustom />
    </v-card>
  </v-container>
</template>
