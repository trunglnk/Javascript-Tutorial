//Sử dụng đệ quy để tạo đếm ngược

function countdown(n){
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}
