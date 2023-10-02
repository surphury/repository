import { Sidebar } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { HiOutlineMinusSm, HiOutlinePlusSm, HiTable } from 'react-icons/hi';
import { Link } from '../../components/NavLink';

export function Aside() {
  return (
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
  );
}

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
