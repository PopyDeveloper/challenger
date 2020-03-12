import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Wrapper, Image, Title, Subtitle, Info } from './styles';


const ItemList = ({ nameRepo, login, avatarUri, handlerClick}) => {

  return (
    <Wrapper onPress={() => handlerClick()}>
      <Image source={{uri: avatarUri}} />
      <Info>
        <Title>{nameRepo}</Title>
        <Subtitle>{login}</Subtitle>
      </Info>
      <Icon name="angle-right" style={{ marginLeft: "auto"}} size={18} color="#aaa" />
    </Wrapper>
  )
}

export default ItemList
