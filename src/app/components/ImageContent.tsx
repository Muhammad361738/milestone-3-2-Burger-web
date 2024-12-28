import React from 'react'

const FloatImageContantBlock = () =>{
    return(
        <section className='container mx-auto py-10 flex flex-col md:flex-row items-center '>
            <div className='md:w-1/2 md:pr-10'>
                <h2 className='text-3xl font-bold mb-4 text-white '>
                    Delicious Burger
                </h2>
                <p className='text-white mb-4 '>
                    Experience The Juiciest burger in town , made with fresh ingredients and grilled with profection
                </p>
                <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300'>
                    Order Now
                </button>
                <h3 className='text-2xl font-semibold mt-6 mb-2 text-white' >
                    coming Soon : Our New Burger Launches
                </h3>
                <ul className='text-white'>
                    <li>
                       <strong> Avocado Veggle Burger:</strong>
                       A delicious Plant-based option featuring veggle patty
                    </li>
                    <br />
                    <li>
                       <strong> Avocado Veggle Burger:</strong>
                       A delicious Plant-based option featuring veggle patty
                    </li>
                    <br />
                    <li>
                       <strong> Avocado Veggle Burger:</strong>
                       A delicious Plant-based option featuring veggle patty
                    </li>
                    <br />
                    <li>
                       <strong> Avocado Veggle Burger:</strong>
                       A delicious Plant-based option featuring veggle patty
                    </li>
                    <br />
                </ul>
               
            </div>
            <div className='md:w-1/2 mt-6 md:mt-0 '>
                    <img src="./p1.png" alt="delious burger"
                    className='w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7 ' />
                </div>
        </section>
    )
}
export default FloatImageContantBlock