// Scroll
const scrollEnd = ()=>{
    let maxScroll = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    window.scrollTo(0,maxScroll);
}

// Typer
let typerI = 0;
let typerDOM = 'typerBox';
let typerText= '';
let typerTimerOut = null;
let typerCallback = null
let typerSpeed = 50;


const typer = () => {
    if(typerI < typerText.length){
        document.getElementById(typerDOM).innerHTML += typerText.charAt(typerI);
        typerI++;
        typerTimerOut = setTimeout(typer,typerSpeed);
        scrollEnd();
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

