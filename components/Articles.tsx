import { useState } from "react";
import styled, { css } from "styled-components";
import { Article as ArticleInterface } from "../types/ingredients";
import LeftCaretIcon from "../icons/Caret-Left.svg";
import RightCaretIcon from "../icons/Caret-Right.svg";
import { Article } from "./Article";

interface ArticlesProps {
  articles: ArticleInterface[];
  infinite?: boolean;
}

function Articles({ articles, infinite = true }: ArticlesProps) {
  const [selectedArticleId, setSelectedArticleId] = useState(0);

  function handleNextClick() {
    if (selectedArticleId + 1 <= articles.length - 1) {
      return setSelectedArticleId(selectedArticleId + 1);
    } else {
      if (infinite) {
        return setSelectedArticleId(0);
      } else {
        return;
      }
    }
  }

  function handlePreviousClick() {
    if (selectedArticleId - 1 >= 0) {
      return setSelectedArticleId(selectedArticleId - 1);
    } else {
      if (infinite) {
        return setSelectedArticleId(articles.length - 1);
      } else {
        return;
      }
    }
  }

  return (
    <Wrapper>
      <Title>
        Read some <Serif>Research</Serif>
      </Title>

      <Carousel>
        {articles.length > 1 ? (
          <Button onClick={handlePreviousClick}>
            <StyledLeftCaretIcon />
          </Button>
        ) : null}

        <Article article={articles[selectedArticleId]} />

        {articles.length > 1 ? (
          <Button onClick={handleNextClick}>
            <StyledRightCaretIcon />
          </Button>
        ) : null}
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  max-width: 450px;
  padding: 12px 0;
  margin: 200px auto 0;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.58;
  text-align: center;
`;

const Serif = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies.serif};
  font-style: italic;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  cursor: pointer;
`;

const iconStyles = css`
  width: 10px;
  height: 18px;
`;

const StyledLeftCaretIcon = styled(LeftCaretIcon)`
  ${iconStyles}
`;

const StyledRightCaretIcon = styled(RightCaretIcon)`
  ${iconStyles}
`;

export { Articles };
