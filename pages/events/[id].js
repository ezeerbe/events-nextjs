import { useRouter } from "next/router";
import Event from "@/components/Event";
import events from "../../events";

export default () => {
  const router = useRouter();
  return <Event event={events.find((e) => e.id == router.query["id"])} />;
};
