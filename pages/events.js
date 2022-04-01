import { useRouter } from 'next/router';
import { useState } from 'react';

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const res = await fetch(`http://localhost:4000/events?category=sports`);
    const data = await res.json();
    setEvents(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>Events</h1>

      {events.map((item) => (
        <div key={item.id}>
          <h1>{`${item.id} ${item.title} ${item.category}`}</h1>
          <hr />
        </div>
      ))}
    </>
  );
};
export default EventList;
export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : '';
  const res = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await res.json();
  return { props: { eventList: data } };
};
