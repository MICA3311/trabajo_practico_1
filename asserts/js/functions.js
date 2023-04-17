let typerI = 0;
let typerDOM = 'typerBox';
let typerText= '';
let typerTimerOut = null;
let typerCallback = null
const typerSpeed = 50;


const typer = () => {
    if(typerI < typerText.length){
        document.getElementById(typerDOM).innerHTML += typerText.charAt(typerI);
        typerI++;
        typerTimerOut = setTimeout(typer,typerSpeed);
    }else{
        if(typeof(typerCallback) == "function"){
            typerCallback();
        }
        
    }
}

const typerReset = () => {
    document.getElementById(typerDOM).innerHTML = ''
    typerI = 0;
}