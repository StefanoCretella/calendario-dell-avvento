document.getElementById("validate").addEventListener("click", function () {
    const rulesInput = document.getElementById("rules").value.trim();
    const updatesInput = document.getElementById("updates").value.trim();
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    if (!rulesInput || !updatesInput) {
        resultsDiv.textContent = "Per favore, fornisci sia le regole che gli aggiornamenti.";
        return;
    }

    const rules = parseRules(rulesInput);
    const updates = parseUpdates(updatesInput);
    const incorrectUpdates = [];

    updates.forEach(update => {
        if (!isValidUpdate(update, rules)) {
            incorrectUpdates.push(update);
        }
    });

    const sortedUpdates = incorrectUpdates.map(update => sortUpdate(update, rules));
    const middlePages = sortedUpdates.map(findMiddlePage);
    const sumMiddlePages = middlePages.reduce((sum, page) => sum + page, 0);

    resultsDiv.innerHTML = `
        <p>Somma delle Pagine Centrali degli Aggiornamenti Ordinati Correttamente: ${sumMiddlePages}</p>
    `;
});

function parseRules(rulesInput) {
    return rulesInput.split("\n").map(rule => {
        const [before, after] = rule.split("|").map(Number);
        return { before, after };
    });
}

function parseUpdates(updatesInput) {
    return updatesInput.split("\n").map(update => update.split(",").map(Number));
}

function isValidUpdate(update, rules) {
    for (const rule of rules) {
        const { before, after } = rule;
        const beforeIndex = update.indexOf(before);
        const afterIndex = update.indexOf(after);

        if (beforeIndex !== -1 && afterIndex !== -1 && beforeIndex > afterIndex) {
            return false;
        }
    }
    return true;
}

function sortUpdate(update, rules) {
    // Clone the array to avoid modifying the original
    let sortedUpdate = [...update];

    for (let i = 0; i < sortedUpdate.length - 1; i++) {
        for (let j = i + 1; j < sortedUpdate.length; j++) {
            for (const rule of rules) {
                if (sortedUpdate[i] === rule.before && sortedUpdate[j] === rule.after) {
                    [sortedUpdate[i], sortedUpdate[j]] = [sortedUpdate[j], sortedUpdate[i]];
                }
            }
        }
    }

    return sortedUpdate;
}

function findMiddlePage(update) {
    const middleIndex = Math.floor(update.length / 2);
    return update[middleIndex];
}
