function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

export const formatDate = (time) => {
  const year = time.getFullYear();
  const month = addLeadingZero(time.getMonth() + 1);
  const date = addLeadingZero(time.getDate());

  return `${year}-${month}-${date}`;
};

export const getToday = formatDate(new Date());

export const getNextDay = () => {
  const dateInMs = new Date().getTime() + 24 * 60 * 60 * 1000;
  const dateInObj = new Date(dateInMs);

  return dateInObj
}

export const nextDay = formatDate(getNextDay());

