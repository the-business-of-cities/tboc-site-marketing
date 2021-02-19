import styled from "styled-components";
import { breakpoint } from '../../../utils/styles';

const Column = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1;
  ${(props) => props.center && "align-items: center; text-align: center;"};

  &:not(:last-child) {
    padding-left: 0.5em;
  }

  &:not(:first-child) {
    padding-right: 0.5em;
  }

  ${breakpoint("tablet", "max")} {
    flex-basis: 100% !important;
    padding: 1em;
  }

  ${breakpoint("tablet", "min")} {
    &:first-child {
      flex: 1;
    }

    &:last-child {
      flex: 1;
    }

    > img,
    > a > img {
      padding: 2em;
    }
  }
`;

export { Column };
