import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};

  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${colors.white};

  text-align: center;
  margin-bottom: 10px;
`;

export const List = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

export const Card = styled.View`
  background-color: #FFF;
  width: 150px;
  height: 250px;

  margin: 10px;
  border-radius: 5px;

  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${colors.regular};
  margin-top: 10px;
`;

export const Company = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CompanyName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 0 0;
`;
export const CompanyDescription = styled.Text.attrs({
  numberOfLines: 5,
})`
  font-size: 14px;
  color: ${colors.dark};
  padding: 10px;
`;
export const KnowMoreButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.primary};
  height: 44px;
  width: 150px;
  margin: 10px 0 0;
  justify-content: center;
  align-items: center;
`;
export const KnowMoreText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 14px;
`;
