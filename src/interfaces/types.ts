export type MenuItem = {
  id: number;
  name: string;
  description?: string;
};

export type menuItemProps = {
  items: MenuItem[];
  blockClass: string;
  itemType: string;
};
