import { components } from "../data/constants/constants";
import React, { SyntheticEvent } from "react";

export type MenuItem = {
  id: number;
  name: string;
  description?: string;
};

export type CategoryProps = {
  name: string;
  description: string;
  parentClass: string;
  func: ChangeCategoryFunc;
  value?: string;
};

export type CategoryType = Pick<CategoryProps, "name" | "description">;

export type ChangeCategoryFunc = (obj: CategoryType) => void;

export type ChangePageFunc = (str: Pages) => void;

export type MenuItemProps = {
  items: MenuItem[];
  containerType: string;
  itemType: string;
  func: ChangeCategoryFunc;
  value?: string;
};

export type ProductItem = {
  id: string;
  name: string;
  categories: string[];
  description: string;
  photo_url: Array<string>;
  full_price: string;
  discount_price: string;
  likes: string;
  review_rating: string;
  promo: string;
  background: string;
};

export type SnippetItemConfig = {
  id: string;
  type: string;
  background: string;
};

export type ComponentProps = {
  containerType: string;
  snippet: ProductItemWithType;
};

export type ProductItemWithType = ProductItem & SnippetItemConfig;

export type ProductItemWithTypeKeys = keyof ProductItemWithType;

export type ProofSigns = "star" | "like";

export type ContainerConfig = {
  id: string;
  containerType: string;
  snippets: SnippetItemConfig[];
  title?: string;
  title_id?: string;
};

type ContainerConfigTruncated = Omit<ContainerConfig, "id" | "snippets">;

type ContainerSnippets = {
  snippets: ProductItemWithType[];
};

export type ParentType = { parent: string };

export type ContainerConfigWithSnippetsTypes = ContainerConfigTruncated &
  ParentType &
  ContainerSnippets;

export type ComponentKeys = keyof typeof components;

export type Indexed = { [k: string]: string };

export type FunctionTypeVoid = () => void;

export type FunctionStringVoid = (srt: string) => void;

export type HistoryProp = {
  item: string;
  key: string;
};

export type HistoryProps = {
  historyArray: HistoryProp[];
  value: string;
  changeSearchValueFunc: FunctionStringVoid;
  createValue: FunctionStringVoid;
};

export enum Pages {
  catalog = "catalog",
  main = "main",
}

export type PageHeadingProps = {
  text: string;
  page: Pages;
  count?: number;
};
export type FiltersListProps = { filters: string[] };

export type SortingListProps = {
  sorting: string[];
  changeActiveState: (str: string) => void;
  activeSort: string;
};

export type FiltersSortingProps = {
  viewportWidth: number;
  activeSort: string;
  setActiveSort: (str: string) => void;
};

export type FiltersProps = { filters: string[]; viewportWidth: number };

export type SortingProps = { sorting: string[] } & FiltersSortingProps;

export type FilterItemName = { name: string };

export type SortingItemName = Pick<FilterItemName, "name"> & {
  func: FunctionStringVoid;
  activeSort: string;
};

export type LogoProps = {
  logoText: string;
  changePage: ChangePageFunc;
} & ParentType;

export type UseStateInput = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export type ColoredLettersProps = { str: string; val: string };

export type HeaderPropsHandlers = {
  changePage: ChangePageFunc;
  changeCategoryFunc: ChangeCategoryFunc;
  changeSearchValueFunc: FunctionStringVoid;
};

export type HeaderProps = HeaderPropsHandlers &
  ParentType &
  UseStateInput & { logoText: string; viewportWidth: number };

export type CatalogProps = {
  activeSort: string;
  setActiveSort: (str: string) => void;
  page: Pages;
  text: string;
  viewportWidth: number;
  products: ProductItem[];
};

export type PageRendererType = CatalogProps &
  HeaderPropsHandlers &
  UseStateInput;

export type SearchItemValue = { item: string; key: string };

export type HistoryItemProps = {
  arrayItem: HistoryProp;
  value: string;
  changeSearchValueFunc: FunctionStringVoid;
  removeItem: (item: HistoryProp) => void;
  createValue: FunctionStringVoid;
};

export type SearchWrapperProps = {
  changeCategoryFunc: ChangeCategoryFunc;
  changePageDueToValue: FunctionStringVoid;
  viewportWidth: number;
} & UseStateInput;

export type SearchWrapperHandlers = {
  onClickHandler: (e: SyntheticEvent) => void;
  onFocusHandler: FunctionTypeVoid;
  changeInputHandler: FunctionTypeVoid;
};

export type SearchingPanelProps = SearchWrapperHandlers & SearchWrapperProps;

export type OverlayProps = SearchingPanelProps;

export type SearchPropsHandlers = {
  changeSearchValueFunc: FunctionStringVoid;
  onFocusHandler: FunctionTypeVoid;
  changeInputFunc: FunctionTypeVoid;
  create: FunctionStringVoid;
};

export type SearchProps = SearchPropsHandlers & ParentType & UseStateInput;
