//Sử dụng phương thức some để kiểm tra xem mọi phần tử trong mảng có đáp ứng tiêu chí không
function checkPositive(arr) {
    // Only change code below this line
    return arr.some(function(value){
        return value > 0
    })

    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);