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
    <NavLink to={to} className={className + ' ' + activeClassName}>
      {children}
    </NavLink>
  );
}
