import { ChangeEvent } from "react";
import styled from "styled-components";
import { Label } from "./Label";

interface FileFieldProps {
  onUpload: (image: File) => void;
  value: File | null;
}

function FileField({ onUpload, value }: FileFieldProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      onUpload(file);
    }
  }

  return (
    <Wrapper>
      <Label>Image:</Label>
      <InputWrapper>
        {value ? (
          value.name
        ) : (
          <>
            <HelperText>Choose File:</HelperText>
            <ButtonLabel htmlFor="imagePath">Upload</ButtonLabel>
            <Input type="file" id="imagePath" onChange={handleChange} />
          </>
        )}
      </InputWrapper>
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HelperText = styled.span`
  color: #6e6e6e;
  font-size: 16px;
  font-weight: 500;
`;

const Input = styled.input`
  &[type="file"] {
    display: none;
  }
`;

const ButtonLabel = styled.label`
  background: #cbcbcb;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 50px;
  border-radius: 8px;
  margin-left: 16px;
`;

export { FileField };
