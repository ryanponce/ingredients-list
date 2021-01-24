import styled from "styled-components";
import CaretIcon from "../icons/Caret-Right.svg";
import LocaitonIcon from "../icons/location.svg";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
  name: string;
  dosage: string;
  location: string;
  href: string;
}

function NavItem({ href, name, dosage, location }: NavItemProps) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link href={href} passHref>
      <Wrapper active={active}>
        <div>
          <Name>{name}</Name>
          <Dosage active={active}>{dosage}</Dosage>
          <LocationWrapper>
            <StyledLocationIcon />
            <LocationText>{location}</LocationText>
          </LocationWrapper>
        </div>

        <StyledCaretIcon />
      </Wrapper>
    </Link>
  );
}

type ActiveProps = { active: boolean };

const Wrapper = styled.a<ActiveProps>`
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 24px 13px 20px;
  border-radius: ${({ active }) => (active ? "8px 0 0 8px" : "0px")};
  text-decoration: none;
  position: relative;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary}`};

  @media screen and (max-width: 768px) {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
    border-radius: 8px;
    height: 80px;
    width: 80px;
    justify-content: center;
    padding: 8px;
  }
`;

const Name = styled.p`
  color: inherit;
  font-size: 30px;
  line-height: 32px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
    word-wrap: break-word;
    text-align: center;
  }
`;

const Dosage = styled.p<ActiveProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.primaryDimmed};
  margin-top: 8px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LocationText = styled.p`
  color: inherit;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamilies.serif};
`;

const StyledLocationIcon = styled(LocaitonIcon)`
  color: inherit;
  margin-right: 8px;
`;

const StyledCaretIcon = styled(CaretIcon)`
  color: inherit;
  height: 24px;
  width: 14px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export { NavItem };
