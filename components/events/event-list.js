import EventItems from "./event-items";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItems
          key={event.id}
          id={event.id}
          date={event.date}
          location={event.location}
          image={event.image}
          title={event.title}
        />
      ))}
    </ul>
  );
};

export default EventList;
