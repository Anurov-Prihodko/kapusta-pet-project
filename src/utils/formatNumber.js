/*formatNumber - function from Internet*/
// const formatNumber1 = number => {
//   const numberString = number.toFixed(2) + '';
//   const x = numberString.split('.');
//   let x1 = x[0];
//   const x2 = x.length > 1 ? '.' + x[1] : '';
//   const rgx = /(\d+)(\d{3})/;
//   while (rgx.test(x1)) {
//     x1 = x1.replace(rgx, '$1' + ' ' + '$2');
//   }
//   return x1 + x2;
// };

const formatNumber = number => {
  const x = number.toFixed(2).split('.');
  let x1 = x[0];
  let x2 = '.' + x[1];
  if (x1.length <= 3) return x1 + x2;
  x2 = x1.slice(x1.length - 3) + x2;
  x1 = x1.slice(0, x1.length - 3);
  while (x1.length > 3) {
    x2 = x1.slice(x1.length - 3) + ',' + x2;
    x1 = x1.slice(0, x1.length - 3);
    //console.log(x1, x2);
  }
  return x1.length > 0 ? x1 + ' ' + x2 : x2;
};

export { formatNumber };
