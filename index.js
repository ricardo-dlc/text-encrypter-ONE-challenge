// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

document.addEventListener("DOMContentLoaded", () => {
    const encryptRules = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    const result = document.getElementById('encryption-result');
    const textArea = document.getElementById('text-to-encrypt');

    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(result.innerHTML);
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    const encrypt = () => {
        const textToEncrypt = textArea.value;

        const encryptedText = Array.from(textToEncrypt).reduce((text, char) => {
            const result = encryptRules[char] || char;
            return text + result;
        }, "");

        textArea.value = '';

        result.innerHTML = encryptedText;

        document.getElementById('text-result').classList.remove('hidden');
        document.getElementById('no-ecrypted-text').classList.add('hidden');
    }

    const decrypt = () => {
        let decryptedText = textArea.value;

        Object.entries(encryptRules).forEach(([key, value]) => {
            decryptedText = decryptedText.replaceAll(value, key);
        });

        textArea.value = '';

        result.innerHTML = decryptedText;
    }

    document.getElementById('encrypt-button').addEventListener('click', encrypt);
    document.getElementById('decrypt-button').addEventListener('click', decrypt);
    document.getElementById('copy-to-clipboard').addEventListener('click', copyContent);
});
