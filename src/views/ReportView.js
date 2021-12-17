// import { useMediaQuery } from 'react-responsive';

import HeaderHome from '../components/HeaderHome';
import Report from '../components/Report';

export default function ReportView() {
  // const mobile = useMediaQuery({
  //   query: '(max-width: 767px)',
  // });

  return (
    <>
      <HeaderHome />
      <Report />
    </>
  );
}
