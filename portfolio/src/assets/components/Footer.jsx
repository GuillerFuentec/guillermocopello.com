import logo from "../../media/logo.jpeg";

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <img src={logo} className="foot-pic" />
        <p>
          Racoon Studios LLC.
          <br />
          Providing reliable tech since 2023
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-cols-3 gap-4">
          <i className="bi bi-twitter-x cursor-pointer"></i>
          <i className="bi bi-linkedin cursor-pointer"></i>
          <i className="bi bi-github cursor-pointer"></i>
        </div>
        <span className="mt-2">
          Design and developed by{" "}
          <a
            href="https://github.com/GuillerFuentec"
            target="_blank"
            className="text-accent cursor-pointer hover:text-red-500"
          >
            Ghost
          </a>
        </span>
        <span className="mt-1">
          <a
            href="/privacity"
            className="cursor-pointer text-accent pr-5 hover:text-red-500"
          >
            Privacy
          </a>
          <a
            href="/security"
            className="cursor-pointer text-accent pr-5 hover:text-red-500"
          >
            Secury
          </a>
          <a
            href="/about"
            className="cursor-pointer text-accent hover:text-red-500"
          >
            About
          </a>
        </span>
      </nav>
    </footer>
  );
}
