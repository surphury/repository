import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { Sidebar } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards
} from 'react-icons/hi';
import { Link } from '../components/NavLink';

const links = [
  {
    title: 'Tema 1',
    to: '',
    icon: HiTable
  },
  {
    title: 'Tema 1',
    to: '',
    icon: HiTable
  },
  {
    title: 'Tema 1',
    to: '',
    icon: HiTable
  },
  {
    title: 'Lista de Temas',
    children: [
      {
        title: 'Tema 1',
        to: '',
        icon: HiTable
      },
      {
        title: 'Tema 1',
        to: '',
        icon: HiTable
      },
      {
        title: 'Tema 1',
        to: '',
        icon: HiTable
      }
    ]
  },
  {
    title: 'Tema 1',
    to: '',
    icon: HiTable
  },
  {
    title: 'Tema 1',
    to: '',
    icon: HiTable
  }
];

export function Repository() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <aside className="max-w-min mx-auto md:mx-0 basis-4/12 ">
          <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {links.map(({ title, children, icon, to }) => {
                  return !children ? (
                    <Sidebar.Item icon={icon}>
                      <Link to={to} className="" activeClassName="">
                        {title}
                      </Link>
                    </Sidebar.Item>
                  ) : (
                    <Sidebar.Collapse
                      icon={HiOutlinePlusSm}
                      label="E-commerce"
                      renderChevronIcon={(theme, open) => {
                        const IconComponent = open
                          ? HiOutlineMinusSm
                          : HiOutlinePlusSm;
                        return (
                          <IconComponent
                            aria-hidden
                            className={twMerge(
                              theme.label?.icon?.open &&
                                theme.label?.icon?.open[open ? 'on' : 'off']
                            )}
                          />
                        );
                      }}
                    >
                      {children.map(({ icon, title, to }) => {
                        return (
                          <Sidebar.Item icon={icon}>
                            <Link to={to} className="" activeClassName="">
                              {title}
                            </Link>
                          </Sidebar.Item>
                        );
                      })}
                    </Sidebar.Collapse>
                  );
                })}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </aside>
        <main className="basis-8/12 flex-grow">
          <h1 className="mb-4 text-lg font-bold leading-none tracking-tight  md:text-2xl lg:text-4xl dark:text-white text-center text-cyan-700">
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
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                    <p className="ml-2 text-sm font-bold text-primary dark:text-white">
                      4.95
                    </p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary underline hover:no-underline dark:text-white"
                    >
                      73 reviews
                    </a>
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
