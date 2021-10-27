import React, { useState } from "react";
import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import Input from "./components/Input";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

export default function App() {
  const [newTask, setNewTask] = useState('');

  const _addTask = () => {
    alert(`찾는 그 사람: ${newTask}`);
    setNewTask('');
  };

  const _handleTextChange = text => {
    setNewTask(text);
  };

  return (
    <ThemeProvider theme={theme}>
        <Container>
            <StatusBar
              barStyle="light-content"
              backgroundColor="theme.background"
            />
            <Title>그때 그 사람</Title>
            <Input 
              placeholder="+ 그때 그 사람 찾기"
              value={newTask}
              onChangeText={_handleTextChange}
              onSubmitEditing={_addTask}  
            />
        </Container>
    </ThemeProvider>
  );
}