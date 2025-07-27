document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const senderTextareaEl = document.querySelector('#encode textarea');
    const receiverTextareaEl = document.querySelector('#decode textarea');

    const encodeButtonEL = document.querySelector('#encode button');
    const decodeButtonEl = document.querySelector('#decode button');

    encodeButtonEL.addEventListener('click', handleEncodeMessage);
    decodeButtonEl.addEventListener('click', handleDecodeMessage);

    function handleEncodeMessage(e) {
        e.preventDefault();
        
        const originalMessage = senderTextareaEl.value.trim();
        let encodedMessage = '';

        for (const char of originalMessage) {
            const originalAscii = char.charCodeAt();
            const newAscii = originalAscii + 1;
            const newChar = String.fromCharCode(newAscii);
            encodedMessage += newChar;
        }

        senderTextareaEl.value = '';
        receiverTextareaEl.value = encodedMessage;

    }
    
    function handleDecodeMessage(e) {
        e.preventDefault();

        const encodedMessage = receiverTextareaEl.value.trim();
        let decodedMessage = '';

        for (const char of encodedMessage) {
            const originalAscii = char.charCodeAt();
            const newAscii = originalAscii - 1;
            const newChar = String.fromCharCode(newAscii);
            decodedMessage += newChar;
        }

        receiverTextareaEl.value = decodedMessage;
        }
}