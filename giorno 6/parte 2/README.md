# Guard Gallivant loop

# Descrizione
La seconda parte dell'esercizio riguarda l'aggiunta di un ostacolo in una mappa per far sì che la guardia si metta in loop e non riesca più a continuare il suo percorso.

## Struttura del Progetto

1. **index.html**
     - Un'area di input per caricare un file .txt contenente la mappa del labirinto.
     - Un pulsante per caricare e visualizzare la mappa.
     - Una sezione per visualizzare il risultato della conta delle posizioni di ostacolo che formano un ciclo.
     - Un pulsante per calcolare il risultato una volta caricata la mappa.

2. **style.css**
     - Controlla il layout della pagina.
     - Adatta l'interfaccia utente con colori e dimensioni appropriate.
     - Fornisce un design responsive per garantire la fruibilità su dispositivi mobili.

3. **main.js**
     - Funzionalità per caricare il file .txt contenente la mappa del labirinto.
     - Verifica la posizione di partenza della guardia.
     - Calcola il percorso della guardia senza ostacolo.
     - Determina tutte le posizioni possibili per un ostacolo che causano un ciclo nella traiettoria della guardia.
     - Mostra il numero di posizioni di ostacolo che formano un ciclo. 