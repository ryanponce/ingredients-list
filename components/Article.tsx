import styled from "styled-components";
import { Article as ArticleInterface } from "../types/ingredients";

interface ArticleProps {
  article: ArticleInterface;
}

function Article({ article }: ArticleProps) {
  return (
    <Wrapper>
      <Title>
        <Anchor href={article.link}>{article.title}</Anchor>
      </Title>
      <Details>
        {article.author} - {article.year}
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  padding: 0 16px;
`;

const Title = styled.h4`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.39;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const Anchor = styled.a`
  text-decoration: underline;
  color: inherit;
`;

const Details = styled.p`
  text-align: center;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamilies.serif};
  font-style: italic;
  margin-top: 11px;
`;

export { Article };
