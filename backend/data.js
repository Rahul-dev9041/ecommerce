import bcrypt from 'bcryptjs';
const data = {
    users: [
     {
         name:'Rahul',
        email:'admin@email.com',
        // password: bcrypt.hashAsync('1234', 8),
        isAdmin: true,
     },
     {
        name:'John',
       email:'user@email.com',
    //    password: bcrypt.hashAsync('1234', 8),
       isAdmin: false,
    },
    ],
    products: [
        {_id: "1",
        name: "Nike Slim Shirt",
        category:"Shirts",
        images: "/images/p1.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating:4.5,
        numReview:11,
        description:'High Quality Products',

        },
        {_id: "2",
        name: "Adidas Fit Shirt",
        category:"Shirts",
        images: "/images/p2.jpg",
        price: 100,
        countInStock: 20,
        brand: "Adidas",
        rating:4.0,
        numReview:43,
        description:'High Quality Products',

        },
        {_id: "3",
        name: "Lacoste Shirt",
        category:"Shirts",
        images: "/images/p3.jpg",
        price: 220,
        countInStock: 0,
        brand: "Lacoste",
        rating:5.0,
        numReview:43,
        description:'High Quality Products',

        },
        {_id: "4",
        name: "Nike Slim Pants",
        category:"Pants",
        images: "/images/p4.jpg",
        price: 134.50,
        countInStock: 15,
        brand: "Nike",
        rating:4.5,
        numReview:12,
        description:'High Quality Products',

        },
        {_id: "5",
        name: "Puma Slim Pants",
        category:"Pants",
        images: "/images/p5.jpg",
        price: 230,
        countInStock: 5,
        brand: "Puma",
        rating:4.0,
        numReview:10,
        description:'High Quality Products',

        },
        {_id: "6",
        name: "Adidas Fit Pant",
        category:"Pants",
        images: "/images/p6.jpg",
        price: 125,
        countInStock: 12,
        brand: "Adidas",
        rating:4.5,
        numReview:15,
        description:'High Quality Products',

        },
    ]
} 

export default data; 