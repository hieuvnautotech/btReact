import React from "react";
import styled from "@emotion/styled";
const Temp = (props) => {
  const Temp = styled.h1`
    font-family: "Fira", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;
  return <Temp>20 °C</Temp>;
};

export default Temp;
