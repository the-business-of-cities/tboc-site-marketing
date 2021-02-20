import styled from "styled-components";
import { breakpoint } from '../../../utils/styles';

export const Section = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.white};
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-image: ${(props) =>
    props.image &&
    `url(https://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto,o_20/https:${props.image})`};
  background-size: cover;

  &:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.background.lighter};
  }

  ${breakpoint("tablet", "max")} {
    flex-wrap: wrap;
  } ;
`;