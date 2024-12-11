export const getDeadline = () => {
  const now = new Date(); // 현재 시간
  const currentDay = now.getDay(); // 요일 (0: 일요일, 1: 월요일, ...)
  const daysUntilMonday = (8 - currentDay) % 7; // 다음 월요일까지 남은 일수
  const nextMonday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + daysUntilMonday,
    0,
    0,
    0,
  );

  // getTime()을 사용해 밀리초 단위로 변환 후 차이 계산
  const diff = nextMonday.getTime() - now.getTime();

  // 밀리초 단위를 시간/분/초로 변환
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
