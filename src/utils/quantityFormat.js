export function quantityFormat(quantity) {
    quantity = Math.round(quantity * 100)  / 100;
    return quantity;
}
