//Trả về 1 mảng đã sắp xếp không làm thay đổi mảng ban đầu
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    return [].concat(arr).sort(function(a, b) {
        return a - b;
    });

    // Only change code above this line
}

nonMutatingSort(globalArray);