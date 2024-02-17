<script setup lang="ts">
import { useAuth } from '@/hooks/useAuth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router/auto';

const router = useRouter();

const { isLogged } = useAuth();
onMounted(() => {
  !isLogged() && router.push('/login');
  isLogged() && router.push('/students');
});
</script>
