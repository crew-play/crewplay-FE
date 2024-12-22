export const formattingDateTime = (dateString: string) => {
  const [date] = dateString.split(" "); // 날짜 부분만 추출
  const formattedDate = date.replace(/-/g, ".");
  return formattedDate;
};

export const replaceNumberFormat = (value: number) => {
  return value.toLocaleString();
};

export const formatWeekNumber = (dateString: string) => {
  // yyyy-mm-dd 형식의 문자열을 Date 객체로 변환
  const dateParts = dateString.split("-").map(Number);
  const currentDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); // 월은 0부터 시작
  const startDate = new Date(currentDate.getFullYear(), 11, 16); // 기준일: 12월 16일

  // 기준일 이전 날짜인 경우, 전년도 기준일로 이동
  if (currentDate < startDate) {
    startDate.setFullYear(startDate.getFullYear() - 1);
  }

  // 기준일과 현재 날짜 간의 차이를 계산 (밀리초 단위)
  const diff = currentDate.getTime() - startDate.getTime();

  // 밀리초 -> 일 -> 주 단위로 변환
  const weekNumber = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) + 1;

  return weekNumber;
};
