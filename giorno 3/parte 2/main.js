function solvePuzzle() {
    // Ottieni il contenuto del textarea
    const content = document.getElementById("fileContent").value;

    // Espressione regolare per cercare le istruzioni mul(X,Y), do() e don't()
    const regex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
    let match;
    let sum = 0;
    let mulEnabled = true; // Inizialmente, le moltiplicazioni sono abilitate

    // Ciclo per eseguire il match di tutte le occorrenze
    while ((match = regex.exec(content)) !== null) {
        if (match[0] === 'do()') {
            // Se troviamo do(), abilitiamo le moltiplicazioni
            mulEnabled = true;
        } else if (match[0] === "don't()") {
            // Se troviamo don't(), disabilitiamo le moltiplicazioni
            mulEnabled = false;
        } else if (mulEnabled && match[0].startsWith('mul')) {
            // Se mul() è abilitato e valido, estraiamo i numeri e li moltiplichiamo
            const num1 = parseInt(match[1]);
            const num2 = parseInt(match[2]);
            sum += num1 * num2;
        }
    }

    // Mostra il risultato nel div con id "result"
    document.getElementById("result").innerText = `Il totale è: ${sum}`;
}
