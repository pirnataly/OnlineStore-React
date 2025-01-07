import { ComponentProps, MenuItem } from "../../interfaces/types";
import React from "react";
import Double from "../../products/container/__Snippets/__Snippet/__Photos/templates/double/Double";
import Single from "../../products/container/__Snippets/__Snippet/__Photos/templates/single/Single";
import Quadro from "../../products/container/__Snippets/__Snippet/__Photos/templates/quadro/Quadro";
import Quarter from "../../products/container/__Snippets/__Snippet/__Photos/templates/quarter/Quarter";

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
};
