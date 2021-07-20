export const toEUR = (num) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(num);

export const timeFormater = (num) => {
  const seconds = num % 60;
  num = Math.trunc(num / 60);
  const minutes = num % 60;
  const hours = Math.trunc(num / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
