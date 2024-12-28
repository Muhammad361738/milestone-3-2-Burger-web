import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
    const ProducImages = [
        './c1.png',
        './c2.png',
        './c3.png',
        './c4.png',
        './c5.png',
        './c6.png',
    ];

    return (
        <div className="relative text-center p-10">
            <div className="absolute inset-0"
                style={{
                    backgroundImage: `url('https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_1280.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    zIndex: '0',
                    opacity: 0.3,  // Adjust opacity to make text more visible
                }}>
                <div className="z-10 relative">
                    <h1 className="font-bold text-5xl text-white mb-2">
                        Most Requested Items
                    </h1>
                    <h1 className="text-4xl text-white mb-16">
                        Order Now..
                    </h1>
                </div>
            </div>

            <section id="projects"
                className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-10 gap-x-14 mt-16 md:grid-cols-2">
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index}
                            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
                            <a href="#">
                                <img src={ProducImages[index]} alt={`product ${index + 1}`}
                                    className="h-80 w-72 object-cover rounded-t-xl" />
                                <div className="px-4 py-3 w-72">
                                    <span className="text-slate-500 mr-3 uppercase text-xs">category</span>
                                    <p className="text-lg font-bold text-red-700 truncate block capitalize">
                                        burger name {index + 1}
                                    </p>
                                </div>
                                <div className="flex items-center px-4 py-3">
                                    <p className="text-lg font-semibold text-black my-3 cursor-auto ">$149</p>
                                    <del>
                                        <br />
                                        <p className="text-sm text-blue-800 cursor-auto ml-2">$189</p>
                                    </del>
                                    <div className="ml-auto">
                                        <FaShoppingCart className="w-5 h-5 text-blue-800" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default ProductCardGrid;
