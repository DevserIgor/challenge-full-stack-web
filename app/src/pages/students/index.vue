<script setup lang="ts">
import { api } from '@/service/api';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { Student } from '@/@types/Student.types';
import { HandlerError } from '@/service/HandlerError';
import { AxiosError } from 'axios';
import { provide } from 'vue';

let students = ref<Student[]>([]);
provide('students', students);

const searchstudents = async (search: string) => {
  try {
    const result = await api.get(`/students?search=${search}`);

    students.value = result.data.map((student: Student) => {
      return {
        ra: student.ra,
        name: student.name,
        email: student.email,
        cpf: student.cpf,
      };
    });
  } catch (error) {
    HandlerError(error as AxiosError);
  }
};

onMounted(() => {
  searchstudents('');
});
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
