import Card from "./ui/Card";
import Link from "./ui/Link";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      <Head>
        <title>An event app built using nextjs.</title>
        <meta name="description" content="event app"/>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Card>
        <nav>
          <ul className="hidden md:my-6 text-xl flex flex-col items-center justify-center space-y-3 md:flex-row md:justify-end md:space-x-6 md:space-y-0">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/events">Event</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </Card>
    </div>
  );
}
