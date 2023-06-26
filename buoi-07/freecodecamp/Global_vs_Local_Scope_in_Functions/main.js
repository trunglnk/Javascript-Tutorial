//Có thể có cả biến cục bộ và biến toàn cục có cùng tên. Khi bạn làm điều này, biến cục bộ sẽ được ưu tiên hơn biến toàn cục.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = "sweater"
    // Only change code above this line
    return outerWear;
}

myOutfit();