import styled from "styled-components";

const StyledCover2 = styled.header`
  min-height: 60vh;
  background: url("https://hotel-react-project-backend-production.up.railway.app${(
      props
    ) => props.image}")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledCover2;
