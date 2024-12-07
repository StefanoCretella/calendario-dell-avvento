# Calcolo delle Zone Sicure - Parte 2

Questa applicazione aggiornata per il puzzle affronta la **seconda parte** del problema. Ora, oltre a calcolare la quantità di zone sicure, considera anche il **Problem Dampener** che permette di rimuovere un singolo livello da un report non sicuro per rendere il report sicuro.

---

# Funzionalità

- Caricamento di un file `.txt` contenente righe di numeri separati da spazi.
- Calcolo delle zone sicure:
  - I numeri devono essere in **ordine crescente o decrescente**.
  - La **differenza tra numeri consecutivi** deve essere **compresa tra 1 e 3**.
- Il **Problem Dampener**: se un report non è sicuro, è possibile rimuovere un singolo numero e verificare se il report diventa sicuro.
- Visualizzazione del numero totale di zone sicure nel browser.

---

# Struttura del Progetto

1. **HTML**: La struttura della pagina include:
   - Un input per caricare il file.
   - Un pulsante per calcolare il numero di zone sicure.
   - Un'area per visualizzare il risultato.

2. **CSS**: Stile per una presentazione chiara:
   - Layout centrato con un design minimalista.
   - Stile per pulsanti, input e area di output.

3. **JavaScript**: La logica applicativa aggiornata:
   - Lettura del file `.txt` e parsing del contenuto.
   - Implementazione dei criteri di sicurezza.
   - Gestione del Problem Dampener che consente di rimuovere un singolo livello dai report non sicuri per renderli sicuri.