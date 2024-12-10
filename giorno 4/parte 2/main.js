function solvePuzzle() {
    // Ottieni il contenuto della textarea e rimuove eventuali spazi iniziali o finali
    const wordSearch = document.getElementById("wordSearch").value.trim();

    // Trasforma ogni riga del puzzle, sostituendo tutte le X con punti `.` per una visualizzazione più chiara
    const rows = wordSearch.split("\n").map(row => row.replace(/X/g, '.'));

    // Calcola l'altezza e la larghezza della griglia
    const height = rows.length;
    const width = rows[0].length;
    
    let count = 0; // Contatore per le occorrenze di X-MAS

    // Espressione regolare per trovare le occorrenze di X-MAS
    const part2 = wordSearch.match(
        /M(?=\wM.{139}A.{139}S\wS)|M(?=\wS.{139}A.{139}M\wS)|S(?=\wS.{139}A.{139}M\wM)|S(?=\wM.{139}A.{139}S\wM)/gs
    )?.length;

    // Mostra il risultato
    document.getElementById("result").innerText = `Il totale è: ${part2}`;
}
