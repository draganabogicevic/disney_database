import styled from "styled-components";

const CardContainer = styled.div`
  width: 80%;
  margin: 30px auto 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;

  @media (max-width: 370px) {
    width: 180px;
    margin: auto;
  }
`;

const CardWrapper = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default CardWrapper;
