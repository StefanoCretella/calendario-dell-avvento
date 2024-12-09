# Calcolo Mul
Questo progetto consente di caricare un testo contenente "memoria corrotti" e calcolare la somma di tutti i risultati delle istruzioni `mul(X,Y)` valide.

---

# Struttura del Progetto

Il progetto è suddiviso in tre file principali:

1. **index.html**
   - Contiene la struttura della pagina web.
   - Un'area di testo (`textarea`) per l'inserimento del file di memoria corrotta.
   - Un pulsante per calcolare il totale.
   - Una sezione per mostrare il risultato.

2. **style.css**
   - Gestisce lo stile della pagina, con un design minimale e leggibile.

3. **main.js**
   - Contiene la logica dell'applicazione:
     - Estrae e interpreta le istruzioni valide `mul(X,Y)` dal testo.
     - Calcola la somma delle moltiplicazioni valide.

---

# Funzionalità

1. **Inserimento del testo**
   - L'utente può inserire un testo contenente memoria corrotta direttamente in un'area di testo.

2. **Calcolo delle istruzioni valide**
   - L'applicazione estrae tutte le istruzioni `mul(X,Y)` valide utilizzando un'espressione regolare.
   - Le istruzioni non valide o danneggiate vengono ignorate.

3. **Risultato visualizzato**
   - La somma di tutte le moltiplicazioni valide viene mostrata sulla pagina.