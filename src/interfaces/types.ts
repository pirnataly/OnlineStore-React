import { components } from "../data/constants/constants";

export type MenuItem = {
  id: number;
  name: string;
  description?: string;
};

export type MenuItemProps = {
  items: MenuItem[];
  containerType: string;
  itemType: string;
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

export type ContainerConfigWithSnippetsTypes = ContainerConfigTruncated &
  ContainerSnippets;

export type ComponentKeys = keyof typeof components;

export type Indexed = { [k: string]: string };

export type FunctionTypeVoid = () => void;

export type HistoryProp = {
  item: string;
  key: string;
};

export type HistoryProps = {
  historyArray: HistoryProp[];
  value: string;
};
