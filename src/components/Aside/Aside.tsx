import { Sidebar } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { HiOutlineMinusSm, HiOutlinePlusSm, HiTable } from 'react-icons/hi';

export function Aside({handleSections}:any) {
  const handleAc = (ae:any)=>{
    const newData=ae
    handleSections(newData)
  }
  return (
    <aside className="hidden md:block max-w-min mx-auto md:mx-0 basis-4/12 ">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {links.map(({ title, children}, index) => {
              return (
                <Sidebar.Collapse
                  icon={HiOutlinePlusSm}
                  label={title}
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
                  key={index}
                >
                  {children.map(({ icon, title, alias }, i) => {
                    return (
                      <Sidebar.Item className="DoPointer" icon={icon} key={index + i} onClick={()=>handleAc(alias)}>
                        {/* <Link to={to} className="" activeClassName=""> */}
                        {title}
                        {/* </Link> */}
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
    title: 'Secciones',
    children: [
      {
        title: 'revistas',
        to: '',
        icon: HiTable,
        alias:'cat_review'
      },
      {
        title: 'libros',
        to: '',
        icon: HiTable,
        alias:'cat_book'
      },
      {
        title: 'articulos',
        to: '',
        icon: HiTable,
        alias:'cat_article'
      }
    ]
  }
];
