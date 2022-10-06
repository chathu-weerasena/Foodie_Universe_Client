import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "##32a871" : "white")};
  color: ${(props) => (props.primary ? "white" : "#32a871")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #32a871;
  border-radius: 3px;

  &:hover {
    border: 2px solid #0f0f0f;
  }
`;
