import EventList from "../../components/events/event-list";
import { getFeaturedEvents } from "../../helpers/api-utils";

const HomePage = (props) => {
  return (
    <div>
      <ul>
        <EventList items={props.events} />
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
