# Guard Gallivant

# Descrizione
Il progetto **Guard Gallivant** prevede di simulare il percorso di una guardia all'interno di un labirinto, evitando ostacoli e calcolando il numero di posizioni distinte che visita prima di uscire dall'area mappata.

## Struttura del Progetto

1. **index.html**
     - Un'area di input per caricare un file .txt che rappresenta la mappa del labirinto.
     - Un pulsante per avviare il calcolo del percorso della guardia.
     - Una sezione per mostrare il risultato: il numero di posizioni distinte visitate dalla guardia.

2. **style.css**
     - Fornisce uno stile base per l'interfaccia utente.
     - Imposta un layout centrato.
     - Adatta l'aspetto degli input e del pulsante.

3. **main.js**
     - Carica il contenuto del file .txt.
     - Analizza la mappa per determinare la posizione iniziale e la direzione della guardia.
     - Simula il percorso della guardia nel labirinto.
     - Calcola e mostra il numero di posizioni distinte visitate.
     - Gestisce la logica specifica per determinare la posizione successiva della guardia e gestire le svolte.
     - Utilizza un algoritmo per rilevare i loop nella mappa per contare i loop distinti.