import styled from 'styled-components';
import { FiHash, FiUserPlus, FiSettings } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color .2s;
  > div {
    display: flex;
    align-items: center;
  }

  > div span{
    font-size: 15px;
    color: var(--senary);
    margin-left: 5px;
  }

  > div.icons svg{
    display: none;
  }

  &.active, &:hover{
    background-color: var(--quinary);

    > div span{
      color: var(--white);
    }

    > div.icons svg{
    display: inline;
  }

  }
`;

export const HashIcon = styled(FiHash)`
  color: var(--symbol);
`;

export const InviteIcon = styled(FiUserPlus)`

color: var(--symbol);
cursor: pointer;
transition: color .2s;
margin-right: 5px;
&:hover{
  color: var(--white);
}

`;

export const Settings = styled(FiSettings)`

color: var(--symbol);
cursor: pointer;
transition: color .2s;

&:hover{
  color: var(--white);
}

`;

