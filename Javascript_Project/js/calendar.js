// Lấy tất cả các thẻ td trong bảng
let tdList = document.querySelectorAll('.vncal td');

// Lặp qua từng thẻ td và thêm sự kiện click
tdList.forEach(function(td) {
    td.addEventListener('click', function() {
        // Lấy dữ liệu từ các phần tử con bên trong thẻ td
        let duong = this.querySelector('.duong').textContent;
        let amFull = this.querySelector('.am').textContent;
        let am = amFull.split(' ')[0].trim();
        let chiTiet = amFull.substr(am.length).trim();

        // Tạo đối tượng chứa dữ liệu
        let data = {
            ngayDuong: duong,
            ngayAm: am,
            ngayChiTiet: chiTiet
        };

        // In ra đối tượng chứa dữ liệu
        console.log(data);
        dateDetail(data)
    });
});

function dateDetail(date){
    let dateHeader = document.querySelector(".vncal-header-titles h2")
    dateHeader.innerHTML = `ÂM LỊCH NGÀY ${date.ngayDuong} THÁNG 7 2023`

    let ngayDuong = document.querySelector(".vncal-days .duong")
    ngayDuong.innerHTML = date.ngayDuong

    let ngayAm = document.querySelector(".vncal-days .am")
    ngayAm.innerHTML = date.ngayAm

    let ngayChiTiet = document.querySelectorAll(".chitiet p")
    let dateDetail = ngayChiTiet[0].querySelector("b")
    dateDetail.innerHTML = date.ngayChiTiet
}
