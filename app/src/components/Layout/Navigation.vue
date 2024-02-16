<script setup lang="ts">
import { useAuth } from '@/hooks/useAuth';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router/auto';
const router = useRouter();
const drawer = ref(true);
const rail = ref(true);
const userName = ref('');
const { getUser } = useAuth();

onMounted(() => {
  const user = getUser();
  userName.value = user.name;
});
</script>
<template>
  <v-navigation-drawer
    :isActive="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item
      prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
      :title="userName.toUpperCase()"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-account"
        title="Alunos"
        value="students"
        @click="router.push('/students')"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
