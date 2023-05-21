import css from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ title, data }) {
  return (
    <section className={css.sectionStatistics}>
      {title ? <h2 className={css.title}>Upload stats</h2> : ""}

      <ul className={css.statisticsList}>
        {data.map((item) => (
          <li style={color()} className={css.statisticsEl} key={item.id}>
            <span className={css.statisticsName}>{item.label}</span>
            <span className={css.statisticsPersent}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function color() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const backgroundColor = { backgroundColor: `rgb(${red}, ${green}, ${blue}` };
  return backgroundColor;
}
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default Statistics;
