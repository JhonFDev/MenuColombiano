export const categories = [
  {
    id: 1,
    name: "Acompañamientos",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 2,
    name: "Platos fuertes",
    image: require("../../../assets/pizzaIcon.png"),
  },

  {
    id: 3,
    name: "Caldos y sopas",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 4,
    name: " Amasijos",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 5,
    name: "Postres",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 6,
    name: "Entradas",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 7,
    name: "Jugos y Bebidas",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 8,
    name: "Salsas Frias",
    image: require("../../../assets/pizzaIcon.png"),
  },
  {
    id: 9,
    name: "Salsas Calientes",
    image: require("../../../assets/pizzaIcon.png"),
  },
];

export const featuredPlatosFuertes = {
  id: 1,
  title: "Platos Fuertes",
  description: "Platos fuertes y tipicos de todas las regiones",
  recipes: [
    {
      id: 1,
      name: "Ajiaco",
      image: require("../../../assets/ajiaco.png"),
      stars: 4,
      reviews: "4.4k",
      category: "platos fuertes",
      time: [
        {
          foodtime: "Preparación: 20 min. Cocción: 1 h 30 min",
        },
      ],

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
      time: [
        {
          foodtime: "Preparación: 30 min. Cocción: 1 h 15 min",
        },
      ],
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
      time: [
        {
          foodtime: "Preparación: 15 min. Cocción: 1 h 10 min",
        },
      ],

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
  recipes: [
    {
      id: 1,
      name: "Coquitas de aguacate",
      image: require("../../../assets/coquitas-aguacate.jpg"),
      stars: 4,
      reviews: "4.4k",
      category: "Guarnicion",
      time: [
        {
          foodtime: "Preparación: 20 min. Cocción: 50 min",
        },
      ],

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
              preparation01:
                "1) lleve a la estufa una olla con agua y sal, cuaundo hierva, sumerja las mazorcas y tape la olla, cocine durante 15 mnutos, despues de que vuelva a hervir, escurra el agua y guardela para hacer sopa, desgrane las mazorcas. 2) En una sarten a fuego medio coloque la tocineta y la mantequilla, deje dorar la tocineta, retirela y escurra sobre papel absorbente, recuerde que si la tocineta dora mucho esta se amarga, desmenuzela y guarde. 3) Retire la grasa del sarten, deje solamente 3 cuchardaas, caliente a fuego medio y sofria el pimenton durante 3 minutos, agregue los granos de maiz y cocine durante 5 minutos, revolviendo constantemente, mezcle la tocineta. 4) Rocie el jugo de limon sobre los aguacates, especialmente sobre sus bordes para que no se oscurezcan, rellene las cavidades con el maiz, sirva y si gusta puede presentar como aderezo un guiso",
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
      time: [
        {
          foodtime: "Preparación: 20 min. Cocción: 35 min",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "1 coco. 2 cucharadas de azucar . 1 libra de arroz. 1 cajita de uvas pasas. sal al gusto",
            },
          ],

          preparations: [
            {
              preparation01:
                "1) vacie el agua de coco, recogela y adicione agua tibia suficiente para completar 1 taza, ralle el coco, agregue el agua, estruje con la mano y exprima sobre un colador para extraer la primera leche del coco, guarde. 2) continue agregando mas agua tibia al coco rallafo, repita la operacion hasta obtener 3 tazas de leche que debe mantener aparte de la anterior. 3) En una olla mediana, mezcle la primera leche con el azucar y cocine a fuego medio hasta que tome color de caramelo quemado, añada la leche restante y resuelva constantemente hasta que desaparezcan los granos oscuros. 4) Agregue la sal y el arroz, mezcle, cocine a fuego alto hasta que comienze a hervir, reduzca el fuego y continue cocinando hasta que se observen agujeros pequeños en la superficie, si va a utilizar las uvas pasas, añadalas en este momento de la preparacion, tape la olla y cocine a fuego lento hasta que seque y el arroz este cocido y suelto",
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
      time: [
        {
          foodtime: "Preparación: 20 min. Cocción: 10 min",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "2 platanos hartones maduros. 2 huevos. 2 cucharadas de leche. 4 cucharadas de harina de trigo. 1 cucharadita de azucar. queso campesino prtido en cubos. aceite para freir",
            },
          ],

          preparations: [
            {
              preparation01:
                "1) Pele y parta los platanos en trozos que no sean muy grandes, frialos en el aceite caliente hasta que esten ligeramente dorados, Retire, escurra en papel toalla y aplanelos con la piedra hasta que queden delgados pero no demasiado. 2) Forme una especia de sandwich con 2 patacones y el queso en el centro, presione los bordes. 3) Aparte, bata los huevos como para tortilla, adicione la leche y mezcle, gradualmente añada la harina y el azucar, mezcle hasta que la preparacion tenga una consistencia cremosa. 4) Pase los sandwiches de platano por la preparacion anterior cubriendo todos los lados y frialos en aceite caliente hasta que esten dorados, escurralos en papel toalla, sirvalos bien caliente",
            },
          ],
        },
      ],
    },
  ],
};

// export const featuredCaldosYSopas ={
  
// }

export const featurepostresyamasijos = {
  id: 3,
  title: "Postres y Amasijos",
  description: "Una delicia despues de cada comida",
  recipes: [
    {
      id: 1,
      name: "Postres de Nata",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "Postres",
      time: [
        {
          foodtime:
            "Preparación: 40 min. Cocción: 1 h 30 min. Refrigeración: 2 h",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "4 tazas de nata, que se obtienen de 3 cartones de leche de 1.500 cm cada uno. 1 1/2 libras de azucar. 3 tazas de agua. 8 yemas de huevo, batido hasta que esten bien esponjadas. 1 trago de ron. ciruelas pasas o uvas pasas",
            },
          ],

          preparations: [
            {
              preparation01:
                "1) las natas obtengalas a partir de 3 cartones de leche, ponga la leche al fuego en una vasija amplia y no muy profunda, deje soltar el hervor, retire y deje reposar, saque la nata con un tenedor enrollando para que salga entera. 2) Nuevamente lleve la vasija con la leche a fuego lento y deje cocinar de manera que vaya criando nata, retire la nata y repita la operacion hasta que la leche este de color amarillo cremoso y sabor salado. 3) Aparte, haga el almibar con 1 1/2 libras de azucar y tres tazas de agua, hasta que de punto de hilo flojo, cuidadosamante se le agregan las natas, una a una y dentro el almibar se van separando con un tenedor. 4) En la licuadora bata las yemas hasta que esten bien esponjosas, y de color limon claro, y poco a poco agreguelas a la preparacion anterior, cocine a fuego medio lento hasta el momento antes de hervir, retire del fuego, deje reposar. 5) Agregue el tarro de ron, y opcionalmente si desea ciruelas pasas partidas o uvas pasas, refrigere. NOTA. El secreto de este postre consiste en sacar todas las natas el mismo dia",
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
      category: "Postres",
      time: [
        {
          foodtime: "Preparación: 20 min. Cocción: 40 min",
        },
      ],
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          image: require("../../../assets/pizzaDish.png"),
          ingredients: [
            {
              ingredient01:
                "15 guayabas comunes, maduras y sanas, medianas. 2 limones grandes. 2 1/2 tazas de azucar. 3 tazas de agua",
            },
          ],

          preparations: [
            {
              preparation01:
                "1) con un cuchillo pequeño bien afilado pele las guayabas, partalas en mitades y con una cucharita pequeña, teniendo cuidado de no perforarlas, retire las semillas. 2) Deposite las guayabas en un recipiente que no sea de aluminio, cubralas con agua y agregue el jugo de limon, deje reposar durante 2 horas, entretanto licue las semillas con muy poca agua y pase el producido por un cedazo. 3) combine el cernido con el agua que va a emplear en la preparacion y junto con el azucar lleve al fuego, a temperatura media cocine revolviendo ocasionalmente, hasta tener un almibar liviano, añada los cascos de guayabas y cocine hasta que esten blando y el almibar denso",
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
      category: "Postres",
      time: [
        {
          foodtime: "Preparación: 10 min. Cocción: 25 min. Refrigeración: 2 h",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "1 libra de uchuvas. pesadas sin capacho. 1/2 taza de azucar. 1 taza de agua",
            },
          ],

          preparations: [
            {
              preparation01:
                "1) lave y seque las uchuvas, en una olla haga hervir a fuego medio el azucar combinada con el agua. 2) Apenas hierva el liquido y el azucar este bien disuelta, coloque en la olla las uchuvas; reduzca el fuego y lentamente cocine durante 15 minutos, retire del fuego, vierta en un recipiente de vidrio, deje enfriar y refrigere",
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
  recipes: [
    {
      id: 1,
      name: "Jugo de Tamarindo",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "bebidas",
      time: [
        {
          foodtime: "Preparación: 10 min",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "1/2 taza de pulpa de tamarindo. 5 tazas de agua. azucar al gusto. hielo",
            },
          ],

          preparations: [
            {
              preparation01:
                "En la licuadora coloque la pulpa de tamarindo y el agua, bata a velocidad media durante 5 minutos, adicione el azucar y a alta velocidad bata durante 5 minutos mas, sirva en vasos con hielo al gusto",
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
      category: "bebidas",
      time: [
        {
          foodtime: "Preparación: 10 min",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "12 curubas maduras. 3/4 tazas de azucas. 1 1/2 tazas de agua. 4 tazas de leche. 2 cucharadas de crema de leche (bien fresca)",
            },
          ],

          preparations: [
            {
              preparation01:
                "Coloque en la licuadora la pulpa de las curubas con el azúcar, a velocidad baja y de manera intermitente bata para que la pulpa se desprenda de las semillas, gradualmente añada el agua, bata suavemente, cuale el jugo y devuélvalo a la licuadora, poco a poco y batiendo todo el tiempo, adicione la leche y la crema de leche, licúe todo hasta que el sorbete tenga color uniforme, pruebe y agregue mas azúcar si es necesario, mantenga refrigerado hasta el momento de servir",
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
      category: "bebidas",
      time: [
        {
          foodtime: "Preparación: 10 min",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "3 tazas de jugo de piña, fresco. 1 taza de zanahoria, rallada, por los huecos mas grandes del rallador. miel de abeja o azúcar al gusto. 12 cubos de hielo",
            },
          ],

          preparations: [
            {
              preparation01:
                "Coloque el juego de piña y la zanahoria en la licuadora, bata  alta velocidad durante 5 minutos, verifique el sabor dulce y, si es necesario, agregue miel de abejao azucar y los cubos de hielo, bata durante 5 minutos mas, sirva inmediatamente",
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
  recipes: [
    {
      id: 1,
      name: "Salsa Chimichurri",
      image: require("../../../assets/pizzaDish.png"),
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      time: [
        {
          foodtime: "Preparación: 10 min. Medida para: 3/4 taza",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "1/2 de vino blanco seco, 2 cucharadas de vinagre, 4 dientes de ajos picados. 2 cucharadas de cilantro picado, 2 cucharadas de perejil picado, 2 cucharadas de cebolla cabezona blanca, picada. 2 cucharadas de aceite. aji y sal al gusto",
            },
          ],

          preparations: [
            {
              preparation01:
                "En un recipiente hondo combine el vino con el vinagre. Agregue todos los demas ingredientes, menos el aceite, con un batior de alambre revuelva bien, por ultimo adicione el aceite en un chorrito continuo y delgado, mientras bate todo el tiempo, verifique la zason y sirva fresco. NOTA. Ideal para acompañar carnes preparadas al carbon o a la plancha",
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
      time: [
        {
          foodtime: "Preparación: 10 min. Medida para: 1 taza",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "1 cucharada de mantequilla, 1 cucharada de cebolla cabezona blanca, picada. 1 1/2 cucharadas de harina de trigo. 1/2 taza de caldo de gallina. 1/2 taza de vino blanco. 1 cucharada de perejil fresco y picado. sal al gusto",
            },
          ],

          preparations: [
            {
              preparation01:
                "En una sarten pequeña derrita y caliente la mantequilla, agregue la cebolla, y sofria hasta que este transparente, rocie la cebolla con la harina y revolviendo cocine durante 3 minutos hasta que la mezcla se vea suave, gradualmente añada primero el caldo y luego el vino, mienras cocina revolviendo hata que la salsa este bien caliente yaterciopelada, finalmente, adicione el perejil y verifique la sazon. NOTA. Para carnes blancas o pescado",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Salsa Tartara",
      image: require("../../../assets/pizzaDish.png"),
      description: "Hot and spicy pizzas",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",

      time: [
        {
          foodtime: "Preparación: 15 min. medida para : 1  1/4 tazas",
        },
      ],
      dishes: [
        {
          id: 1,
          ingredients: [
            {
              ingredient01:
                "1 cucharada de alcaparras escurridas. 1 cucharada de pepinillos encurtidos. 1 cucharada de perejil picado. 1 taza de mayonesa. 1 cucharadita de jugo de limon. Sal y pimienta al gusto",
            },
          ],

          preparations: [
            {
              preparation01:
                "Parta finamente las alcaparras y los pepinillos encurtidos, en un recipiente hondo de vidrio o plastico, combine las alcaparras, el pepinillo, el perejil y la mayonesa, revuelva bien, adicione el jugo de limon y sazone con sal, pimiento o mas jugo de limon, si gustas puedes agregar en este momento un huevo duro picado. NOTA. Esta salsa dura muy bien en la nevera, hasta una semana, si se guarda en un recipiente que no sea metalico, hermeticamente cerrado, estupenda para acompañar papas fritas o asadas",
            },
          ],
        },
      ],
    },
  ],
};
