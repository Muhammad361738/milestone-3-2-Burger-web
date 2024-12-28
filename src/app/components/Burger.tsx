import React from 'react';

const products = [
    {
        id: 1,
        title: "Spicy Taco Burger",
        category: "Fixing",
        price: "200.00",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        bgColor: "bg-teal-500",
    },
    {
        id: 2,
        title: "Vegan Delight",
        category: "Fixing",
        price: "150.00",
        imageUrl: "./b2.png",  // Replace with actual path for local image
        bgColor: "bg-amber-500",
    },
    {
        id: 3,
        title: "Classic Cheeseburger",
        category: "Fixing",
        price: "400.00",
        imageUrl: "./b3.png",  // Replace with actual path for local image
        bgColor: "bg-teal-500",
    },
];

const Product = () => {
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
                        <img className="relative w-52 rounded-lg h-52 object-cover" src={product.imageUrl} alt={product.title} />
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

export default Product;
