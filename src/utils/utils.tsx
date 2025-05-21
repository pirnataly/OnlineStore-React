import {
  SnippetItemConfig,
  ProductItem,
  ProductItemWithType,
  Indexed,
  HistoryProp,
  CategoryType,
  SearchItemValue,
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

export function addSearchToLocalStorage(
  key: string,
  searchItem: SearchItemValue,
) {
  const fromLocalStorage = getFromLocalStorage(key);
  if (fromLocalStorage && searchItem.item.length) {
    const result = JSON.parse(fromLocalStorage);
    result.unshift(searchItem);
    localStorage.setItem(key, JSON.stringify(result));
  } else if (searchItem.item.length) {
    localStorage.setItem(key, JSON.stringify(Array.of(searchItem)));
  } else return;
}

export function removeSearchFromLocalStorage(
  key: string,
  searchItem: SearchItemValue,
) {
  const fromLocalStorage = getFromLocalStorage(key);
  if (fromLocalStorage) {
    const result = JSON.parse(fromLocalStorage);
    const filteredArray = result.filter(
      (item: SearchItemValue) => item.item !== searchItem.item,
    );
    localStorage.setItem(key, JSON.stringify(filteredArray));
  }
  return;
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

export function getSnippetsWithTypeCard(snippets: ProductItem[]) {
  const result = snippets.map((snippet) => {
    return Object.assign(snippet, { type: "card" }) as ProductItemWithType;
  });
  return result;
}

export function getEndOfAmount(str: string): string {
  let result: string;
  switch (str[str.length - 1]) {
    case "0":
      result = "";
      break;
    case "1":
      result = "товар";
      break;
    case "2":
    case "3":
    case "4":
      result = "товара";
      break;
    default:
      result = "товаров";
  }
  return result;
}

export function selectProducts(
  originProducts: ProductItem[],
  category: CategoryType | null,
  value: string | null,
) {
  return originProducts.filter((item) => {
    if (category) {
      return item.categories.includes(category.name);
    } else if (value) {
      const arrayOfWords = value.split(" ");
      const tempArray = arrayOfWords.filter((word) =>
        item.name.toLowerCase().includes(word.toLowerCase()),
      );
      return tempArray.length === arrayOfWords.length;
    } else {
      return originProducts;
    }
  });
}

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}


export function sortBySelectedSort(selectedSort:string,snippetsWithCardType:ProductItemWithType[]){
  let result;
  switch (selectedSort) {
    case "Популярные":
      result = [...snippetsWithCardType].sort(
          (a, b) => Number(b["likes"]) - Number(a["likes"]),
      );
      break;
      // full_price временно
    case "Подороже":
      result = [...snippetsWithCardType].sort(
          (a, b) => Number(b["full_price"]) - Number(a["full_price"]),
      );
      break;
    case "Подешевле":
      result = [...snippetsWithCardType].sort(
          (a, b) => Number(a["full_price"]) - Number(b["full_price"]),
      );
      break;
    case "С высоким рейтингом":
      result = [...snippetsWithCardType].sort(
          (a, b) => Number(b["review_rating"]) - Number(a["review_rating"]),
      );
      break;
    default:
      result = snippetsWithCardType;
  }
  return result;
}