export const dateFormatter = (value: string) => {
  const date = new Date(value);

  // Extract the year, month, and day components from the date object
  const year = date.getFullYear();
  // Months are zero-based, so add 1 to get the correct month
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  // Construct the formatted date string in the desired format
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
