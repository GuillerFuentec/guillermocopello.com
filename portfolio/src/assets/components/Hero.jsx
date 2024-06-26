import pic from "../../media/Profile.jpg";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center mt-24 mb-0">
        <img src={pic} className="pic rounded-full" />
      </div>
      <div className="hero mt-4">
        <div className="hero-content text-left">
          <div className="w-3/4 ">
            <h1 className="text-5xl font-bold">
              Software Developer Freelancer
            </h1>
            <div className="mt-8">
              <p className="py-6">
                I am Copello, a passionate React Web developer and with a notion
                of creating scripts for Unity 3D Engine, and I currently work as
                a freelancer doing very simple jobs like landing pages. I have a
                deep love for programming.
              </p>
              {/* <p>
                I am currently working on <a>cnadted.com</a>, some jobs and
                orders from my esteemed clients and expanding my skills learning
                JavaScript and React. All my projects are available on
                <a>Github</a>.
              </p>
              <p>
                <br />
                I have experience with vite.js, next.js and express.js and web
                development with vanilla HTML, CSS and JS.
              </p>
              <p className="">
                <span className="resalted-text">My aspirations</span> are to
                become a <span className="resalted-text">FullStack</span>
                web developer, fully mastering technologies such as{" "}
                <span className="resalted-text">entity framework ORM</span>,
                <span className="resalted-text">ASP.NET</span>, development of{" "}
                <span className="resalted-text">API and Rest API</span>,
                <span className="resalted-text">Blazor</span>,{" "}
                <span className="resalted-text">Razor</span>,{" "}
                <span className="resalted-text">React Framework</span>,{" "}
                <span className="resalted-text">Bootstrap</span> and upcoming
                technologies that contribute to the efficiency and acceleration
                of technological development, as long as they are reliable,
                secure and accessible to users.
                <br />
                <br />
              </p> */}
              <span className="resalted-text">
                I regularly write articles on my website
              </span>
              , where I share my knowledge and experiences.
              <br />
              <br />I am someone who is constantly learning and growing along
              with the technology industry.{" "}
              <span className="resalted-text email" id="bio-contact-me">
                Contact me
              </span>
              , I am excited to bring my skills and passion to your team or
              projects.
            </div>
            <div className="">
              <button className="btn btn-accent join-item my-4">
                Download CV
              </button>
            </div>
            <div className="my-4">
              <i className="bi bi-twitter-x pr-6 cursor-pointer"></i>
              <i className="bi bi-linkedin pr-6 cursor-pointer"></i>
              <i className="bi bi-github pr-6 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
