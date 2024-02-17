<script setup lang="ts">
import { ResponseCreateStudent } from '@/@types/Student.types';
import { Student } from '@/@types/Student.types';

import { useField, useForm } from 'vee-validate';
import { emailRegex, cpfRegex } from '@/utils/Regex';
import { CreateStudent } from '@/service/Student.service';

import { ref } from 'vue';
import { watch } from 'vue';
import { applyCpfMask } from '@/utils/Masks';
import router from '@/router';

const newRA = ref('');

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value: string) {
      if (value?.length >= 2) return true;

      return 'Nome deve ter pelo menos 2 caracteres.';
    },
    email(value: string) {
      if (emailRegex.test(value)) return true;

      return 'Email inválido.';
    },
    cpf(value: string) {
      if (cpfRegex.test(value)) return true;

      return 'CPF inválido.';
    },
  },
});

const name = useField('name');
const email = useField('email');
const cpf = useField('cpf');

const submit = handleSubmit(async (values) => {
  const result = await CreateStudent<ResponseCreateStudent>(values as Student);
  dialog.value.title = 'Alteração de aluno.';
  dialog.value.message = result.message;
  dialog.value.active = true;
  newRA.value = (result.student as Student).ra;
});

const dialog = ref({
  title: '',
  message: '',
  active: false,
});

watch([dialog], () => {
  if (dialog.value.active == false) {
    dialog.value.title = '';
    dialog.value.message = '';
    return;
  }
});

const onInputCpf = (event: Event) => {
  const target = event.target as HTMLInputElement;
  cpf.value.value = applyCpfMask(target.value);
};
const handleDialogClose = () => {
  if (newRA.value == '') return;
  router.push(`/students/${newRA.value}`);
};
</script>
<template>
  <v-card>
    <v-form @submit.prevent="submit">
      <v-card-title>Adicionar Aluno</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
          :counter="10"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="cpf.value.value"
          @input="onInputCpf"
          :error-messages="cpf.errorMessage.value"
          label="CPF"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$router.back">Voltar</v-btn>
        <v-btn @click="handleReset">Limpar</v-btn>
        <v-btn type="submit">Salvar</v-btn>
      </v-card-actions>
    </v-form>
    <Alert
      :title="dialog.title"
      :message="dialog.message"
      v-model="dialog.active"
      @onClose="handleDialogClose"
    />
  </v-card>
</template>
