import React from 'react';

import Logo from '~/assets/logo.png';

import {
  Container, Title, List, Card, Image, Company, CompanyName, CompanyDescription, KnowMoreButton, KnowMoreText,
} from './styles';

export default function CompaniesList() {
  return (
    <Container>
      <Title>Pedro, você sabia que essas empresas atuam no campo da Educação com Tecnologia?</Title>

      <List>
        <Card>
          <Image source={Logo} resizeMode="cover" />
          <Company>
            <CompanyName>Logo Name</CompanyName>
            <CompanyDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia sit amet metus a laoreet. Curabitur luctus ac nisl feugiat sagittis. Vivamus pellentesque vulputate auctor
            </CompanyDescription>
          </Company>
          <KnowMoreButton>
            <KnowMoreText>Saiba mais...</KnowMoreText>
          </KnowMoreButton>
        </Card>

        <Card>
          <Image source={Logo} />
          <CompanyName>Logo Name</CompanyName>
          <CompanyDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia sit amet metus a laoreet. Curabitur luctus ac nisl feugiat sagittis. Vivamus pellentesque vulputate auctor
          </CompanyDescription>
          <KnowMoreButton>
            <KnowMoreText>Saiba mais...</KnowMoreText>
          </KnowMoreButton>
        </Card>
      </List>
    </Container>
  );
}
