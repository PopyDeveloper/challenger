import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    background-color: #fafafa;
    padding: 10px;
`;

export const SearchInput = styled.TextInput`
  padding: 10px;
  background-color: #fafafa;
  border-radius: 2px;
  background-color: #eee;
  margin: 5px 0px;
`;

export const Label = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #555;
`;

export const List = styled.FlatList`
  flex: 1;
`;