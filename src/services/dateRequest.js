export default function dateRequest(date) {
  const tm = date;

  let month = tm.getMonth() + 1;

  if (month < 10) {
    month = ('0' + month).slice(-2);
  }

  const year = tm.getFullYear();
  const resTxt = month + '-' + year;

  return resTxt;
}
