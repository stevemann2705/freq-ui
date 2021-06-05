export function getColor(amount, toCompare) {
    if (amount) {
        if (amount > toCompare) {
            return "green";
        } else {
            return "red";
        }
    } else {
        return "inherit";
    }
}
