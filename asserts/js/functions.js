let typerI = 0;
let typerDOM = 'typerBox';
let typerText= '';
const typerSpeed = 50;


const typer = () => {
    if(typerI < typerText.length){
        document.getElementById(typerDOM).innerHTML += typerText.charAt(typerI);
        typerI++;
        setTimeout(typer,typerSpeed);
    }
}

const typerReset = () => {
    typerI = 0;
}