import styled from "styled-components";

const ButtonStyle = styled.button`
  margin: 0 5px;
  padding: 5px;
  min-width: 100px;
  border-radius: 8px;
  color: white;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Button = (props) => {
  return (
    <>
      <ButtonStyle {...props}>{props.children}</ButtonStyle>
    </>
  );
};

export default Button;
