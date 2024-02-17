<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { emailRegex, cpfRegex } from '@/utils/Regex';
import { ref } from 'vue';
import { watch } from 'vue';
import { applyCpfMask } from '@/utils/Masks';

import { useRoute } from 'vue-router/auto';
import { onMounted } from 'vue';

import { getStudenByRA, UpdateStudent } from '@/service/Student.service';
import { Student } from '@/@types/Student.types';
import { ResponseUpdateStudent } from '@/@types/Student.types';

const route = useRoute('/students/edit.[ra]');
const raParam = ref(route.params.ra);

const { handleSubmit, handleReset, setValues } = useForm({
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

const ra = useField('ra');
const name = useField('name');
const email = useField('email');
const cpf = useField('cpf');

const submit = handleSubmit(async (values) => {
  const result = await UpdateStudent<ResponseUpdateStudent>(values as Student);
  dialog.value.title = 'Alteração de aluno.';
  dialog.value.message = result.message;
  dialog.value.active = true;
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

onMounted(async () => {
  const student = await getStudenByRA(raParam.value);

  setValues({ ...student, cpf: applyCpfMask(student.cpf) });
});
</script>
<template>
  <v-card>
    <v-form @submit.prevent="submit">
      <v-card-title>Editar Aluno</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="ra.value.value"
          label="RA"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
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
        <v-btn type="submit">Salvar</v-btn>
      </v-card-actions>
    </v-form>

    <Alert
      :title="dialog.title"
      :message="dialog.message"
      v-model="dialog.active"
    />
  </v-card>
</template>
