const moment = require('moment');

function formatVietnameseDate(date) {
    return moment(date).format('DD/MM/YYYY');
}

function getVietnameseWeekday(date) {
    const weekday = moment(date).format('dddd');
    const weekdays = {
        Monday: 'Thứ Hai',
        Tuesday: 'Thứ Ba',
        Wednesday: 'Thứ Tư',
        Thursday: 'Thứ Năm',
        Friday: 'Thứ Sáu',
        Saturday: 'Thứ Bảy',
        Sunday: 'Chủ Nhật',
    };
    return weekdays[weekday];
}

module.exports = {
    formatVietnameseDate,
    getVietnameseWeekday,
};