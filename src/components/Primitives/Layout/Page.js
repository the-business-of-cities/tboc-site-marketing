import styled from "styled-components";
import { breakpoint } from '../../../utils/styles';

const Page = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;

  ${breakpoint("tablet", "max")} {
    display: flex;
  } ;
`;

export { Page };
