function contar(){
    let res = document.querySelector("div#res")
    res.innerHTML += `<h2>Contando de 1 atΓ© 10</h2>`
    for (let i = 1; i <= 10; i++){
        res.innerHTML += `${i} π `
    }
    res.innerHTML += `π`
}

