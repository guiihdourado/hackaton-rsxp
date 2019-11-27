import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
  padding: 20px;

  justify-content: center;
  align-items: stretch;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
`;

export const Form = styled.View`
  margin-top: 20px;
`;

export const Name = styled.TextInput`
  background-color: ${colors.white};
  border-radius: 3px;
  height: 44px;
  padding: 0 20px;
`;

export const Email = styled.TextInput`
  margin: 10px 0;
  background-color: ${colors.white};
  border-radius: 3px;
  height: 44px;
  padding: 0 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 3px;
  height: 44px;
  margin: 10px 0 0;
  justify-content: center;
  align-items: center;
`;
export const SubmitText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 14px;
`;
