// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionsExpenseMonth } from '../../redux/transactions/transactionsSelectors';
// import { removeExspenseById } from '../../redux/transactions/transactionsOperations';
import contactsAPI from '../../services/transactionsAPI';
import './HomeTable.scss';
import Icons from '../../Icons';

const shortid = require('shortid'); // потом заменить _id с бека

const tableHead = ['ДАТА', 'ОПИСАНИЕ', 'КАТЕГОРИЯ', 'СУММА'];

const dateFormatter = date => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return new Date(date).toLocaleString('Ru-ru', options);
};

export default function HomeTable() {
  const transactionsIncomeMonth = useSelector(getTransactionsExpenseMonth);

  // const dispatch = useDispatch();
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
              {transactionsIncomeMonth?.map(
                ({ _id, sum, transactionName, category, updatedAt }) => (
                  <tr className={'table-body_row'} key={shortid.generate()}>
                    <td className={'table-body_data'}>
                      {dateFormatter(updatedAt)}
                    </td>
                    <td className={'table-body_data'}>{transactionName}</td>
                    <td className={'table-body_data'}>{category}</td>
                    <td className={'table-body_data'}>{sum}</td>
                    <td className={'table-body_data'}>
                      <button
                        type="button"
                        className="table-body_btn"
                        id={_id}
                        onClick={() => {
                          contactsAPI.deleteTransactionById(_id);
                          // dispatch(removeExspenseById(_id));
                        }}
                      >
                        <Icons name="delete" className={'table-body_delete'} />
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
