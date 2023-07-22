import EventList from "@/components/Eventlist";
//import events from "../events";
import fs from "fs/promises"
export default ({events}) => {
    return <EventList events={events} />;
}
export async function getStaticProps(){
    console.log("getStaticProps")
    const data = await fs.readFile("./events.json");
    const {products:events} = JSON.parse(data);
    return {props:{events}}
}
