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

        lines.forEach((line, idx) => {
            const levels = line.split(/\s+/).map(Number);

            // Verifica se il report è sicuro o se può diventarlo rimuovendo un singolo livello
            if (isSafeReport(levels) || canBeSafeWithDampener(levels)) {
                safeCount++;
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

    for (let i = 1; i < levels.length; i++) {
        const diff = Math.abs(levels[i] - levels[i - 1]);

        if (diff < 1 || diff > 3) {
            return false;
        }

        if (levels[i] < levels[i - 1]) decrease = true;
        if (levels[i] > levels[i - 1]) increase = true;

        biggestChange = Math.max(biggestChange, diff);
        smallestChange = Math.min(smallestChange, diff);
    }

    return (decrease && !increase) || (!decrease && increase);
}

// Funzione aggiornata per verificare se il report può diventare sicuro rimuovendo un numero
function canBeSafeWithDampener(levels) {
    for (let i = 0; i < levels.length; i++) {
        // Crea una nuova lista senza il numero corrente
        const modifiedLevels = levels.slice(0, i).concat(levels.slice(i + 1));

        // Verifica se la lista modificata è sicura
        if (isSafeReport(modifiedLevels)) {
            return true;
        }
    }

    return false;
}
