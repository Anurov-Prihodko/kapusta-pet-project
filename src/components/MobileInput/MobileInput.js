import s from './MobileInput.module.scss';
import Icons from '../../Icons';
import ButtonBasic from '../ButtonBasic/ButtonBasic';

export default function MobileInput() {
  return (
    <div className={s.expininput}>
      <div className={s.inputfirst}>
        <input
          type="text"
          className={s.expinplace}
          placeholder="Описание товара"
        />
        <select className={s.expinplace}>
          <option value="">Категория товара</option>
          <option value="">Транспорт</option>
          <option value="">Продукты</option>
          <option value="">Здоровье</option>
          <option value="">Алкоголь</option>
          <option value="">Развлечения</option>
          <option value="">Всё для дома</option>
          <option value="">Техника</option>
          <option value="">Коммуналка, связь</option>
          <option value="">Спорт, хобби</option>
          <option value="">Образование</option>
          <option value="">Прочее</option>
        </select>
      </div>
      <div className={s.secondinput}>
        <input type="number" placeholder="0" className={s.expinplace} />
        <Icons
          name="calculator"
          width={20}
          height={20}
          className={s.iconCalculator}
        />
      </div>
      <div className={s.btnGroup}>
        <ButtonBasic type="submit" active={true} name="enter">
          Ввод
        </ButtonBasic>
        <ButtonBasic type="submit" active={false} bordered={true} name="clean">
          Очистить
        </ButtonBasic>
      </div>
    </div>
  );
}
