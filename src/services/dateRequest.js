export default function dateRequest(date) {
  const tm = date;

  const month = tm.getMonth() + 1;
  const year = tm.getFullYear();
  const resTxt = month + '-' + year;

  return resTxt;
}
