export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* LOGO */}
        <img
          src="/lokmalogo.PNG"
          alt="Lokma House"
          className="
            w-[110px]
            sm:w-[140px]
            md:w-[170px]
            h-auto
            mx-auto
            object-contain
            mb-4
          "
        />

        {/* SUBTITLE */}
        <p className="hero-subtitle">
          Ширинликлар <br />
          дунёси
        </p>

        {/* SCROLL HINT */}
        <div className="hero-scroll-hint">

          <span className="hero-scroll-text">
            Менюни кўринг
          </span>

          <div className="hero-scroll-arrow"></div>

        </div>

      </div>
    </section>
  );
}