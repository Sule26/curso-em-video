function contar(){
    let res = document.querySelector("div#res")
    res.innerHTML += `<h2>Contando de 1 atΓ© 10, marcando os pares</h2>`
    for(let i = 1; i <= 10; i++){
        if (i % 2 == 0)
            res.innerHTML += `<strong><mark> ${i}</mark></strong> π`
        else
            res.innerHTML += ` ${i} π`
    }
    res.innerHTML += `π`
}

