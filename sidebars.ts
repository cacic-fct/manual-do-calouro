import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  bookSidebar: [
    { type: "doc", label: "Introdução", id: "introducao" },
    { type: "category", label: "A FCT", items: ["fct/sobre", "fct/cursos", "fct/entidades"] },
    { type: "doc", label: "Movimento estudantil", id: "fct/movimento-estudantil" },
    { type: "category", label: "Auxílios e bolsas", items: ["fct/auxilios-permanencia", "fct/auxilios-sustentando"] },
    {
      type: "category",
      label: "Presidente Prudente",
      items: [
        "presidente-prudente/sobre-cidade",
        "presidente-prudente/transporte-na-cidade",
        "presidente-prudente/transporte-intermunicipal",
        "presidente-prudente/operadoras",
        "presidente-prudente/mapa",
      ],
    },
  ],
};

export default sidebars;
