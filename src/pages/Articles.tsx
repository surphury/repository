import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Aside } from '../components/Aside';

/* import { articleImage } from '../assets/img'; */

export function Articles() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Aside />
        <main className="basis-8/12 flex-grow grid gap-y-10 py-5 p-2">
          {/*  {[1, 2, 3, 4, 5].map((e,i) => {
            return (
              <div className="flex items-center border border-accent-2 rounded-lg shadow-sm bg-primary-2">
                <img
                  src={articleImage}
                  alt="articulo interesante"
                  className="max-h-64 max-sm:hidden"
                />
                <figure className="flex items-center justify-center flex-col p-8 border-accent-2 rounded-t-lg md:rounded-t-none md:rounded-tl-lg text-accent-7">
                  <h3 className="text-lg font-semibold text-primary text-center">
                    INVESTIGACION SOBRE LA PAZ MUNDIAL
                  </h3>
                  <blockquote className="max-w-2xl ml-8 mb-4 lg:mb-8 text-accent-7">
                    <p className="my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam exercitationem nam vero minus, consectetur id?
                      Incidunt ipsa nam corrupti tenetur, dolorem deleniti quo
                      recusandae voluptas reprehenderit asperiores illo modi
                      ullam!
                    </p>
                  </blockquote>
                </figure>
              </div>
            );
          })} */}
        </main>
      </div>
      <Footer />
    </>
  );
}
