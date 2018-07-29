import styled, { injectGlobal } from "styled-components";
import { normalize } from "polished";
import loadingIcon from "loading.svg";

export const globalStyles = () =>
  injectGlobal`
		${normalize()};

    body {
      font-family: 'Lato';
    }
  `;

export const Loading = styled.img.attrs({ src: loadingIcon })`
  display: block;
  margin: 50px auto;
`;
