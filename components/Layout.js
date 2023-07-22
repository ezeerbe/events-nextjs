import Card from "./ui/Card";
import Link from "./ui/Link"
export default function Layout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
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
