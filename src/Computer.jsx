// Computer.jsx

import React from "react";

const computers = [
    {
        id: 1,
        name: "Dell Inspiron 15",
        price: 55000,
        details: "Intel Core i5, 8GB RAM, 512GB SSD",
    },
    {
        id: 2,
        name: "HP Pavilion",
        price: 62000,
        details: "Intel Core i7, 16GB RAM, 512GB SSD",
    },
    {
        id: 3,
        name: "Lenovo IdeaPad",
        price: 48000,
        details: "AMD Ryzen 5, 8GB RAM, 512GB SSD",
    },
    {
        id: 4,
        name: "Apple MacBook Air",
        price: 98000,
        details: "Apple M2 Chip, 8GB RAM, 256GB SSD",
    },
];

const Computer = () => {
    return (
        <div className="mainDiv">
            <h1>Computer List</h1>

            {computers.map((item) => (
                <div key={item.id} className="secondDiv">
                    <h2>{item.name}</h2>
                    <h3>Price: ₹{item.price}</h3>
                    <p>{item.details}</p>
                </div>
            ))}
        </div>
    );
};

export default Computer;