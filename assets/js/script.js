$(document).ready( function (){

    $( "#jugarCachipun" ).click( function (){

        var numeroVeces = parseInt(prompt("Ingrese las veces que deseas jugar conta la computadora"));

        var contadorG=0;
        var contadorE=0;
        var contadorP=0;

        for(var i =0; i<numeroVeces;i++){
            
            //se crean las 2 variables y luego por medio del prompt se pide al usuario los numeros transformados en enteros 
            var opcionJugador =prompt("Ingrese su opcion de cachipun ya sea escrito o por el numero correspondiente:\n\n"+
            "1.) piedra \n 2.) tijeras \n 3.) papel");

            var min =1;
            var max=3;

            function NumerosAleatorios(min, max) {
                return Math.round(Math.random()*(max -min)+min);
            }
            var opcionCompu=NumerosAleatorios(1,3);

            //como numero entero
            if (opcionJugador == 1) {
                if(opcionCompu == 1) {
                    alert("¡¡HAN EMPATADO!! Tu has seleccionado piedra y la computadora seleccionó piedra");
                    contadorE++;
                }
                if (opcionCompu == 2){
                    alert("¡¡GANASTE!! Tu has seleccionado piedra y la computadora seleccionó tijeras");
                    contadorG++;
                }                
                if (opcionCompu == 3){
                    alert("¡¡PERDISTE!! Tu has seleccionado piedra y la computadora seleccionó papel");
                    contadorP++;
                }
            }

            if (opcionJugador == 2) {
                if(opcionCompu == 1) {
                    alert("¡¡HAN EMPATADO!! Tu has seleccionado tijeras y la computadora seleccionó tijeras");
                    contadorE++;
                }
                if (opcionCompu == 2){
                    alert("¡¡GANASTE!! Tu has seleccionado tijeras y la computadora seleccionó papel");
                    contadorG++;
                }                
                if (opcionCompu == 3){
                    alert("¡¡PERDISTE!! Tu has seleccionado tijeras y la computadora seleccionó piedra");
                    contadorP++;
                }
            }

            if (opcionJugador == 3) {
                if(opcionCompu == 1) {
                    alert("¡¡HAN EMPATADO!! Tu has seleccionado papel y la computadora seleccionó papel");
                    contadorE++;
                }
                if (opcionCompu == 2){
                    alert("¡¡GANASTE!! Tu has seleccionado papel y la computadora seleccionó piedra");
                    contadorG++;
                }                
                if (opcionCompu == 3){
                    alert("¡¡PERDISTE!! Tu has seleccionado papel y la computadora seleccionó tijeras");
                    contadorP++;
                }
            }

            //como string 
            if (opcionJugador == "piedra") {
                if(opcionCompu == 1) {
                    alert("¡¡HAN EMPATADO!! Tu has seleccionado "+opcionJugador+" "+"y la computadora seleccionó piedra");
                    contadorE++;
                }
                if (opcionCompu == 2){
                    alert("¡¡GANASTE!! Tu has seleccionado "+opcionJugador+" "+"y la computadora seleccionó tijeras");
                    contadorG++;
                }                
                if (opcionCompu == 3){
                    alert("¡¡PERDISTE!! Tu has seleccionado "+opcionJugador+" "+"y la computadora seleccionó papel");
                    contadorP++;
                }
            }

            if (opcionJugador == "tijeras") {
                if(opcionCompu == 1) {
                    alert("¡¡HAN EMPATADO!! Tu has seleccionado "+opcionJugador+" "+"y la computadora seleccionó tijeras");
                    contadorE++;
                }
                if (opcionCompu == 2){
                    alert("¡¡PERDISTE!! Tu has seleccionado "+opcionJugador+" "+"y la computadora seleccionó piedra");
                    contadorG++;
                }                
                if (opcionCompu == 3){
                    alert("¡¡GANASTE!! Tu has seleccionado "+opcionJugador+" "+"y la computadora seleccionó papel");
                    contadorP++;
                }
            }

            if (opcionJugador == "papel") {
                if(opcionCompu == 1) {
                    alert("¡¡HAN EMPATADO!! Tu has seleccionado "+opcionJugador+" "+"y la computadora seleccionó papel");
                    contadorE++;
                }
                if (opcionCompu == 2){
                    alert("¡¡PERDISTE!! Tu has seleccionado "+opcionJugador+" "+"y la computadora seleccionó tijeras");
                    contadorG++;
                }                
                if (opcionCompu == 3){
                    alert("¡¡GANASTE!! Tu has seleccionado "+opcionJugador+" "+"y la computadora seleccionó piedra");
                    contadorP++;
                }
            }           
           
        }

        alert("El resultado final de las"+" "+numeroVeces+" "+"rondas del juego cachipun son:\n\n"+ 
        "1.) Has ganado:"+" "+contadorG +"\n"+
        "2.) Has perdido:"+" "+contadorP + "\n"+
        "3.) Has empatado:"+" "+contadorE
        );

        if(contadorG>contadorP){
            alert("Has ganado esta ronda del cachipun, FELICIDADES");
        }
        else if(contadorG == contadorP){
            alert("Estan igualados, continua jugando para desempatar")
        }
        else {
            alert("Has perdido esta ronda del cachipun, sigue intentandolo");
        }
    });

});