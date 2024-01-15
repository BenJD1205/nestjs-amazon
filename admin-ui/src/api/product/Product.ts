import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  category?: Category;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: number;
  id: string;
  images: JsonValue;
  order?: Order | null;
  reviews?: Array<Review>;
  title: string | null;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
