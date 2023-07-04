//Tạo các số nguyên ngẫu nhiên trong một phạm vi
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}