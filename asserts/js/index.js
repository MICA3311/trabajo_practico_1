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

const scene01 = ()=>{
  typerCallback = scene01_click;
  typerSpeed= 150;
  typerDOM = "scene-01-text";
  typerText = "Descargando transmisión ...";
  setTimeout(function() {
    typerReset();
    typer();
  },4000);
}

const scene01_click = () =>{
  typerSpeed= 20;
  document.getElementById("scene-01").click()
}

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
    "El World Wide Web (abreviada WWW) en informática a una red de alcance mundial, que consiste en un complejo sistema de hipertextos e hipermedios interconectados entre sí y a los que puede tenerse acceso mediante una conexión a Internet y un conjunto de software especializado.";
  typerReset();
  typer();
};

const scene03_paragraph2 = () => {
  typerCallback = scene03_paragraph4;
  // Parrafo 2
  typerDOM = "scene-03-typer-body-p2";
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
    document.getElementById("scene-03").classList.add("d-none");
    document.getElementById("scene-05").classList.remove("d-none");
}

const scene04 = () => {

    // Reseteando textos
    document.getElementById("scene-04-typper-tittle").innerHTML = "";
    document.getElementById("scene-04-typper-p1").innerHTML = "";
    document.getElementById("scene-04-typper-p2").innerHTML = "";
    document.getElementById("scene-04-typper-p3").innerHTML = "";
    document.getElementById("scene-04-typer-p4").classList.add("d-none");
    document.getElementById("scene-04-buttons").classList.add("d-none");

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
        "Fue un filósofo, erudito, sociólogo de la comunicación y profesor de literatura canadiense, acuñó el término «aldea global» para describir la interconexión humana a escala global generada por los medios electrónicos de comunicación.";
    typerReset();
    typer();
};
const scene04_paragraph2 = () => {
    typerCallback = scene04_paragraph3;
    // Parrafo 2
    typerDOM = "scene-04-typper-p2";
    typerText =
        "McLuhan planteó que todos los cambios sociales son el efecto que las nuevas tecnologías ejercen sobre el orden de nuestras vidas sensoriales. Su concepto de aldea global ha dado origen al de globalización, término que parece definir la actual sociedad de la información.";
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
    document.getElementById("scene-01").classList.add("scene-focus");
    scene01();
}

const scene06_option_no = () =>{
    document.getElementById("scene-06").classList.add("d-none");
    document.getElementById("scene-07").classList.remove("d-none");
    document.getElementById("scene-07-video").play();
}


const scene08 = () => {

  // Reseteando textos
  document.getElementById("scene-08-typper-tittle").innerHTML = "";
  document.getElementById("scene-08-typper-p1").innerHTML = "";
  document.getElementById("scene-08-typper-p2").innerHTML = "";
  document.getElementById("scene-08-typper-p3").innerHTML = "";
  document.getElementById("scene-08-typer-p4").classList.add("d-none");
  document.getElementById("scene-08-buttons").classList.add("d-none");

  document.getElementById("scene-05").classList.add("d-none");
  document.getElementById("scene-08").classList.remove("d-none");
  scene08_title();
};
const scene08_title = () => {
  typerCallback = scene08_paragraph1;
  // Titulo
  typerDOM = "scene-08-typper-tittle";
  typerText = "Tim Berners-Lee";
  typerReset();
  typer();
};

const scene08_paragraph1 = () => {
  typerCallback = scene08_paragraph2;
  // Parrafo 1
  typerDOM = "scene-08-typper-p1";
  typerText = "Timothy 'Tim' John Berners-Lee, es un científico de la computación británico, conocido por ser el padre de la World Wide Web. Estableció la primera comunicación entre un cliente y un servidor usando el protocolo HTTP en diciembre de 1990, concibió la idea de un proyecto de hipertexto global, el HTML, que años más tarde se convertiría en la world wide web.";
  typerReset();
  typer();
};
const scene08_paragraph2 = () => {
  typerCallback = scene08_paragraph3;
  // Parrafo 2
  typerDOM = "scene-08-typper-p2";
  typerText =
      "Internet es una inmensa red de computadoras alrededor de todo el mundo conectadas entre sí. En cambio, la web (la World Wide Web) es una enorme colección de páginas que se asienta sobreesa red de computadoras.";
  typerReset();
  typer();
};
const scene08_paragraph3 = () => {
  typerCallback = scene08_paragraph4;
  // Parrafo 3
  typerDOM = "scene-08-typper-p3";
  typerText =
      "El Inventó la World Wide Web como una herramienta útil para científicos en 1989.";
  typerReset();
  typer();
};

const scene08_paragraph4 = () =>{
  document.getElementById("scene-08-typer-p4").classList.remove("d-none");
  document.getElementById("scene-08-buttons").classList.remove("d-none");

  scrollEnd();
}

const scene08_option_yes = ()=>{
  document.getElementById("scene-08").classList.add("d-none");
  document.getElementById("scene-09").classList.remove("d-none");
  scene09();
}

const scene08_option_no = ()=>{
  document.getElementById("scene-08").classList.add("d-none");
  document.getElementById("scene-05").classList.remove("d-none");

  scene06_paragraph1();
}


const scene09 = () => {

  document.getElementById("scene-09-typer-tittle").innerHTML = "";
  document.getElementById("scene-09-typer-body-p1").innerHTML = "";
  document.getElementById("scene-09-typer-body-p2").innerHTML = "";
  document.getElementById("scene-09-typer-body-p3").innerHTML = "";
  document.getElementById("scene-09-typer-body-p4").innerHTML = "";
  document.getElementById("scene-09-typer-body-p5").innerHTML = "";
  document.getElementById("scene-09-buttons").classList.add("d-none");

  document.getElementById("scene-06").classList.add("d-none");
  document.getElementById("scene-09").classList.remove("d-none");

  typerCallback = null;
  typerSpeed = 20;

  scene09_title();
};

