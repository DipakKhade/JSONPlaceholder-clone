export default function Header() {
  return (
    <>
      <nav className="flex gap-[30vw] p-4">
      <h2 className="font-bold text-lg ml-1">JSONPlaceholder</h2>
        <ol className="flex gap-5">
          <li className="cursor-pointer">Guide</li>
          <li className="cursor-pointer">Sponsor this project</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">My JSON Server</li>
        </ol>
      </nav>
    </>
  );
}
