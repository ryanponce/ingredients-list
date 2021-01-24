import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import PlusIcon from "../icons/icon-plus.svg";

function AddIngredient() {
  const href = "/add";
  const router = useRouter();
  const active = router.pathname === href;

  return (
    <Link href={href} passHref>
      <Wrapper active={active}>
        <StyledPlusIcon />
        Add a new ingredient
      </Wrapper>
    </Link>
  );
}

type ActiveProps = { active: boolean };

const Wrapper = styled.a<ActiveProps>`
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.primaryDimmed};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ active }) => (active ? "8px 0 0 8px" : "0px")};
  text-decoration: none;
  position: relative;
  height: 115px;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
    word-wrap: break-word;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    height: 80px;
    padding: 8px;
    justify-content: center;
  }
`;

const StyledPlusIcon = styled(PlusIcon)`
  color: inherit;
  margin-right: 8px;
  height: 24px;
  width: 24px;
`;

export { AddIngredient };
