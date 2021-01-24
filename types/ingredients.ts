export interface Ingredient {
  name: string;
  dosage: string;
  description: string;
  imagePath: string;
  foundIn: string;
  form: string;
  source: string;
  supplier: string;
  location: string;
  articles: Article[];
}

export interface Article {
  title: string;
  link: string;
  author: string;
  year: string;
}
