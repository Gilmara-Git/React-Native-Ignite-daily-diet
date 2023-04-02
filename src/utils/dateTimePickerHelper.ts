const getUsDate = (date: Date) => {
  const usDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

  return usDate;
};

const getUsTime = (date: Date) => {
  const usTime = date.toLocaleTimeString("en-US");
  const usTimeList = usTime.split("");

  if (usTimeList.length < 11) {
    usTimeList.unshift("0");
  }
  usTimeList.splice(5, 4);
  const fPop = usTimeList.pop();
  const sPop = usTimeList.pop();
  const formattedTime = usTimeList.join("") + " " + sPop + fPop;

  return formattedTime;
};

export { getUsDate, getUsTime };
