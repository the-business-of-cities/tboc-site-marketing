const breakpoints = {
  tiny: {
    min: "0px",
    max: "483px"
  },
  mobile: {
    min: "484px",
    max: "767px"
  },
  tablet: {
    min: "768px",
    max: "999px"
  },
  desktop: {
    min: "1000px",
    max: "99999px"
  }
};

export const breakpoint = (size, cap) => {
  let rules = {
    max: `(max-width: ${breakpoints[size].max})`,
    min: `(min-width: ${breakpoints[size].min})`,
    only: ""
  };

  rules.only = `${rules.max} and ${rules.min}`;

  return `@media ${rules[cap]}`;
};
