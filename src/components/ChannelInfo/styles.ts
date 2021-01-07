import styled from 'styled-components';
import { FiHash } from 'react-icons/fi';

export const Container = styled.div`
  grid-area: CI;

  background-color: var(--primary);
  
  display: flex;
  align-items: center;
  padding: 0 17px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const HashtagIcon = styled(FiHash)`
  color: var(--symbol);
  width: 16px;
  height: 16px;

`
export const Title = styled.h1`
  margin-left: 9px;
  font-weight: bold;
  font-size: 16px;
  color: var(--white);


`
export const Separator = styled.div`
  height: 24px;
  width: 1px;
  background-color: var(--white);
  opacity: 0.2;
  margin: 0 13px;

`
export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`
