import styled from "styled-components";

const IMG_PATH = "https://image.tmdb.org/t/p/original/";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  max-height: 500px;
  padding: 10px;
  flex: auto;
`;

export const Poster = styled.img.attrs({
  src: props => `${IMG_PATH}${props.url}`
})`
  width: 100%;
`;

export const Genres = styled.span`
  margin-bottom: 10px;
`;

export const Rating = styled.span`
  margin-top: auto;
`;
