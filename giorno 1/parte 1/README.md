# Calcolo della Distanza Totale tra Liste

Questo progetto consente di caricare un file .txt contenente due colonne di numeri e calcola la distanza totale tra i numeri corrispondenti delle due liste

===========================================================================

# Funzionalità

* Carica un file .txt contenente due colonne di numeri separati da spazi.
* Calcola la distanza assoluta tra i numeri corrispondenti delle due liste ordinate.
* Mostra il risultato in una semplice interfaccia web.

===========================================================================

# Struttura del Progetto

1. HTML
La struttura base della pagina web. Include:

* Un input per caricare il file.
* Un pulsante per avviare il calcolo.
* Una sezione per mostrare il risultato.


2. CSS
Gestisce lo stile della pagina per renderla più leggibile e accattivante:

* Imposta il layout centrale.
* Stilizza il pulsante, l'input e il risultato.


3. JavaScript
Gestisce la logica dell'applicazione:

* Legge e processa il file caricato.
* Ordina i numeri e calcola la distanza totale.
* Mostra il risultato nella pagina.

===========================================================================

# Come Funziona

1. Carica il file
L'utente seleziona un file .txt con due colonne di numeri 
(esempio di formato del file):
3   4
2   5
1   9
7   6

2. Calcolo della distanza
Il file viene processato:

* Le due colonne vengono lette e memorizzate.
* Entrambe le colonne vengono ordinate in ordine crescente.
* Si calcolano le distanze assolute tra i numeri corrispondenti delle due liste.
* Le distanze vengono sommate per ottenere il risultato finale.

3. Mostra il risultato
Il risultato viene visualizzato sotto il pulsante:
Distanza totale: 11
