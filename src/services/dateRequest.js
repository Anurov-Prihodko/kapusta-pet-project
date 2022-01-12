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
// const dateFormatter = date => {
//   const options = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//   };
//   const normalDate = new Date(date)
//     .toLocaleString('Ru-ru', options)
//     .split('.')
//     .join('-');

//   return normalDate;
// };
