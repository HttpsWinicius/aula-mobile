import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import ComponenteBotao from "./ComponenteBotao";

const ContadorSubtrair = () => {

    const { tituloBotaoSubtrair, temaBotaoSubtrair } = useContext(MyContext)

    return (
        <ComponenteBotao
            propsTituloBotao={tituloBotaoSubtrair}
            propsTemaBotao={temaBotaoSubtrair.background}
        />
    );

}

export default ContadorSubtrair;