import { FC, Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";

import { Work } from "types/works";

type Props = {
  work: Work;
  isOpen: boolean;
  toggle: () => void;
};

export const WorksModal: FC<Props> = ({ work, isOpen, toggle }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto min-w-[280px]"
          onClose={toggle}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className=" text-center text-xl font-medium leading-6 text-gray-900 mb-8"
                >
                  {work.title}
                </Dialog.Title>
                <Image
                  src={work.image.url}
                  width={520}
                  height={400}
                  layout="intrinsic"
                  objectFit="cover"
                  priority={true}
                />

                <div className="mt-2">
                  <div
                    className=" text-gray-500"
                    dangerouslySetInnerHTML={{ __html: work.description }}
                  ></div>
                  <div className="mt-2 font-bold">
                    <p>???????????????{work.skill}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ?????????????????????
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
