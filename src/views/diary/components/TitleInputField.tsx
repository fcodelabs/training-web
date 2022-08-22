import { Field } from "formik";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0px 20px;
  gap: 10px;
  width: 95%;
  height: 48px;
  border: 0px;
  border-radius: 24px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #000000;
  &:focus {
    outline: none;
  }
`;

export default function TitleInputField() {
  return (
    <>
      <Field
        as={StyledInput}
        placeholder="Submit New"
        type="text"
        required
        name="title"
        style={{ backgroundColor: "rgba(0, 111, 255, 0.3)" }}
      />
    </>
  );
}
