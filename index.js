//Author Dennis Hernandez

//Creación de la clase que representa una pregunta contemplando sus opciones y una respuesta.
class question {
    constructor(question, options, userAnswer){
        this.question = question;
        this.options = options;
        this.userAnswer = userAnswer;
    }
}

//Creacion de la clase que representa una encuesta, que es un grupo de objetos de la clase pregunta.
//Esta clase recibe un arreglo de preguntas que a su vez tiene un arreglo de opciones como respuesta de cada pregunta.
//Adicional tiene un metodo llamado askQuestion que es la función que itera en cada elemento del arreglo de preguntas
//ayudando a obtener los valores puntualmente e imprimirlos en consola.
class Survey {
    constructor(questions){
        this.questions = questions;
    }

    askQuestions(){
        let v1 = 0, v2 = 0, v3 = 0
        console.log("::::::::::::::::::::::::Preguntas::::::::::::::::::::::::::")
        this.questions.forEach((question) => {
            console.log(question.question, question.options);
            const userAnswer = question.userAnswer;
            let indice = question.options.indexOf(userAnswer)
            //console.log("El valor de la posicion de la respuesta es:", indice) //Ayuda para visualizar posición dentro del array la respuesta del usuario.
            console.log("Respuesta del usuario", userAnswer)
            
            //Dependiendo de la respuesta del usuario tomamos el valor del indice y hacemos la suma de votos.
            switch (indice){
                case 0:
                    v1 = v1 + 1
                    console.log("Votos: ", v1)
                    break;
                case 1:
                    v2 = v2 + 1
                    console.log("Votos: ", v2)
                    break;
                case 2:
                    v3 = v3 + 1
                    console.log("Votos: ", v3)
                    break;
            }

        });

        //Mostramos como ayuda que respuesta fue la que obtuvo más votos acumulados y como ganadora
        if (v1>v2 && v1>v3){
            console.log("-----> La mayoría de los usuarios votaron por la opción 1")
        }else{
            if (v2>v1 && v2>v3){
                console.log("-----> La mayoría de los usuarios votaron por la opción 2")
            }else{
                if (v3>v1 && v3>v2){
                 console.log("-----> La mayoría de los usuarios votaron por la opción 3")
                }else{
                    console.log("¡¡¡¡¡¡¡Existe un empate en las respuestas!!!!!!!")
                    }
                }
            }

            console.log("\n")   //Impresión de un salto de línea para separar el bloque de preguntas
    }
 
}

//Instanciamos objetos de la clase question como un arreglo 
//(conformados por la representación de pregunta, opciones y respuesta de usuario)
const questions = [
    new question("¿Cuál es tu color favorito?", ["Azul", "Rojo", "Negro"], "Rojo"),
    new question("¿Cuál es tu color favorito?", ["Azul", "Rojo", "Negro"], "Azul"),
    new question("¿Cuál es tu color favorito?", ["Azul", "Rojo", "Negro"], "Negro"),
    new question("¿Cuál es tu color favorito?", ["Azul", "Rojo", "Negro"], "Rojo"),
    new question("¿Cuál es tu color favorito?", ["Azul", "Rojo", "Negro"], "Rojo"),
]

const questions2 = [
    new question("¿Cuál es tu deporte favorito?", ["Futbol", "Baseball", "Basketball"], "Futbol"),
    new question("¿Cuál es tu deporte favorito?", ["Futbol", "Baseball", "Basketball"], "Basketball"),
    new question("¿Cuál es tu deporte favorito?", ["Futbol", "Baseball", "Basketball"], "Basketball"),
    new question("¿Cuál es tu deporte favorito?", ["Futbol", "Baseball", "Basketball"], "Futbol"),
    new question("¿Cuál es tu deporte favorito?", ["Futbol", "Baseball", "Basketball"], "Baseball"),
]

const questions3 = [
    new question("¿Qué prefieres?", ["Cine", "Teatro", "Concierto"], "Teatro"),
    new question("¿Qué prefieres?", ["Cine", "Teatro", "Concierto"], "Cine"),
    new question("¿Qué prefieres?", ["Cine", "Teatro", "Concierto"], "Concierto"),
    new question("¿Qué prefieres?", ["Cine", "Teatro", "Concierto"], "Concierto"),
    new question("¿Qué prefieres?", ["Cine", "Teatro", "Concierto"], "Concierto"),
]


//Instanciamos objetos de la clase Survey 
// Que recibe como parametro un arreglo de datos
const survey = new Survey (questions);
const survey2 = new Survey (questions2);
const survey3 = new Survey (questions3);

//Llamamos en cada instancia u objeto "survey" el metodo que imprime en consola y donde realizamos las operaciones
survey.askQuestions();
survey2.askQuestions();
survey3.askQuestions();

