function estacao(){
    let res = document.querySelector("div#res")
    let mes = window.prompt("Digite o mês em extenso (ex: Setembro)")
    let estacao
    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'INVERNO'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA'
            break;
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
            break;
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
            break;
        default:
            estacao = 'INDEFINIDA'
            break;
    }
    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <strong><mark>${estacao}</mark></strong>.</p>`
}
