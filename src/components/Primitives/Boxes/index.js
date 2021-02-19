import * as R from "ramda";
import * as mixins from "codogo-utility-functions";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { breakpoint } from '../../../utils/styles';

const Wrapper = styled.div`
  color: white;

  ${breakpoint("mobile", "min")} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
`;

const BoxWrapper = styled.a`
  background-color: ${R.path(["theme", "nav"])};
  display: block;

  ${breakpoint("tiny", "only")} {
    margin-bottom: 1em;
  } ;
`;

const paddingTop = "66.7%";

const Image = styled.div`
  ${mixins.bgImage}

  ${breakpoint("mobile", "min")} {
    padding-top: ${paddingTop};
  }

  ${breakpoint("tiny", "only")} {
    padding-top: 50%;
  }
`;

const TextWrapper = styled.div`
  ${breakpoint("mobile", "min")} {
    padding-top: ${paddingTop};
    position: relative;
  } ;
`;

const TextInner = styled.div`
  padding: 1em;

  ${breakpoint("mobile", "min")} {
    ${mixins.contained()}
  }
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.font.heading};
  font-weight: bold;
  font-size: 1.1em;
`;

const Text = styled.div`
  font-family: ${({ theme }) => theme.font.paragraph};
  font-size: 0.9em;
`;

const Box = ({ image, title, text, link }) => (
  <BoxWrapper href={link}>
    <Image src={image && image.url} />

    <TextWrapper>
      <TextInner>
        <Title>{title}</Title>

        <Text>{text}</Text>
      </TextInner>
    </TextWrapper>
  </BoxWrapper>
);

const things = [
  {
    title: "Watch",
    text: "Watch things",
    image: {
      url:
        "https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb",
    },
    link: "#",
  },
  {
    title: "Read",
    text: "Read things",
    image: {
      url:
        "https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb",
    },
    link: "#",
  },
  {
    title: "Listen",
    text: "Listen to things",
    image: {
      url:
        "https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb",
    },
    link: "#",
  },
];

export const Boxes = () => (
  <Wrapper>
    {things.map((o, i) => (
      <Box {...o} key={i} />
    ))}
  </Wrapper>
);
