import { navbar } from "vuepress-theme-hope";

export const ptNavbar = navbar([
  "/pt/",
  "/pt/guide/",
  "/pt/start/",
  {
    text: "Guía",
    icon: "lightbulb",
    prefix: "/pt/",
    children: [
      {
        text: "Introducción",
        icon: "lightbulb",
        prefix: "start/",
        children: ["join", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Guías",
        icon: "lightbulb",
        prefix: "guide/",
        children: ["getkey", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
