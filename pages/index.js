import EventList from "@/components/Eventlist";
import useSWR from "swr";
export default () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const {data, error, loading}=useSWR("https://dummyjson.com/products",fetcher);
    if(error) return <p>Error</p>
    if(!data || loading) return <p>Loading...</p>
  return <EventList events={data.products} />;
};
/*export async function getStaticProps() {
  //const data = await fs.readFile("./events.json");
  //const {products:events} = JSON.parse(data);
   try {
    const data = await fetch("https://dummyjson.com/products");
    const { products: events } = await data.json();
    return { props: { events } };
  } catch {
    return { notFound: true };
  } 
}*/
