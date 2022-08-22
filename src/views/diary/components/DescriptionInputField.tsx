import { Field } from "formik";
import styled from "styled-components";

const StyledInput = styled.textarea`
  width: 98%;
  height: 150px;
  padding: 10px;
  border: 0px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -0.02em;
  resize: none;
`;

export default function DescriptionInputField() {
  return (
    <>
      <Field
        as={StyledInput}
        placeholder="Enter Description"
        type="text"
        required
        name="description"
        style={{ backgroundColor: "rgba(0, 111, 255, 0.1)" }}
      />
    </>
  );
}
