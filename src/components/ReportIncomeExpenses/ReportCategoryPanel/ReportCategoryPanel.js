import Icons from '../../../Icons/Icons';

import styles from './ReportCategoryPanel.module.scss';

export default function ReportCategoryPanel({
  categoryActiveIndex,
  setCategoryActiveIndex,
  reportType,
  setReportType,
  reportLabel,
  categoryData,
}) {
  const toggleReport = () => {
    setCategoryActiveIndex(0);
    reportType === 'expense'
      ? setReportType('income')
      : setReportType('expense');
  };

  const getCategoryBtnClassNames = activeIndex => {
    const categoryBtnClassNames = [styles.categoryBtn];

    if (categoryActiveIndex === activeIndex)
      categoryBtnClassNames.push(styles.active);

    return categoryBtnClassNames.join(' ');
  };

  return (
    <div className={styles.categoryPanel}>
      <div className={styles.toggleReport}>
        <button
          type="button"
          className={styles.toggleReportBtn}
          onClick={toggleReport}
        >
          <Icons
            name="before"
            color="#FF751D"
            width="7"
            height="12"
            className={styles.toggleIcon}
          />
        </button>
        <span className={styles.reportLabel}>{reportLabel}</span>
        <button
          type="button"
          className={styles.toggleReportBtn}
          onClick={toggleReport}
        >
          <Icons
            name="after"
            color="#FF751D"
            width="7"
            height="12"
            className={styles.toggleIcon}
          />
        </button>
      </div>
      <ul className={styles.categoryList}>
        {categoryData?.map(({ category, iconName, totalSum }, index) => (
          <li key={index} className={styles.categoryItem}>
            <span className={styles.categoryTotal}>{totalSum}.00</span>
            <button
              className={getCategoryBtnClassNames(index)}
              onClick={() => setCategoryActiveIndex(index)}
            >
              <div className={styles.categoryIconWrap}>
                <Icons
                  name={iconName}
                  width="56"
                  height="56"
                  className={styles.categoryIcon}
                />
              </div>
            </button>
            <h3 className={styles.categoryName}>{category}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
