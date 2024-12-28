import React from 'react';

const Cardsoul = () => {
    return (
        <div>
            <section className='bg-gradient-to-r from-black to-gray-700'>
                <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
                        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-500 h-auto md:h-full flex flex-col'>
                            <a href=""
                            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow '>
                            
                            <img src="./h1.png" alt="burger1" 
                            className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 xs:text-xl md:text-0xl'>Classic Bites</h3>
                            </a>
                        </div>
                        <div className='col-span-2 sm:col-span-1 rounded-lg md:col-span-2 bg-gradient-to-r from-black to-gray-500'>
                            <a href=""
                            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                              <img src="./h3.png" alt="burger1" 
                            className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 xs:text-xl md:text-0xl'>Gourment Grills</h3>  
                            </a>
                            <div className='grid gap-4 pt-4 overflow-hidden px-1 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 bg-gradient-to-r from-black to-gray-500'>
                            <a href=""
                            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                              <img src="./h2.png" alt="burger1" 
                            className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 xs:text-xl md:text-0xl'>Spicy Masala</h3>  
                            </a>
                            <a href=""
                            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                              <img src="./h4.png" alt="burger1" 
                            className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 xs:text-xl md:text-0xl'>Veggie</h3>  
                            </a>
                        </div>
                        </div>
            
                        <div className='col-span-2 sm:col-span-1 md:col-span-1 bg-gradient-to-r from-black to-gray-500 h-auto md:h-full flex flex-col'>
                            <a href=""
                            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow '>
                            
                            <img src="./h5.png" alt="burger1" 
                            className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
                                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 xs:text-xl md:text-0xl'>Cheesy Delights</h3>
                            </a>
                        </div>                         
                        
            



                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cardsoul;
