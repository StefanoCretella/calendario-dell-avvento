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
    const correctUpdates = [];

    updates.forEach(update => {
        if (isValidUpdate(update, rules)) {
            correctUpdates.push(update);
        }
    });

    const middlePages = correctUpdates.map(findMiddlePage);
    const sumMiddlePages = middlePages.reduce((sum, page) => sum + page, 0);

    resultsDiv.innerHTML = `
        <p>Somma delle Pagine Centrali: ${sumMiddlePages}</p>
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

function findMiddlePage(update) {
    const middleIndex = Math.floor(update.length / 2);
    return update[middleIndex];
}
