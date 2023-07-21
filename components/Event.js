export default function Event(props) {
  const { event } = props;
  if (!event) return <p>Not found.</p>;
  return (
    <div className="relative group">
      <img
        className="h-40 w-full object-cover"
        src={event.images[0]}
        alt=""
      />
      <div className="text-white p-2 px-4 absolute bottom-0 right-0 left-0 bg-black opacity-0 duration-500 group-hover:opacity-100 group-hover:bg-opacity-40">
        <p className="text-sm">{event.title}</p>
        <p className="text-xs">{event.description}</p>
      </div>
    </div>
  );
}
