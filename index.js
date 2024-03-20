// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const encryptRules = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

const encrypt = () => {
    const result = document.getElementById('encryption-result');
    const textArea = document.getElementById('text-to-encrypt');
    const textToEncrypt = textArea.value;

    const encryptedText = Array.from(textToEncrypt).reduce((text, char) => {
        const result = encryptRules[char] || char;
        return text + result;
    }, "");

    textArea.value = '';

    result.innerHTML = encryptedText;
}