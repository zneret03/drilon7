import styled, { createGlobalStyle } from "styled-components";
import { Widget } from "@typeform/embed-react";

const SelfStyled = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #0a192f;       
  }
`;

const TypeStyled = styled.section`
  * {
    margin: 0;
    padding: 0;
  }

  .my-form {
    height: 100vh;
    width: 100%;
  }
`;

export default function TypeForm() {
  return (
    <>
      <SelfStyled />
      <TypeStyled>
        <Widget id="KWCrb2tC" className="my-form"/>
      </TypeStyled>
    </>
  );
}
