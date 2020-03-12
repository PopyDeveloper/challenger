import styled from 'styled-components';

export const Wrapper = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
  flex-direction: row;
  padding: 5px;

`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Info = styled.View`
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 100;
  color: #aaa;
`;