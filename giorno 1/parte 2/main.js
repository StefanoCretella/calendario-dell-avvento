document.getElementById('calculateButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');

    // Controllo se un file è stato caricato
    if (!fileInput.isDefaultNamespace.length) {
        return resultDiv.textContent = "Per favore, carica unm file";
    }

    // Lettura del file
    const reader = new FileReader();
    reader.onload = ({ target }) => {
        const lines = target.result.trim().split('\n');
        const [leftList, rightList] = [[], []];

        // Popolare le liste da ogni riga
        lines.forEach(line => {
            const [left, right] = line.split(/\s+/).map(Number);
            leftList.push(left);
            rightList.push(right);
        });

        // Calcolare il punteggio di similarità
        let similarityScore = 0;

        leftList.forEach(number => {
            const countInRight = rightList.filter(n => n === number).length; // Conta le occorrenze
            similarityScore += number * countInRight; // Moltiplica il numero per il conteggio
        });

        // Visualizzare il risultato
        resultDiv.textContent = `Punteggio di similarità: ${similarityScore}`;
    };

    reader.readAsText(fileInput.files[0]);
});