import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 0.7em;

  thead {
    border-bottom: ${({ theme }) => theme.colors.grey} 2px solid;

    td {
      font-size: 1.1em;
    }
  }

  tr {
    border-bottom: ${({ theme }) => theme.colors.grey} 1px solid;

    &:hover,
    &:active {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.background.medium};
    }
  }

  td {
    padding: 0.5em 0.25em 0;
  }

  a {
    display: block;
  }
`;

export default Table;
