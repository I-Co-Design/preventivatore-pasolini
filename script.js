
const codiceAccesso = "PASOLINI2025";
function verificaCodice() {
    const inserito = document.getElementById("codice").value;
    if (inserito === codiceAccesso) {
        document.getElementById("accesso").style.display = "none";
        document.getElementById("contenuto").style.display = "block";
        caricaProdotti();
    } else {
        alert("Codice errato.");
    }
}

function caricaProdotti() {
    fetch("prodotti.json")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("prodotti-container");
            data.forEach(prodotto => {
                const div = document.createElement("div");
                div.innerHTML = `<strong>${prodotto.linea}</strong> - ${prodotto.codice} - ${prodotto.descrizione}
                    <br> Prezzo: €${prodotto.prezzo.toFixed(2)}
                    <br> Quantità: <input type="number" id="qta-${prodotto.codice}" min="0" value="0"><br><br>`;
                container.appendChild(div);
            });
        });
}

document.getElementById("preventivo-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("PDF generato (funzione da completare con backend).");
});
