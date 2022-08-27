import { Fragment, useRef } from 'react'
import Link from 'next/link'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Header(props) {
  const headerSection = useRef(null)
  const headerDetails = [
    { name: 'Minting', icon: '', href: '' },
    { name: 'Staking', icon: '', href: '' },
    { name: 'NFTDo', icon: '', href: '' },
  ]
  return (
    <header ref={headerSection} className="z-50 py-4">
      <Popover className="w-full">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="relative flex items-center justify-between md:space-x-6 lg:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a target="_blank" rel="noopener noreferrer">
                  <h1 className="text-3xl font-bold">NFT platform</h1>
                </a>
              </Link>
            </div>

            <div className="hidden w-auto lg:block">
              <a
                href="/"
                className="mr-6 font-sans text-base font-normal text-zee-black hover:text-blue-600"
              >
                Home
              </a>
              {headerDetails.map((item) => (
                <a
                  href={item.link}
                  className="mr-6 font-sans text-base font-normal text-zee-black hover:text-blue-600"
                  key={item.name}
                  target={item.target}
                  rel={item.rel}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="justify-end mr-2 -my-2 lg:hidden">
              <Popover.Button className="inline-flex p-2 text-black rounded-md bg-blue-600 hover:text-gray-100 hover:bg-blue-600 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:right-30 lg:hidden"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 backdrop-blur-more divide-gray-50">
              <div className="pt-4 pb-6 pl-4 pr-6">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <a target="_blank" rel="noopener noreferrer">
                      <h1 className="">NFT platform</h1>
                    </a>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-white rounded-md bg-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                      <span className="sr-only">Close menu</span>
                      <XIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {headerDetails.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-3 -m-3 rounded-md hover:bg-white"
                      >
                        <span className="ml-3 text-base font-medium text-black">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}
