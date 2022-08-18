import { Field } from "formik";
import { useEffect } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0px 20px;
  gap: 10px;
  width: 80%;
  height: 48px;
  border: 1px solid #e3e8ef;
  border-radius: 12px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #25334f;
  &:focus {
    outline: none;
  }
`;

export default function TextInputField(props: { nickName: string }) {
  const { nickName } = props;

  return (
    <>
      <Field
        as={StyledInput}
        placeholder="Enter nickname"
        type="text"
        required={true}
        name="nickName"
        style={{ backgroundColor: "lightgrey" }}
      />
    </>
  );
}
