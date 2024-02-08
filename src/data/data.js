const mockData = [
  {
    id: "evt-001",
    eventName: "Rock en Vivo",
    date: "2024-06-15T20:00:00Z",
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
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "evt-002",
    eventName: "Festival de Jazz",
    date: "2024-07-22T18:00:00Z",
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
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "evt-003",
    eventName: "Obra de Teatro: El Siglo de Oro",
    date: "2024-08-05T19:00:00Z",
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
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "evt-004",
    eventName: "Exposición de Arte Moderno",
    date: "2024-09-10T10:00:00Z",
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
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "evt-005",
    eventName: "Noche de Flamenco",
    date: "2024-10-25T21:00:00Z",
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
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "evt-006",
    eventName: "Cata de Vinos",
    date: "2024-11-12T17:00:00Z",
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
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "evt-007",
    eventName: "Maratón Internacional de Barcelona",
    date: "2024-03-17T07:00:00Z",
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
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "evt-008",
    eventName: "Taller de Fotografía",
    date: "2024-04-20T09:00:00Z",
    location: {
      name: "Centro Cultural Conde Duque",
      address: "Calle Conde Duque, 11",
      city: "Madrid",
      country: "España",
    },
    priceCents: 300000,
    availability: 20,
    description:
      "Aprende las técnicas de fotografía con profesionales del sector.",
    category: "Taller",
    organizer: {
      name: "FotoEspaña",
      contact: "talleres@fotoespana.es",
    },
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "evt-009",
    eventName: "Feria del Libro",
    date: "2024-05-30T10:00:00Z",
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
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "evt-010",
    eventName: "Conferencia Internacional de Tecnología",
    date: "2024-02-25T09:00:00Z",
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
    imageUrl: "https://via.placeholder.com/150",
  },
];
export default mockData;
