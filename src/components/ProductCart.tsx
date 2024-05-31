import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
}
interface CardProps {
    product: Product;
    onAddCart: (Product: Product) => void;
}