export interface SizePrice {
  size: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  image: string;
  price?: number;
  sizes?: SizePrice[];
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    id: "lokma",
    title: "Локма",
    items: [
      {
        id: "l1",
        name: "Локма с шоколадом",
        image: "/lokma1.PNG",
        sizes: [
          { size: "8 шариков", price: 50000 },
          { size: "12 шариков", price: 65000 },
          { size: "16 шариков", price: 75000 },
        ],
      },
      {
        id: "l2",
        name: "Локма с фисташки",
        image: "/lokma2.PNG",
        sizes: [
          { size: "8 шариков", price: 60000 },
          { size: "12 шариков", price: 80000 },
          { size: "16 шариков", price: 90000 },
        ],
      },
      {
        id: "l3",
        name: "Локма фруктовый",
        image: "/lokma3.PNG",
        sizes: [
          { size: "8 шариков", price: 60000 },
          { size: "12 шариков", price: 80000 },
          { size: "16 шариков", price: 90000 },
        ],
      },
    ],
  },

  {
    id: "vafli",
    title: "Фондю и Ассорти",
    items: [
      {
        id: "v1",
        name: "Фондю",
        price: 80000,
        image: "/fondyu.PNG",
      },
      {
        id: "v2",
        name: '"Fruit" ассорти',
        price: 100000,
        image: "/fruit.PNG",
      },
    ],
  },

  {
    id: "shirinliklar",
    title: "Гонконгские вафли",
    items: [
      {
        id: "s1",
        name: "Гонконгские вафли с шоколадом",
        price: 35000,
        image: "/vafli1.PNG",
      },
      {
        id: "s2",
        name: "Гонконгские вафли с бананом",
        price: 45000,
        image: "/wafli2.jpg",
      },
      {
        id: "s3",
        name: "Гонконгские вафли с клубникой",
        price: 60000,
        image: "/wafli3.jpg",
      },
      {
        id: "s4",
        name: "Гонконгские вафли фруктовый микс",
        price: 65000,
        image: "/wafli4.jpg",
      },
    ],
  },

  {
    id: "fondyu",
    title: "Бельгийские вафли",
    items: [
      {
        id: "f1",
        name: "Бельгийские вафли с шоколадом",
        price: 40000,
        image: "/wafli5.jpg",
      },
      {
        id: "f2",
        name: "Бельгийские вафли с бананом",
        price: 45000,
        image: "/wafli6.jpg",
      },
      {
        id: "f3",
        name: "Бельгийские вафли с клубникой",
        price: 60000,
        image: "/wafli7.jpg",
      },
      {
        id: "f4",
        name: "Бельгийские вафли фруктовый микс",
        price: 65000,
        image: "/wafli8.jpg",
      },
    ],
  },

  {
    id: "ichimliklar",
    title: "Ичимликлар",
    items: [
      {
        id: "i1",
        name: "Кофе американо / Черный кофе",
        price: 15000,
        image: "",
      },
      {
        id: "i2",
        name: "Молочный кофе",
        price: 15000,
        image: "",
      },
      {
        id: "i3",
        name: "Чай зеленый",
        price: 12000,
        image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: "i4",
        name: "Смузи (Манго-маракуйя / Клубника-банан / Киви-яблоко / Ягодный)",
        price: 30000,
        image: "https://images.pexels.com/photos/5946631/pexels-photo-5946631.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
  },
];

export const sectionIds = menuSections.map((s) => s.id);