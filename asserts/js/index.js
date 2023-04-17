const step1 = ()=>{
    typerCallback = step2;
    typerText = 'Te voy a explicar porque estas aqui. Estas porque sabes algo, aunque lo que sabes no puedes explicarlo, pero lo percibes. Ha sido asi durante toda tu vida, ¿Sabes de lo que estoy hablando?'
    typerReset();
    typer()
}

const step2 = ()=>{
    typerCallback = null;
    typerText = 'Has de verla con tus propios ojos, ultima oportunidad, despues de esto no podras echarte atras, si tomas la pastilla azul fin de la historia, despertaras en tu cama y creeras lo que quieras creer, pero si tomar la roja despertaras en el pais de las maravillas, yo te enseñare hasta donde llegan las madrigueras de conejo.'
    setTimeout(typerReset,2000);
    setTimeout(typer,3000);
}

step1()