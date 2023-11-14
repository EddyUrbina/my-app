import { useState } from "react";

function Numero(props){

    //var numero = props.valor;

    function Subir(cantidad){
        setNumero(numero+cantidad);
    }
    function Bajar(cantidad){
        setNumero(numero-cantidad);
    }
    const[numero,setNumero]=useState(parseInt(props.valor));
    return(
        <div className="col-md-3">
            <div className={numero>=0?"alert alert-success":"alert alert-danger"} role={alert}>
                <h1>{numero}</h1>
            </div>
            <button onClick={(e)=>Subir(2)}>Incrementar</button>
            <button onClick={(e)=>Bajar(2)}>Decrementar</button>
            

        </div>
    );
}

export default Numero;