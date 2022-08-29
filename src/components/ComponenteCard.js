import {Card, Title, Paragraph } from 'react-native-paper';

const ComponenteCard = () => (
    <Card>
      <Card.Content>
        <Title>Cartão de crédito</Title>
        <Paragraph>Cartão de crédito é uma forma de pagamento eletrônico.</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://img.freepik.com/psd-gratuitas/maquete-de-cartao-de-credito_23-2148904444.jpg?w=1380&t=st=1661816298~exp=1661816898~hmac=0de6d0101af3c46e863e41d4c7e1b09942018b579d38427ddcca8f8dbd05b5da' }} />
      <Card.Actions>
      </Card.Actions>
    </Card>
  );
  
  export default ComponenteCard;