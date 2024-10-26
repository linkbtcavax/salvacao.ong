export function getRandomName() {
  const firstNames = [
    'Gustavo', 'Mariana', 'Pedro', 'Joana', 'Carlos', 'Ana', 'Bruno', 'Camila',
    'Lucas', 'Fernanda', 'Ricardo', 'Juliana', 'Felipe', 'Renata', 'Thiago', 'Gabriela',
    'Leandro', 'Claudia', 'Eduardo', 'Patrícia', 'Rodrigo', 'Beatriz'
  ];

  const lastNames = [
    'Silva', 'Souza', 'Oliveira', 'Santos', 'Pereira', 'Costa', 'Rodrigues', 'Almeida', 
    'Nascimento', 'Lima', 'Carvalho', 'Ferreira', 'Martins', 'Rocha', 'Ribeiro', 'Alves'
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  return { firstName, lastName };
}

export function getRandomEmail(firstName: string, lastName: string) {
  const domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'uol.com.br'];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}@${domain}`;
}

export function getRandomPhone() {
  const prefix = '61'; // Código de área brasileiro (DF)
  const number = Math.floor(900000000 + Math.random() * 100000000);
  return `${prefix}${number}`;
}

export function generateValidCPF() {
  const generateRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 0; i < 9; i++) {
      randomNumbers.push(Math.floor(Math.random() * 10));
    }
    return randomNumbers;
  };

  const calculateDigit = (numbers: number[]) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i] * ((numbers.length + 1) - i);
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const randomNumbers = generateRandomNumbers();
  const firstDigit = calculateDigit(randomNumbers);
  randomNumbers.push(firstDigit);
  const secondDigit = calculateDigit(randomNumbers);
  randomNumbers.push(secondDigit);

  return randomNumbers.join('');
}

export function getRandomIP() {
  const randomOctet = () => Math.floor(Math.random() * 256);
  return `${randomOctet()}.${randomOctet()}.${randomOctet()}.${randomOctet()}`;
}

export function getRandomProductTitle() {
  const categories = ['Calça', 'Short', 'Blusa', 'Camiseta', 'Jaqueta', 'Saia'];
  const brands = ['Nike', 'Adidas', 'Calvin Klein', 'Puma', 'Reebok', 'Levi\'s', 'Tommy Hilfiger'];
  const sizes = ['P', 'M', 'G', 'GG', 'XG', 'Tamanho Único'];

  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomBrand = brands[Math.floor(Math.random() * brands.length)];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

  // Formato: "Blusa Nike tamanho P"
  return `${randomCategory} ${randomBrand} tamanho ${randomSize}`;
}

