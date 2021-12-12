import './HomeTable.scss'
import Icons from '../../Icons'

const tableHead = [
    'ДАТА',
    'ОПИСАНИЕ',
    'КАТЕГОРИЯ',
    'СУММА',
]
const transactions = ['id','asdfas','sdfasdf','asdfas','asdf', 'date', 'discription', 'category', 'sum','id','asdfas','sdfasdf','asdfas','asdf', 'date', 'discription', 'category', 'sum'];

export default function HomeTable() {
    return (
        <>
            <table className = {'table'}>
                <thead className = {'table-head'}>
                    <tr className = {'table-head_row'}>
                        {tableHead.map(head => (
                            <th className={'table-head_data'} key={head}>
                                {head}                                
                            </th>
                        ))}
                    </tr>                    
                </thead>
                <tbody className={'table-body'} id={'scroll'}>                    
                    {transactions.map(
                        ({ id, date, discription, category, sum }) => (
                            <tr className={'table-body_row'}>
                                <td className={'table-body_data'}>{date}</td>
                                <td className={'table-body_data'}>{discription}</td>
                                <td className={'table-body_data'}>{category}</td>
                                <td className={'table-body_data'}>{sum}</td>
                                <td className={'table-body_data'}>
                                    <button
                                        type='button'
                                        className='table-body_btn'
                                        id={id}                                        
                                    >
                                        <Icons name='delete' className={'table-body_delete'} />
                                    </button>
                                </td>
                                
                            </tr>
                            
                        ))}
                    </tbody>
            </table>
            
        </>
    )
}
