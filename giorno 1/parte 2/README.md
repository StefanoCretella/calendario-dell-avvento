# Calcolo del Punteggio di Similarità tra Due Elenchi

Questo progetto consente di caricare un file .txt contenente due colonne di numeri e calcolare un punteggio di similarità totale. 

Il punteggio viene calcolato moltiplicando ogni numero della lista di sinistra per il numero di occorrenze di quel numero nella lista di destra e sommando i risultati.

===========================================================================

# Funzionalità

* Carica un file .txt che contiene due colonne di numeri separati da uno spazio.
* Calcola il punteggio di similarità: per ogni numero nella colonna di sinistra, viene moltiplicato per il numero di occorrenze nella colonna di destra.
* Visualizza il punteggio di similarità totale in un'interfaccia web semplice.

===========================================================================

# Struttura del Progetto

1. HTML
Il file HTML crea la struttura della pagina web, comprendente:

* Un campo di input per caricare un file .txt.
* Un pulsante per calcolare il punteggio di similarità.
* Una sezione dove verrà visualizzato il risultato del calcolo.

2. CSS
Il file CSS si occupa di:

* Centralizzare il contenuto della pagina.
* Fornire uno stile visivo chiaro per gli input, il pulsante e il risultato.
* Garantire che l'interfaccia utente sia semplice e facile da usare.

3. JavaScript
Il file JavaScript gestisce la logica per:

* Leggere il contenuto del file .txt caricato.
* Separare i numeri nelle due colonne (sinistra e destra).
* Calcolare il punteggio di similarità.
* Visualizzare il risultato finale nella pagina web.

===========================================================================

# Come Funziona

1. Carica il file
L'utente seleziona un file .txt che contiene due colonne di numeri separati da uno spazio. Esempio di formato del file:

3   4
4   3
2   5
1   3
3   9
3   3

2. Calcolo del Punteggio di Similarità
Il file viene processato in questo modo:

* Ogni numero nella colonna di sinistra viene confrontato con la colonna di destra.
* Si conta quante volte il numero appare nella colonna di destra.
* Il numero nella colonna di sinistra viene moltiplicato per il numero di occorrenze nella colonna di destra.
* I risultati di ogni moltiplicazione vengono sommati per ottenere il punteggio di similarità.

3. Mostra il Risultato
Il punteggio di similarità viene visualizzato sotto il pulsante nella pagina, ad esempio:

Punteggio di similarità: 31