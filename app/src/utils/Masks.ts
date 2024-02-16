export const applyCpfMask = (value: string): string => {
  let numbers = value.replace(/\D/g, ''); // Remove caracteres não numéricos

  numbers = numbers.replace(/(\d{3})(\d)/, '$1.$2');
  numbers = numbers.replace(/(\d{3})(\d)/, '$1.$2');
  numbers = numbers.replace(/(\d{3})(\d{1,2})/, '$1-$2');
  numbers = numbers.substring(0, 14); // Limita a entrada a 14 caracteres

  return numbers;
};
