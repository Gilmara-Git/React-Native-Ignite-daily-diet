import styled from 'styled-components/native';


export const Container = styled.View`
  align-items: center;
  /* justify-content: center; */
  background-color: ${({ theme }) => theme.COLORS.base_gray_700};
  flex: 1;
`;
