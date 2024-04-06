function DateParser(dateString: string): string {
  const dateObject = new Date(dateString);

  const day = String(dateObject.getUTCDate()).padStart(2, "0");
  const month = String(dateObject.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = dateObject.getUTCFullYear();

  return `${day}-${month}-${year}`;
}

export default DateParser;
