import { createContext, useContext, useReducer, ReactNode } from "react";
import { Ingredient } from "../types/ingredients";
import ingredients from "../data/ingredients.json";

type Action =
  | { type: "ADD_INGREDIENT"; payload: { ingredient: Ingredient } }
  | { type: "DELETE_INGREDIENT"; payload: { index: number } }
  | { type: "SEARCH"; payload: { searchTerm: string } };

type Dispatch = (action: Action) => void;

type State = { ingredients: Ingredient[]; searchTerm: string };

type IngredientsProviderProps = { children: ReactNode };

const IngredientsStateContext = createContext<State | undefined>(undefined);
const IngredientsDispatchContext = createContext<Dispatch | undefined>(
  undefined
);

function ingredientsReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_INGREDIENT": {
      const newIngredients = [...state.ingredients, action.payload.ingredient];

      return { ...state, ingredients: newIngredients };
    }
    case "DELETE_INGREDIENT": {
      const newIngredients = state.ingredients.filter(
        (ingredient, index) => index !== action.payload.index
      );

      return { ...state, ingredients: newIngredients };
    }
    case "SEARCH": {
      const newState = {
        ...state,
        searchTerm: action.payload.searchTerm,
      };

      return newState;
    }
  }
}

function IngredientsProvider({ children }: IngredientsProviderProps) {
  const [state, dispatch] = useReducer(ingredientsReducer, {
    ingredients,
    searchTerm: "",
  });

  return (
    <IngredientsStateContext.Provider value={state}>
      <IngredientsDispatchContext.Provider value={dispatch}>
        {children}
      </IngredientsDispatchContext.Provider>
    </IngredientsStateContext.Provider>
  );
}

function useIngredientsState() {
  const context = useContext(IngredientsStateContext);
  return context;
}

function useIngredientsDispatch() {
  const context = useContext(IngredientsDispatchContext);
  return context;
}

export { IngredientsProvider, useIngredientsState, useIngredientsDispatch };
