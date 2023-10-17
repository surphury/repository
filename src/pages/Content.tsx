import { articleImage } from '../assets/img';
import { Aside } from '../components/Aside';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import {
  AiOutlineDownload,
  AiFillClockCircle,
  AiFillBook
} from 'react-icons/ai';

export function Content() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Aside />
        <main className="basis-8/12 flex-grow">
          <div className="grid place-content-center gap-6">
            <h1 className="text-2xl font-extrabold text-primary mt-7 text-center">
              TITULO DEL DOCUMENTO DE INVENTIGACION
            </h1>
            <div className="flex flex-wrap gap-6 p-4 justify-center">
              <img
                src={articleImage}
                alt="TITULO DEL DOCUMENTO DE INVENTIGACION"
                className="aspect-358/510 max-h-[20rem] object-cover"
              />
              <p className="text-justify max-w-[48rem] text-primary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                asperiores, facilis vero saepe soluta ipsa ipsam suscipit
                dignissimos illo esse dolore hic quaerat quo at! Excepturi odio
                maxime doloremque et? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Ipsum asperiores, facilis vero saepe soluta
                ipsa ipsam suscipit dignissimos illo esse dolore hic quaerat quo
                at! Excepturi odio maxime doloremque et? Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Ipsum asperiores, facilis
                vero saepe soluta ipsa ipsam suscipit dignissimos illo esse
                dolore hic quaerat quo at! Excepturi odio maxime doloremque et?
              </p>
              <button
                type="button"
                className="focus:outline-none text-white bg-green hover:bg-emerald-900 transition-colors focus:ring-4 focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 flex gap-3"
              >
                <AiOutlineDownload className="h-6 w-6" />
                <p>Click me!</p>
              </button>
              <div className="w-full flex flex-wrap gap-6 p-4">
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
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate dark:text-white flex gap-1 uppercase">
                        <AiFillBook />
                        Autor
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Katerina Petrova
                      </p>
                    </div>
                    {/* </div> */}
                  </li>
                </ul>
                <div className="max-w-[48rem]"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
