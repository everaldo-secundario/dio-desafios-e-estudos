
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;

            case "guerreiro":
                ataque = "espada";
                break;

            case "monge":
                ataque = "artes marciais";
                break;

            case "ninja":
                ataque = "shuriken";
                break;

            default:
                ataque = "um ataque desconhecido";
        }

        console.log(
            `O ${this.tipo} atacou usando ${ataque}`
        );
    }
}

const herois = [
    new Heroi("Merlin", 150, "mago"),
    new Heroi("Arthur", 35, "guerreiro"),
    new Heroi("Bruce", 40, "monge"),
    new Heroi("Hanzo", 28, "ninja")
];

for (const heroi of herois) {
    heroi.atacar();
}
