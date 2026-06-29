import React from 'react'
import { ArrowRight } from "lucide-react";

const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'
            >
                <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-bold'>1</h2>
                <div>
                    <p className='text-xl leading-relaxed font-semibold text-white mb-14'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis deleniti, natus ad ex obcaecati nihil.
                    </p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-lg'>Satisfied</button>
                        <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full text-lg'>
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default RightCardContent
