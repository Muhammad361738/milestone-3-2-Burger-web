export default function handler(req,res){
    const Products = [
        {
            id : 1,
            name : "Cheese Burger",
            price : 810,
            image : "./c1.png",

        },
        {
            id : 2,
            name : "French Burger",
            price : 930,
            image : "./c2.png",

        },
        {
            id : 3,
            name : "Maxican Burger",
            price : 510,
            image : "./c3.png",

        },
        {
            id : 4,
            name : "American Burger",
            price : 1050,
            image : "./c4.png",

        },
        {
            id : 5,
            name : "Chinese Burger",
            price : 890,
            image : "./c5.png",

        },
        {
            id : 6,
            name : "Arabian Burger",
            price : 1500,
            image : "./c6.png",

        },
    ]
    res.status(200).json(Products)
}