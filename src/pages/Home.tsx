('use client');
import { Header } from '../components/Header';
import { Carousel } from 'flowbite-react';

import { ReactNode } from 'react';
import {
  clickIcon,
  client,
  ilustracion1,
  ilustracion2,
  ilustracion3,
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
  return (
    <>
      <main>
        <Header />
        <Banner />
        <section className="contenedor sobre-nosotros max-w-5xl mx-auto flex gap-5 flex-col">
          <div className="">
            <Carousel>
              <CarouselItem src={image1} title="¿Quienes somos?">
                Some representative placeholder content for the first slide.
              </CarouselItem>
              <CarouselItem src={image2} title="¿Quienes somos?">
                Some representative placeholder content for the first slide.
              </CarouselItem>
              <CarouselItem src={image3} title="¿Quienes somos?">
                Some representative placeholder content for the first slide.
              </CarouselItem>
            </Carousel>
          </div>
          <section>
            <h2 className="basis-full text-4xl font-extrabold text-base text-center mb-5">
              Presentacion del Equipo
            </h2>

            <div className="flex justify-evenly flex-wrap">
              {galleryData.map((item) => {
                return (
                  <GalleryItem image={item.image} icon={item.icon}>
                    {item.text}
                  </GalleryItem>
                );
              })}
            </div>
          </section>

          <section className="clientes contenedor">
            <h2 className="basis-full text-4xl font-extrabold text-base text-center mb-5">
              Que dicen nuestros clientes
            </h2>
            <div className="cards gap-4 flex flex-wrap">
              <ClientCard image={client} name="name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                sapiente!
              </ClientCard>
              <ClientCard image={client} name="name">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                sapiente!
              </ClientCard>
            </div>
          </section>

          <section className="about-services">
            <div className="contenedor flex flex-wrap gap-3 justify-center">
              <h2 className="basis-full text-4xl font-extrabold text-base text-center mb-5">
                Nuestros servicios
              </h2>
              <Card
                image={ilustracion1}
                title="Noteworthy technology acquisitions 2021"
              >
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </Card>
              <Card
                image={ilustracion2}
                title="Noteworthy technology acquisitions 2021"
              >
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </Card>
              <Card
                image={ilustracion3}
                title="Noteworthy technology acquisitions 2021"
              >
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </Card>
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
        <span className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
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
    icon: clickIcon
  },
  {
    text: 'Nuestro Trabajo',
    image: image2,
    icon: clickIcon
  },
  {
    text: 'Nuestro Trabajo',
    image: image3,
    icon: clickIcon
  },
  {
    text: 'Nuestro Trabajo',
    image: image4,
    icon: clickIcon
  },
  {
    text: 'Nuestro Trabajo',
    image: image5,
    icon: clickIcon
  },
  {
    text: 'Nuestro Trabajo',
    image: image6,
    icon: clickIcon
  },
  {
    text: 'Nuestro Trabajo',
    image: image7,
    icon: clickIcon
  },
  {
    text: 'Nuestro Trabajo',
    image: image7,
    icon: clickIcon
  }
];
