class Mascota{
    nombre="";
    color="";
    especie="";
    alimento="";
    edad=0;
    constructor (nombre, color, especie, alimento){
        this.nombre=nombre;
        this.color=color;
        this.especie=especie;
        this.alimento=alimento;
    }

    come(){
        console.log(`${this.nombre} es un ${this.especie} y come ${this.alimento}`)
    }
}

class Elefante extends Mascota{
    hace="";

    constructor(nombre, color, especie, alimento){
        super(nombre, color, especie, alimento);
        this.hace="Llamada";
    }
    
    /*sonido(){
        console.log( `${this.nombre} se comunica con ${this.hace}`);
    }*/
}
class Perro extends Mascota{
    hace="";
    constructor(nombre, color, especie, alimento){
        super(nombre, color, especie, alimento);
        this.hace="Ladrido";
    }
    
    /*sonido(){
        console.log(`${this.nombre} se comunica con ${this.hace}`)
    }*/
}
class Gato extends Mascota{
    hace="";
    constructor(nombre, color, especie, alimento){
        super(nombre, color, especie, alimento);
        this.hace="Maullido";
    }
    
    /*sonido(){
        console.log( `${this.nombre} se comunica con ${this.hace}`);
    }*/
}

Mascota.prototype.sonido= function(){
    console.log( `${this.nombre} se comunica con ${this.hace}`);
}

const perro= new Perro("Super","Rojo",'Perro','Carne');
const elefante= new Elefante("Dumbo","Blanco",'Elefante','Vegetales');
const gato= new Gato("Kitty","Negro",'Gato','Pescado');
elefante.come();
elefante.sonido();
perro.come();
perro.sonido();
gato.come();
gato.sonido();