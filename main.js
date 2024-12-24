function checkMonth() {
  //   let monthNumber = document.getElementById("search").value;
  //   nunber = number(monthNumber);
  //   let monthMessage = document.getElementById("message");
  let monthNumber = parseInt(document.getElementById("search").value, 10);
  let monthMessage = document.getElementById("monthMessage");
  let invalid = document.getElementById("invalidMessage");

  // const months = [
  //   "January",
  //   "Febuary",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  if (monthNumber === 1) {
    monthMessage.textContent = "January";
  } else if (monthNumber === 2) {
    monthMessage.innerText = "Febuary";
  } else if (monthNumber === 3) {
    monthMessage.innerText = "March";
  } else if (monthNumber === 4) {
    monthMessage.innerText = "April";
  } else if (monthNumber === 5) {
    monthMessage.innerText = "May";
  } else if (monthNumber === 6) {
    monthMessage.innerText = "June";
  } else if (monthNumber === 7) {
    monthMessage.innerText = "July";
  } else if (monthNumber === 8) {
    monthMessage.innerText = "August";
  } else if (monthNumber === 9) {
    monthMessage.innerText = "September";
  } else if (monthNumber === 10) {
    monthMessage.innerText = "October";
  } else if (monthNumber === 11) {
    monthMessage.innerText = "November";
  } else if (monthNumber === 12) {
    monthMessage.innerText = "December";
  } else {
    monthMessage.innerText = "Please enter a valid number between 1 and 12";
  }
}
