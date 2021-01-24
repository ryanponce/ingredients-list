import { FieldProps, useField } from "formik";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Label } from "./Label";

interface TextFieldProps {
  label: string;
}

function TextField({
  label,
  field,
  form: { touched, errors },
  ...props
}: TextFieldProps & FieldProps) {
  return (
    <Wrapper>
      <Label htmlFor={field.name}>{label}:</Label>
      <div>
        <Input
          id={field.name}
          error={Boolean(touched[field.name] && errors[field.name])}
          {...field}
          {...props}
        />
        {touched[field.name] && errors[field.name] && (
          <ErrorText>{errors[field.name]}</ErrorText>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input<{ error: boolean }>`
  background: #f7f7f7;
  border-radius: 8px;
  background: #f7f7f7;
  border: 1px solid
    ${({ theme, error }) => (error ? "red" : theme.colors.primary)};
  box-shadow: inset 0 1px 3px 0 #121d3f;
  height: 40px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  font-family: ${({ theme }) => theme.fontFamilies.sansSerif};
  width: 320px;

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamilies.serif};
    font-style: italic;
  }
`;

const ErrorText = styled.p`
  margin-top: 4px;
  color: red;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamilies.serif};
  font-style: italic;
`;

export { TextField };
