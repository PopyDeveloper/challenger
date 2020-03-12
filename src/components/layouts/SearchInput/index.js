import React from 'react';
import { Search, Container } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchInput = ({...options }) => {
  return (
    <Container>
      <Icon name="search" style={{ padding: 10}} size={18} color="#aaa" />
      <Search {...options} />
    </Container>
  )
}

// const styles = {
//   searchIcon: {
//     padding: 10,
//   }
// }
export default SearchInput;
