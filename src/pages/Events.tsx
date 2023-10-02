'use client';

import { Aside } from '../components/Aside';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { Tabs } from 'flowbite-react';
import { HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

import { Button, Modal } from 'flowbite-react';
import { ReactNode, useState } from 'react';

export function Events() {
  return (
    <>
      <Header />
      <div className="flex-wrap flex">
        <Aside />

        <main className="basis-8/12 flex-grow">
          <video className="w-full h-auto max-w-full" controls>
            <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Tabs.Group aria-label="Default tabs" style="default">
            <Tabs.Item active icon={HiUserCircle} title="Video Information">
              <p className="text-xl font-semibold text-blue my-6">
                Flowbite app will help you improve yourself by analysing your
                everyday life.
              </p>

              <p className="mb-3 text-gray-500 dark:text-gray-400">
                Track work across the enterprise through an open, collaborative
                platform. Link issues across Jira and ingest data from other
                software development tools, so your IT support and operations
                teams have richer contextual information to rapidly respond to
                requests, incidents, and changes.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.Accelerate critical development
                work, eliminate toil, and deploy changes with ease, with a
                complete audit trail for every change.
              </p>
            </Tabs.Item>
            <Tabs.Item icon={MdDashboard} title="Comments">
              <div className="flex flex-col gap-2 p-2">
                <div className="flex items-center justify-center shadow-lg mt-10 mb-4">
                  <form className="w-full bg-primary rounded-lg px-4 pt-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <h2 className="px-4 pt-3 pb-2 text-accent-8 text-lg">
                        Add a new comment
                      </h2>
                      <div className="w-full px-3 mb-2 mt-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                      <div className="w-full flex items-start px-3">
                        <div className="flex items-start w-1/2 text-accent-7 px-2 mr-auto">
                          <svg
                            fill="none"
                            className="w-5 h-5 text-accent-6 mr-1"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="text-xs md:text-sm pt-px">
                            Some HTML is okay.
                          </p>
                        </div>
                        <div className="-mr-1">
                          <button
                            type="button"
                            className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none"
                          >
                            Default
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <Comment
                  nickname="vikaskumarsingh20"
                  picture="https://avatars.githubusercontent.com/u/92667215?s=120&v=4"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum sed recusandae ipsam quisquam omnis eos amet
                  aspernatur. Alias, reprehenderit illo, sunt nostrum, quibusdam
                  beatae in architecto repudiandae dolore recusandae tenetur.
                </Comment>
                <CommentsModal />
                <div className="flex bg-primary-2 items-center justify-center">
                  <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
                    {/*  <!-- Video 1 --> */}

                    {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                      return (
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                          <div className="w-full flex flex-col">
                            <div className="relative">
                              {/* <!-- Image Video --> */}
                              <a href="#">
                                <img
                                  src="https://picsum.photos/seed/59/300/200"
                                  className="w-96 h-auto"
                                />
                              </a>

                              <p className="absolute right-2 bottom-2 text-gray-100 text-xs px-1 py">
                                1:15
                              </p>
                            </div>

                            <div className="flex flex-row mt-2 gap-2">
                              {/*  <!-- Profile Picture --> */}
                              <a href="#">
                                <img
                                  src="https://picsum.photos/seed/1/40/40"
                                  className="rounded-full max-h-10 max-w-10"
                                />
                              </a>

                              {/*  <!-- Description --> */}
                              <div className="flex flex-col">
                                <a href="#">
                                  <p className="text-base text-sm font-semibold">
                                    Learn CSS Box Model in 8 Minutes
                                  </p>
                                </a>
                                <a
                                  className="text-base-4 text-xs mt-2 "
                                  href="#"
                                >
                                  {' '}
                                  Web Dev Simplified{' '}
                                </a>
                                <p className="text-base-4 text-xs mt-1">
                                  241K views . 3 years ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </main>
      </div>

      <Footer />
    </>
  );
}

export function CommentsModal() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button className="bg-blue" onClick={() => props.setOpenModal('default')}>
        Ver Más
      </Button>
      <Modal
        show={props.openModal === 'default'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Comentarios Recientes</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Comment
              nickname="vikaskumarsingh20"
              picture="https://avatars.githubusercontent.com/u/92667215?s=120&v=4"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sed recusandae ipsam quisquam omnis eos amet aspernatur. Alias,
              reprehenderit illo, sunt nostrum, quibusdam beatae in architecto
              repudiandae dolore recusandae tenetur.
            </Comment>
            <Comment
              nickname="vikaskumarsingh20"
              picture="https://avatars.githubusercontent.com/u/92667215?s=120&v=4"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sed recusandae ipsam quisquam omnis eos amet aspernatur. Alias,
              reprehenderit illo, sunt nostrum, quibusdam beatae in architecto
              repudiandae dolore recusandae tenetur.
            </Comment>
            <Comment
              nickname="vikaskumarsingh20"
              picture="https://avatars.githubusercontent.com/u/92667215?s=120&v=4"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sed recusandae ipsam quisquam omnis eos amet aspernatur. Alias,
              reprehenderit illo, sunt nostrum, quibusdam beatae in architecto
              repudiandae dolore recusandae tenetur.
            </Comment>
            <Comment
              nickname="vikaskumarsingh20"
              picture="https://avatars.githubusercontent.com/u/92667215?s=120&v=4"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sed recusandae ipsam quisquam omnis eos amet aspernatur. Alias,
              reprehenderit illo, sunt nostrum, quibusdam beatae in architecto
              repudiandae dolore recusandae tenetur.
            </Comment>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

function Comment({
  picture,
  children,
  nickname
}: {
  picture: string;
  children: ReactNode;
  nickname: string;
}) {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-3 p-2">
        <img
          className="w-8 h-8 rounded-full hover:cursor-pointer"
          src={picture}
          alt="user photo"
        />
        <h3 className="text-black text-sm dark:text-gray-400">
          <a className="text-accent-9 hover:text-blue-400" href="#">
            {nickname}
          </a>
          {'  '}
          last month
        </h3>
      </div>
      <div className="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
        <div className="flex justify-between items-center">
          <a className="text-base font-bold hover:text-blue" href="#">
            Respondiendo a <span className="text-blue">@susy_diaz</span>
          </a>
          <div className="flex"></div>
        </div>
        <p className="text-sm text-gray-400">{children}</p>
        <div className="mt-3 flex items-center gap-5">
          {/* <p className="text-sm text-gray-400">🔴 C++</p>
                    <a href="#" className="text-sm text-gray-400">
                      ⭐ 2
                    </a> */}
          <p className="text-sm text-gray-400">{/* Updated Feb 9 */}</p>
        </div>
      </div>
    </div>
  );
}
