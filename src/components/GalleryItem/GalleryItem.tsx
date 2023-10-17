'use client';
import { ReactNode, useState } from 'react';

import './galleryItem.css';
import { Modal } from 'flowbite-react';

export function GalleryItem({
  icon,
  image,
  children,
  name
}: {
  icon: string;
  image: string;
  children: ReactNode;
  name?: string;
}) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  return (
    <>
      <div
        className="basis-[24%] relative cursor-pointer shadow-[0_0_6px_0_rgba(0,0,0,0.5)] mb-2.5 gallery-item"
        onClick={() => props.setOpenModal('default')}
      >
        <img src={image} alt="" className="w-full h-full main-image" />
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
        <Modal.Header>{name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img
              src={image}
              alt=""
              className="max-w-[15em] aspect-square rounded-full block mx-auto object-cover drop-shadow-2xl person-image"
            />

            <p className="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              facere quis quidem optio iure laboriosam magnam veniam accusantium
              necessitatibus. Alias, incidunt maxime sit optio beatae maiores
              expedita aspernatur deleniti quisquam! Dolor, tempora eius! Error
              quaerat, natus itaque eius pariatur aperiam quo non facere labore,
              repellat ipsam provident obcaecati ipsum quidem minus hic vero
              ipsa laborum doloremque reiciendis. Sapiente, consequatur
              eligendi. Corporis voluptatem accusantium sequi possimus maxime
              fugit commodi nobis dolores autem? Voluptatem fugiat hic,
              aspernatur illo provident minus quisquam optio vel quasi
              praesentium et molestias alias atque iste sint expedita.
            </p>
            <p className="text-primary">
              Explicabo minus et aliquid veniam voluptatem modi animi rem non
              corrupti voluptatibus obcaecati ex optio praesentium fugit odio
              vel voluptatum, delectus debitis aperiam repudiandae quod ipsum.
              Numquam, natus! Culpa, tenetur. Ullam repellat dolorum nostrum
              laudantium velit culpa nobis adipisci doloremque, dicta libero.
              Laborum reiciendis officia cumque, rem nemo obcaecati est facere
              doloribus recusandae! Sapiente cupiditate dolore natus similique
              laudantium. Cum!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
