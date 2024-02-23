export const getDate = () => {
  const d = new Date();
  const date = d.getDate();
  const monthInNumber = d.getMonth();
  const year = d.getFullYear();
  const monthInWords = [
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
  return `${monthInWords[monthInNumber]} ${date}, ${year}`;
};
