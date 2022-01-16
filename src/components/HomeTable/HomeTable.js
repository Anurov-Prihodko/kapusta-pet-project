import { useSelector, useDispatch } from 'react-redux';
import {
  getTransactionsExpenseMonth,
  getTransactionsIncomseMonth,
  getIncome,
} from '../../redux/transactions/transactionsSelectors';
import {
  removeExspenseById,
  removeIncomseById,
} from '../../redux/transactions/transactionsOperations';
import './HomeTable.scss';
import Icons from '../../Icons';
import { getTransactionsAnnual } from '../../redux/summary/summaryOperations';
import { getSummaryYear } from '../../redux/summary/summarySelectors';
const shortid = require('shortid'); // потом заменить _id с бека

const tableHead = ['ДАТА', 'ОПИСАНИЕ', 'КАТЕГОРИЯ', 'СУММА'];

export default function HomeTable() {
  const incomeStatus = useSelector(getIncome);
  const year = useSelector(getSummaryYear);
  const transactionsExpenseMonth = useSelector(getTransactionsExpenseMonth);
  const transactionsIncomseMonth = useSelector(getTransactionsIncomseMonth);

  const dispatch = useDispatch();

  const onRemoveExspense = async id => {
    await dispatch(removeExspenseById(id));
    dispatch(getTransactionsAnnual(year));
  };

  const onRemoveIncomse = async id => {
    await dispatch(removeIncomseById(id));
    dispatch(getTransactionsAnnual(year));
  };

  return (
    <>
      <div className={'wrapper-table table-scroll'}>
        <table className={'table'}>
          <thead className={'table-head'}>
            <tr className={'table-head_row'}>
              {tableHead.map(head => (
                <th className={'table-head_data'} key={shortid.generate()}>
                  {head}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <div className={'wrapper-body table-scroll-body'}>
          <table>
            <tbody className={'table-body'} id={'scroll'}>
              {incomeStatus === true
                ? transactionsIncomseMonth?.map(
                    ({ _id, sum, transactionName, category, createdAt }) => (
                      <tr className={'table-body_row'} key={shortid.generate()}>
                        <td className={'table-body_data'}>
                          {createdAt.split('-').join('.')}
                        </td>
                        <td className={'table-body_data'}>{transactionName}</td>
                        <td className={'table-body_data'}>{category}</td>
                        <td
                          className={'table-body_data income-sum'}
                        >{`${sum} грн.`}</td>
                        <td className={'table-body_data'}>
                          <button
                            type="button"
                            className="table-body_btn"
                            id={_id}
                            onClick={() => onRemoveIncomse(_id)}
                          >
                            <Icons
                              name="delete"
                              className={'table-body_delete'}
                            />
                          </button>
                        </td>
                      </tr>
                    ),
                  )
                : transactionsExpenseMonth?.map(
                    ({ _id, sum, transactionName, category, createdAt }) => (
                      <tr className={'table-body_row'} key={shortid.generate()}>
                        <td className={'table-body_data'}>
                          {createdAt.split('-').join('.')}
                        </td>
                        <td className={'table-body_data'}>{transactionName}</td>
                        <td className={'table-body_data'}>{category}</td>
                        <td
                          className={'table-body_data expense-sum'}
                        >{`- ${sum} грн.`}</td>
                        <td className={'table-body_data'}>
                          <button
                            type="button"
                            className="table-body_btn"
                            id={_id}
                            onClick={() => onRemoveExspense(_id)}
                          >
                            <Icons
                              name="delete"
                              className={'table-body_delete'}
                            />
                          </button>
                        </td>
                      </tr>
                    ),
                  )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
