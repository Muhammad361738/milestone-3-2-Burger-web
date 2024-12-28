import React from 'react';

const products = [
    {
        id: 1,
        title: "Mexican Burger",
        category: "Fixing",
        price: "200.00",
        imageUrl: "./max.png",
        bgColor: "bg-amber-500",
    },
    {
        id: 2,
        title: "Delights",
        category: "Fixing",
        price: "150.00",
        imageUrl: "./del.png",
        bgColor: "bg-teal-500",
    },
    {
        id: 3,
        title: "Family Burger",
        category: "Fixing",
        price: "400.00",
        imageUrl: "./fam.png",
        bgColor: "bg-amber-500",
    },
];

const ProductList = () => {
    return (
        <div className="p-4 flex flex-wrap items-center justify-center gap-8">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`relative flex flex-col w-80 overflow-hidden ${product.bgColor} rounded-lg shadow-lg group transition-transform transform hover:scale-105`}
                >
                    {/* Image Section */}
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div
                            className="absolute w-48 h-48 bg-gradient-to-br from-black via-transparent to-transparent rounded-full opacity-20"
                            style={{ transform: "rotate3d(0, 0, 1, 20deg) scale(1.5)" }}
                        ></div>
                        <img className="relative  w-52 h-52 object-cover rounded-lg" src={product.imageUrl} alt={product.title} />
                    </div>

                    {/* Content Section */}
                    <div className="relative text-white px-6 pb-6 mt-4 flex flex-col justify-between h-full">
                        <span className="block opacity-75 mb-1 text-sm">{product.category}</span>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="block font-semibold text-lg">{product.title}</span>
                            <span className="block bg-white text-orange-500 rounded-full text-xs font-bold px-3 py-1">
                                ${product.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
