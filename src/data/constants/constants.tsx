import { ComponentProps, Indexed, MenuItem } from "../../interfaces/types";
import React from "react";
import Double from "../../products/container/__Snippets/__Snippet/__Photos/templates/double/Double";
import Single from "../../products/container/__Snippets/__Snippet/__Photos/templates/single/Single";
import Quadro from "../../products/container/__Snippets/__Snippet/__Photos/templates/quadro/Quadro";
import Quarter from "../../products/container/__Snippets/__Snippet/__Photos/templates/quarter/Quarter";
import Card from "../../products/container/__Snippets/__Snippet/__Photos/templates/card/Card";

export const menuItemsTop: MenuItem[] = [
  {
    id: 0,
    name: "home",
  },

  {
    id: 1,
    name: "cart",
  },
  {
    id: 2,
    name: "order",
  },
  {
    id: 3,
    name: "likes",
  },
  {
    id: 4,
    name: "profile",
  },
];

export const menuItemsBottom: MenuItem[] = [
  {
    id: 1,
    name: "profile",
  },
  {
    id: 2,
    name: "order",
  },
  {
    id: 3,
    name: "likes",
  },
  {
    id: 4,
    name: "cart",
  },
];

export const components: { [k: string]: React.FC<ComponentProps> } = {
  double: (props) => <Double {...props} />,
  single: (props) => <Single {...props} />,
  quadro: (props) => <Quadro {...props} />,
  quarter: (props) => <Quarter {...props} />,
  card: (props) => <Card {...props} />,
};

export const backgroundColors = {
  red: "#f94233",
  gray: "#bccdd1",
  yellow: "#ffaa00",
  blue: "#2e09e5",
};

export const promoObject: { [k: string]: Indexed } = {
  autumn_sale: {
    discount: " -50%",
    background: `url("/tags/autumn_huge.png") 0px 0px/100% 100% no-repeat`,
    background_mobile: `url("/tags/autumn_normal.png") 0px 0px/100% 100% no-repeat`,
  },
  hot_discounts: {
    discount: " -60%",
    background: `url("/tags/hot_discounts_huge.png") 0px 0px/100% 100% no-repeat`,
    background_mobile: `url("/tags/hot_discounts_normal.png")0px 0px/100% 100% no-repeat`,
  },
  black_friday: {
    discount: " -70%",
    background: `url("/tags/black_friday_huge.png") 0px 0px/100% 100% no-repeat`,
    background_mobile: `url("/tags/black_friday_normal.png") 0px 0px/100% 100% no-repeat`,
  },
  free_goods: {
    discount: " -100%",
    background: `url("/tags/free_items_huge.png") 0px 0px/100% 100% no-repeat`,
    background_mobile: `url("/tags/free_items _normal.png") 0px 0px/100% 100% no-repeat`,
  },
};

export const popularStuff = [
  { item: "Ковёр", key: String(new Date("01.01.1970").getTime()) },
  { item: "Самолёт", key: String(new Date("02.01.1970").getTime()) },
  { item: "Шампунь", key: String(new Date("03.01.1970").getTime()) },
  { item: "Ожерелье", key: String(new Date("04.01.1970").getTime()) },
  { item: "Санки", key: String(new Date("05.01.1970").getTime()) },
];

export const filters: string[] = [
  "Категория",
  "Цена",
  "Бренд",
  "Стиль",
  "Цвет",
];

export const sorting: string[] = [
  "Популярные",
  "С высоким рейтингом",
  "Подешевле",
  "Подороже",
];
