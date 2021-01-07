import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
  grid-area: SN;
  background-color: var(--secondary);
  

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px 0 16px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;

`;

export const ExpandIcon = styled(FiChevronDown)`
  color: var(--white);
  width: 23px;
  height: 23px;
  cursor: pointer;
`
export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`
