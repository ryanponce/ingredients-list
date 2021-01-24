import { ReactNode } from "react";
import styled from "styled-components";

interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
}

function Label({ children, htmlFor }: LabelProps) {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
}

const StyledLabel = styled.label`
  font-size: 16px;
  letter-spacing: 0.39;
  font-weight: 500;
`;

export { Label };
