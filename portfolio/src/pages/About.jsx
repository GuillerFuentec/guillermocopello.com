import pic from "../media/Profile.jpg";
import { logos } from "./logos";
import "./media/about.css";

export default function About() {
  return (
    <>
      <div className="container-logo">
        <div className="refill1"></div>
        <div>
          <img
            src={pic}
            className="about-pic rounded-full justify-self-center"
          />
          <div className="justify-self-start items-center">
            <h2 className="font-bold ">Jr Software Developer</h2>
            <h4 className="">Hi there 👋</h4>
            <h4 className="">I am Copello, a passionate React Web developer</h4>
            <div className="">
              <button className="btn btn-accent join-item my-4">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="refill2"></div>
      </div>
      <div className="hero mt-4">
        <div className="hero-content text-left">
          <div className="w-3/4 ">
            <div className="mt-8">
              <div>
                <h2 className="text-xl font-bold mb-2">-Profile</h2>
                <p className="mb-10">
                  I’m a self-taught software developer with two years of
                  experience in web development. As a frontend developer, I work
                  with languages such as C#, JavaScript, HTML, CSS, React,
                  Redux, NextJS, Vite, ASP.Net, and the .Net ecosystem. I also
                  work with Unity Engine, MonoBeheviour API and handle tools
                  like Blender, FL Studio, Photoshop, and Adobe Premiere.
                  Although design is not my strong suit, I strive to improve
                  every day
                </p>
              </div>
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-2">-Education</h2>
                <p>
                  I am self-taught, and i have learned much more by doing things
                  than by formal training, but don’t let this deceive you, I
                  have{" "}
                  <span className="font-bold">
                    invested more than 10.000 hours of my life
                  </span>{" "}
                  in learning to program and develop web applications on
                  platforms such as:
                </p>
                <ul className="mt-4">
                  <li className="ml-8 font-bold">
                    <a>* Udemy</a>
                  </li>
                  <li className="ml-8 font-bold">
                    <a>* FreeCodeCamp</a>
                  </li>
                  <li className="ml-8 font-bold">
                    <a>* Alura</a>
                  </li>
                  <li className="ml-8 font-bold">
                    <a>* Microsft learning</a>
                  </li>
                  <li className="ml-8 font-bold">
                    <a>* Unity Learn</a>
                  </li>
                </ul>
              </div>
              {/* Projecto 1 */}
              <div>
                {/* Title */}
                <h2 className="text-xl font-bold mb-4">-Experience</h2>
                <ul className="mt-4">
                  <li className="">
                    <h4 className="text-xl">
                      <a>-- Developed the complete CNADTED website</a>
                    </h4>
                    <span className="flex pl-2 text-xs my-2">Jan, 2023</span>
                    <span className="flex text-xs mb-2 -mt-2">
                      This project is still under development
                    </span>
                    <br />
                    <h3>Overview:</h3>
                    <p className="mt-2 mb-6">
                      CNADTED is a private, independent, non-profit entity, of a
                      permanent nature, autonomous, of common utility, without
                      character, affiliation, ideology or political interest,
                      which is governed by articles 633 to 652 of the Colombian
                      Civil Code, decree 2150 of 1995 and other concordant
                      norms. Therefore, at no time can its assets,
                      beneficiaries, valuations, profits or credits enter the
                      patrimony of natural or legal persons, in the capacity of
                      distribution of profits, nor in the event of liquidation
                      of the entity, neither directly nor through natural or
                      legal persons. CNADTED's resources must be exclusively
                      destined to the fulfillment of the purposes it pursues,
                      when they are not destined to increase its patrimony.
                    </p>
                    <ul>
                      <br />
                      <li>-JavaScript</li>
                      <br />
                      <li>- HTML</li>
                      <br />
                      <li>- CSS</li>
                      <br />
                      <li>- Supabase</li>
                    </ul>
                  </li>
                  <hr className="my-10" />
                  {/* Project 2 */}
                  <li className="">
                    <h4 className="text-xl">
                      <a>-- UI and development of the random quote machine</a>
                    </h4>
                    <span className="flex pl-2 text-xs my-2">May, 2024</span>
                    <span className="flex text-xs mb-2 -mt-2">
                      This project is finished
                    </span>
                    <h3 className="mt-8">Overview:</h3>
                    <p className="mt-2 mb-6">
                      The "Random Quote Machine" is a web application developed
                      by me. This project serves as a platform to display random
                      quotes to users.
                    </p>
                    <h3>Functionality:</h3>
                    <p className="mt-2 mb-6">
                      Upon loading the page, the application displays a random
                      quote. Users can generate a new random quote with just a
                      click of a button. What makes this project special is that
                      it provides users with a new quote every day, allowing
                      users to consume new phrases every day. This can be
                      especially useful for those seeking a daily dose of
                      inspiration or reflection.
                    </p>
                    <p className="mt-2 mb-6">Technologies used:</p>
                    <p className="mt-2 mb-6">
                      The project is built using a combination of technologies
                      including:
                    </p>
                    <ul>
                      <br />
                      <li>-JavaScript</li>
                      <br />
                      <li>- HTML</li>
                      <br />
                      <li>- CSS</li>
                    </ul>
                  </li>
                  <hr className="my-10" />
                  {/* Projecto 3 */}
                  <li className="">
                    <div className="mt-8"></div>
                    <h4 className="text-xl">
                      <a>-- UI and development of my own Calculator</a>
                    </h4>
                    <span className="flex pl-2 text-xs my-2">Feb, 2024</span>
                    <span className="flex text-xs mb-2 -mt-2">
                      This project is finished
                    </span>
                    <h3 className="mt-8">Overview:</h3>
                    <p className="mt-2 mb-6">
                      This project, developed by me, is a simple calculator
                      application. It is part of a larger collection of projects
                      in the Libraries-Projects repository on GitHub.
                    </p>
                    <h3 className="mt-8">Design:</h3>
                    <p className="mt-2 mb-6">
                      The calculator has a user-friendly interface that
                      resembles a traditional handheld calculator. The buttons
                      are clearly labeled with numbers and mathematical
                      operations, making it easy to use even for those who are
                      not familiar with digital calculator applications.
                    </p>
                    <p className="mt-2 mb-6">Technologies used:</p>
                    <p className="mt-2 mb-6">
                      The project is built using a combination of technologies
                      including:
                    </p>
                    <ul>
                      <br />
                      <li>-JavaScript</li>
                      <br />
                      <li>- HTML</li>
                      <br />
                      <li>- CSS</li>
                    </ul>
                  </li>
                  <hr className="my-10" />
                  {/* Project 4 */}
                  <li className="">
                    <div className="mt-8"></div>
                    <h4 className="text-xl">
                      <a>-- UI and development of my Drum Machine</a>
                    </h4>
                    <span className="flex pl-2 text-xs my-2">Feb, 2024</span>
                    <span className="flex text-xs mb-2 -mt-2">
                      This project is finished
                    </span>
                    <h3 className="mt-8">Overview:</h3>
                    <p className="mt-2 mb-6">
                      This project, developed by me, is a drum machine
                      application. It is part of a larger collection of projects
                      in the Libraries-Projects repository on GitHub.
                    </p>
                    <h3 className="mt-8">Design:</h3>
                    <p className="mt-2 mb-6">
                      The application's interface is simple and easy to use.
                      Each button is clearly labeled with the drum sound it
                      triggers, and the buttons are intuitively organized to
                      facilitate rhythm creation.
                    </p>
                    <h3 className="mt-8">Functionality:</h3>
                    <p className="mt-2 mb-6">
                      The Drum Machine is an interactive application that allows
                      users to play drum sounds. Each drum sound is triggered by
                      clicking a corresponding button or pressing a specific key
                      on the keyboard. The drum sounds include a variety of drum
                      beats and cymbals, allowing users to create their own
                      percussion music. But in this case, I added sounds from
                      the Zelda video game, to make it a bit more different and
                      fun.
                    </p>
                    <p className="mt-2 mb-6">Technologies used:</p>
                    <p className="mt-2 mb-6">
                      The project is built using a combination of technologies
                      including:
                    </p>
                    <ul>
                      <br />
                      <li>-JavaScript</li>
                      <br />
                      <li>- HTML</li>
                      <br />
                      <li>- CSS</li>
                    </ul>
                  </li>
                </ul>
                <div className="my-10">
                  <h2 className="text-xl font-bold mb-2">-Certifications</h2>
                  <ul>
                    <li className="py-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1AM4s4MFnSrMCk5IBXMY5dnbr8W32OyvX?usp=sharing"
                      >
                        ---All certifications of basic develoment
                      </a>
                      <h3 className="text-xl font-bold mt-4">
                        --Software and Develoment
                      </h3>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1gi5aEETrLF7dDPEw-zzBpY7OxobvlPeo/view"
                      >
                        -- HTML5 AND CSS3 PART 1: MY FIRST WEB PAGE
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1qNoKqnm7g1otPxLkCQkI28MaC8iPqpLL/view"
                      >
                        ---HTML5 AND CSS3 PART 2: POSITIONING, LISTS AND
                        NAVIGATION
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1k22yAHr_I2XT-nuk8RJStiP6XM25OsOL/view"
                      >
                        ---HTML5 AND CSS3 PART 3: WORKING WITH FORMS AND TABLES
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1Tk6q1ONSU5TCUWNOoz-ML41Gz4J3GNLV/view"
                      >
                        ---HTML5 AND CSS3 PART 4: ADVANCING IN CSS
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1ysuzAJSyMPUQ3OETs8TRz-ppts67eech/view"
                      >
                        ---PROGRAMMING LOGIC: FIRST STEPS
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1WCdRBFivqVoqDnJNB_nqzxDmXrLg4oXd/view"
                      >
                        ---PROGRAMMING LOGIC: FUNDAMENTAL CONCEPTS
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1u7-g_0gn4FGYqe6B4Dk0AezjPK2lqHUU/view"
                      >
                        ---PROGRAMMING LOGIC: PRACTICING WITH GAMES AND
                        ANIMATIONS
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1cpSvKC-LckK6u2mAhGQY1y_ufjov5swp/view"
                      >
                        ---JAVA JRE AND JDK: COMPILE AND RUN YOUR FIRST PROGRAM
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://freecodecamp.org/certification/GuillermoCopello/javascript-algorithms-and-data-structures-v8"
                      >
                        ---Java Script Algorithms and Data Structures
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://freecodecamp.org/certification/GuillermoCopello/front-end-development-libraries"
                      >
                        ---Frontend Develoment Libraries
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://freecodecamp.org/certification/GuillermoCopello/foundational-c-sharp-with-microsoft"
                      >
                        ---Funtional C# with Microsoft
                      </a>
                    </li>
                    <h3 className="text-xl font-bold my-4">
                      --Soft Skills & Tools
                    </h3>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1gi5aEETrLF7dDPEw-zzBpY7OxobvlPeo/view"
                      >
                        -- FOCUS: FOCUSING BRINGS MORE RESULTS FOR DAY TO DAY
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1b0LXDxm7LcNTsf7MviHYxh_weiAqWGq4/view"
                      >
                        ---GIT AND GITHUB: CONTROL AND SHARE YOUR CODE
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1xJQKK4jWdKCdFoq1kZdk_IgW1STRvZ2M/view"
                      >
                        ---HABITS: BE PRODUCTIVE TO ACHIEVE YOUR PERSONAL GOALS
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1In-XMLD7BwvOq2N2ohELQkQ82IuDldcx/view"
                      >
                        ---LINKEDIN: HOW TO MAKE YOUR PROFILE WORK FOR YOU
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1CmfQqN9OXPI38OEsWZy1uc9fQCEDyUQ1/view"
                      >
                        ---PRODUCTIVITY: STRATEGIES FOR DAILY ACTIVITIES
                      </a>
                    </li>
                  </ul>
                  <div className="my-8">
                    <h2 className="text-xl font-bold mb-2 py-8">-Skills</h2>
                    <div className="grid grid-cols-3  gap-3 grid-flow-row ">
                      {logos.map((logo, index) => (
                        <div
                          key={index}
                          className="bg-slate-500 sw-auto container-logo2 rounded-md"
                        >
                          <div key={index} className="container-logo2 hadow-lg">
                            <a
                              href={logo.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                width="60"
                                height="60"
                              />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
