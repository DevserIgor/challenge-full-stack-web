<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { emailRegex } from '@/utils/Regex';
import { api } from '@/service/api';
import { ref } from 'vue';
import { AxiosError } from 'axios';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'vue-router/auto';
const { login } = useAuth();
const router = useRouter();
const { handleSubmit } = useForm({
  validationSchema: {
    email(value: string) {
      if (emailRegex.test(value)) return true;

      return 'Email inválido.';
    },
    password(value: string) {
      if (value?.length > 2) return true;

      return 'Campo senha obrigatoria.';
    },
  },
});

const errorMessageLogin = ref('');
const loading = ref(false);
const email = useField('email');
const password = useField('password');

const submit = handleSubmit(async (values) => {
  try {
    loading.value = true;
    const response = await api.post('/sessions', values);
    login({ token: response.data.token, user: response.data.user });

    loading.value = false;
    window.location.replace('/students');
  } catch (error) {
    loading.value = false;
    console.log(error);
    errorMessageLogin.value =
      (error as AxiosError<{ message: string }>).response?.data?.message ||
      (error as AxiosError).message;
  }
});

const sendable = () => {
  return !email.errorMessage.value && !password.errorMessage.value;
};
</script>

<template>
  <v-sheet
    class="indigo-lighten-5 h-100 pa-12 d-flex justify-center align-center"
    rounded
  >
    <v-card class="px-6 py-8" width="400">
      <v-sheet class="pa-4" dark rounded>
        <v-img
          rounded
          class="mx-auto"
          height="100"
          src="/assets/logo.png"
        ></v-img>
      </v-sheet>
      <v-form @submit.prevent="submit">
        <v-alert
          v-if="errorMessageLogin"
          type="error"
          dismissible
          elevation="2"
          class="my-4"
        >
          {{ errorMessageLogin }}
        </v-alert>
        <v-text-field
          prepend-inner-icon="mdi-email-outline"
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          :readonly="loading"
          class="mb-2"
          required
          label="E-mail"
        ></v-text-field>

        <v-text-field
          v-model="password.value.value"
          :error-messages="password.errorMessage.value"
          :readonly="loading"
          class="mb-2"
          required
          type="password"
          label="Password"
          prepend-inner-icon="mdi-lock-outline"
          placeholder="Enter your password"
        ></v-text-field>

        <br />

        <v-btn
          :disabled="!sendable() || loading"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          block
          variant="elevated"
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>
