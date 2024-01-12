function calcularRank(vitorias, derrotas) {
    let saldoRankeadas = vitorias - derrotas;
    
    return saldoRankeadas;
}

function definirNivel(vitorias) {

    // Define o nível com base no saldo de Rankeadas
    if (vitorias <= 10) {
        return "Ferro";
    } else if (vitorias > 10 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else if (vitorias > 100) {
        return "Imortal";
    } else {
        return "Sem nível";
    }
}

let exemploVitorias = 80;
let exemploDerrotas = 25;
const saldoVitorias = calcularRank(exemploVitorias, exemploDerrotas);
const nivel = definirNivel(exemploVitorias);

console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}.`);