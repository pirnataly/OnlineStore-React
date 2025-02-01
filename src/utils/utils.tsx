import {
  SnippetItemConfig,
  ProductItem,
  ProductItemWithType,
  Indexed,
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
        background: item.background,
      });
      updatedProducts.push(updatedProduct);
    }
  });
  return updatedProducts;
}

export function setBackgroundStyles(
  snippetItem: ProductItemWithType,
  colors: Indexed,
  imageUrl: string,
) {
  return {
    backgroundImage: `url("/products/${snippetItem.id}/${imageUrl}")`,
    backgroundColor: `${colors[snippetItem.background]}`,
  };
}
