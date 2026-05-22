import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import { menuSections } from "./data/menu";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, cycleTheme, themeLabel } = useTheme();

  return (
    <div className="app" data-theme={theme}>

      <Header
        theme={theme}
        cycleTheme={cycleTheme}
        themeLabel={themeLabel}
      />

      <main>

        {/* HERO */}
        <Hero />

        {/* MENU */}
        <div className="menu-container">
          {menuSections.map((section) => (
            <MenuSection
              key={section.id}
              section={section}
            />
          ))}
          
        </div>

        {/* CONTACT SECTION */}
       {/* CONTACT */}
{/* CONTACT */}
<section id="contact" className="contact-section">

  <div className="contact-box">

    <img
      src="/lokmalogo.PNG"
      alt="Lokma"
      className="contact-logo"
    />

    <h2 className="contact-main-title">
      Боғланиш
    </h2>

    {/* PHONE */}
    <a
      href="tel:+998901234567"
      className="contact-link"
    >
      📞 +998 91 787 08 08
    </a>

    {/* LOCATION */}
    <a
      href="https://maps.google.com/?q=Namangan"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      📍 Manzil
    </a>

    {/* TIME */}
    <p className="contact-text">
      🕒 09:00 — 23:00
    </p>

  </div>

</section>
      </main>

      <Footer />

    </div>
  );
}

export default App;