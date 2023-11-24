import Link from 'next/link';
import Search from './Search';

export default function Navbar() {
  return (
    <header className="bg-sky-100 sticky top-0 z-10">
      <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-extrabold max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-5xl text-center whitespace-nowrap">
          <Link href="/">Galleria</Link>
        </h1>
        <Search />
      </nav>
    </header>
  );
}
