export const formatDate = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return dateObj.toLocaleDateString("en-US", options);
};
