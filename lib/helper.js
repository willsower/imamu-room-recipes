export function getDate(date) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var year = date.substr(0, 4);
  var month = months[parseInt(date.substr(5, 2)) - 1];
  var day = parseInt(date.substr(8, 2));

  var newDate = month + " " + day + ", " + year;

  return newDate;
}
