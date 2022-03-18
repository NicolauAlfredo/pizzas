'use strict'

// Variaveis
let somaMussarela = 0
let somaMista = 0
let SomaCalabresa = 0
let vendaMussarela = 0.00
let vendaMista = 0.00
let vendaCalabresa = 0.00

let btnVendas = document.getElementById('vendas')
let btnEstorno = document.getElementById('estorno')
let btnPlanilha = document.getElementById('export')

// Eventos 
btnVendas.addEventListener('click', venda, false)
btnEstorno.addEventListener('click', estorno, false)
btnPlanilha.addEventListener('click', planilha, false)

// Funções
function venda(e) {
    if (document.getElementById('mussarela').checked) {
        somaMussarela += 1
        vendaMussarela += 25.00
        document.getElementById('resultado-mussarela').innerHTML = somaMussarela
        document.getElementById('venda-mussarela').innerHTML = vendaMussarela.toFixed(2)
    } else if (document.getElementById('mista').checked) {
        somaMista += 1
        vendaMista += 25.00
        document.getElementById('resultado-mista').innerHTML = somaMista
        document.getElementById('venda-mista').innerHTML = vendaMista.toFixed(2)
    } else if (document.getElementById('calabresa').checked) {
        SomaCalabresa += 1
        vendaCalabresa += 25.00
        document.getElementById('resultado-calabresa').innerHTML = SomaCalabresa
        document.getElementById('venda-calabresa').innerHTML = vendaCalabresa.toFixed(2)
    }
}

function estorno(e) {
    if (document.getElementById('mussarela').checked) {
        somaMussarela -= 1
        vendaMussarela -= 25.
        if (somaMussarela < 0) {
            somaMussarela = 0
            vendaMussarela = 0.00
        }
        document.getElementById('resultado-mussarela').innerHTML = somaMussarela
        document.getElementById('venda-mussarela').innerHTML = vendaMussarela.toFixed(2)
    } else if (document.getElementById('mista').checked) {
        somaMista -= 1
        vendaMista -= 25.00
        if (somaMista < 0) {
            somaMista = 0
            vendaMista = 0.00
        }
        document.getElementById('resultado-mista').innerHTML = somaMista
        document.getElementById('venda-mista').innerHTML = vendaMista.toFixed(2)
    } else if (document.getElementById('calabresa').checked) {
        SomaCalabresa -= 1
        vendaCalabresa -= 25.00
        if (SomaCalabresa < 0) {
            SomaCalabresa = 0
            vendaCalabresa = 0.00
        }
        document.getElementById('resultado-calabresa').innerHTML = SomaCalabresa
        document.getElementById('venda-calabresa').innerHTML = vendaCalabresa.toFixed(2)
    }
}

function planilha(e) {
    TableToExcel.convert(document.getElementById('tabela'))
}