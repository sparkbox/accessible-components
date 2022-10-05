import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Accessibility Cheatsheets for Components
        </h1>
        <ul>
          <li><Link href='/accordion'><a>Accordion</a></Link></li>
          <li><Link href='/dialog'><a>Dialog</a></Link></li>
          <li><Link href='/disclosure'><a>Disclosure</a></Link></li>
          <li><Link href='/tabs'><a>Tabs</a></Link></li>
        </ul>
      </main>
    </div>
  );
}
