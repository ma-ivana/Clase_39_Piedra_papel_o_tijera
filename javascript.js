let usuario1;
let usuario2;
let opcion1;
let opcion2;
let detener;


usuario1 = prompt("Usari@1, ingresá tu nombre: ");
usuario2 = prompt("Usuari@2, ingresá tu nombre: ");



for (let i = 0; detener !== "d"; i++) {
  
opcion1 = prompt(`${usuario1}, elegí "piedra", "papel" o "tijera"`);
  if (opcion1 == false) {
  alert(`${usuario1}, no podés jugar.`)
  detener = prompt(`Ingresá "s" para seguir o "d" para detener el juego: `)

  }
  else {
  opcion2 = prompt(`${usuario2}, elegí "piedra", "papel" o "tijera"`);
    if (opcion2 == false) {
      alert(`${usuario2}, no podés jugar.`)
      detener = prompt(`Ingresá "s" para seguir o "d" para detener el juego: `)
    }
    else {
      
      if (opcion1 == "piedra" && opcion2 == "papel") {
        alert(`Ganó ${usuario2}`)
      }

      else if (opcion1 == "piedra" && opcion2 == "tijera") {
        alert(`Ganó ${usuario1}`)
      }

      else if (opcion1 == "papel" && opcion2 == "piedra") {
        alert(`Ganó ${usuario1}`)
      }

      else if (opcion1 == "papel" && opcion2 == "tijera") {
        alert(`Ganó ${usuario2}`)
      }

      else if (opcion1 == "tijera" && opcion2 == "piedra") {
        alert(`Ganó ${usuario2}`)
      }

      else if (opcion1 == "tijera" && opcion2 == "papel") {
        alert(`Ganó ${usuario1}`)
      }

    else {
      alert("Empate")
    };

    detener = prompt(`Ingresá "s" para seguir o "d" para detener el juego: `);
    };
  };
};



