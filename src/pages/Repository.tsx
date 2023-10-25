import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { Aside } from '../components/Aside';
import { articleImage } from '../assets/img';
import { useEffect, useState } from 'react';
/* import { articleImage } from '../assets/img'; */
import { defaultImg } from '../assets/img';
import { Link } from 'react-router-dom';

export function Repository() {
  let pagin:any = {
    page: 1,
    total: 0,
    size_rows: 10,
  }
  
  const [data, setData] = useState<any>([]);
  const [cargando, setCargando] = useState(false);

  // useEffect se ejecutará después de que el componente se monte
  useEffect(() => {
    // Realizar una solicitud HTTP
    fetch('http://localhost:3000/content',
    {method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      category_alias: alias,
      page: pagin.page,
      size_rows: pagin.size_rows
    })})
      .then((response) => response.json())
      .then((responseData) => {
        // Actualizar el estado con los datos obtenidos
        setData(responseData);
        setCargando(false)
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
        setCargando(false)
      });
  }, [cargando]); 

  const handlePagination = (number:number) => {
    if(number==0)pagin.pagin+=1
    else if(number==-1)pagin.pagin-=1
    else pagin.pagin=number
    setCargando(true)
    return undefined
  };

  const handleSections = (aliass:any) => {
    setDataAlias(aliass)
    setCargando(true)
    return undefined
  };

  const [alias, setDataAlias] = useState('cat_review');
  
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Aside  data={alias} handleSections={handleSections} />
        <main className="basis-8/12 flex-grow">
          <h1 className="mb-4 text-lg font-bold leading-none tracking-tight  md:text-2xl lg:text-4xl text-center text-base">
            REPOSITORIO
          </h1>

          <nav
            aria-label="Page navigation example"
            className="flex justify-center my-8"
          >
            <ul className="inline-flex -space-x-px text-sm mx-auto">
              <li>
                <a onClick={()=>handlePagination(-1)}className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3 rounded-l-lg hover:bg-accent-2 hover:text-accent-7">
                  Previous
                </a>
              </li>
              <li>
                <a onClick={()=>handlePagination(1)} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3  hover:bg-accent-2 hover:text-accent-7">
                  1
                </a>
              </li>
              <li>
                <a onClick={()=>handlePagination(2)}  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3  hover:bg-accent-2 hover:text-accent-7">
                  2
                </a>
              </li>
              <li>
                <a onClick={()=>handlePagination(0)} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-accent-5 bg-primary border border-accent-3 rounded-r-lg hover:bg-accent-2 hover:text-accent-7">
                  Next
                </a>
              </li>
            </ul>
          </nav>

          <ul className="min-2xl:w-max mx-auto flex flex-col gap-4 px-4">
            {data.map((e:any, i:any) => {
              return (
                <li
                  className="p-6 border border-gray-200 rounded-lg shadow-md bg-primary-2 flex gap-6"
                  key={i}
                >
                  <Link to={'/content'+'/'+e.content_id} className="flex gap-6">
                    <div>
                      <img 
                        src={e.has_img?'http://localhost:3000/img/'+e.route_img:defaultImg}
                        alt={e.title}
                        className="max-w-[7em] aspect-[358/510]"
                      /> 
                    </div>
                    <div className="grid">
                      <h5 className="DoPointer mb-2 text-2xl font-semibold tracking-tight text-cyan-700 dark:text-white">
                        {e.content_title}
                      </h5>
                      <p className="font-normal max-w-4xl text-gray-500 dark:text-gray-400">
                        {e.content_description}...
                      </p>

                      <div className="flex items-center self-end">
                        <svg
                          className="w-4 h-4 text-yellow-300 mr-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ml-2 text-sm font-bold text-primary">
                          4.95
                        </p>
                        <span className="w-1 h-1 mx-1.5 bg-accent-5 rounded-full dark:bg-accent-4"></span>
                        <button
                          type="button"
                          className="text-blue-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                        >
                          <svg
                            className="w-4 h-4 fill-accent-9"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                          >
                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                          </svg>
                          <span className="sr-only">Icon description</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                  
                </li>
              );
            })}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
}

