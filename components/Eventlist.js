import Event from "../components/Event";
export default function EventList(props) {
  const { events } = props;
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {events.map((e) => (
          <Event key={e.id} event={e} />
      ))}
    </div>
  );
}
