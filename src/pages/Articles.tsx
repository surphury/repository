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
import { articleImage } from '../assets/img';

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

export function Articles() {
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
        <main className="basis-8/12 flex-grow grid gap-y-10 py-5 p-2">
          {[1, 2, 3, 4, 5].map(() => {
            return (
              <div className="flex items-center border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
                <img
                  src={articleImage}
                  alt="articulo interesante"
                  className="max-h-64 max-sm:hidden"
                />
                <figure className="flex items-center justify-center flex-col p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-primary dark:text-white text-center">
                    INVESTIGACION SOBRE LA PAZ MUNDIAL
                  </h3>
                  <blockquote className="max-w-2xl ml-8 mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <p className="my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam exercitationem nam vero minus, consectetur id?
                      Incidunt ipsa nam corrupti tenetur, dolorem deleniti quo
                      recusandae voluptas reprehenderit asperiores illo modi
                      ullam!
                    </p>
                  </blockquote>
                </figure>
              </div>
            );
          })}
        </main>
      </div>
      <Footer />
    </>
  );
}
