import styled from "styled-components";
import { breakpoint } from '../../../utils/styles';

const Grid = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 3em;
  flex: 1;

  ${breakpoint("tablet", "max")} {
    flex-basis: 100%;
    padding: 1em;
  } ;
`;

export { Grid };
