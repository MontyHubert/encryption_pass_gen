function generatePassword(length, useUppercase, useNumbers, useSpecialChars) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '@!$#%^*()_+?/';

  let chars = lowercaseChars;

  if (useUppercase) {
    chars += uppercaseChars;
  }

  if (useNumbers) {
    chars += numberChars;
  }

  if (useSpecialChars) {
    chars += specialChars;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

// Przykład użycia funkcji
const generatedPassword = generatePassword(12, true, true, true);
console.log('Generated Password:', generatedPassword);
