class Juego {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = precio;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
const juegos = [];
juegos.push(new Juego("God of War", 4900));
juegos.push(new Juego("Fifa 23", 23000));
juegos.push(new Juego("GTA V", 9000));
juegos.push(new Juego("The Last of Us Remastered Standard Edition", 4700))
juegos.push(new Juego("Red Dead Redemption 2", 7400))
console.log(juegos);
for (const juego of juegos){
    juego.sumaIva();
}
let carrito = []
let nombre = prompt("Ingrese su nombre");
while(nombre != " "){
if(nombre){
    alert("Hola "+nombre+" vendemos todo tipo de juegos")
    break;
}else{
    alert("Escribe tu nombre para continuar!")
}
nombre = prompt("Ingrese su nombre")
}
let opcion = prompt("Desea comprar un juego si o no?")
while (opcion != "si" && opcion != "no"){
    alert("Porfavor ingresa si o no!")
    opcion = prompt("Desea comprar un juego si o no?")
}
if(opcion == "si"){
    alert("Nuestra lista de productos sera mostrada a continuacion!")
    let todosLosJuegos = juegos.map((juego) => juego.nombre+" "+juego.precio+"$");
    alert(todosLosJuegos.join( " \n "));
}else if(opcion == "no"){
    "Gracias, vuelva pronto!"
}
while(opcion!="no"){
    let juego = prompt("Agrega un juego al carrito");
    let precio = 0;
    if((juego == "God of War") || (juego == "god of war") || (juego == "GOD OF WAR") || (juego == "Fifa 23") || (juego == "fifa 23") || (juego == "FIFA 23") || (juego == "GTA V") || (juego == "gta 5") || (juego == "GTA 5") || (juego == "The Last of Us Remastered Standard Edition") || (juego == "The Last of Us") || (juego == "THE LAST OF US") || (juego == "Red Dead Redemption 2") || (juego == "RED DEAD REDEMPTION 2") || (juego == "red dead redemption 2")){
        switch(juego){
            case "God of War":
                precio = 5929;
                break;
            case "god of war":
                precio = 5929;
                break;
            case "GOD OF WAR":
                precio = 5929;
                break;
            case "Fifa 23":
                precio = 27830;
                break;
            case "fifa 23":
                precio = 27830;
                break;
            case "FIFA 23":
                precio = 27830;
                break;
            case "GTA V":
                precio = 10890;
                break;
            case "gta 5":
                precio = 10890;
                break;
            case "GTA 5":
                precio = 10890;
                break;
            case "The Last of Us Remastered Standard Edition":
                precio = 5697;
                break;
            case "The Last of Us":
                precio = 5697;
                break;
            case "THE LAST OF US":
                precio = 5697;
                break;
            case "Red Dead Redemption 2":
                precio = 8954;
                break;
            case "RED DEAD REDEMPTION 2":
                precio = 8954;
                break;
            case "red dead redemption 2":
                precio = 8954;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))

    carrito.push({juego,unidades, precio})
    console.log(carrito)
    }else{
        alert("Actualmente no tenemos stock disponible!");
    }

    opcion = prompt("Desea seguir comprando?")

    while(opcion === "no"){
        alert("Gracias por la compra vuelva pronto.")
            carrito.forEach((carritoFinal) => {
                console.log(`Producto: ${carritoFinal.juego},unidades: ${carritoFinal.unidades},total a pagar por producto: $${carritoFinal.unidades * carritoFinal.precio}`);
            })
    break;
    }
}
const total = carrito.reduce((acumulador,elemento)=> acumulador+elemento.precio*elemento.unidades,0)
console.log(`El total a pagar con iva incluido es: ${total}`);