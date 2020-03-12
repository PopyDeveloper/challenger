import React from 'react';

import { Wrapper, Image, Title, Subtitle, Info } from './styles';

const ItemList = ({ nameRepo, login, avatarUri, handlerClick}) => {

  return (
    <Wrapper onPress={() => handlerClick()}>
      <Image source={{uri: avatarUri}} />
      <Info>
        <Title>{nameRepo}</Title>
        <Subtitle>{login}</Subtitle>
      </Info>
    </Wrapper>
  )
}

export default ItemList
