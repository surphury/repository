'use client';
import { ReactNode, useState } from 'react';

import './galleryItem.css';
import { Modal } from 'flowbite-react';

export function GalleryItem({
  icon,
  image,
  children
}: {
  icon: string;
  image: string;
  children: ReactNode;
}) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  return (
    <>
      <div
        className="basis-[24%] relative cursor-pointer shadow-[0_0_6px_0_rgba(0,0,0,0.5)] mb-2.5 gallery-item"
        onClick={() => props.setOpenModal('default')}
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
      <Modal
        show={props.openModal === 'default'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Presentacion del Equipo</Modal.Header>
        <Modal.Body>
          <div className="space-y-6"></div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
