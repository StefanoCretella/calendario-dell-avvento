function solvePuzzle() {
    // Ottieni il contenuto del textarea
    const content = document.getElementById("fileContent").value;
    
    // Espressione regolare per cercare le istruzioni mul(X,Y)
    const regex = /mul\((\d+),(\d+)\)/g; // (\d+) cattura numeri interi tra parentesi
    let match;
    let sum = 0;

    // Ciclo per eseguire il match di tutte le occorrenze
    while ((match = regex.exec(content)) !== null) {
        // Estrai i numeri X e Y dalla stringa match
        const [, num1, num2] = match;
        // Aggiungi il risultato della moltiplicazione al totale
        sum += parseInt(num1) * parseInt(num2);
    }

    // Visualizza il risultato nel div con id "result"
    document.getElementById("result").innerText = `Il totale è: ${sum}`;
}
