# Calcolo Mul - Parte 2

Questo progetto è un'estensione della Parte 1, con l'aggiunta della gestione di nuove istruzioni condizionali: **do()** e **don't()**. Queste istruzioni determinano se le operazioni di moltiplicazione **mul(X,Y)** successive devono essere eseguite o ignorate.

---

# Struttura del Progetto

Il progetto è composto da tre file principali:

1. **index.html**: 
   - Contiene la struttura della pagina web.
   - Un'area di testo (textarea) per l'inserimento del file di memoria corrotta.
   - Un pulsante per calcolare il totale.
   - Una sezione per visualizzare il risultato.

2. **style.css**:
   - Gestisce lo stile della pagina con un design semplice e leggibile.

3. **main.js**:
   - Contiene la logica dell'applicazione:
     - Gestisce le istruzioni **do()** e **don't()** per abilitare o disabilitare le operazioni **mul(X,Y)**.
     - Estrae e calcola solo le moltiplicazioni valide e abilitate.

---

# Funzionalità

1. **Inserimento del testo**:
   - L'utente può inserire un testo contenente memoria corrotta direttamente in un'area di testo.

2. **Gestione delle istruzioni condizionali**:
   - L'applicazione interpreta le istruzioni **do()** e **don't()** per abilitare o disabilitare le operazioni **mul(X,Y)**.

3. **Calcolo delle istruzioni valide**:
   - Viene calcolata la somma delle moltiplicazioni abilitate secondo le condizioni impostate.

4. **Risultato visualizzato**:
   - La somma delle moltiplicazioni valide e abilitate viene mostrata sulla pagina.
