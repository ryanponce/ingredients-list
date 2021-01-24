import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import styled from "styled-components";
import * as Yup from "yup";
import { FileField } from "../components/FileField";
import { TextField } from "../components/TextField";
import {
  useIngredientsDispatch,
  useIngredientsState,
} from "../contexts/ingredients";

interface FormValues {
  name: string;
  dosage: string;
  description: string;
  image: null | File;
  foundIn: string;
  form: string;
  source: string;
  supplier: string;
  location: string;
}

const initialValues: FormValues = {
  name: "",
  dosage: "",
  description: "",
  image: null,
  foundIn: "",
  form: "",
  source: "",
  supplier: "",
  location: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  dosage: Yup.string().required("Dosage is required."),
  description: Yup.string().required("Description is required."),
  image: Yup.mixed().required("Image is required."),
  foundIn: Yup.string().required("Found in is required."),
  form: Yup.string().required("Form is required."),
  source: Yup.string().required("Source is required."),
  supplier: Yup.string().required("Supplier is required."),
  location: Yup.string().required("Location is required."),
});

function Add() {
  const dispatch = useIngredientsDispatch();
  const ingredientsState = useIngredientsState();
  const router = useRouter();

  function handleSubmit(
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) {
    if (dispatch && ingredientsState) {
      actions.setSubmitting(true);
      dispatch({
        type: "ADD_INGREDIENT",
        payload: {
          ingredient: {
            name: values.name,
            dosage: values.dosage,
            description: values.description,
            imagePath: URL.createObjectURL(values.image),
            foundIn: values.foundIn,
            form: values.form,
            source: values.source,
            supplier: values.supplier,
            location: values.location,
            articles: [],
          },
        },
      });
      actions.setSubmitting(false);
      router.push(`/${ingredientsState.ingredients.length + 1}`);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      isInitialValid={false}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <StyledForm>
          <Field
            id="name"
            label="Ingredient Name"
            name="name"
            placeholder="eg. Folate"
            component={TextField}
          />

          <Field
            id="dosage"
            label="Dosage"
            name="dosage"
            placeholder="eg. 600 mcg"
            component={TextField}
          />

          <Field
            id="description"
            label="Description"
            name="description"
            placeholder="eg. Our enzymatically..."
            component={TextField}
          />

          <Field
            id="foundIn"
            label="Found in"
            name="foundIn"
            placeholder="eg. Lentils, avocado,..."
            component={TextField}
          />

          <Field
            id="form"
            label="Form"
            name="form"
            placeholder="eg. 6S-5-methyltetrahydrofolate,..."
            component={TextField}
          />

          <Field
            id="source"
            label="Source"
            name="source"
            placeholder="eg. Salt, Phenylethylamine,..."
            component={TextField}
          />

          <Field
            id="supplier"
            label="Supplier"
            name="supplier"
            placeholder="eg. Gnosis"
            component={TextField}
          />

          <Field
            id="location"
            label="Location"
            name="location"
            placeholder="eg. Pisticci, Italy"
            component={TextField}
          />

          <Field name="image">
            {({ form, field }: FieldProps<FormValues>) => (
              <FileField
                onUpload={(image) => form.setFieldValue("image", image)}
                // @ts-ignore
                value={field.value}
              />
            )}
          </Field>

          <Button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Ingredient"}
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
}

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.48;
  padding: 12px 50px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fontFamilies.sansSerif};
  border: none;
  align-self: flex-end;
  margin-top: 64px;

  &:disabled {
    background: #cbcbcb;
    cursor: not-allowed;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export default Add;
