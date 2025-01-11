import { components } from "../data/constants/constants";

export type MenuItem = {
  id: number;
  name: string;
  description?: string;
};

export type MenuItemProps = {
  items: MenuItem[];
  blockClass: string;
  itemType: string;
};

export type ProductItem = {
  id: string;
  name: string;
  categories: string[];
  description: string;
  photo_url: string;
  full_price: string;
  discount_price: string;
  likes: string;
  review_rating: string;
};

export type SnippetItemConfig = {
  id: string;
  type: string;
};

export type ComponentProps = {
  blockClass: string;
  snippet: ProductItemWithType;
};

export type ProductItemWithType = ProductItem & SnippetItemConfig;

export type ContainerConfig = {
  id: string;
  blockClass: string;
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
