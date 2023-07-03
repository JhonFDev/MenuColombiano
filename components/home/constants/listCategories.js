export const categories = [
  {
    id: 1,
    name: "Platos fuertes",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 2,
    name: "Acompañamientos",
    image: require("../../../assets/pizzaIcon.png"),
  },

  {
    id: 3,
    name: "Postres y Amasijos",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 4,
    name: "Jugos y bebidas",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 5,
    name: "Salsas",
    image: require("../../../assets/pizzaIcon.png"),
  },
];

export const featured = {
  id: 1,
  title: "Platos colombianos",
  description: "Platos fuertes y tipicos de todas las regiones",
  restaurants: [
    {
      id: 1,
      name: "Ajiaco",
      image: require("../../../assets/ajiaco.png"),
      stars: 4,
      reviews: "4.4k",
      category: "platos fuertes",
      preparationtime: "20 min",
      cocciontime: "1 h 30 min",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "3 Gajos de cebolla larga. 1 ramo de cilantro. 2 pollos medianos despresados (4-5 libras). 18 tazas de agua. 2 cubos de caldo de gallina. 1 libra de papa comun. 1 libra de papa criolla. 2 libra de papa pastusa. 5 Mazorcas tiernas, medianas, partidas en 3 trozos",
            },
          ],

          preparations: [
            {
              preparation01:
                "1) En una olla grande coloque la cebolla, el cilantro y el pollo con el agua, lleve a la estufa y a fuego alto haga hervir, Reduzca el fuego y cocine hasta que el pollo empieze a ablandar, retire a menudo la espuma que se forma por encima. 2) Saque de la olla el cilantro y la cebolla, añada los cubos de clado y pimienta al gusto, adicione la papa comun, continue la coccion a fuego medio durante 30 minutos, cuando el pollo este blando, saquelo de la olla, dejelo enfriar, desmenuzelo y guarde. 3) Agregue la papa criolla y la pastusa, verifique la sazon, siga cocinando hasta que las papas esten blandas, entonces adiccione las mazorcas, cocine durante 15 minutos, añada elpollo desmenuzado y cocine de 10 a 15 minutos mas. 4) Sirva bien caliente, y aparte presente crema de leche fresca, alcaparras y aji para servir a su gusto. ",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Bandeja paisa",
      image: require("../../../assets/BANDEJA-PAISA.jpg"),
      stars: 4,
      reviews: "4.4k",
      category: "platos fuertes",
      preparationtime: "30 min",
      cocciontime: "1 h 15 min",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "INGREDIENTES PARA LOS FRIJOLES. 4 tazas de frijoles cargamanto. 2 platano verdes, pelados y trozados en pedacitos. 1 zanahoria mediana, pelada y rallada. 1 cebolla cabezona blanca grande, picada. 3 manitas de pezuña ahumada o 1/2 libra de tocino. 2 cucharadas de aceite. 2 cucharaditas de salsa de tomate. 1 1/2 taza de hogao de cebolla larga y tomate. sal, pimienta y comino al gusto. . INGREDIENTE PARA LA CARNE MOLIDA. 3 tomates medianos, maduros, pelados y picados, 2 tallos de cebolla larga, picados. 1 cucharada de cilantro picado. 2 dientes grandes de ajo picados. 6 cucharadas de aceite. 2 libras de carne de centro de cadera, bola o posta. sal, pimienta y comino al gusto",
            },
          ],

          preparations: [
            {
              preparation01:
                ". PEAPARACION DE LOS FRIJOLES. 1) Remoje los frijoles en agua que los cubra, escurra antes de cocinar. 2) En la olla a presión ponga los frijoles, el platano, la zanahoria, la cebillo, la pezuña o el tocino, el aceite y la salsade tomate, cubra con agua y cocine, cuando pite la olla reduzca el fuego 30 minutos, despues de añada el hogao y sazone a su gusto. . PREPARACION PARA LA CARNE MOLIDA. 1) Muela los tomates, la cebolla, el cilantro, el ajo, adicione 2 cucharadas de aceite y sazone. 2) Parta la carne en trocitos y sazone con la salsa anterior, ponga en un recipiente con tapa y deje reposar en la nevera por un rato. 3) En una olla coloque 4 cucharadas de aceite con el agua, haga hervir, agregue la carne con la salsa y cocine a fuego medio, el agua se evapora y la carne se frie durante 7 minutos. 4) Muela finamente la carne y calientela en la misma olla. . NOTA: La bandeja paisa consiste en servir los frijoles antioqueños y la carne molida con: arroz blanco, chicharron, chorizo, tajadas de platano maduro, huevo frito, aguacate y arepa",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Sancocho de gallina",
      image: require("../../../assets/Sancocho.jpg"),
      stars: 4,
      reviews: "4.4k",
      category: "platos fuertes",
      preparationtime: "15 min",
      cocciontime: "1 h 10 min",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "1 gallina grande despresada. 1 taza de cebolla cabezona blanca, rallada. 1 taza de tomates maduros, pelados y picados. 3 cucharadas de margarina. 1 cucharada de pasta de ajo. 110 tazas de agua. 3 mazorcas partidas en 3 trozos. 2 platanos hartones verdes, pelados y cortados en trozos, 2 platanos hartones pintones, pelados y cortados en trozos. 2 yucas peladas y cortadas en trozos. 6 papas comun peladas y partidas en mitades. 1/4 taza de cilantro conmun picado",
            },
          ],

          preparations: [
            {
              preparation01:
                "1) Dos horas antes de adelantar la preparación adobe la gallina con la mitad de la cebolla y el tomate. 2) En una olla a fuego medio derrita la margarina y sofria durante 5 minutos la cebolla y el tomate restantes junto con la pasta de ajo, adiccione el agua y haga hervir. 3) añada la gallina, la mazorca y el platano verde, tape y cocine hasta que la carne de gallina comience a ablandar (45 minutos aproximadamente), retire la mazorca. 4) Agregue el platano pinton, la yuca, las papas, sal y pimienta al gusto, tape y continúe la cocción hasta que este todo blando, devuelva la mazorca a la olla, verifique la sazón y cuando este caliente sirva, rocíe con el cilantro",
            },
          ],
        },
      ],
    },
  ],
};

