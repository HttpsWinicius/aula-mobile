import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import ComponenteBotao from "./ComponenteBotao";

const ContadorSomar = () => {
    
    const { tituloBotaoSomar, temaBotaoSomar } = useContext(MyContext)

    return (
        <ComponenteBotao
            propsTituloBotao={tituloBotaoSomar}
            propsTemaBotao={temaBotaoSomar.background}
        />
    );
}

export default ContadorSomar;