class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }


    mostrar(){
  try{ 
  return this.cleiton() 
  } catch(erro){
   console.log(erro.stack)


  }
    
    }

   cleiton(){

        if(this.nome != "" && this.sobrenome != ""){
            return this.nome + " " + this.sobrenome
        
        }
        else{
            throw new Error ("Tem que colocar o nome e sobrenome")
        }
    }
}

const pessoa = new Pessoa("", "Picolo");
console.log(pessoa.mostrar())