interface Product {
    id: number;
    name: string;
    price: number;
}

type Status = "Available" | "Out of Stock"

function getSummary(product: Product, status: Status): string {
    return `Product ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Status: ${status}`;
}

const myProduct: Product = { id: 99, name: "Headphones", price: 59 };

console.log(getSummary(myProduct, "Available"));