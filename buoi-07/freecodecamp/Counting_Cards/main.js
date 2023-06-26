// Bạn sẽ viết một hàm đếm thẻ.
// Nó sẽ nhận một cardtham số, có thể là một số hoặc một chuỗi và tăng hoặc giảm countbiến toàn cục theo giá trị của thẻ (xem bảng).
// Sau đó, hàm sẽ trả về một chuỗi có số đếm hiện tại và chuỗi Betnếu số đếm là dương hoặc Holdnếu số đếm là 0 hoặc âm.
// Số lượng hiện tại và quyết định của người chơi ( Bethoặc Hold) phải được phân tách bằng một khoảng trắng.

let count = 0;

function cc(card) {
    // Only change code below this line
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    if( count > 0){
        return count + " Bet"
    }else{
        return count + " Hold"
    }

    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');