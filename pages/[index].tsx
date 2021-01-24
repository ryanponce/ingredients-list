import { useRouter } from "next/router";
import styled from "styled-components";
import {
  useIngredientsDispatch,
  useIngredientsState,
} from "../contexts/ingredients";
import { Articles } from "../components/Articles";
import { FaTrash } from "react-icons/fa";

function Ingredient() {
  const { query, push } = useRouter();
  const ingredientsState = useIngredientsState();
  const dispatch = useIngredientsDispatch();
  const ingredient =
    ingredientsState && query.index
      ? ingredientsState.ingredients[Number(query.index) - 1]
      : null;

  function handleDelete() {
    if (dispatch) {
      dispatch({
        type: "DELETE_INGREDIENT",
        payload: { index: Number(query.index) - 1 },
      });

      push("/");
    }
  }

  if (!ingredient) return null;

  return (
    <Wrapper>
      <Hero>
        <ImageWrapper>
          <Image src={ingredient.imagePath} alt={ingredient.name} />
        </ImageWrapper>
        <div>
          <Title>{ingredient.name}</Title>
          <Dosage>{ingredient.dosage}</Dosage>
          <DeleteButton onClick={handleDelete}>
            <FaTrash />
          </DeleteButton>
        </div>
      </Hero>

      <Description>{ingredient.description}</Description>

      <Detail>
        Found In <DetailValue>{ingredient.foundIn}</DetailValue>
      </Detail>
      <Detail>
        Form <DetailValue>{ingredient.form}</DetailValue>
      </Detail>
      <Detail>
        Source <DetailValue>{ingredient.source}</DetailValue>
      </Detail>
      <Detail>
        Supplier <DetailValue>{ingredient.supplier}</DetailValue>
      </Detail>
      <Detail>
        Final Location of Manufacturing{" "}
        <DetailValue>{ingredient.location}</DetailValue>
      </Detail>

      {ingredient.articles.length ? (
        <Articles articles={ingredient.articles} />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Hero = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  margin-right: 20px;
`;

const Image = styled.img`
  border-radius: 50%;
  height: 160px;
  width: 160px;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    word-break: break-all;
  }
`;

const Dosage = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 500;
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
`;

const Description = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.53;
  line-height: 28px;
`;

const Detail = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
`;

const DetailValue = styled.span`
  margin-left: 8px;
  font-family: ${({ theme }) => theme.fontFamilies.serif};
  font-style: italic;
`;

export default Ingredient;