export const featuredAcompañamientos = {
  id: 2,
  title: "Acompañamientos",
  description: "La guarnicion de los platos fuertes",
  restaurants: [
    {
      id: 1,
      name: "Coquitas de aguacate y maiz",
      image: require("../../../assets/coquitas-aguacate.jpg"),
      stars: 4,
      reviews: "4.4k",
      category: "Guarnicion",
      preparationtime: "20 min",
      cocciontime: "50 min",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "6 mazorcas tiernas pequeñas o 1 lata grande de granos de maiz. 6 tiras de tocineta. 1 cucharada de mantequilla. 1 1/2 cucharada de pimenton rojo y de pimenton verde, finamente picado. 3 aguacates medianos, partidos en mitades. 2 limones grandes",
            },
          ],

          preparations: [
            {
              preparation01: "1) lleve a la estufa una olla con agua y sal, cuaundo hierva, sumerja las mazorcas y tape la olla, cocine durante 15 mnutos, despues de que vuelva a hervir, escurra el agua y guardela para hacer sopa, desgrane las mazorcas. 2) En una sarten a fuego medio coloque la tocineta y la mantequilla, deje dorar la tocineta, retirela y escurra sobre papel absorbente, recuerde que si la tocineta dora mucho esta se amarga, desmenuzela y guarde. 3) Retire la grasa del sarten, deje solamente 3 cuchardaas, caliente a fuego medio y sofria el pimenton durante 3 minutos, agregue los granos de maiz y cocine durante 5 minutos, revolviendo constantemente, mezcle la tocineta. 4) Rocie el jugo de limon sobre los aguacates, especialmente sobre sus bordes para que no se oscurezcan, rellene las cavidades con el maiz, sirva y si gusta puede presentar como aderezo un guiso",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Arroz con coco frito",
      image: require("../../../assets/Arroz-con-coco-1.jpg"),
      stars: 4,
      reviews: "4.4k",
      category: "Guarnicion",
      preparationtime: "20 min",
      cocciontime: " 35 min",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "1 coco. 2 cucharadas de azucar . 1 libra de arroz. 1 cajita de uvas pasas. sal al gusto",
            },
          ],

          preparations: [
            {
              preparation01: "1) vacie el agua de coco, recogela y adicione agua tibia suficiente para completar 1 taza, ralle el coco, agregue el agua, estruje con la mano y exprima sobre un colador para extraer la primera leche del coco, guarde. 2) continue agregando mas agua tibia al coco rallafo, repita la operacion hasta obtener 3 tazas de leche que debe mantener aparte de la anterior. 3) En una olla mediana, mezcle la primera leche con el azucar y cocine a fuego medio hasta que tome color de caramelo quemado, añada la leche restante y resuelva constantemente hasta que desaparezcan los granos oscuros. 4) Agregue la sal y el arroz, mezcle, cocine a fuego alto hasta que comienze a hervir, reduzca el fuego y continue cocinando hasta que se observen agujeros pequeños en la superficie, si va a utilizar las uvas pasas, añadalas en este momento de la preparacion, tape la olla y cocine a fuego lento hasta que seque y el arroz este cocido y suelto",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "aborrajados",
      image: require("../../../assets/aborrajados-8654.jpg"),
      stars: 4,
      reviews: "4.4k",
      category: "Guarnicion",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
  ],
};

export const featurepostresyamasijos = {
  id: 3,
  title: "Postres y Amasijos",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Postres de Nata",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Cascos de guayaba",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          image: require("../../../assets/pizzaDish.png"),
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Dulce de uchuvas",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
  ],
};

export const featureBebidas = {
  id: 4,
  title: "Jugos y bebidas",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Jugo de Tamarindo",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Sorbete de curuba",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Jugo de Piña y Zanahoria",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
  ],
};
export const featureSalsas = {
  id: 5,
  title: "Salsas Calientes y Frias",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Salsa Chimichurri",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Salsa de vino blanco",
      image: require("../../../assets/pizzaDish.png"),
      description: "Hot and spicy pizzas",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Salsa Tartara",
      image: require("../../../assets/pizzaDish.png"),
      description: "Hot and spicy pizzas",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      preparationtime: "",
      cocciontime: "",
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01: "",
            },
          ],

          preparations: [
            {
              preparation01: "",
            },
          ],
        },
      ],
    },
  ],
};
