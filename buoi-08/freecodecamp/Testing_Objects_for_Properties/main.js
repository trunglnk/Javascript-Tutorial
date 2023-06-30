//Kiểm tra các đối tượng cho các thuộc tính
//Để kiểm tra xem một thuộc tính trên một đối tượng nhất định có tồn tại hay không, bạn có thể sử dụng .hasOwnProperty()

function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp]
    }else{
        return "Not Found"
    }

    // Only change code above this line
}