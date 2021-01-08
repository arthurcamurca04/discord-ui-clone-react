import styled from 'styled-components';
import { FiMic, FiSettings, FiHeadphones} from 'react-icons/fi'

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--quaternary);
  padding: 10px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;


`;
export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
  margin-right: 5px;
  position: relative;

  &::after{
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: var(--notification);
    border-radius: 50%;
    right: 0;
    bottom: 0;
    content: '';
  } 
`;
export const UserData = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: var(--white);
  }

  > span{
    font-size: 12px;
    color: var(--symbol);
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MicIcon = styled(FiMic)`
  color: var(--symbol);
  cursor: pointer;
  transition: color .2s;

  &:hover{
    color: var(--white);
  }

`;
export const HeadphoneIcon = styled(FiHeadphones)`
  color: var(--symbol);
  margin-left: 7px;
  cursor: pointer;
  transition: color .2s;

  &:hover{
    color: var(--white);
  }

`;
export const SettingsIcons = styled(FiSettings)`
  cursor: pointer;
  color: var(--symbol);
  margin-left: 7px;
  transition: color .2s;

  &:hover{
    color: var(--white);}

`;