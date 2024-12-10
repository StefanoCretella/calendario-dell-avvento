function solvePuzzle() {
    const wordSearch = document.getElementById("wordSearch").value.trim();
    const rows = wordSearch.split("\n"); // Dividiamo il contenuto in righe
    const target = "XMAS";
    const directions = [
        [0, 1],   // Orizzontale destra
        [1, 0],   // Verticale giù
        [1, 1],   // Diagonale basso destra
        [1, -1],  // Diagonale basso sinistra
        [0, -1],  // Orizzontale sinistra
        [-1, 0],  // Verticale su
        [-1, -1], // Diagonale alto sinistra
        [-1, 1]   // Diagonale alto destra
    ];

    let count = 0;

    // Funzione per verificare una direzione specifica
    function search(x, y, dx, dy) {
        for (let i = 0; i < target.length; i++) {
            const nx = x + i * dx;
            const ny = y + i * dy;
            if (nx < 0 || ny < 0 || nx >= rows.length || ny >= rows[0].length || rows[nx][ny] !== target[i]) {
                return false;
            }
        }
        return true;
    }

    // Loop su ogni cella
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            if (rows[i][j] === "X") { // Trova solo dove può iniziare "XMAS"
                for (const [dx, dy] of directions) {
                    if (search(i, j, dx, dy)) {
                        count++;
                    }
                }
            }
        }
    }

    // Mostra il risultato
    document.getElementById("result").innerText = `Il totale è: ${count}`;
}
