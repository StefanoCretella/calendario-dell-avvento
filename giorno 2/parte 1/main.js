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
        let safeCount = 0;

        // Mostriamo il contenuto del file letto
        console.log("Dati letti:", lines);

        lines.forEach((line, idx) => {
            const levels = line.split(/\s+/).map(Number);

            // Log della riga letta e del suo contenuto
            console.log(`Analizzando report #${idx + 1}:`, levels);

            // Verifica se il report è sicuro
            if (isSafeReport(levels)) {
                console.log(`Report #${idx + 1} è sicuro.`);
                safeCount++;
            } else {
                console.log(`Report #${idx + 1} NON è sicuro.`);
            }
        });

        // Mostrare solo la quantità di zone sicure
        resultDiv.innerHTML = `Quantità zone sicure: ${safeCount}`;
    };

    reader.readAsText(fileInput.files[0]);
});

// Funzione per determinare se un report è sicuro
function isSafeReport(levels) {
    let biggestChange;
    let smallestChange;
    let decrease = false;
    let increase = false;

    // Filtriamo gli zeri dai livelli
    levels = levels.filter(x => x !== 0); // Rimuovi gli zeri

    // Se la lista è vuota dopo il filtro, non è sicura
    if (levels.length === 0) {
        return false;
    }

    // Calcola le differenze tra numeri consecutivi
    for (let i = 1; i < levels.length; i++) {
        const diff = Math.abs(levels[i] - levels[i - 1]);

        // Log della differenza per il debugging
        console.log(`Differenza tra ${levels[i]} e ${levels[i - 1]}: ${diff}`);

        if (diff < 1 || diff > 3) {
            console.log(`La differenza ${diff} è fuori dal range, quindi il report non è sicuro.`);
            return false;
        }

        if (levels[i] < levels[i - 1]) decrease = true; // Se c'è una diminuzione
        if (levels[i] > levels[i - 1]) increase = true; // Se c'è un aumento

        biggestChange = Math.max(biggestChange, diff);
        smallestChange = Math.min(smallestChange, diff);
    }

    // Verifica se il report è in ordine crescente o decrescente
    console.log(`Report in ordine crescente: ${increase}, in ordine decrescente: ${decrease}`);

    return (decrease && !increase) || (!decrease && increase); // Sicuro solo se in ordine crescente o decrescente
}
