export const formatTelNumber = (num) => {
  if (num.slice(0, 1) === "+" && num.length === 13) {
    return `${num.slice(0, 3)} (0)${num.slice(3, 6)} ${num.slice(
      6,
      9
    )} ${num.slice(9, 13)}`;
  }

  if (num.slice(0, 1) === "0" && num.length === 11) {
    return `${num.slice(0, 4)} ${num.slice(4, 7)} ${num.slice(7, 11)}`;
  } else {
    return num;
  }
};
