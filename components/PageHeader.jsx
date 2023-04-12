import Logo from "./Logo";
import LoginButton from "./LoginButton";

const PageHeader = () => (
  <header>
    <nav className="border-b border-b-gray-400">
      <div className="container mx-auto flex max-w-5xl items-center justify-between">
        <ul className="flex text-sm font-bold uppercase">
          <li className="inline-block py-2 pr-6">
            <a href="#">Home</a>
          </li>
          <li className="inline-block py-2 pr-6">
            <a href="#">Technology</a>
          </li>
          <li className="inline-block py-2 pr-6">
            <a href="#">Sports</a>
          </li>
          <li className="inline-block py-2 pr-6">
            <a href="#">Politics</a>
          </li>
        </ul>
        <div>
          <LoginButton />
        </div>
      </div>
    </nav>
    <div className="container mx-auto max-w-5xl">
      <Logo className="my-6 mx-auto h-16" />
      <hr />
    </div>
  </header>
);

export default PageHeader;
