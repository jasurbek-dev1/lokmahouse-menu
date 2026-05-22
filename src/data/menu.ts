export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
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
      price: 48000,
      image: "public/lokma1.PNG",
    },
    {
      id: "l2",
      name: "Локма с фисташки",
      price: 64000,
      image: "/lokma2.PNG",
    },
    {
      id: "l3",
      name: "Локма фруктовый",
      price: 76000,
      image: "/lokma3.PNG",
    },
  ],
},
  {
    id: "vafli",
    title: "Фондю и Ассорти",
    items: [
      { id: "v1", name: "Фондю", price: 65000, image: "/fondyu.PNG" },
      { id: "v2", name: '"Fruit"ассорти', price: 55000, image: "/fruit.PNG" },

    ],
  },
  {
    id: "shirinliklar",
    title: "Гонконгские вафли",
    items: [
      { id: "s1", name: "Гонконгские вафли с шоколадом", price: 30000, image: "/vafli1.PNG" },
      { id: "s2", name: " Гонконгские вафли с бананом", price: 35000, image: "/wafli2.jpg" },
      { id: "s3", name: "Гонконгские вафли с клубникой", price: 55000, image: "/wafli3.jpg" },
      { id: "s4", name: "Гонконгские вафли фруктовый микс", price: 65000, image: "/wafli4.jpg" },
    
    ],
  },{
    id: "fondyu",
    title: "Бельгийские вафли",
    items: [
      { id: "f1", name: "Бельгийские вафли с шоколадом", price: 35000, image: "/wafli5.jpg" },
      { id: "f2", name: "Бельгийские вафли с бананом", price: 40000, image: "/wafli6.jpg" },
      { id: "f3", name: "Бельгийские вафли с клубникой", price: 55000, image: "/wafli7.jpg" },
      { id: "f4", name: "Бельгийские вафли фруктовый микс", price: 65000, image: "/wafli8.jpg" },
    ],
  },
  {
    id: "ichimliklar",
    title: "Ичимликлар",
    items: [
      { id: "i1", name: "Кофе американо", price: 15000, image: "" },
      { id: "i2", name: "Капучино", price: 20000, image: "" },
      { id: "i3", name: "Латте", price: 22000, image: "https://images.pexels.com/photos/324014/pexels-photo-324014.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: "i4", name: "Чай яшил", price: 10000, image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: "i5", name: "Смузи", price: 18000, image: "https://images.pexels.com/photos/5946631/pexels-photo-5946631.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: "i6", name: "Лимонад", price: 12000, image: "" },
    ],
  },
  
  
];

export const sectionIds = menuSections.map((s) => s.id);
