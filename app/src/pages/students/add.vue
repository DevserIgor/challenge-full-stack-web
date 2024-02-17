<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { emailRegex, cpfRegex } from '@/utils/Regex';
import { api } from '@/service/api';
import { ref } from 'vue';
import { watch } from 'vue';
import { applyCpfMask } from '@/utils/Masks';
import { AxiosError } from 'axios';
import { HandlerError } from '@/service/HandlerError';
import router from '@/router';

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
  try {
    await api.post('/students', values);
    router.push('/students');
  } catch (error) {
    console.log(error);
    dialog.value.title = 'Erro ao salvar aluno';
    dialog.value.message = HandlerError(error as AxiosError);
    dialog.value.active = true;
  }
});

const dialog = ref({
  title: '',
  message: '',
  active: false,
});

watch([dialog.value.active], () => {
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
</script>
<template>
  <v-cart>
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
        <v-btn @click="handleReset">Limpar</v-btn>
        <v-btn type="submit">Salvar</v-btn>
      </v-card-actions>
    </v-form>
    <Alert
      :title="dialog.title"
      :message="dialog.message"
      v-model="dialog.active"
    />
  </v-cart>
</template>