const scene09_title = () => {
  typerCallback = scene09_paragraph1;
  // Titulo
  typerDOM = "scene-09-typer-tittle";
  typerText = "¿Qué es la narrativa hipertextual y cuáles son los medios en los que se aplica?";
  typerReset();
  typer();
};

const scene09_paragraph1 = () => {
  typerCallback = scene09_paragraph2;
  // Parrafo 1
  typerDOM = "scene-09-typer-body-p1";
  typerText =
    "Se denomina narración hipertextual a las narraciones mediante hipertexto,  El hipertexto es una estructura no secuencial que permite crear, agregar, enlazar y compartir información de diversas fuentes por medio de enlaces asociativos.";
  typerReset();
  typer();
};

const scene09_paragraph2 = () => {
  typerCallback = scene09_paragraph4;
  // Parrafo 2
  typerDOM = "scene-09-typer-body-p2";
  typerText =
    "Los medios que se aplican: El hipertexto en informática es una herramienta de creación, enlace y distribución de información";
  typerReset();
  typer();
};

const scene09_paragraph4 = () => {
  typerCallback = scene09_paragraph5;
  // Parrafo 4
  typerDOM = "scene-09-typer-body-p4";
  typerText = "Se entiende por hipertexto a la forma de organizar la información, literaria, periodística, etcétera, dada por un conjunto de enlaces en internet —o hipervínculos—que conecta un texto con otros. Estos forman una red conceptual, y su recorrido puede ser decidido por el lector, quien podrá saltar de un texto al otro en el orden que desee, pero siempre dentro de los límites establecidos por el autor.";
  typerReset();
  typer();
};

const scene09_paragraph5 = () => {
  typerCallback = scene09_button;
  // Parrafo 5
  typerDOM = "scene-09-typer-body-p5";
  typerText = "La información puede ser multimedia; por ejemplo, puede incluir recortes de prensa, artículos de enciclopedia, fotografías, ilustraciones, videoclips, mapas, planos, música, etcétera.";
  typerReset();
  typer();
};

const scene09_button = ()=>{
  document.getElementById("scene-09-buttons").classList.remove("d-none");
  scrollEnd();
}


const scene10 = () => {

  document.getElementById("scene-10-typer-tittle").innerHTML = "";
  document.getElementById("scene-10-typer-body-p1").innerHTML = "";
  document.getElementById("scene-10-typer-body-p2").innerHTML = "";
  document.getElementById("scene-10-buttons").classList.add("d-none");

  document.getElementById("scene-09").classList.add("d-none");
  document.getElementById("scene-10").classList.remove("d-none");

  typerCallback = null;
  typerSpeed = 20;

  scene10_title();
};

const scene10_title = () => {
  typerCallback = scene10_paragraph1;
  // Titulo
  typerDOM = "scene-10-typer-tittle";
  typerText = "¿Qué se entiende por internet de las cosas/internet thinking?";
  typerReset();
  typer();
};

const scene10_paragraph1 = () => {
  typerCallback = scene10_paragraph2;
  // Parrafo 1
  typerDOM = "scene-10-typer-body-p1";
  typerText = "Se refiere a la red colectiva de dispositivos conectados y a la tecnología que facilita la comunicación entre los dispositivos y la nube.";
  typerReset();
  typer();
};

const scene10_paragraph2 = () => {
  typerCallback = scene10_button;
  // Parrafo 2
  typerDOM = "scene-10-typer-body-p2";
  typerText = "La Internet de las cosas (IoT) describe la red de objetos físicos ('cosas') que llevan incorporados sensores, software y otras tecnologías con el fin de conectarse e intercambiar datos con otros dispositivos y sistemas a través de Internet. Estos dispositivos van desde objetos domésticos comunes hasta herramientas industriales sofisticadas.";
  typerReset();
  typer();
};

const scene10_button = ()=>{
  document.getElementById("scene-10-buttons").classList.remove("d-none");
  scrollEnd();
}

const scene11 = () => {

  document.getElementById("scene-11-typer-tittle").innerHTML = "";
  document.getElementById("scene-11-typer-body-p1").innerHTML = "";
  document.getElementById("scene-11-buttons").classList.add("d-none");

  document.getElementById("scene-10").classList.add("d-none");
  document.getElementById("scene-11").classList.remove("d-none");

  typerCallback = null;
  typerSpeed = 20;

  scene11_title();
};

const scene11_title = () => {
  typerCallback = scene11_paragraph2;
  // Titulo
  typerDOM = "scene-11-typer-tittle";
  typerText = "¿Qué se imaginan que es diseñar para la web y cómo lo relacionan con la narrativa hipertextual?";
  typerReset();
  typer();
};

const scene11_paragraph2 = () => {
  typerCallback = scene11_buttons;
  // Parrafo 1
  typerDOM = "scene-11-typer-body-p1";
  typerText = "Diseñar para la web implica crear una experiencia de usuario efectiva y atractiva que se adapte a la narrativa hipertextual y permita a los usuarios explorar diferentes opciones en la navegación. También se debe considerar la narrativa hipertextual como aquello que implica crear una estructura no lineal y permitir que los usuarios exploren diferentes caminos en el sitio web, creando una experiencia de usuario práctica y funcional para garantizar que el sitio web atractivo y práctico de usar.";
  typerReset();
  typer();
};

const scene11_buttons = () => {
  document.getElementById("scene-11-buttons").classList.remove("d-none");
  scrollEnd();
};


const scene11_end = () =>{
  document.getElementById("scene-11").classList.add("d-none");
  document.getElementById("scene-06").classList.remove("d-none");

  scene06_paragraph1();
}