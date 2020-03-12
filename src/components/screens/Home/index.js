import React, { useState, useEffect } from 'react';
import { Container, Label, List } from './styles';
import { Text } from 'react-native';
import { getRepos } from '../../../store/ducks';

import { useSelector, useDispatch } from 'react-redux';

import ItemList from '../../layouts/ItemList';
import SearchInput from '../../layouts/SearchInput';

const Home = ({ navigation }) => {

  const [nameUser, setNameUser] = useState("");

  const { repos, loading, error } = useSelector(state => state);

  const dispatch = useDispatch();

  const searchRepos = () => {
    dispatch(getRepos(nameUser))
  };

  const goToRepo = ( uriRepo ) => {
    navigation.navigate('ViewRepos', { uri: uriRepo });
  };

  return (
    <Container>
    <Label>Recent</Label>
    <SearchInput
      placeholder="Buscar Repos"
      onChangeText={text => setNameUser(text)}
      blurOnSubmit={true}
      onSubmitEditing={() => nameUser.trim() !== '' && searchRepos()}
    />

    {repos?.length > 0 && (
      <List
        data={repos}
        renderItem={({ item }) => (
          <ItemList
            login={item.owner.login}
            avatarUri={item.owner.avatar_url}
            nameRepo={item.name}
            handlerClick={() => goToRepo(item.html_url)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    )}
    {
      loading && <Text>Carregando...</Text>
    }
  </Container>
  )
}

export default Home
