//Sử dụng every Phương thức để kiểm tra xem mọi phần tử trong một mảng có đáp ứng tiêu chí không
function checkPositive(arr) {
    // Only change code below this line
    return arr.every(function(value) {
        return value > 0;
    });

    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);