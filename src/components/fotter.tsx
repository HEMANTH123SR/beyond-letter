import React from 'react'
import Link from 'next/link'
export const Fotter = () => {
    return (
        <footer className='bg-blue-700 border-t-2 border-white'>
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        className="inline-block rounded-full bg-white p-2 text-blue-700 shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
                        href="#MainContent"
                    >
                        <span className="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center  lg:justify-start space-x-2">
                            <div className="flex flex-col justify-center items-center space-y-0.5">
                                <div className="h-2.5 w-7 rounded-full bg-blue-400"></div>
                                <div className="h-1.5 w-4 rounded-full bg-white"></div>
                            </div>
                            <h1 className="font-semibold font-sans">
                                Beyond<span>Letter</span>
                            </h1>
                        </div>


                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                            cum itaque neque.
                        </p>
                    </div>

                    <ul
                        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                    >
                        <li>
                            <a className="text-white" href="#"> About </a>
                        </li>

                        <li>
                            <a className="text-white" href="#"> Services </a>
                        </li>

                        <li>
                            <a className="text-white" href="#"> Projects </a>
                        </li>

                        <li>
                            <a className="text-white" href="#"> Blog </a>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-white lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Fotter
