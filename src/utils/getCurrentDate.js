const getCurrentDate = () => {
  const now = new Date();
  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = now.toLocaleDateString("en-US", options);
  return formattedDate;
};

export default getCurrentDate;
