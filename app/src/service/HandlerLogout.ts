import { useAuth } from '@/hooks/useAuth';

const { logout } = useAuth();
export const HandleLogout = () => {
  logout();
  window.location.replace('/login');
};
