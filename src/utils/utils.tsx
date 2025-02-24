import {
  SnippetItemConfig,
  ProductItem,
  ProductItemWithType,
  Indexed,
  HistoryProp,
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

export function getPhotos(array: Array<string>, countOfPhotos: number) {
  const arr = array.slice(0, countOfPhotos) as Array<string>;
  return arr.length < 2 ? new Array(countOfPhotos).fill(arr).flat(1) : arr;
}

export function getFromLocalStorage(key: string) {
  const storedValue = localStorage.getItem(key);
  if (storedValue !== null) {
    return storedValue;
  } else {
    return null;
  }
}

export function normalizeLocalStorageArray(
  key: string,
  popularThings: HistoryProp[],
): HistoryProp[] {
  const result = getFromLocalStorage(key);
  const parsedResult = result ? JSON.parse(result) : [];
  if (parsedResult.length) {
    if (parsedResult.length >= 5) {
      return parsedResult.slice(0, 5);
    } else {
      const newArray = parsedResult.concat(popularThings);
      return newArray.slice(0, 5);
    }
  }
  return popularThings.slice(0, 5);
}

export function setSearchToLocalStorage(
  key: string,
  value: { item: string; key: string },
) {
  const fromLocalStorage = getFromLocalStorage(key);
  if (fromLocalStorage && value.item.length) {
    const result = JSON.parse(fromLocalStorage);
    result.unshift(value);
    localStorage.setItem(key, JSON.stringify(result));
  } else if (value.item.length) {
    localStorage.setItem(key, JSON.stringify(Array.of(value)));
  } else return;
}

export function findWordsStartingWith(
  categoryDescription: string,
  value: string,
) {
  const words = categoryDescription.split(" ");
  return words.find((word) =>
    word.toLowerCase().startsWith(value.toLowerCase()),
  );
}
