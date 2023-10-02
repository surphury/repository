import { ReactNode } from 'react';

import './galleryItem.css';

export function GalleryItem({
  icon,
  image,
  children
}: {
  icon: string;
  image: string;
  children: ReactNode;
}) {
  /* const [show, setShow] = useState(false); */

  /*   const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  }; */

  return (
    <div
      /*   onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} */
      className="basis-[24%] relative cursor-pointer shadow-[0_0_6px_0_rgba(0,0,0,0.5)] mb-2.5 gallery-item"
    >
      <img src={image} alt="" className=" w-full h-full" />
      <div className="absolute w-full h-full transition-transform duration-[0.5s] flex justify-center items-center flex-col scale-0 top-0 :hover:scale-100 hidden-content">
        <img
          src={icon}
          alt=""
          className="w-full h-full object-contain translate-y-4 block"
        />
        <p>{children}</p>
      </div>
    </div>
  );
}
