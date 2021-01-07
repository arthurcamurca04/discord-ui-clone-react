import React from 'react';
import { Container, Separator } from './styles';
import ServerButton from '../ServerButton/index';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>
      <Separator/>

      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton mentions={1}/>
      <ServerButton/>
      <ServerButton/> 
      <ServerButton/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton mentions={7}/>
      <ServerButton/>
      <ServerButton/>

    </Container>
  );
};

export default ServerList;
