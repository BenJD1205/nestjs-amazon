import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  paymentintent?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
