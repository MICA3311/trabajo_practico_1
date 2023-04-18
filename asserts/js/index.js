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

const scene03 = () => {
  document.getElementById("scene-02").classList.remove("scene-focus");

  setTimeout(() => {
    document.getElementById("scene-02").classList.add("d-none");

    document.getElementById("scene-03").classList.remove("d-none");

    typerCallback = null;
    typerSpeed = 20;
    scene03_title();
  }, 800);
};

const scene03_title = () => {
  typerCallback = scene03_paragraph1;
  // Titulo
  typerDOM = "scene-03-typer-tittle";
  typerText = "¿Qué entienden por Word Wilde Web y cómo funciona?";
  typerReset();
  typer();
};

const scene03_paragraph1 = () => {
  typerCallback = scene03_paragraph2;
  // Parrafo 1
  typerDOM = "scene-03-typer-body-p1";
  typerText =
    "La World Wide Web (la Web) nació en el CERN, el Centro Europeo de Física Nuclear, en Ginebra (Suiza), de la mano del ingeniero y físico británico Tim Berners-Lee como un sistema de intercambio de datos entre los 10.000 científicos que trabajaban en la institución.";
  typerReset();
  typer();
};

const scene03_paragraph2 = () => {
  typerCallback = scene03_paragraph3;
  // Parrafo 2
  typerDOM = "scene-03-typer-body-p2";
  typerText =
    "El World Wide Web (abreviada WWW) en informática a una red de alcance mundial, que consiste en un complejo sistema de hipertextos e hipermedios interconectados entre sí y a los que puede tenerse acceso mediante una conexión a Internet y un conjunto de software especializado.";
  typerReset();
  typer();
};

const scene03_paragraph3 = () => {
  typerCallback = scene03_paragraph4;
  // Parrafo 3
  typerDOM = "scene-03-typer-body-p3";
  typerText =
    "La World Wide Web muestra la información de forma atractiva e intercambia información multimediática, interactiva y a distancia. Permite el acceso a información almacenada, pudiendo conectar con temas similares a través de hipervínculos, además admite el uso de otros protocolos como FPT (Protocolo de Transferencia de Ficheros: es un protocolo que se utiliza para transferir todo tipo de archivos entre equipos conectados a una red, por ejemplo Internet) o Chat.";
  typerReset();
  typer();
};

const scene03_paragraph4 = () => {
  typerCallback = scene03_buttons;
  // Parrafo 4
  typerDOM = "scene-03-typer-body-p4";
  typerText = "¿Desea continuar?";
  typerReset();
  typer();
};

const scene03_buttons = () => {
  setTimeout(() => {
    document.getElementById("scene-03-buttons").classList.remove("d-none");
    scrollEnd();
  }, 2000);
};

let scene03_option_no_counter = 0;

const scene03_option_no = () => {
  scene03_option_no_counter++;

  if (scene03_option_no_counter == 1) {
    document.getElementById("scene-03-typer-body-p1").innerHTML =
      "?¿?Q?u?é? ?e?n?t?i?e?n?d?e?n? ?p?o?r? ?W?o?r?d? ?W?i?l?d?e? ?W?e?b? ?y? ?c?ó?m?o? ?f?u?n?c?i?o?n?a???";
    document.getElementById("scene-03-typer-body-p2").innerHTML =
      "?E?l? ?W?o?r?l?d? ?W?i?d?e? ?W?e?b? ?(?a?b?r?e?v?i?a?d?a? ?W?W?W?)? ?e?n? ?i?n?f?o?r?m?á?t?i?c?a? ?a? ?u?n?a? ?r?e?d? ?d?e? ?a?l?c?a?n?c?e? ?m?u?n?d?i?a?l?,? ?q?u?e? ?c?o?n?s?i?s?t?e? ?e?n? ?u?n? ?c?o?m?p?l?e?j?o? ?s?i?s?t?e?m?a? ?d?e? ?h?i?p?e?r?t?e?x?t?o?s? ?e? ?h?i?p?e?r?m?e?d?i?o?s? ?i?n?t?e?r?c?o?n?e?c?t?a?d?o?s? ?e?n?t?r?e? ?s?í? ?y? ?a? ?l?o?s? ?q?u?e? ?p?u?e?d?e? ?t?e?n?e?r?s?e? ?a?c?c?e?s?o? ?m?e?d?i?a?n?t?e? ?u?n?a? ?c?o?n?e?x?i?ó?n? ?a? ?I?n?t?e?r?n?e?t? ?y? ?u?n? ?c?o?n?j?u?n?t?o? ?d?e? ?s?o?f?t?w?a?r?e? ?e?s?p?e?c?i?a?l?i?z?a?d?o?.?";
    document.getElementById("scene-03-typer-body-p3").innerHTML =
      "?L?a? ?W?o?r?l?d? ?W?i?d?e? ?W?e?b? ?m?u?e?s?t?r?a? ?l?a? ?i?n?f?o?r?m?a?c?i?ó?n? ?d?e? ?f?o?r?m?a? ?a?t?r?a?c?t?i?v?a? ?e? ?i?n?t?e?r?c?a?m?b?i?a? ?i?n?f?o?r?m?a?c?i?ó?n? ?m?u?l?t?i?m?e?d?i?á?t?i?c?a?,? ?i?n?t?e?r?a?c?t?i?v?a? ?y? ?a? ?d?i?s?t?a?n?c?i?a?.? ?P?e?r?m?i?t?e? ?e?l? ?a?c?c?e?s?o? ?a? ?i?n?f?o?r?m?a?c?i?ó?n? ?a?l?m?a?c?e?n?a?d?a?,? ?p?u?d?i?e?n?d?o? ?c?o?n?e?c?t?a?r? ?c?o?n? ?t?e?m?a?s? ?s?i?m?i?l?a?r?e?s? ?a? ?t?r?a?v?é?s? ?d?e? ?h?i?p?e?r?v?í?n?c?u?l?o?s?,? ?a?d?e?m?á?s? ?a?d?m?i?t?e? ?e?l? ?u?s?o? ?d?e? ?o?t?r?o?s? ?p?r?o?t?o?c?o?l?o?s? ?c?o?m?o? ?F?P?T? ?(?P?r?o?t?o?c?o?l?o? ?d?e? ?T?r?a?n?s?f?e?r?e?n?c?i?a? ?d?e? ?F?i?c?h?e?r?o?s?:? ?e?s? ?u?n? ?p?r?o?t?o?c?o?l?o? ?q?u?e? ?s?e? ?u?t?i?l?i?z?a? ?p?a?r?a? ?t?r?a?n?s?f?e?r?i?r? ?t?o?d?o? ?t?i?p?o? ?d?e? ?a?r?c?h?i?v?o?s? ?e?n?t?r?e? ?e?q?u?i?p?o?s? ?c?o?n?e?c?t?a?d?o?s? ?a? ?u?n?a? ?r?e?d?,? ?p?o?r? ?e?j?e?m?p?l?o? ?I?n?t?e?r?n?e?t?)? ?o? ?C?h?a?t?.?";

    scrollEnd();
  }

  if (scene03_option_no_counter == 2) {
    document.getElementById("scene-03-typer-tittle").innerHTML = "";
    document.getElementById("scene-03-typer-body-p1").innerHTML = "";
    document.getElementById("scene-03-typer-body-p2").innerHTML = "";
    document.getElementById("scene-03-typer-body-p3").innerHTML = "";

    scrollEnd();
  }

  if (scene03_option_no_counter == 3) {
    document.getElementById("scene-03-typer-body-p4").innerHTML =
      "... que no entendiste?";
    document.getElementById("scene-03-button-no").parentElement.remove();
  }
};

