import React from 'react';

import { Container, HashIcon, InviteIcon, Settings } from './styles';

export interface Props{
  channelName: string,
  selected?: boolean
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return (
    <Container className={selected ? 'active' : ''}>
     <div>
      <HashIcon/>
      <span>{channelName}</span>
     </div>

     <div className="icons">
      <InviteIcon/>
      <Settings/>
     </div>
    </Container>
  );
};

export default ChannelButton;
