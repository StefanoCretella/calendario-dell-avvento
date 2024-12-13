Object.defineProperties(Array.prototype, {
    sum: { value: function () { return this.map(Number).reduce((p, a) => p + a, 0); } },
    sortf: { value: function () { return this.sort((a, b) => a - b); } },
    prod: { value: function () { return this.map(Number).reduce((p, a) => p * a, 1); } },
    rotate: { value: function (n) { n = n % this.length; while (this.length && n < 0) n += this.length; this.push.apply(this, this.splice(0, n)); return this; } },
    firstn: { value: function (n) { return n >= 0 ? this.sort((a, b) => b - a).slice(0, n) : []; } },
    occur: { value: function () { return this.reduce((acc, curr) => { acc[curr] = acc[curr] + 1 || 1; return acc }, {}); } }
});
Number.prototype.mod = function (n) { return ((this % n) + n) % n; };

const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
let grid = [];
let startpos = [-1, -1];
let startdir = 0;
let visited = new Set(); // Inizializza la variabile visited

// Funzione per verificare se una posizione è all'interno della griglia
const ingrid = (row, col) => row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;

// Funzione per verificare il percorso della guardia senza ostacolo
const calculatePath = () => {
    let pos = [...startpos];
    let dir = startdir;
    visited.add(`${pos[0]},${pos[1]}`);
    
    while (true) {
        let nextpos = [pos[0] + dirs[dir][0], pos[1] + dirs[dir][1]];
        if (!ingrid(nextpos[0], nextpos[1])) {
            break;
        }
        if (grid[nextpos[0]][nextpos[1]] === '#') {
            dir++;
            dir %= 4;
        } else {
            pos = [nextpos[0], nextpos[1]];
            visited.add(`${pos[0]},${pos[1]}`);
        }
    }
};

// Funzione per verificare se la guardia forma un ciclo con un ostacolo aggiunto
const loops = (obs) => {
    let temp = grid.map(e => e.map(e => e));
    temp[obs[0]][obs[1]] = '#';
    let pos = [...startpos];
    let dir = startdir;
    let localVisited = new Set(); // Inizializza la variabile localVisited
    while (true) {
        let state = `${pos[0]},${pos[1]},${dirs[dir][0]},${dirs[dir][1]}`;
        if (localVisited.has(state)) return true;
        localVisited.add(state);
        let nextpos = [pos[0] + dirs[dir][0], pos[1] + dirs[dir][1]];
        if (!ingrid(nextpos[0], nextpos[1])) return false;
        if (temp[nextpos[0]][nextpos[1]] == '#') {
            dir++;
            dir %= 4;
        } else {
            pos = [nextpos[0], nextpos[1]];
        }
    }
};

document.getElementById('load').addEventListener('click', () => {
    let fileInput = document.getElementById('fileInput');
    let file = fileInput.files[0];
    
    if (file) {
        let reader = new FileReader();
        reader.onload = function(event) {
            let data = event.target.result;
            grid = data.split('\n').map(e => e.split(''));
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                    if (grid[i][j] == '^') {
                        startpos = [i, j];
                        grid[i][j] = '.';
                        break;
                    }
                }
                if (startpos[0] !== -1) break;
            }
            
            let pos = [...startpos];
            let dir = startdir;
            calculatePath(); // Simula il percorso della guardia senza ostacolo
            let loopPositions = 0;
            
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[0].length; j++) {
                    if (!visited.has(`${i},${j}`)) continue; // Se la posizione non è stata visitata non considerarla
                    if (grid[i][j] == '#') continue; // Se è già un ostacolo non considerarla
                    if (i == startpos[0] && j == startpos[1]) continue; // Se è la posizione di partenza della guardia non considerarla
                    if (loops([i, j])) {
                        loopPositions++; // Contiamo le posizioni di ostacolo che formano un ciclo
                    }
                }
            }
            
            console.log(loopPositions); // Output: Numero di posizioni di ostacolo che formano un ciclo
        };
        reader.readAsText(file);
    } else {
        console.error('Nessun file selezionato.');
    }
});
