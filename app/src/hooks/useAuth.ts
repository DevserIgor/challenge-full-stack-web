import { UserStorage } from '@/@types/User.types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { setToken } from '@/service/api';

export const useAuth = () => {
  const { storedValue, setValue } = useLocalStorage<UserStorage>('user', {
    token: '',
    user: {
      name: '',
      email: '',
    },
  });
  const login = (useLocalStorage: UserStorage) => {
    setValue(useLocalStorage);
    setToken(useLocalStorage.token);
  };

  const logout = () => {
    setValue({ token: '', user: { name: '', email: '' } });
  };

  const isLogged = () => {
    return !!storedValue?.value?.token;
  };

  const getUser = () => {
    return storedValue?.value?.user;
  };

  return {
    isLogged,
    login,
    logout,
    getUser,
  };
};
