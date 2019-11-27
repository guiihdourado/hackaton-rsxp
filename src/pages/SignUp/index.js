import React, { useState, useRef } from 'react';
import { Picker } from 'react-native';

import {
  Container, Title, Form, Name, Email, SubmitButton, SubmitText,
} from './styles';

export default function SignUp() {
  const emailRef = useRef();

  const [name, setName] = useState('');
  const [language, setLanguage] = useState('null');

  return (
    <Container>
      <Title>Seja Bem Vindo{ name && (`, ${name}`)}
      </Title>
      <Form>
        <Name
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu nome completo"
          underlineColorAndroid="transparent"
          value={name}
          onChangeText={setName}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Email
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
          underlineColorAndroid="transparent"
          keyboardType="email-address"
          ref={emailRef}
        />

        <Picker
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 44,
            backgroundColor: '#FFF',
            marginBottom: 10,
          }}
          selectedValue={language}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="Escolha o que você gosta..." value="null" />
          <Picker.Item label="Música" value="musica" />
          <Picker.Item label="Educação" value="educacao" />
          <Picker.Item label="Biologia" value="bio" />
        </Picker>

        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
