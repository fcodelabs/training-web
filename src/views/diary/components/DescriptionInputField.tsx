import { Field } from "formik";
import styled from "styled-components";

const StyledInput = styled.textarea`
  width: 98%;
  height: 150px;
  padding: 10px;
  border: 1px solid #006fff;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: #000000;
  &:focus {
    outline: none;
  }
`;

export default function DescriptionInputField() {
  return (
    <>
      <Field
        as={StyledInput}
        placeholder="Enter Description"
        type="text"
        required={true}
        name="description"
        style={{ backgroundColor: "rgba(0, 111, 255, 0.1)" }}
      />
    </>
  );
}
