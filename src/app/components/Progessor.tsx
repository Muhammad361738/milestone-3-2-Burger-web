// "use client"
import React from 'react';

const Progessor = () => {
    return (
        <div className="flex flex-col items-center md:flex-row max-w-screen-lg w-full mx-auto mt-10">
            {/* Step 1 */}
            <div className=" items-center text-center mt-4 md:items-start md:text-left md:flex-row md:w-1/3">
                <div className="flex items-center  w-full">
                    <div className="w-8 h-8 shrink-0 bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
                        <span className="text-base text-black font-bold">1</span>
                    </div>
                    <div className="w-48  h-1 mx-4 rounded-lg bg-cyan-500"></div>
                </div>
                <div className="mt-2 md:mt-0 md:ml-4">
                    <h6 className="text-base font-bold text-amber-500">Step 1: Choose Your Dish</h6>
                    <p className="text-xs text-white">Explore our delicious menu and select your favorite meal.</p>
                </div>
            </div>

            {/* Step 2 */}
            <div className=" items-center mt-4 text-center md:items-start md:text-left md:flex-row md:w-1/3">
                <div className="flex items-center w-full">
                    <div className="w-8 h-8 shrink-0 bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
                        <span className="text-base text-black font-bold">2</span>
                    </div>
                    <div className="w-48 h-1 mx-4 rounded-lg bg-cyan-500"></div>
                </div>
                <div className="mt-2 md:mt-0 md:ml-4">
                    <h6 className="text-base font-bold text-amber-500">Step 2: Customize Your Order</h6>
                    <p className="text-xs text-white">Tailor your meal to your taste.Tailor your meal to your taste.</p>
                </div>
            </div>

            {/* Step 3 */}
            <div className=" items-center mt-4 text-center md:items-start md:text-left md:flex-row md:w-1/3">
                <div className="flex items-center w-full">
                    <div className="w-8 h-8 shrink-0 bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
                        <span className="text-base text-black font-bold">3</span>
                    </div>
                    <div className="w-48 h-1 mx-4 rounded-lg bg-cyan-500"></div>
                </div>
                <div className="mt-2 md:mt-0 md:ml-4">
                    <h6 className="text-base font-bold text-amber-500">Step 3: Place Your Order</h6>
                    <p className="text-xs text-white">Ready to eat? Proceed to checkout and complete your order!</p>
                </div>
            </div>
        </div>
    );
};

export default Progessor;
