import { useQuery } from "@tanstack/react-query";

import { getProducts } from "./getProducts";

export const useProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: getProducts });
