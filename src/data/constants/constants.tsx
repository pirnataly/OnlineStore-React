import { ComponentProps, Indexed, MenuItem } from "../../interfaces/types";
import React from "react";
import Double from "../../products/container/__Snippets/__Snippet/__Photos/templates/double/Double";
import Single from "../../products/container/__Snippets/__Snippet/__Photos/templates/single/Single";
import Quadro from "../../products/container/__Snippets/__Snippet/__Photos/templates/quadro/Quadro";
import Quarter from "../../products/container/__Snippets/__Snippet/__Photos/templates/quarter/Quarter";
import Card from "../../products/container/__Snippets/__Snippet/__Photos/templates/card/Card";

export const menuItemsTop: MenuItem[] = [
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

export const object: { [k: string]: Indexed } = {
  autumn_sale: {
    discount: " -50%",
    background: `url("/tags/autumn_huge.png") no-repeat`,
    background_mobile: `url("/tags/autumn_normal.png") no-repeat`,
  },
  hot_discounts: {
    discount: " -60%",
    background: `url("/tags/hot_discounts_huge.png) no-repeat`,
    background_mobile: `url("/tags/hot_discounts_normal.png) no-repeat`,
  },
  black_friday: {
    discount: " -70%",
    background: `url("/tags/black_friday_huge.png) no-repeat`,
    background_mobile: `url("/tags/black_friday_normal.png) no-repeat`,
  },
  free_goods: {
    discount: " -100%",
    background: `url("/tags/free_items_huge.png") no-repeat`,
    background_mobile: `url("/tags/free_items_normal.png") no-repeat`,
  },
};

export const popularStuff = [
  { item: "Ветровка", key: String(new Date("01.01.1970").getTime()) },
  { item: "Шапка", key: String(new Date("02.01.1970").getTime()) },
  { item: "Валенки", key: String(new Date("03.01.1970").getTime()) },
  { item: "Лыжи", key: String(new Date("04.01.1970").getTime()) },
  { item: "Санки", key: String(new Date("05.01.1970").getTime()) },
];
