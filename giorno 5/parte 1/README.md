# Validatore Coda di Stampa

# Descrizione
Il progetto **Validatore Coda di Stampa** permette di validare gli aggiornamenti di una coda di stampa ordinando correttamente i numeri di pagina secondo delle regole specifiche. Gli utenti possono inserire le regole di ordinamento e gli aggiornamenti, e l'app calcola la somma dei numeri di pagina centrali degli aggiornamenti ordinati correttamente.

## Struttura del Progetto

1. **index.html**
     - Un'area di testo (`textarea`) per l'inserimento delle regole di ordinamento.
     - Un'area di testo (`textarea`) per l'inserimento degli aggiornamenti della coda di stampa.
     - Un pulsante per avviare il processo di validazione degli aggiornamenti.
     - Una sezione per mostrare i risultati della somma delle pagine centrali degli aggiornamenti ordinati correttamente.

2. **style.css**
     - Imposta il layout centrato della pagina.
     - Fornisce uno sfondo leggero e colori coerenti per l'interfaccia utente.
     - Adatta l'aspetto delle aree di input e del pulsante.

3. **main.js**
     - Verifica se gli aggiornamenti rispettano le regole di ordinamento.
     - Calcola la somma delle pagine centrali degli aggiornamenti validati.
     - Mostra i risultati nella sezione dedicata.
     - Gestisce la logica specifica per ordinare gli aggiornamenti in modo corretto e calcolare la somma dei numeri di pagina centrali.