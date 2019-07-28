export const is_before_midday = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  return (currentHour < 12)
}
