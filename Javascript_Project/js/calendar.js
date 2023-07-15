//Ren bảng date

// let date = new Date() //lấy ngày giờ hiện tại
// let year = date.getFullYear() //lấy năm hiện tại
// let month = date.getMonth() // lấy tháng hiện tại (0 - 11)
//
// const day = document.querySelector(".calendar-dates");
// const currdate = document.querySelector(".vncal-header-title h4")
// const prenexIcons = document.querySelectorAll(".vncal-header span");
//
// const months=[
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"];
//
// const manipulate=()=> {
//     // lấy ngày đầu tiên của tháng
//     let dayone = new Date(year, month, 1).getDay();
//
//     // lấy ngày cuối cùng của tháng
//     let lastdate = new Date(year, month + 1, 0).getDate();
//
//     // lấy ngày của ngày cuối cùng của tháng
//     let dayend = new Date(year, month, lastdate).getDay();
//
//     // lấy ngày cuối cùng của tháng trước
//     let monthlastdate = new Date(year, month, 0).getDate();
//
//     let lit= ""; // biến lưu trữ  HTML
//
//     // vòng lặp để thêm ngày cuối cùng của tháng trước
//     for (let i=dayone; i > 0; i--) {
//         lit+=`<li class="inactive">${monthlastdate - i + 1}</li>`;
//     }
//
//     // loop to add the dates of the current month
//     for (let i=1; i <=lastdate; i++) {
//         // check if the current date is today
//         let isToday=i===date.getDate() && month===new Date().getMonth() && year===new Date().getFullYear() ? "active": "";
//         lit+=`<li class="${isToday}">${i}</li>`;
//     }
//
//     // loop to add the first dates of the next month
//     for (let i=dayend; i < 6; i++) {
//         lit+=`<li class="inactive">${i - dayend + 1}</li>`
//     }
//
//     // update the text of the current date element with the formatted current month and year
//     currdate.innerText=`${months[month]} ${year}`;
//
//     // update the HTML of the dates element with the generated calendar
//     day.innerHTML=lit;
// }

// manipulate();

let date = new Date(); // Lấy ngày giờ hiện tại
let year = date.getFullYear(); // Lấy năm hiện tại
let month = date.getMonth(); // Lấy tháng hiện tại (0 - 11)

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".vncal-header-title h4");
const prenexIcons = document.querySelectorAll(".vncal-header span");

const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
];

const manipulate = () => {
    // Lấy ngày đầu tiên của tháng
    let dayone = new Date(year, month, 1).getDay();

    // Lấy ngày cuối cùng của tháng
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Lấy ngày của ngày cuối cùng của tháng
    let dayend = new Date(year, month, lastdate).getDay();

    // Lấy ngày cuối cùng của tháng trước
    let monthlastdate = new Date(year, month, 0).getDate();

    let lit = ""; // Biến lưu trữ HTML
    let trCount = 0; // Số lượng thẻ tr đã được tạo
    let nAm = 31;

    // Vòng lặp để thêm ngày cuối cùng của tháng trước
    for (let i = dayone; i > 0; i--) {
        if (trCount === 0) {
            lit += "<tr>"; // Bắt đầu thẻ tr mới
        }

        lit += `
      <td class="skip"></td>
    `;

        trCount++;

        if (trCount === 7) {
            lit += "</tr>"; // Kết thúc thẻ tr
            trCount = 0;
        }
    }

    // Vòng lặp để thêm các ngày của tháng hiện tại
    for (let i = 1; i <= lastdate; i++) {
        if (trCount === 0) {
            lit += "<tr>"; // Bắt đầu thẻ tr mới
        }

        // Kiểm tra nếu ngày hiện tại là hôm nay
        let isToday =
            i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()
                ? "active"
                : "";

        lit += `
      <td class="${isToday ? "current" : ""}">
        <a href="#" title="Xem lịch âm ngày ${i} tháng ${month + 1} năm ${year}">
          <div class="dao ${isToday ? "tot" : ""}">●</div>
          <div class="duong ${isToday ? "current" : ""}">${i}</div>
          <div class="am">${nAm--} Bính Dần</div>
        </a>
      </td>
    `;

        trCount++;

        if (trCount === 7) {
            lit += "</tr>"; // Kết thúc thẻ tr
            trCount = 0;
        }
    }

    // Vòng lặp để thêm các ngày đầu tiên của tháng sau
    for (let i = dayend; i < 6; i++) {
        if (trCount === 0) {
            lit += "<tr>"; // Bắt đầu thẻ tr mới
        }

        lit += `
      <td class="skip"></td>
    `;

        trCount++;

        if (trCount === 7) {
            lit += "</tr>"; // Kết thúc thẻ tr
            trCount = 0;
        }
    }

    // Kết thúc thẻ tr nếu cần thiết
    if (trCount > 0) {
        lit += "</tr>";
    }

    // Cập nhật văn bản của phần tử ngày hiện tại với tháng và năm hiện tại đã được định dạng
    currdate.innerText = `Lịch âm ${months[month]} năm ${year}`;

    // Cập nhật HTML của phần tử ngày với lịch đã tạo
    day.innerHTML = lit;
};

manipulate();

// gán sự kiện nút next, prev
prenexIcons.forEach(icon=> {

    // click icon
    icon.addEventListener("click", ()=> {
        // Kiểm trâ là "calendar-prev" hay "calendar-next"
        month=icon.id==="calendar-prev" ? month - 1 : month + 1;

        // Kiểm tra xem tháng có nằm ngoài phạm vi không
        if (month < 0 || month > 11) {
            // Đặt ngày là ngày đầu tiên của tháng với năm mới
            date=new Date(year, month, new Date().getDate());
            // Đặt năm thành năm mới
            year=date.getFullYear();
            // Đặt tháng thành tháng mới
            month=date.getMonth();
        }

        else {
            // Set the date to the current date
            date=new Date();
        }

        // Call the manipulate function to update the calendar display
        manipulate();

        // Gắn lại sự kiện click vào các phần tử <td>
        addClickEventToTDs();
    });
});


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
        dateDetail(data);
    });
});

// Lấy phần tử td có class là "current" khi trang được tải
let currentTd = document.querySelector('.vncal td.current');

// Kiểm tra xem có phần tử td "current" hay không
if (currentTd) {
    // Lấy dữ liệu từ phần tử td "current" ban đầu
    let duong = currentTd.querySelector('.duong').textContent;
    let amFull = currentTd.querySelector('.am').textContent;
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
    dateDetail(data);
} else {
    // Nếu không có phần tử td "current", mặc định lấy dữ liệu ngày đầu tiên
    let firstTd = document.querySelector('.vncal td');
    if (firstTd) {
        let duong = firstTd.querySelector('.duong').textContent;
        let amFull = firstTd.querySelector('.am').textContent;
        let am = amFull.split(' ')[0].trim();
        let chiTiet = amFull.substr(am.length).trim();

        let data = {
            ngayDuong: duong,
            ngayAm: am,
            ngayChiTiet: chiTiet
        };

        console.log(data);
        dateDetail(data);
    }
}

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

//Hàm gán lại click cho td sau khi click thay đổi lịch
function addClickEventToTDs() {
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

            console.log(data);
            dateDetail(data)
        });
    });
}