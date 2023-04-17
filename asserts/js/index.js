// const step1 = () => {
//   typerCallback = step2;
//   typerText =
//     "Te voy a explicar porque estas aqui. Estas porque sabes algo, aunque lo que sabes no puedes explicarlo, pero lo percibes. Ha sido asi durante toda tu vida, ¿Sabes de lo que estoy hablando?";
//   typerReset();
//   typer();
// };

// const step2 = () => {
//   typerCallback = null;
//   typerText =
//     "Has de verla con tus propios ojos, ultima oportunidad, despues de esto no podras echarte atras, si tomas la pastilla azul fin de la historia, despertaras en tu cama y creeras lo que quieras creer, pero si tomar la roja despertaras en el pais de las maravillas, yo te enseñare hasta donde llega el agujero del conejo.";
//   setTimeout(typerReset, 2000);
//   setTimeout(typer, 3000);
// };


scrollEnd();

document.getElementById("scene-01").addEventListener("click", () => {
  document.getElementById("scene-01").classList.remove("scene-focus");
  setTimeout(() => {
    document.getElementById("scene-01").classList.add("d-none");
    document.getElementById("scene-02").classList.remove("d-none");
    document.getElementById("scene-02").classList.add("scene-focus");

    setTimeout(scene03, 6000);
  }, 800);
});


const scene03 = () =>{
    document.getElementById("scene-02").classList.remove("scene-focus");

    setTimeout(() => {
        document.getElementById("scene-02").classList.add("d-none");

        document.getElementById("scene-03").classList.remove("d-none");
        
        typerCallback = null;
        typerSpeed = 40;
        scene03_title();
    }, 800);
}

const scene03_title = () =>{
    typerCallback = scene03_paragraph1;
    // Titulo
    typerDOM = 'scene-03-typer-tittle'
    typerText = '¿Qué entienden por Word Wilde Web y cómo funciona?'
    typerReset();
    typer();
}

const scene03_paragraph1 = ()=>{
    typerCallback = scene03_paragraph2;
    // Parrafo 1
    typerDOM = 'scene-03-typer-body-p1'
    typerText = 'La World Wide Web (la Web) nació en el CERN, el Centro Europeo de Física Nuclear, en Ginebra (Suiza), de la mano del ingeniero y físico británico Tim Berners-Lee como un sistema de intercambio de datos entre los 10.000 científicos que trabajaban en la institución.'
    typerReset();
    typer();
}

const scene03_paragraph2 = ()=>{
    typerCallback = scene03_paragraph3;
    // Parrafo 2
    typerDOM = 'scene-03-typer-body-p2'
    typerText = 'El World Wide Web (abreviada WWW) en informática a una red de alcance mundial, que consiste en un complejo sistema de hipertextos e hipermedios interconectados entre sí y a los que puede tenerse acceso mediante una conexión a Internet y un conjunto de software especializado.'
    typerReset();
    typer();
}

const scene03_paragraph3 = () =>{
    typerCallback = scene03_buttons;
    // Parrafo 3
    typerDOM = 'scene-03-typer-body-p3'
    typerText = 'La World Wide Web muestra la información de forma atractiva e intercambia información multimediática, interactiva y a distancia. Permite el acceso a información almacenada, pudiendo conectar con temas similares a través de hipervínculos, además admite el uso de otros protocolos como FPT (Protocolo de Transferencia de Ficheros: es un protocolo que se utiliza para transferir todo tipo de archivos entre equipos conectados a una red, por ejemplo Internet) o Chat.'
    typerReset();
    typer();
}

const scene03_buttons = () =>{
    setTimeout(()=>{
        document.getElementById('scene-03-buttons').classList.remove('d-none');
        scrollEnd();
    },2000);
}

const scene04 = () =>{
    document.getElementById("scene-03").classList.add("d-none");
    document.getElementById("scene-04").classList.remove("d-none");
    scene04_title();
}
const scene04_title = () =>{
    typerCallback = scene04_paragraph1;
    // Titulo
    typerDOM = 'scene-04-typper-tittle'
    typerText = 'Marshall McLuhan'
    typerReset();
    typer();
}

const scene04_paragraph1 = () =>{
    typerCallback = scene04_paragraph2;
    // Parrafo 1
    typerDOM = 'scene-04-typper-p1'
    typerText = 'fue un filósofo, erudito, sociólogo de la comunicación y profesor de literatura canadiense.'
    typerReset();
    typer();
}
const scene04_paragraph2 = () =>{
    typerCallback = scene04_paragraph3;
    // Parrafo 2
    typerDOM = 'scene-04-typper-p2'
    typerText = 'Hacia finales de la década de 1960 y principios de los años 1970, McLuhan acuñó el término «aldea global» para describir la interconexión humana a escala global generada por los medios electrónicos de comunicación planteó que todos los cambios sociales son el efecto que las nuevas tecnologías ejercen sobre el orden de nuestras vidas sensoriales. Su concepto de aldea global ha dado origen al de globalización, término que parece definir la actual sociedad de la información.'
    typerReset();
    typer();
}
const scene04_paragraph3 = () =>{
    typerCallback = null;
    // Parrafo 3
    typerDOM = 'scene-04-typper-p3'
    typerText = '“El medio es el mensaje” (en inglés “The medium is the message”) es una frase acuñada por Marshall McLuhan que significa que la forma de un medio se incrusta en cualquier mensaje que transmita o transporte, creando una relación simbiótica en la que el medio influye en cómo se percibe el mensaje.'
    typerReset();
    typer();
}