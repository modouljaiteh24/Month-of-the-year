function checkMonth() {
  //   let monthNumber = document.getElementById("search").value;
  //   nunber = number(monthNumber);
  //   let monthMessage = document.getElementById("message");
  let monthNumber = parseInt(document.getElementById("search").value, 10);
  let monthMessage = document.getElementById("monthMessage");
  const button = document.getElementById("toggle");
  const content = document.getElementsByTagName("body")[0];

  button.addEventListener("click", () => {
    content.classList.toggle("dark-mode");
    // if (content.classList.contains("dark-mode")) {
    //   button.innerText = "white";
    //   content.style.backgroundColor = "black";
    // } else {
    //   button.innerText = "black";
    // }
  });

  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "Please enter a valid number between 1 and 12",
  ];

  switch (monthNumber) {
    case 1:
      monthMessage.innerText = months[0];
      break;
    case 2:
      monthMessage.innerText = months[1];
      break;
    case 3:
      monthMessage.innerText = months[2];
      break;
    case 4:
      monthMessage.innerText = months[3];
      break;
    case 5:
      monthMessage.innerText = months[4];
      break;
    case 6:
      monthMessage.innerText = months[5];
      break;
    case 7:
      monthMessage.innerText = months[6];
      break;
    case 8:
      monthMessage.innerText = months[7];
      break;
    case 9:
      monthMessage.innerText = months[8];
      break;
    case 10:
      monthMessage.innerText = months[9];
      break;
    case 11:
      monthMessage.innerText = months[10];
      break;
    case 12:
      monthMessage.innerText = months[11];
      break;
    default:
      monthMessage.innerText = months[12];
  }
}

// let div = document.createElement("div");

// div.innerText = "<h1>Month of the Year</h1>";
// document.body.appendChild(div);
