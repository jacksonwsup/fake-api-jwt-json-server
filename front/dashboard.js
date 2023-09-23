

window.onload = function() {
    const token = localStorage.getItem("token");

    //console.log(token);


    if (!token) {
        window.location.href = "/index.html";
        return;
    }

    console.log("logado com sucesso");

    fetch("http://localhost:8081/restaurantes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "application/json",
            "Authorization": "Bearer " + token
        }
    })
    .then(async (response) => {
        if (!response.ok) {
            throw new Error("Erro ao buscar restaurantes.");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        populateRestaurantesTable(data);
    })
    .catch((error) => {
        console.error("Erro:", error);
    });

    function populateRestaurantesTable(restaurantes) {
        const tableBody = document.querySelector("#restaurantes-table tbody");
        
        tableBody.innerHTML = '';
    
        restaurantes.forEach(restaurante => {
            const tr = document.createElement('tr');
            
            const idCell = document.createElement('td');
            idCell.textContent = restaurante.id;
            tr.appendChild(idCell);
    
            const nomeCell = document.createElement('td');
            nomeCell.textContent = restaurante.nome;
            tr.appendChild(nomeCell);
    
            const taxaFreteCell = document.createElement('td');
            taxaFreteCell.textContent = parseFloat(restaurante.taxaFrete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            tr.appendChild(taxaFreteCell);
    
            tableBody.appendChild(tr);
        });
    }
    
}