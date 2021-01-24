import { useRouter } from "next/router";
import { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";
import {
  useIngredientsDispatch,
  useIngredientsState,
} from "../contexts/ingredients";
import { AddIngredient } from "./AddIngredient";
import { Header } from "./Header";
import { NavItem } from "./NavItem";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const ingredientsState = useIngredientsState();
  const dispatch = useIngredientsDispatch();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    if (dispatch) {
      if (router.pathname !== "/") {
        router.push("/");
      }
      dispatch({ type: "SEARCH", payload: { searchTerm: event.target.value } });
    }
  }

  return (
    <Wrapper>
      <Header />
      <div>
        <Search placeholder="Search" onChange={handleSearch} />
        <Nav>
          <Ul>
            {ingredientsState?.ingredients
              .filter((ingredient) => {
                return ingredient.name
                  .toLowerCase()
                  .includes(ingredientsState.searchTerm);
              })
              .map((ingredient, index) => (
                <li key={ingredient.name + index}>
                  <NavItem
                    name={ingredient.name}
                    dosage={ingredient.dosage}
                    location={ingredient.location}
                    href={`/${index + 1}`}
                  />
                </li>
              ))}
            <li>
              <AddIngredient />
            </li>
          </Ul>
        </Nav>
      </div>
      <Main>{children}</Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1024px;
  padding: 28px 64px 46px;
  display: grid;
  grid-template-columns: 275px 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 48px;
  grid-template-areas:
    "header header"
    "nav main";
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding-right: 16px;
    padding-left: 16px;
    grid-column-gap: 16px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "nav"
      "main";
  }
`;

const Ul = styled.ul`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: calc(100vw - 32px);
  }
`;

const Nav = styled.nav`
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  grid-area: nav;

  @media screen and (max-width: 768px) {
    border-right: none;
  }
`;

const Search = styled.input`
  background: #f7f7f7;
  border-radius: 8px;
  background: #f7f7f7;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 1px 3px 0 #121d3f;
  height: 40px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  font-family: ${({ theme }) => theme.fontFamilies.sansSerif};
  text-align: right;
  width: 100%;
  margin-bottom: 8px;
  box-sizing: border-box;

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamilies.serif};
    font-style: italic;
  }
`;

const Main = styled.main`
  grid-area: main;
`;

export { Layout };
