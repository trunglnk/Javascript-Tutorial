//Khớp một chuỗi ký tự với các khả năng khác nhau
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);