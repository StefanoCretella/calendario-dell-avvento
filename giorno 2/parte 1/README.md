# Calcolo delle Zone Sicure

Questo progetto analizza un file di input contenente righe di numeri e calcola quante **zone sicure** esistono. L'applicazione utilizza **HTML**, **CSS**, e **JavaScript** per caricare un file `.txt`, analizzarne il contenuto, e mostrare i risultati in una semplice interfaccia web.

---

# Funzionalità 

- Caricamento di un file `.txt` contenente righe di numeri separati da spazi.
- Calcolo delle zone sicure rispettando i seguenti criteri:
  - I numeri in ogni riga devono essere in **ordine crescente o decrescente**.
  - La **differenza tra numeri consecutivi** deve essere **compresa tra 1 e 3**.
- Visualizzazione del numero totale di zone sicure nel browser.
- Debugging nella console del browser per tracciare i calcoli.

---

# Struttura del Progetto

1. **HTML**: La struttura della pagina include:
   - Un input per caricare il file.
   - Un pulsante per calcolare il numero di zone sicure.
   - Un'area per visualizzare il risultato.

2. **CSS**: Stile per una presentazione chiara:
   - Layout centrato con un design minimalista.
   - Stile per pulsanti, input e area di output.

3. **JavaScript**: La logica applicativa:
   - Lettura del file `.txt` e parsing del contenuto.
   - Implementazione dei criteri di sicurezza.
   - Filtraggio della quantità di zone sicure.
   - Debugging e log dei dati analizzati.
