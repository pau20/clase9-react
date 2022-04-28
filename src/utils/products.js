const products = [
    {
      id: 30,
      name: "Zapatillas deportivas Adidas/Negras",
      stock: 100,
      cost: 16000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      image: [
        "http://falabella.scene7.com/is/image/FalabellaAR/6047115?wid=423&hei=423&qlt=70&crop=0,0,0,0"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Hombre",
        id: 9
      },
      brand: {
        id: 95,
        name: "Adidas"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Zapatillas deportivas Adidas/Grises",
      stock: 100,
      cost: 14000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      image: [
        "http://falabella.scene7.com/is/image/FalabellaAR/4900251?wid=423&hei=423&qlt=70&crop=0,0,0,0"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Hombre",
        id: 9
      },
      brand: {
        id: 95,
        name: "Adidas"
      },
      reviews: [
        {
          "comment": "Muy cómodas y versátiles",
          "rating": "4"
        }
      ]
    },
    {
      id: 76,
      name: "Zapatillas deportivas Fila/Negras",
      stock: 92,
      cost: 21000,
      description: "Se muestra con tonos amarillo verdoso de intensidad media. En la nariz encontramos frutas blancas maduras, peras, manzanas y banana, frutas tropicales, con notas de la maduración en barricas sobre las borras como vainilla, manteca y miel. Buen volumen, complejo, maduro, con una entrada untuosa en la boca, buen desarrollo y largo final. Se repiten las notas frutales del aroma.",
      image: [
        "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6a2c8ce3/products/FI_F01ST004023-1645/FI_F01ST004023-1645-1.JPG"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Hombre",
        id: 1
      },
      brand: {
        id: 10,
        name: "Fila"
      },
      reviews: []
    },
    {
      id: 170,
      name: "Zapatillas Urbanas Nike/Multicolor",
      stock: 100,
      cost: 9500,
      description: "Rojo violáceo, profundo y vivaz con visos azulados. Nariz de frutos rojos y negros como cerezas, cassis, ciruelas y moras, integrados con los aromas de maduración en barrica como vainilla, tabaco y chocolate. Entrada en boca sedosa, buena estructura, con una marcada presencia de frutas rojas, taninos amables y dulces, concluyendo en un largo final de boca.",
      image: [
        "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5291702b/products/NI_DC2533-600/NI_DC2533-600-1.JPG"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Mujer",
        id: 1
      },
      brand: {
        id: 10,
        name: "Nike"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Zapatillas deportivas Nike/Blancas",
      stock: 100,
      cost: 20300,
      description: "La linea Alambrado esta compuesta por vinos elegantes y de estilo moderno, donde se destacan claramente las características frutales de las variedades que los componen. Su paso por madera les otorgan una complejidad muy particular, acompañando de manera armónica y sutil la calidad obtenida desde el viñedo. Poseen un potencial de guarda de entre 4 y 6 años.\nAlambrado Malbec fue elaborado a partir de una cuidosa selección de uvas cosechadas de forma manual y criado en barricas de roble francés durante 10 meses.",
      image: [
        "https://essential.vteximg.com.br/arquivos/ids/507938-454-423/316-0222_1.jpg?v=637756035595700000"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Mujer",
        id: 1
      },
      brand: {
        id: 10,
        name: "Nike"
      },
      reviews: []
    },
    
    {
      id: 31,
      name: "Zapatillas Lotto/Gris",
      stock: 100,
      cost: 5780,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      image: [
        "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw77a6ccbe/products/LO_N2118845GL/LO_N2118845GL-1.JPG"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 17,
      packingId: null,
      category: {
        name: "Niños",
        id: 5
      },
      brand: {
        id: 17,
        name: "Lotto"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }