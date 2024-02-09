let vitorias = 50
let derroats = 25
let saldoVitorias = vitoriasDerroatas(vitorias,derroats)
let nivel = nivelJogador()

function nivelJogador (){
    if (vitorias<= 10){
        res = "Ferro"
    }
    else if(vitorias> 10 && vitorias <= 20){
        res = "Bronze"
    }
    else if(vitorias> 20 && vitorias <= 50){
        res = "Prata"
    }
    else if(vitorias> 50 && vitorias <= 80){
        res = "Ouro"
    }
    else if(vitorias> 80 && vitorias <= 90){
        res = "Diamante"
    }
    else if(vitorias> 90 && vitorias <= 100){
        res = "Lendário"
    }
    else if(vitorias> 100){
        res = "Imortal"
    }
    return res
}

function vitoriasDerroatas (vitorias, derroats){
   let  saldo = vitorias-derroats
    return saldo
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
