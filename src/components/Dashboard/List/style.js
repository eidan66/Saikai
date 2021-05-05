import styled from 'styled-components';
import { colorForTitle } from '../../../helpers';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
`;

export const ListMessages = styled.div`
  width: 100%;
  height: 20px;
  background: ${({ message }) => (message === 'bad' ? '#fe4c4c' : '#6ACB73')};
  border-radius: 0px 0px 5px 5px;
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;
  color: #ffffff;
  text-align: center;
  padding: 1px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 240px;
  height: 35rem;
  background: #ffffff;
  border: 1px solid #c8c8c8;
  box-sizing: border-box;
  box-shadow: 0px 4px 40px -6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  width: 100%;
  height: 39px;
  border-radius: 3px 3px 0px 0px;

  /* border-radius: 4px; */
  background-color: ${({ title }) => colorForTitle(title)};
`;

export const HeaderTypography = styled.div`
  margin: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;

export const AddButton = styled.button`
  display: flex;
  background-color: transparent;
  border: 0px solid transparent;
`;

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow-y: auto;
`;

export const PositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
  border-bottom: 2.5px solid ${({ title }) => colorForTitle(title)};
  cursor: pointer;
  &:hover {
    background-color: ${({ title }) =>
      title === 'Applied'
        ? '#D1E4FA'
        : title === 'In Progress'
        ? '#EFDAF1'
        : title === 'Received Task'
        ? '#F9E3D2'
        : title === 'Contract'
        ? '#DCEFDD'
        : title === 'Denied'
        ? '#F5D6D6'
        : ''};
  }
`;

export const PositionHeader = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 3px 0px;
`;

export const PositionBody = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #6d6d6d;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 3px 0px;
`;
