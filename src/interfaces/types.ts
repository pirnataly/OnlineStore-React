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
  price: number;
  discount_price: number;
  likes: number;
  review_rating: number;
};

export type MainPageConfig = {
  id: string;
  type: string;
};

export type ProductItemWithType = ProductItem & MainPageConfig;
