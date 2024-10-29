import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className="flex overflow-hidden z-10 flex-col items-start px-20 py-16 mb-0 w-full leading-none text-black bg-green-400  max-md:px-5 max-md:max-w-full">
      <h2 className="text-5xl max-md:text-4xl">Get In Touch</h2>
      <div className='w-[60%] max-sm:w-full'>
        <p className="mt-8 ml-16 max-sm:ml-5 text-2xl font-medium leading-7 max-md:max-w-full max-sm:text-base">
          Have a project in mind or just want to chat? I'm always open to new ideas and collaborations. Reach out, and let's make something remarkable together!
        </p>
        <Link href={'mailto:gayalsunil@gmail.com'} target='_blank' className="relative inline-flex items-center justify-center p-4 px-6 max-sm:px-3 max-sm:py-2 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-md group gap-2 self-stretch mt-8 max-sm:mt-5 ml-16 text-xl max-sm:text-base text-pink-5 bg-stone-900 min-h-[53px] max-sm:ml-6 max-md:ml-16 hover:scale-110">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full font-light text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
            Say Hello👋
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-zinc-300 transition-all duration-300 transform group-hover:translate-x-full ease">Let's Connect</span>
          <span className="relative invisible">Let's Connect</span>
        </Link>
      </div>
    </section>
  )
}

export default Contact