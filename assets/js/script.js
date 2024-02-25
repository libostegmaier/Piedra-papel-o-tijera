alert("Piedra, Papel o Tijeras")

    //veces que desea que se repita el juego consecutivamente
    let juegos = prompt("Indica cuantas veces te gustaría jugar")

    //variables de victoria, derrota y empate, que se irán modificando despues de cada juego y se reiniciarán despues de cada ronda
    let win = 0;
    let lose = 0;
    let draw = 0;

    //Crea un ciclo limitado que es indicado por el usuario
    for (let i = 0; i < juegos; i++) {
        //variable de la jugada del usuario
        let jugada = prompt("Ingresa tu jugada: Piedra - Papel - Tijera");

        //variable que se le asignará un string
        let jugada_maquina;

        //asigna un numero entero al azar del 0 al 2
        let maquina = Math.floor(Math.random() * 3);


        //convierte jugada de computadora de number a string
        if (maquina == 0) {
            jugada_maquina = "Piedra"
        } else if (maquina == 1) {
            jugada_maquina = "Papel"
        } else if (maquina == 2) {
            jugada_maquina = "Tijera"
        }

        //compara ambas jugadas e indica el resultado final
        if (jugada == "Tijera" || jugada == "tijera" || jugada == "Tijeras" || jugada == "tijeras" && jugada_maquina == "Tijera") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_maquina}.Es un EMPATE ¡Intentalo otra vez!`)
            draw += 1;
        } else if (jugada == "Piedra" || jugada == "piedra" && jugada_maquina == "Piedra") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_maquina}. Es un EMPATE ¡Intentalo otra vez!`)
            draw += 1;
        } else if (jugada == "Papel" || jugada == "papel" && jugada_maquina == "Papel") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_maquina}. Es un EMPATE ¡Intentalo otra vez!`)
            draw += 1;
        } else if (jugada == "Piedra" || jugada == "piedra" && jugada_maquina == "Tijera") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_maquina}. Es GANASTE ¡Juega otra vez!`)
            win += 1;
        } else if (jugada == "Papel" || jugada == "papel" && jugada_maquina == "Piedra") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_maquina}. GANASTE ¡Juega otra vez!`)
            win += 1;
        } else if (jugada == "Tijera" || jugada == "tijera" || jugada == "Tijeras" || jugada == "tijeras" && jugada_maquina == "Papel") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_maquina}. GANASTE ¡Juega otra vez!`)
            win += 1;
        } else if (jugada == "Piedra" || jugada == "piedra" && jugada_maquina == "Papel") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_maquina}. PERDISTE ¡Intentalo otra vez!`)
            lose += 1;
        } else if (jugada == "Papel" || jugada == "papel" && jugada_maquina == "Tijera") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_maquina}. PERDISTE ¡Intentalo otra vez!`)
            lose += 1;
        } else if (jugada == "Tijera" || jugada == "tijera" || jugada == "Tijeras" || jugada == "tijeras" && jugada_maquina == "Piedra") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_maquina}. PERDISTE ¡Intentalo otra vez!`)
            lose += 1;
        }
    }

    //indica el resumen del juego
    alert(`Ganaste ${win} veces, perdiste ${lose} veces y empataste ${draw} veces.`)

    //indica el ganador de la ronda
    if (win > lose) {
        alert("¡Felicidades, ganaste!")
    } else if (win < lose) {
        alert("Lo siento, perdiste.")
    } else if (win == lose) {
        alert("Esta ronda fue un empate...")
    }
