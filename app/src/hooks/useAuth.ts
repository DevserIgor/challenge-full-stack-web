import { UserStorage } from '@/@types/User.types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

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

  const getToken = () => {
    return storedValue?.value?.token;
  };

  return {
    isLogged,
    login,
    logout,
    getUser,
    getToken,
  };
};
