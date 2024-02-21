import React from 'react'
import Link from 'next/link'
export const Fotter = () => {
    return (
        <footer className="mt-auto border-t w-full">
            <div className='container flex flex-row py-4 '>
                <div className='hidden md:flex md:flex-row md:space-x-6 text-xs px-6'>

                    <Link className="hover:underline whitespace-nowrap " href="#">
                        Terms of Service
                    </Link>

                    <Link className=" hover:underline whitespace-nowrap" href="#">
                        Privacy Policy
                    </Link>

                    <Link className="hover:underline whitespace-nowrap" href="#">
                        Support
                    </Link>

                </div>
                <div className='flex justify-center md:justify-end px-6 h-full w-full'>
                    <p className="text-white text-xs">© 2023 BeyondLetter</p>
                </div>
            </div>
        </footer>
    )
}

export default Fotter
