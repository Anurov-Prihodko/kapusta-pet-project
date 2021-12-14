import './Reports.scss';
import Icons from '../../Icons'

export default function Reports() {
    return (
        <div className={'reports'}>
            <a href={'#'} className={'reports_link'}>Перейти к отчетам</a>
            <Icons name='bar_chart' className={'reports_icon'} />
        </div>
    )
}