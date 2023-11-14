import { useContext } from "react";
import { ComputerContext } from "../Data/ComputerContext";

function  useContextComputer(){
    const computerContext= useContext(ComputerContext);
    if(ComputerContext===undefined)
        throw new Error("Contexto de Comouter no creado");
    return computerContext;

}

export default useContextComputer;