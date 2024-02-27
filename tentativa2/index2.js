let heroi = "Oli"
let xpHeroi = 11000

switch (xpHeroi){
    case xpHeroi <= 1000 :
        xpHeroi = "Ferro"
        break
    case xpHeroi >1000 && xpHeroi <= 2000 :
        xpHeroi = "Bronze"
        break
    case xpHeroi >2000 && xpHeroi <= 5000 :
        xpHeroi = "Prata"
        break
    case xpHeroi >5000 && xpHeroi <= 7000 :
        xpHeroi = "Ouro"
        break
    case xpHeroi >7000 && xpHeroi <= 8000 :
        xpHeroi ="Platina"
        break
    case xpHeroi >8000 && xpHeroi <= 9000 :
        xpHeroi = "Ascendente"
        break
    case xpHeroi >9000 && xpHeroi <= 10000 :
        xpHeroi = "Imortal"
        break

    default :
    xpHeroi = "Radiante"
}

console.log ("O herói de nome " + heroi  + " está no nível " + xpHeroi)