const scene03_option_yes = () =>{
    document.getElementById("scene-04").classList.add("d-none");
    document.getElementById("scene-05").classList.remove("d-none");
}

const scene04 = () => {
  document.getElementById("scene-05").classList.add("d-none");
  document.getElementById("scene-04").classList.remove("d-none");
  scene04_title();
};
const scene04_title = () => {
  typerCallback = scene04_paragraph1;
  // Titulo
  typerDOM = "scene-04-typper-tittle";
  typerText = "Marshall McLuhan";
  typerReset();
  typer();
};

const scene04_paragraph1 = () => {
  typerCallback = scene04_paragraph2;
  // Parrafo 1
  typerDOM = "scene-04-typper-p1";
  typerText =
    "fue un filósofo, erudito, sociólogo de la comunicación y profesor de literatura canadiense.";
  typerReset();
  typer();
};
const scene04_paragraph2 = () => {
  typerCallback = scene04_paragraph3;
  // Parrafo 2
  typerDOM = "scene-04-typper-p2";
  typerText =
    "Hacia finales de la década de 1960 y principios de los años 1970, McLuhan acuñó el término «aldea global» para describir la interconexión humana a escala global generada por los medios electrónicos de comunicación planteó que todos los cambios sociales son el efecto que las nuevas tecnologías ejercen sobre el orden de nuestras vidas sensoriales. Su concepto de aldea global ha dado origen al de globalización, término que parece definir la actual sociedad de la información.";
  typerReset();
  typer();
};
const scene04_paragraph3 = () => {
  typerCallback = scene04_paragraph4;
  // Parrafo 3
  typerDOM = "scene-04-typper-p3";
  typerText =
    "“El medio es el mensaje” (en inglés “The medium is the message”) es una frase acuñada por Marshall McLuhan que significa que la forma de un medio se incrusta en cualquier mensaje que transmita o transporte, creando una relación simbiótica en la que el medio influye en cómo se percibe el mensaje.";
  typerReset();
  typer();
};

const scene04_paragraph4 = () =>{
    document.getElementById("scene-04-typer-p4").classList.remove("d-none");
    document.getElementById("scene-04-buttons").classList.remove("d-none");

    scrollEnd();
}

const scene04_option_yes = ()=>{
    document.getElementById("scene-04").classList.add("d-none");
    document.getElementById("scene-05").classList.remove("d-none");
}

const scene04_option_no = ()=>{
    document.getElementById("scene-04").classList.add("d-none");
    document.getElementById("scene-06").classList.remove("d-none");

    scene06_paragraph1();
}

const scene06_paragraph1 = () =>{
    typerCallback = scene06_paragraph1_text_2;
    // Parrafo 1
    typerDOM = "scene-06-p1";
    typerText = "Fin de la transmisión..."
    typerReset();
    typer();
}

const scene06_paragraph1_text_2 = () =>{
    typerCallback = scene06_buttons;
    // Parrafo 1
    typerDOM = "scene-06-p1";
    typerText = "¿Quieres comenzar de nuevo?"
    
    setTimeout(()=>{
        typerReset();
        typer();
    },3000);
}

const scene06_buttons = () =>{
    document.getElementById("scene-06-buttons").classList.remove("d-none");
}

const scene06_option_yes = ()=>{
    document.getElementById("scene-06").classList.add("d-none");
    document.getElementById("scene-01").classList.remove("d-none");
}

const scene06_option_no = () =>{
    document.getElementById("scene-06").classList.add("d-none");
    document.getElementById("scene-07").classList.remove("d-none");
    document.getElementById("scene-07-video").play();
}