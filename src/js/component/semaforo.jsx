import React, {useState} from 'react';

const Semaforo = ()=>{
    const [colorLuzRoja, setLuzBordeRoja] = useState ("#781f19");
    const [resplandorLuzRoja, setResplandorLuzRoja] = useState ("");
    const [colorLuzNaranja, setLuzBordeNaranja] = useState ("#cc7156");
    const [resplandorLuzNaranja, setResplandorLuzNaranja] = useState ("");
    const [colorLuzVerde, setLuzBordeVerde] = useState ("#8ea282");
    const [resplandorLuzVerde, setResplandorLuzVerde] = useState ("");
    function semaforoRojo(){ 
        if (colorLuzRoja== "#781f19"){
            setLuzBordeRoja("red");
            setResplandorLuzRoja("0 0 40px #FFFF00");
            setLuzBordeNaranja("#cc7156");
            setResplandorLuzNaranja("");
            setLuzBordeVerde("#8ea282");
            setResplandorLuzVerde("");
        } else{
            setLuzBordeRoja("#781f19");
            setResplandorLuzRoja("");
           }
    }

    function semaforoNaranja(){ 
        if (colorLuzNaranja== "#cc7156"){
            setLuzBordeNaranja("orange");
            setResplandorLuzNaranja("0 0 40px #FFFF00");
            setLuzBordeVerde("#8ea282");
            setResplandorLuzVerde("");
            setLuzBordeRoja("#781f19");
            setResplandorLuzRoja("");
        } else{
            setLuzBordeNaranja("#cc7156");
            setResplandorLuzNaranja("");
           }
    }

    function semaforoVerde(){ 
        if (colorLuzVerde== "#8ea282"){
            setLuzBordeVerde("green");
            setResplandorLuzVerde("0 0 40px #FFFF00");
            setLuzBordeRoja("#781f19");
            setResplandorLuzRoja("");
            setLuzBordeNaranja("#cc7156");
            setResplandorLuzNaranja("");
        } else{
            setLuzBordeVerde("#8ea282");
            setResplandorLuzVerde("");
           }
    }
    return(
        <>  
            <div class="barra"></div>
            <div className='semaforo'>
                <div id='luzRoja'>
                    <button className='luzSemaforo' style={{backgroundColor: colorLuzRoja, boxShadow: resplandorLuzRoja}} onClick={semaforoRojo}></button>
                </div>
                <div id='luzNaranja'>
                    <button className='luzSemaforo' style={{backgroundColor: colorLuzNaranja, boxShadow: resplandorLuzNaranja}} onClick={semaforoNaranja}></button>
                </div>
                <div id='luzVerde'>
                    <button className='luzSemaforo' style={{backgroundColor: colorLuzVerde, boxShadow: resplandorLuzVerde}} onClick={semaforoVerde}></button>
                </div>
            </div>
        </>            
    )
}
export default Semaforo
