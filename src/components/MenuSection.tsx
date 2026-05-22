import type { MenuSection as MenuSectionType } from "../data/menu";
import MenuCard from "./MenuCard";

interface MenuSectionProps {
  section: MenuSectionType;
}

const drinksData = [
  {
    title: "Мохито",
    image: "/moxito.JPG",
    items: [
      "Классический — 25.000 / 50.000 сум",
      "Клубничный — 30.000 / 55.000 сум",
      "Тропический — 35.000 / 60.000 сум",
      "Ягодный — 30.000 / 55.000 сум",
      "Киви — 30.000 / 55.000 сум",
      "Малиновый — 30.000 / 55.000 сум",
      "Red Bull — 35.000 / 60.000 сум",
    ],
  },

  {
    title: "Коктейли",
    image: "/kokteyl1.jpg",
    items: [
      "Банана Колада — 34.000 сум",
      "(банан, кокос сиропи, ялпиз сиропи, лимонли fresh, ананас шарбати)",

      "Экзотик — 30.000 сум",
      "(апельсин, олма шарбати, ананас, экзотик сиропи, тарвуз сиропи, лимонли fresh)",

      "Мальдивы — 30.000 сум",
      "(Blue Curacao сиропи, ваниль сиропи, ананас шарбати, лимонли fresh, Sprite)",

      "Гангстер — 30.000 сум",
      "(қулупнай сиропи, маракуйя сиропи, лимонли fresh, апельсин шарбати, Red Bull)",
    ],
  },

  {
    title: "Бабл Ти",
    image: "/babl.webp",
    items: [
      "Аромат кофе — 35.000 сум",
      "Тропик — 35.000 сум",
      "The Lokmaco — 38.000 сум",
      "Клубника-Банан — 45.000 сум",
      "Яблоко + Маракуйя — 45.000 сум",
    ],
  },

  {
    title: "Смузи",
    image: "/smuzi.jpg",
    items: [
      "Манго-Маракуйя — 30.000 сум",
      "Клубника-Банан — 30.000 сум",
      "Киви-Яблоко — 30.000 сум",
      "Ягодный — 30.000 сум",
    ],
  },

  {
    title: "Фреш",
    image: "/resh.webp",
    items: [
      "Морковный — 25.000 сум",
      "Яблочный — 30.000 сум",
      "Морковь + Яблоко — 30.000 сум",
      "Апельсиновый — 40.000 сум",
      "Апельсин + Яблоко — 45.000 сум",
      "Апельсин + Лимон — 45.000 сум",
    ],
  },

  {
    title: "Милк Шейк",
    image: "/milkshake.jpg",
    items: [
      "Ванильный — 25.000 сум",
      "Шоколадный — 30.000 сум",
      "Клубничный — 30.000 сум",
      "Киви — 30.000 сум",
      "Малиновый — 30.000 сум",
      "Банановый — 30.000 сум",
      "Клубника + Банан — 35.000 сум",
      "Шоколад + Банан — 35.000 сум",
    ],
  },

  {
    title: "Айс Ти",
    image: "/icetea.jpg",
    items: [
      "Малиновый — 25.000 / 55.000 сум",
      "Клубничный — 30.000 / 60.000 сум",
      "Ягодный — 35.000 / 65.000 сум",
    ],
  },

  {
    title: "Айс Кофе",
    image: "/icecoffee.jpg",
    items: [
      "Айс Американо — 30.000 сум",
      "Айс Капучино — 30.000 сум",
      "Айс Латте — 30.000 сум",
      "Фраппучино — 35.000 сум",
    ],
  },

  {
    title: "Чай",
    image: "/tea.jpg",
    items: [
      "Черный чай — 12.000 сум",
      "Зеленый чай — 12.000 сум",
      "Успокаивающий — 30.000 сум",
      "Лимон чай — 18.000 сум",
      "Малиновый — 30.000 сум",
      "Фруктовый — 30.000 сум",
      "Ягодный — 30.000 сум",
      "Имбирный — 30.000 сум",
      "Бардак — 20.000 сум",
      "Клубника + Жасмин — 35.000 сум",
      "Марокканский — 35.000 сум",
      "Манго + Клубника — 35.000 сум",
    ],
  },

  {
    title: "Кофе",
    image: "/coffee.jpg",
    items: [
      "Эспрессо — 18.000 сум",
      "Эспрессо дабл — 22.000 сум",
      "Американо — 18.000 сум",
      "Американо дабл — 25.000 сум",
      "Капучино — 25.000 сум",
      "Капучино дабл — 30.000 сум",
      "Латте — 25.000 сум",
      "Латте дабл — 30.000 сум",
      "Мокачино — 30.000 сум",
      "Раф — 30.000 сум",
      "Какао — 25.000 сум",
      "Горячий шоколад — 30.000 сум",
    ],
  },
];

export default function MenuSection({ section }: MenuSectionProps) {
  if (section.id === "ichimliklar") {
    return (
      <section id={section.id} className="menu-section">
        <h2 className="menu-section-title">{section.title}</h2>

        <div className="drinks-grid">
          {drinksData.map((drink, index) => (
            <div key={index} className="drink-card">

              <img
                src={drink.image}
                alt={drink.title}
                className="drink-image"
              />

              <div className="drink-content">

                <h3 className="drink-title">
                  {drink.title}
                </h3>

                {(drink.title === "Мохито" || drink.title === "Айс Ти") && (
                  <p className="drink-note">
                    (Нарxлар: стаканда / графинда)
                  </p>
                )}

                <div className="drink-list">
                  {drink.items.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id={section.id} className="menu-section">
      <h2 className="menu-section-title">{section.title}</h2>

      <div className="menu-grid">
        {section.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}