const vietnameseDate = require('./vietnameseDate.js');

const currentDate = new Date();
const formattedDate = vietnameseDate.formatVietnameseDate(currentDate);
const vietnameseWeekday = vietnameseDate.getVietnameseWeekday(currentDate);

console.log('Ngày hôm nay:', formattedDate);
console.log('Thứ của ngày hôm nay:', vietnameseWeekday);