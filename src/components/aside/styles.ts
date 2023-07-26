/* eslint-disable @typescript-eslint/no-unsafe-return */
import { styled } from "styled-components";

export const Container = styled.div`
  grid-column: 1;
  grid-row: 1 / -1;
  /* background: #252a48; */
  background: ${(props) => props.theme.colors.primary};
  border-right: 1px solid #e5e5e5;
`;
