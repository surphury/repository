('use client');
import { Header } from '../components/Header';
import { Carousel } from 'flowbite-react';

import { ReactNode, useEffect, useState } from 'react';
import {
  clickIcon,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7
} from '../assets/img';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { GalleryItem } from '../components/GalleryItem';

export function Home() {
  let lBanners: any[] = [
    {
      img: 'http://localhost:3000/general/banner/banner5.jpg',
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      header: 'MISIÓN'
    },
    {
      img: 'http://localhost:3000/general/banner/banner2.jpg',
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      header: 'VISIÓN'
    },
    {
      img: 'http://localhost:3000/general/banner/banner3.jpg',
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      header: '¿QUÍENES SOMOS?'
    }
  ];

  let lPartners: any = [
    {
      img: 'http://localhost:3000/general/team/partner1.jpg',
      title: 'general'
    },
    {
      img: 'http://localhost:3000/general/team/partner2.jpg',
      title: 'general'
    },
    {
      img: 'http://localhost:3000/general/team/partner3.jpg',
      title: 'general'
    },
    {
      img: 'http://localhost:3000/general/team/partner4.jpg',
      title: 'general'
    },
    {
      img: 'http://localhost:3000/general/team/partner5.jpg',
      title: 'general'
    },
    {
      img: 'http://localhost:3000/general/team/partner6.jpg',
      title: 'general'
    },
    {
      img: 'http://localhost:3000/general/team/partner7.jpg',
      title: 'general'
    },
    {
      img: 'http://localhost:3000/general/team/partner8.jpg',
      title: 'general'
    }
  ];

  return (
    <>
      <main>
        <Header />
        <Banner />
        <section className="contenedor sobre-nosotros max-w-6xl mx-auto flex gap-6 flex-col">
          <div className="">
            <Carousel>
              {lBanners.map((e: any) => {
                return (
                  <CarouselItem src={e.img} title={e.header}>
                    <h2 className="text-3xl lg:text-3xl font-bold text-white">
                      {e.title}
                    </h2>
                  </CarouselItem>
                );
              })}
            </Carousel>
          </div>
          <section>
            <h1 className="basis-full text-4xl font-extrabold text-base text-center mb-5">
              Presentacion del Equipo
            </h1>

            <div className="flex justify-evenly flex-wrap">
              {lPartners.map((item: any) => {
                return (
                  <GalleryItem image={item.img} icon={item.icon}>
                    {item.title}
                  </GalleryItem>
                );
              })}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function CarouselItem({
  src,
  title,
  children
}: {
  src: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex items-center justify-center">
      <img src={src} alt={title} className="aspect-video" />
      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
        <span className="lg:text-3xl leading-4 text-base lg:leading-5 text-white">
          {title}
        </span>
        {/* <span className="">{children}</span> */}
        <div className="flex h-full items-end pb-10">
          <span className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
            {children}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ClientCard({
  name,
  image,
  children
}: {
  name: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-lg mx-auto my-10 bg-primary-2 rounded-lg shadow-md p-5">
      <img
        className="w-32 h-32 rounded-full mx-auto object-cover"
        src={image}
        alt="Profile picture"
      />
      <h2 className="text-center font-semibold mt-3 text-base">{name}</h2>
      <div className="mt-5">
        <p className="mt-2 max-w-[15rem] text-sm text-base">{children}</p>
      </div>
    </div>
  );
}
export function Card({
  title,
  image,
  children
}: {
  title: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-sm bg-primary-2 border border-accent-2 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-accent-7">{children}</p>
      </div>
    </div>
  );
}

const galleryData = [
  {
    text: 'Nuestro Trabajo',
    image: image1,
    icon: clickIcon,
    name: 'Karla Huamaní'
  },
  {
    text: 'Nuestro Trabajo',
    image: image2,
    icon: clickIcon,
    name: 'Fernando Quesada'
  },
  {
    text: 'Nuestro Trabajo',
    image: image3,
    icon: clickIcon,
    name: 'Alessandra Estrada'
  },
  {
    text: 'Nuestro Trabajo',
    image: image4,
    icon: clickIcon,
    name: 'Dante Macazana'
  },
  {
    text: 'Nuestro Trabajo',
    image: image5,
    icon: clickIcon,
    name: 'Naysha Coronado'
  },
  {
    text: 'Nuestro Trabajo',
    image: image6,
    icon: clickIcon,
    name: 'Brian Vega'
  },
  {
    text: 'Nuestro Trabajo',
    image: image7,
    icon: clickIcon,
    name: 'Eli Carrillo'
  },
  {
    text: 'Nuestro Trabajo',
    image: image7,
    icon: clickIcon,
    name: 'Yajaira Apolinario'
  }
];
