import { useRef } from "react";
import { months, years } from "../../constant/CommonConstant";
import Button from "../ui/button";
import classes from "./event-search.module.css";

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {years.map((year) => (
              <option value={year.value}>{year.name}</option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {months.map((obj, index) => (
              <option key={index} value={obj.month}>
                {obj.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};
export default EventsSearch;
