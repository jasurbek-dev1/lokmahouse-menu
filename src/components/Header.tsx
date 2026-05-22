import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Cherry } from "lucide-react";
import { menuSections } from "../data/menu";
import type { Theme } from "../hooks/useTheme";

interface HeaderProps {
  theme: Theme;
  cycleTheme: () => void;
  themeLabel: string;
}

const THEME_ICONS: Record<Theme, React.ReactNode> = {
  light: <Sun size={20} />,
  strawberry: <Cherry size={20} />,
  dark: <Moon size={20} />,
};

export default function Header({
  theme,
  cycleTheme,
  themeLabel,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-inner flex items-center justify-between px-4 py-2">

          {/* LOGO */}
          <button
            className="header-brand"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img
              src="/lokmalogo.PNG"
              alt="Lokma Logo"
              className="
                w-[60px]
                sm:w-[75px]
                md:w-[95px]
                h-auto
                object-contain
                transition-all
                duration-300
              "
            />
          </button>

          {/* DESKTOP MENU */}
          <nav className="header-nav-desktop">
            {menuSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="header-nav-link"
              >
                {s.title}
              </button>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="header-actions flex items-center gap-2">

            {/* THEME BUTTON */}
            <button
              onClick={cycleTheme}
              className="theme-toggle"
              aria-label={themeLabel}
              title={themeLabel}
            >
              {THEME_ICONS[theme]}
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-btn"
              aria-label="Меню"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className="mobile-nav"
            onClick={(e) => e.stopPropagation()}
          >
            {menuSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="mobile-nav-link"
              >
                {s.title}
              </button>
            ))}
            <button
  onClick={() => scrollTo("contact")}
  className="mobile-nav-link"
>
  Боғланиш
</button>
          </nav>
        </div>
      )}
    </>
  );
}