import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { Modalize } from 'react-native-modalize';
import ComponenteCard from './ComponenteCard';
import ComponenteList from './ComponenteList';

export const ComponenteModalize = () => {
  const modalizeAbrirListaCartoes = useRef(null);
  const modalizeAbrirCartaoPrincipal = useRef(null);

  const listarCartoes = () => {
    modalizeAbrirListaCartoes.current?.open();
  }

  const abrirCartãoPrincipal = () => {
    modalizeAbrirCartaoPrincipal.current?.open();
  }

  const fecharListaCartoes = () => {
    modalizeAbrirListaCartoes.current?.close();
  }

  const fecharCartaoPrincipal = () => {
    modalizeAbrirCartaoPrincipal.current?.close();
  }

  return (
    <>
      <TouchableOpacity onPress={listarCartoes}>
        <Text>Listar cartões</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeAbrirListaCartoes}>
        <Button title= "Fechar lista de cartões" onPress={fecharListaCartoes}>
        </Button>
        <ComponenteList/>
      </Modalize>

      <TouchableOpacity onPress={abrirCartãoPrincipal}>
        <Text>Abrir cartão principal</Text>
      </TouchableOpacity>
      <Modalize ref={modalizeAbrirCartaoPrincipal}>
      <Button title= "Fechar cartão principal"  onPress={fecharCartaoPrincipal}>
        </Button>
        <ComponenteCard/>
      </Modalize> 

    </>
  );
};