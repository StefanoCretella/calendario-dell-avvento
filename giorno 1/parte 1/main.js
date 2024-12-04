document.getElementById('calculateButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');

    // Controllo se un file è stato caricato
    if (!fileInput.files.length) {
        return resultDiv.textContent = "Per favore, carica un file";
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

        // Ordinare le liste
        leftList.sort((a, b) => a - b);
        rightList.sort((a, b) => a - b);

        // Calcolare la distanza totale
        const totalDistance = leftList.reduce((sum, left, i) => sum + Math.abs(left - rightList[i]), 0);

        // Visualizzare il risultato
        resultDiv.textContent = `Distanza totale: ${totalDistance}`;
    };

    reader.readAsText(fileInput.files[0]);
});
