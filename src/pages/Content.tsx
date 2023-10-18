import { articleImage } from '../assets/img';
import { Aside } from '../components/Aside';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import { defaultImg } from '../assets/img';

import {
  AiOutlineDownload,
  AiFillClockCircle,
  AiFillBook
} from 'react-icons/ai';
import { useEffect, useState } from 'react';

export function Content() {
  const { id } = useParams();

  const [content, setContent] = useState<any>([]);

  const [authors, setAuthors] = useState<any>([]);

  const downloadContent = (route: any, name: any) => {
    const router = 'http://localhost:3000/download/' + route;
    fetch(router)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Archivo no encontrado');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error(error);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      });
  };

  useEffect(() => {
    // Realizar una solicitud HTTP
    fetch('http://localhost:3000/content/' + id)
      .then((response) => response.json())
      .then((responseData) => {
        // Actualizar el estado con los datos obtenidos
        setContent(responseData[0]);
        setAuthors(responseData[1]);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Aside />
        <main className="basis-8/12 flex-grow">
          <div className="grid place-content-center gap-6">
            <h1 className="text-2xl font-extrabold text-primary text-center mt-7">
              {content.content_title}
            </h1>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
              <img
                src={
                  content.has_img
                    ? 'http://localhost:3000/img/' + content.route_img
                    : defaultImg
                }
                alt={content.content_title}
                className="aspect-358/510 max-h-[20rem] object-cover"
              />
              <p className="text-justify max-w-[48rem] text-primary">
                {content.content_description}
              </p>
              <button
                onClick={() =>
                  downloadContent(content.route_pdf, content.name_pdf)
                }
                type="button"
                className="focus:outline-none text-white bg-green hover:bg-green focus:ring-4 focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 flex gap-3"
              >
                <AiOutlineDownload className="h-6 w-6" />
                <p>Descargar</p>
              </button>
              <div className="w-full">
                <ul role="list" className="max-w-sm">
                  <li className="py-3 sm:py-4">
                    {/*  <div className="flex items-center space-x-3"> */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate dark:text-white flex gap-1 uppercase">
                        <AiFillClockCircle />
                        Fecha
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        12/11/2023
                      </p>
                    </div>
                    {/* </div> */}
                  </li>
                  <li className="py-3 sm:py-4">
                    {/*  <div className="flex items-center space-x-3"> */}
                    {authors.map((e: any) => {
                      return (
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate dark:text-white flex gap-1 uppercase">
                            <AiFillBook />
                            {e.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {e.last_name + ' ' + e.last_mother_name}
                          </p>
                        </div>
                      );
                    })}

                    {/* </div> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
