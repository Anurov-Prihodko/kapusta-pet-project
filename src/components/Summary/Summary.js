import "./Summary.module.css";

const MONTHS = [
  "ЯНВАРЬ",
  "ФЕВРАЛЬ",
  "МАРТ",
  "АПРЕЛЬ",
  "МАЙ",
  "ИЮНЬ",
  "ИЮЛЬ",
  "АВГУСТ",
  "СЕНТЯБРЬ",
  "ОКТЯБРЬ",
  "НОЯБРЬ",
  "ДЕКАБРЬ",
];

/*formatNumber - function from Internet*/
function formatNumber(number) {
  const numberString = number.toFixed(2) + "";
  const x = numberString.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? "." + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + " " + "$2");
  }
  return x1 + x2;
}

/*
Component Summary expects props in form:
  {
      data: [
         {
             month: <a number 0..11>,
             sum: <a number>
        },
        {...}
      ],
  }
*/
const Summary = ({ data }) => {
  return (
    <div className="summaryContainer">
      <p className="summaryTitle">Сводка</p>
      <table className="summaryTable">
        {data.map((monthData) => {
          return (
            <tr>
              <td className="summaryMonth">{MONTHS[monthData.month]}</td>
              <td className="summarySum">{formatNumber(monthData.sum)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Summary;
