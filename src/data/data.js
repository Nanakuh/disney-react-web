const mockData = [
  {
    id: "evt-001",
    eventName: "Rock en Vivo",
    date: "2024-06-15T20:30:00Z",
    location: {
      name: "La Riviera",
      address: "Paseo Bajo de la Virgen del Puerto, s/n",
      city: "Madrid",
      country: "España",
    },
    priceCents: 3500,
    availability: 200,
    description: "Concierto de rock con bandas locales e internacionales.",
    category: "Concierto",
    organizer: {
      name: "Rock Nights",
      contact: "info@rocknights.es",
    },
    imageUrl:
      "https://storage.googleapis.com/gutenfy-web-dev/event-test/Rock_en%20_Vivo.png",
  },
  {
    id: "evt-002",
    eventName: "Festival de Jazz",
    date: "2024-07-22T18:30:00Z",
    location: {
      name: "Palau de la Música Catalana",
      address: "C/ Palau de la Música, 4-6",
      city: "Barcelona",
      country: "España",
    },
    priceCents: 2500,
    availability: 100,
    description:
      "Disfruta de los mejores artistas del jazz en un entorno único.",
    category: "Festival",
    organizer: {
      name: "Jazz Spirit",
      contact: "contacto@jazzspirit.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Festival_de_Jazz.png ",
  },
  {
    id: "evt-003",
    eventName: "Obra de Teatro: El Siglo de Oro",
    date: "2024-08-05T19:15:00Z",
    location: {
      name: "Teatro Español",
      address: "Calle Príncipe, 25",
      city: "Madrid",
      country: "España",
    },
    priceCents: 1800,
    availability: 80,
    description:
      "Una representación magistral de las obras más emblemáticas del Siglo de Oro español.",
    category: "Teatro",
    organizer: {
      name: "Artes Escénicas Madrid",
      contact: "info@artesescenicasmd.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/siglo_de_oro.png",
  },
  {
    id: "evt-004",
    eventName: "Exposición de Arte Moderno",
    date: "2024-09-10T10:45:00Z",
    location: {
      name: "Museo Reina Sofía",
      address: "Calle de Santa Isabel, 52",
      city: "Madrid",
      country: "España",
    },
    priceCents: 1200,
    availability: 300,
    description:
      "Explora las últimas tendencias del arte moderno y contemporáneo.",
    category: "Exposición",
    organizer: {
      name: "Cultura Contemporánea",
      contact: "expo@reinasofia.es",
    },
    imageUrl:
      "https://storage.googleapis.com/gutenfy-web-dev/event-test/Exposicion_de_Arte_Moderno.png",
  },
  {
    id: "evt-005",
    eventName: "Noche de Flamenco",
    date: "2024-10-25T20:15:00Z",
    location: {
      name: "Tablao El Carmen",
      address: "Calle de los Jardines, 11",
      city: "Sevilla",
      country: "España",
    },
    priceCents: 2200,
    availability: 50,
    description:
      "Vive una noche apasionante al ritmo del mejor flamenco en vivo.",
    category: "Música y Danza",
    organizer: {
      name: "Flamenco Vivo",
      contact: "reservas@flamencovivo.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Flamenco.png",
  },
  {
    id: "evt-006",
    eventName: "Cata de Vinos",
    date: "2024-11-12T17:15:00Z",
    location: {
      name: "Bodega Marqués de Riscal",
      address: "Calle Torrea, 1",
      city: "Elciego",
      country: "España",
    },
    priceCents: 750,
    availability: 30,
    description:
      "Descubre los secretos de los mejores vinos de La Rioja en una cata exclusiva.",
    category: "Gastronomía",
    organizer: {
      name: "Ruta del Vino",
      contact: "info@rutadelvino.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Cata.png",
  },
  {
    id: "evt-007",
    eventName: "Maratón Internacional de Barcelona",
    date: "2024-03-17T07:30:00Z",
    location: {
      name: "Avenida Reina María Cristina",
      address: "Avenida Reina María Cristina",
      city: "Barcelona",
      country: "España",
    },
    priceCents: 60000,
    availability: 10000,
    description:
      "Participa en uno de los maratones más emblemáticos de Europa.",
    category: "Deporte",
    organizer: {
      name: "Barcelona Deportes",
      contact: "maraton@bcndeportes.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/maraton.png",
  },
  {
    id: "evt-008",
    eventName: "Taller de Fotografía",
    date: "2024-04-20T09:10:00Z",
    location: {
      name: "Centro Cultural Conde Duque",
      address: "Calle Conde Duque, 11",
      city: "Madrid",
      country: "España",
    },
    priceCents: 5000,
    availability: 20,
    description:
      "Aprende las técnicas de fotografía con profesionales del sector.",
    category: "Taller",
    organizer: {
      name: "FotoEspaña",
      contact: "talleres@fotoespana.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/fotograf%C3%ADa.png",
  },
  {
    id: "evt-009",
    eventName: "Feria del Libro",
    date: "2024-05-30T10:11:00Z",
    location: {
      name: "Parque del Retiro",
      address: "Plaza de la Independencia, 7",
      city: "Madrid",
      country: "España",
    },
    priceCents: 0,
    availability: 1000,
    description:
      "Encuentra las últimas novedades editoriales y conoce a tus autores favoritos.",
    category: "Cultura",
    organizer: {
      name: "Asociación Feria del Libro",
      contact: "info@ferialibromadrid.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/feria-del-libro.png",
  },
  {
    id: "evt-010",
    eventName: "Conferencia Internacional de Tecnología",
    date: "2024-02-25T09:30:00Z",
    location: {
      name: "Palacio de Congresos de Valencia",
      address: "Avenida de las Cortes Valencianas, 60",
      city: "Valencia",
      country: "España",
    },
    priceCents: 5000,
    availability: 500,
    description:
      "Descubre las últimas tendencias y tecnologías en el mundo digital.",
    category: "Tecnología",
    organizer: {
      name: "Tech World Spain",
      contact: "contacto@techworld.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/conferencia-internacional-tecnologia.png",
  },
  {
    id: "evt-011",
    eventName: "Feria Gastronómica Internacional",
    date: "2024-08-25T12:00:00Z",
    location: {
      name: "Centro de Convenciones Culinarium",
      address: "Avenida del Sabor, 789",
      city: "Ciudad Delicias",
      country: "País Gourmet",
    },
    priceCents: 3000,
    availability: 500,
    description: "¡Ven y saborea lo mejor de la gastronomía internacional en nuestra feria! Descubre platos exquisitos, chefs famosos y mucho más.",
    category: "Gastronomía",
    organizer: {
      name: "Sabores del Mundo",
      contact: "info@sabores.com",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/festival-culinario.png",
  },
  {
    id: "evt-012",
    eventName: "Torneo de Ajedrez",
    date: "2024-09-15T10:00:00Z",
    location: {
      name: "Club de Ajedrez Estrategia Maestra",
      address: "Calle del Tablero, 321",
      city: "Ciudad Ajedrez",
      country: "País Estratégico",
    },
    priceCents: 1500,
    availability: 50,
    description: "¡Demuestra tu habilidad en el tablero en nuestro torneo de ajedrez! Competirás contra los mejores jugadores y podrás ganar grandes premios.",
    category: "Deportes",
    organizer: {
      name: "Estrategias Ganadoras",
      contact: "info@estrategias.com",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/torneo-ajedrez.png",
  },
  {
    id: "evt-013",
    eventName: "Conferencia de Marketing Digital",
    date: "2024-10-15T09:30:00Z",
    location: {
      name: "Hotel NH Collection Madrid Eurobuilding",
      address: "Calle de Padre Damián, 23",
      city: "Madrid",
      country: "España",
    },
    priceCents: 1500,
    availability: 100,
    description: "Aprende estrategias y tendencias actuales de marketing digital.",
    category: "Conferencia",
    organizer: {
      name: "Digital Marketing Institute",
      contact: "info@dmi.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Conferencia_de_Marketing_Digital.png",
  },
  {
    id: "evt-014",
    eventName: "Feria de Artesanía",
    date: "2024-12-10T12:00:00Z",
    location: {
      name: "Plaza Mayor",
      address: "Plaza Mayor, 1",
      city: "Madrid",
      country: "España",
    },
    priceCents: 0,
    availability: 500,
    description: "Descubre hermosas artesanías locales en la histórica Plaza Mayor.",
    category: "Artesanía",
    organizer: {
      name: "Asociación de Artesanos de Madrid",
      contact: "info@artesanosmadrid.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Feria_de_Artesania.png",
  },
  {
    id: "evt-015",
    eventName: "Fiesta de la Vendimia",
    date: "2024-09-28T18:00:00Z",
    location: {
      name: "Viñedos del Valle",
      address: "Carretera de la Sierra, km 10",
      city: "Toledo",
      country: "España",
    },
    priceCents: 2500,
    availability: 100,
    description: "Celebra la cosecha de uvas con degustaciones de vinos y música en vivo.",
    category: "Fiesta",
    organizer: {
      name: "Bodega El Valle",
      contact: "info@bodegaelvalle.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Fiesta_de_la_Vendimia.png",
  },
  {
    id: "evt-016",
  eventName: "Carrera Solidaria",
  date: "2024-10-05T09:00:00Z",
  location: {
    name: "Parque de El Retiro",
    address: "Plaza de la Independencia, 7",
    city: "Madrid",
    country: "España",
  },
  priceCents: 1500,
  availability: 300,
  description: "Participa en una carrera para apoyar a organizaciones benéficas locales.",
  category: "Carrera",
  organizer: {
    name: "Fundación Solidaria",
    contact: "info@fundacionsolidaria.es",
  },
  imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Carrera_Solidaria.png",
},
{
  id: "evt-017",
  eventName: "Festival de Cine Internacional",
  date: "2024-10-20T17:00:00Z",
  location: {
    name: "Cine Capitol",
    address: "Gran Vía, 41",
    city: "Madrid",
    country: "España",
  },
  priceCents: 5000,
  availability: 150,
  description: "Disfruta de una selección de películas internacionales en este festival de cine.",
  category: "Cine",
  organizer: {
    name: "Cineclub Madrid",
    contact: "info@cineclubmadrid.es",
  },
  imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Festival_de_Cine_Internacional.png",
},
{
  id: "evt-018",
  eventName: "Festival de Teatro",
  date: "2024-08-25T19:00:00Z",
  location: {
    name: "Teatro Real",
    address: "Plaza de Isabel II, s/n",
    city: "Madrid",
    country: "España",
  },
  priceCents: 4500,
  availability: 100,
  description: "Disfruta de una selección de obras teatrales en el prestigioso Teatro Real.",
  category: "Teatro",
  organizer: {
    name: "Asociación de Teatro de Madrid",
    contact: "info@teatromadrid.es",
  },
  imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Festival_de_Teatro.png",
},
{
  id: "evt-019",
  eventName: "Feria de Moda y Diseño",
  date: "2024-09-08T11:00:00Z",
  location: {
    name: "Matadero Madrid",
    address: "Paseo de la Chopera, 14",
    city: "Madrid",
    country: "España",
  },
  priceCents: 2000,
  availability: 300,
  description: "Descubre las últimas tendencias de moda y diseño en esta feria.",
  category: "Moda",
  organizer: {
    name: "Fashion Week Madrid",
    contact: "info@fashionweekmadrid.es",
  },
  imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Feria_de_Moda_y_Diseno.png",
},
{
  id: "evt-020",
  eventName: "Concierto de Música Clásica",
  date: "2024-07-30T20:00:00Z",
  location: {
    name: "Auditorio Nacional de Música",
    address: "Calle del Príncipe de Vergara, 146",
    city: "Madrid",
    country: "España",
  },
  priceCents: 3000,
  availability: 150,
  description: "Disfruta de una noche de música clásica interpretada por reconocidos músicos.",
  category: "Concierto",
  organizer: {
    name: "Orquesta Sinfónica de Madrid",
    contact: "info@orquestamadrid.es",
  },
  imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Concierto_de_Musica_Clasica.png",
},
{
id: "evt-021",
  eventName: "Exposición de Esculturas Modernas",
  date: "2024-09-20T10:00:00Z",
  location: {
    name: "Museo Nacional Centro de Arte Reina Sofía",
    address: "Calle de Santa Isabel, 52",
    city: "Madrid",
    country: "España",
  },
  priceCents: 1500,
  availability: 200,
  description: "Admira una colección de esculturas modernas de artistas contemporáneos.",
  category: "Arte",
  organizer: {
    name: "Museo Reina Sofía",
    contact: "info@museoreinasofia.es",
  },
  imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Exposicion_de_Esculturas_Modernas.png",
},
{
  id: "evt-022",
    eventName: "Paseo por el Madrid de los Austrias",
    date: "2024-05-20T10:30:00Z",
    location: {
      name: "El edificio de Capitanía General",
      address: "Calle Mayor, 78",
      city: "Madrid",
      country: "España",
    },
    priceCents: 1500,
    availability: 2500,
    description: "Visita los edificios más emblemáticos del Madrid de los Austrias.",
    category: "Arquitectura",
    organizer: {
      name: "Asociación Cultural Qué bonito es mi Madrid",
      contact: "info@quebonitomimadrid.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Exposicion_de_Esculturas_Modernas.png",
  },
  {
    id: "evt-023",
    eventName: "Festival de Música Folk",
    date: "2024-08-25T18:00:00Z",
    location: {
      name: "Alcázar de Segovia",
      address: "Plaza Reina Victoria Eugenia, s/n",
      city: "Segovia",
      country: "España",
    },
    priceCents: 3000,
    availability: 100,
    description: "Disfruta de una noche de música folk en el histórico Alcázar de Segovia.",
    category: "Concierto",
    organizer: {
      name: "Festival de Música Folk Segovia",
      contact: "info@folksegovia.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Festival_de_Musica_Folk.png",
  },
  {
    id: "evt-024",
    eventName: "Concierto de Metallica",
    date: "2024-10-05T20:00:00Z",
    location: {
      name: "Estadio Olímpico de Sevilla",
      address: "Camino de los Descubrimientos, s/n",
      city: "Sevilla",
      country: "España",
    },
    priceCents: 6000,
    availability: 1000,
    description: "¡No te pierdas la oportunidad de presenciar el legendario concierto de Metallica en el Estadio Olímpico de Sevilla!",
    category: "Concierto",
    organizer: {
      name: "Live Nation",
      contact: "info@livenation.es",
    },
    imageUrl: "https://storage.googleapis.com/gutenfy-web-dev/event-test/Concierto_Metallica.png",
  }
];
export default mockData;
