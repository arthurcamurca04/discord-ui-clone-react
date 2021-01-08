import React from 'react';

import { Container, Status, User, Avatar } from './styles';

export interface UserProps{
  isBot?: boolean
  nickname: string
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''}></Avatar>
      <strong>{nickname}</strong>
      {isBot ? <span>BOT</span> : ""}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Status>Disponível - 1</Status>
      <UserRow nickname="Diego Fernandes"></UserRow>
      
      <Status>Offline - 18</Status>
      <UserRow nickname="Arthur Camurça" isBot></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
      <UserRow nickname="Fulano"></UserRow>
    </Container>
  );
};

export default UserList;
