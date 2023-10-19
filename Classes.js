class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atk() {
    var ataque;

    switch (this.tipo) {

      case "mago":
        ataque = "magia"
        break;

      case "guerreiro":
        ataque = "espada"
        break;

      case "monge":
        ataque = "artes marciais"
        break;

      case "ninja":
        ataque = "shuriken"
        break;

      default:
        ataque = "chute"
        break;
    }
    
    console.log("O", this.tipo, this.nome, "atacou usando", ataque)
  }
  apresentar() {
    console.log("Olá, me chamo", this.nome, "tenho", this.idade, "anos e sou da classe de", this.tipo)
  }
}


const novoHeroi = new Heroi("Milo", 22, "mago")
novoHeroi.apresentar();
novoHeroi.atk();