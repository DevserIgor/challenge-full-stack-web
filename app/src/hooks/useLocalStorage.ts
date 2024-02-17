import { ref, watchEffect } from 'vue';

export const useLocalStorage = <T>(key: string, initialValue?: T) => {
  const storedValue = ref<T>(initialValue!);
  try {
    const item = window.localStorage.getItem(key);

    storedValue.value = item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error(error);
  }

  const setValue = (value: T | ((val: T) => T)): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue.value as T) : value;

        (storedValue.value as T) = valueToStore;

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        resolve();
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  };

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === key) {
      try {
        storedValue.value = event.newValue
          ? JSON.parse(event.newValue)
          : initialValue;
      } catch (error) {
        console.error(error);
      }
    }
  };

  window.addEventListener('storage', handleStorageChange);

  // Utiliza watchEffect para reagir a mudanças no valor armazenado e atualizar o localStorage
  watchEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== JSON.stringify(storedValue.value)) {
        window.localStorage.setItem(key, JSON.stringify(storedValue.value));
      }
    } catch (error) {
      console.error(error);
    }
  });

  return { storedValue, setValue };
};
