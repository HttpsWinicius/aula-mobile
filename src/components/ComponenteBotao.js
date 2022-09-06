
import { useState } from "react";
import { Button } from "react-native";

const ComponenteBotao = ({propsTituloBotao, propsTemaBotao}) => {

    return (
        <Button
            title={propsTituloBotao}
            color={propsTemaBotao}
        />
    );

}


export default ComponenteBotao;