import { Link } from 'react-router-dom';
import Icons from '../../Icons';
import './Reports.scss';

export default function Reports() {
  return (
    <div className={'reports'}>
      <Link to="/reports" className={'reports_link'}>
        Перейти к отчетам
      </Link>
      <Icons name="bar_chart" className={'reports_icon'} />
    </div>
  );
}
