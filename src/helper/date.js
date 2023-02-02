export const getToday = new Date();

export const getNextDay = (currentDate) => {
  const parsedDate = Date.parse(currentDate);
  const dateObject = new Date(parsedDate + 24 * 60 * 60 * 1000);
  return dateObject;
};

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

export const formatDate = (time) => {
  const year = time.getFullYear();
  const month = addLeadingZero(time.getMonth() + 1);
  const date = addLeadingZero(time.getDate());

  return `${year}-${month}-${date}`;
};