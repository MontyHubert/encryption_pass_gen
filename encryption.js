const base64Encode = (text) => {
    const encodedText = Buffer.from(text).toString('base64');
    return encodedText;
  };
  
  // Przykład użycia funkcji
  const originalText = "Poproszę o bardzo dobrą ocene";
  const encryptedText = base64Encode(originalText);
  console.log("Orginalny tekst:", originalText);
  console.log("Zaszyfrowany tekst:", encryptedText);