const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRanque(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    switch (true) {
        case saldo < 11:
            return "Ferro";
        case saldo < 21:
            return "Bronze";
        case saldo < 51:
            return "Prata";
        case saldo < 81:
            return "Ouro";
        case saldo < 91:
            return "Diamante";
        case saldo < 101:
            return "Lendário";
        default:
            return "Imortal";
    }
}

readline.question("Quantas vitórias você possui? ", (vitorias) => {
    readline.question("E quantas derrotas você possui? ", (derrotas) => {
        // Convertendo as entradas para números
        vitorias = Number(vitorias);
        derrotas = Number(derrotas);

        // Verificando se as entradas são números válidos
        if (isNaN(vitorias) || isNaN(derrotas)) {
            console.log("Por favor, insira valores numéricos válidos.");
        } else {
            console.log("O seu ranque atual é " + calcularRanque(vitorias, derrotas) + 
                        ", pois seu saldo de vitórias é de: " + (vitorias - derrotas));
        }

        // Fechando o readline
        readline.close();
    });
});