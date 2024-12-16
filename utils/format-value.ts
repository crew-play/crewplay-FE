export const formattingDateTime = (dateString: string) => {
  const [date] = dateString.split(" "); // 날짜 부분만 추출
  const formattedDate = date.replace(/-/g, ".");
  return formattedDate;
};

export const replaceNumberFormat = (value: number) => {
  return value.toLocaleString();
};
