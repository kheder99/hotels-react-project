import styled from "styled-components";

const StyledCover = styled.header`
  min-height: 81vh;
  background: url("https://midnight-aback-eater.glitch.me${(props) =>
      props.image}")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledCover;
