fetch("https://api.escuelajs.co/api/v1/categories")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card mb-5" style="width: 18rem;">
            <img src="${db.image}" class="card-img-top" alt="${db.name}">
            <div class="card-body">
                <h5 class="card-title">${db.name}</h5>
            </div>
        </div>`
        }
        document.getElementById("lista").innerHTML = card
    })

