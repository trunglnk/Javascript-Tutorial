// Lấy tất cả các phần tử có lớp "dropdown"
var dropdowns = document.getElementsByClassName("dropdown");

// Lặp qua từng phần tử dropdown
for (var i = 0; i < dropdowns.length; i++) {
    // Gắn sự kiện click cho mỗi phần tử dropdown
    dropdowns[i].addEventListener("click", function(event) {
        // Ngăn chặn sự kiện click được lan truyền lên cấp cao hơn
        event.stopPropagation();

        // Kiểm tra nếu phần tử đang có lớp "active"
        if (this.classList.contains("active")) {
            // Nếu có, xóa lớp "active"
            this.classList.remove("active");
        } else {
            // Nếu không, thêm lớp "active"
            this.classList.add("active");
        }
    });
}

// Lắng nghe sự kiện click trên toàn bộ tài liệu
document.addEventListener("click", function(event) {
    // Lặp qua từng phần tử dropdown
    for (var i = 0; i < dropdowns.length; i++) {
        // Kiểm tra xem sự kiện click có xảy ra trong dropdown hay không
        var isClickedInsideDropdown = dropdowns[i].contains(event.target);

        // Kiểm tra xem phần tử dropdown hiện tại có lớp "active" hay không
        var isActive = dropdowns[i].classList.contains("active");

        // Nếu sự kiện click không xảy ra trong dropdown và dropdown đang có lớp "active", hãy đóng dropdown
        if (!isClickedInsideDropdown && isActive) {
            dropdowns[i].classList.remove("active");
        }
    }
});