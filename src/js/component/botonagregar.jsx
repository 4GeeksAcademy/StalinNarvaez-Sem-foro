import React from "react";

const BotonAgregarColor = ()=>{
function nuevoColor(){
       alert ("Está seguro de agregar un color extra púrpura al semáforo")
}
       return(
       <button type="button" className="btn btn-warning agregarColorBtn" onClick={nuevoColor}>
              Agregar color
       </button>
       )
}
export default BotonAgregarColor