import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export function Link({
  className,
  activeClassName,
  to,
  children
}: {
  to: string;
  children: ReactNode;
  className: string;
  activeClassName: string;
}) {
  return (
    <NavLink
      to={to}
      className={
        'text-base block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white' +
        ' ' +
        className +
        ' ' +
        activeClassName
      }
    >
      {children}
    </NavLink>
  );
}
