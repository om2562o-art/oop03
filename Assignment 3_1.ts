export{};
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

let myInventory: Product[] = [
    { id: 1, name: "Laptop", price: 30000, quantity: 10 },
    { id: 2, name: "Phone", price: 15000, quantity: 5 },
    { id: 3, name: "Mouse", price: 1000, quantity: 20 }
];

function updateStock(productId: number, amountSold: number) {
    const product = myInventory.find(item => item.id === productId);
    
    if (!product) return;

    if (amountSold > product.quantity) {
        console.log("Not enough stock");
    } else {
        product.quantity -= amountSold;
    }
}