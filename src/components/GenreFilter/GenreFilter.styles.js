import styled from "styled-components";

export const Wrapper = styled.form.attrs({ name: "genreFilter" })`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Genre = styled.label`
  margin: 5px 0;
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
  name: "genre"
})`
  margin-right: 10px;
`;
