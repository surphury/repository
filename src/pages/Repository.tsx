import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { Aside } from '../components/Aside';

export function Repository() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Aside />
        <main className="basis-8/12 flex-grow">
          <h1 className="mb-4 text-lg font-bold leading-none tracking-tight  md:text-2xl lg:text-4xl text-center text-base">
            Lorem ipsum dolor sit amet
          </h1>

          <nav
            aria-label="Page navigation example"
            className="flex justify-center my-8"
          >
            <ul className="inline-flex -space-x-px text-sm mx-auto">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3 rounded-l-lg hover:bg-accent-2 hover:text-accent-7"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3 rounded-l-lg hover:bg-accent-2 hover:text-accent-7"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3 rounded-l-lg hover:bg-accent-2 hover:text-accent-7"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3 rounded-l-lg hover:bg-accent-2 hover:text-accent-7"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3 rounded-l-lg hover:bg-accent-2 hover:text-accent-7"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3 rounded-l-lg hover:bg-accent-2 hover:text-accent-7"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3 rounded-l-lg hover:bg-accent-2 hover:text-accent-7"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>

          <ul className="min-2xl:w-max mx-auto flex flex-col gap-4 px-4">
            {repos.map(({ subtitle, title }) => {
              return (
                <li className="block  p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-cyan-700 dark:text-white">
                    {title}
                  </h5>
                  <p className="font-normal max-w-4xl text-gray-500 dark:text-gray-400">
                    {subtitle}
                  </p>

                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ml-2 text-sm font-bold text-primary">4.95</p>
                    <span className="w-1 h-1 mx-1.5 bg-accent-5 rounded-full dark:bg-accent-4"></span>
                    <button
                      type="button"
                      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                      >
                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                      </svg>
                      <span className="sr-only">Icon description</span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
}

const repos = [
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  },
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  },
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  },
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  },
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  },
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  },
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  },
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  },
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  },
  {
    title: 'Boletín COVID-19',
    subtitle:
      'Información que incluye información científica sobre el COVID-19 en colaboración con la Asociación Peruana de Bibliotecas Académicas ALTAMIRA'
  }
];
