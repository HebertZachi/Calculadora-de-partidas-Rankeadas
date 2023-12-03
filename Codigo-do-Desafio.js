class Heroi {
    constructor( vitoria, derrota) {
        this._vitoria = vitoria;
        this._derrota = derrota;
        this._nivel = '';
    }
}

const heroi = new Heroi(80, 23);

function calcSaldoBatalhas(vitoria, derrota){
    return vitoria - derrota;
}

function nivelDoHeroi(vitorias){
    if (vitorias < 10) {
        heroi._nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        heroi._nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        heroi._nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        heroi._nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        heroi._nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        heroi._nivel = "Lendário";
    } else if (vitorias >= 101) {
        heroi._nivel = "Imortal";
    }
}

resultado = calcSaldoBatalhas(heroi._vitoria, heroi._derrota);
nivelDoHeroi(resultado);
console.log(`O Herói tem um saldo de ${resultado} está no nível de ${heroi._nivel}`)