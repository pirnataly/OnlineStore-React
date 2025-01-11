import {
  SnippetItemConfig,
  ProductItem,
  ProductItemWithType,
} from "../interfaces/types";

export function getProductsWithType(
  products: ProductItem[],
  config: SnippetItemConfig[],
): ProductItemWithType[] {
  const updatedProducts: ProductItemWithType[] = [];
  const productsCopy = products.slice();
  config.forEach((item) => {
    const foundProduct = productsCopy.find((product) => product.id === item.id);
    if (foundProduct) {
      const updatedProduct = Object.assign({}, foundProduct, {
        type: item.type,
      });
      updatedProducts.push(updatedProduct);
    }
  });
  return updatedProducts;
}
