import './banner.css';

export function Banner() {
  return (
    <header className="header bg-cover">
      <section className="textos-header min-h-[600px] relative grid">
        <div className="place-self-center grid gap-5">
          <h1 className="text-6xl font-extrabold text-white">
            Investigando para Educar
          </h1>

          <h2 className="text-white text-2xl font-semibold">
            Con una página web potente
          </h2>
        </div>
        <div
          className="wave absolute bottom-0 w-full"
          style={{ height: '150px', overflow: 'hidden' }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="fill-primary stroke-none"
            ></path>
          </svg>
        </div>
      </section>
    </header>
  );
}
