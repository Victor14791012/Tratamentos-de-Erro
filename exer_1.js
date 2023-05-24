/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }



  mostrarAtributos(){
    try{ 
      return this.atributos()
      } catch(error){
       console.log(error.message)
    
    
      }

   
  } 

  atributos() {
    if(this.nome != "" && this.idade != "" && this.especie != "" ){
    return {
      nome: this.nome,
      idade: this.idade,
      especie: this.especie
    }
  }

  else{
    throw new Error ("Tem que colocar o nome , idade , espécie")
}

  }
}

const meuAnimal = new Animal("Fido", 3, "");
const atributos = meuAnimal.mostrarAtributos();


 







// Imprimindo os atributos
console.log(atributos.nome);   
console.log(atributos.idade);  
console.log(atributos.especie); 



