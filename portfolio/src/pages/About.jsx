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
                  Given that I am self-taught, I have learned much more by doing
                  things than by formal training, but don’t let this deceive
                  you, I have invested more than 10000 hours of my life in
                  learning to program and develop web applications on platforms
                  such as:
                </p>
                <ul className="mt-4">
                  <li className="ml-8">
                    <a>* Udemy</a>
                  </li>
                  <li className="ml-8">
                    <a>* FreeCodeCamp</a>
                  </li>
                  <li className="ml-8">
                    <a>* Alura</a>
                  </li>
                  <li className="ml-8">
                    <a>* Microsft learning</a>
                  </li>
                  <li className="ml-8">
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
                      <a>-- Desarrolle la web completa de CNADTED</a>
                    </h4>
                    <span className="flex pl-2 text-xs my-2">jan,2023</span>
                    <span className="flex text-xs mb-2 -mt-2">
                      Este projecto aun continua desarrollandose
                    </span>
                    <br />
                    <h3>Overview:</h3>
                    <p className="mt-2 mb-6">
                      CNADTED es una entidad privada, independiente sin ánimo de
                      lucro, de carácter permanente, autónomo, de utilidad
                      común, sin carácter, filiación, ideología o interés
                      político, la cual se rige por los artículos 633 a 652 del
                      Código Civil Colombiano, el decreto 2150 de 1995 y demás
                      normas concordantes. Por consiguiente, en ningún momento
                      ni sus bienes, ni sus beneficiarios, valoraciones,
                      utilidades o créditos pueden ingresar al patrimonio de
                      personas naturales o jurídicas, en calidad de distribución
                      de utilidades, como tampoco en caso de liquidación de la
                      entidad, ni directamente ni a través de personas naturales
                      o jurídicas. Los recursos de CNADTED deben destinarse de
                      manera exclusiva al cumplimiento de los fines que ella
                      persigue, cuando no se destinen a incrementar su
                      patrimonio
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
                  {/* Projecto 2 */}
                  <li className="">
                    <h4 className="text-xl">
                      <a>-- UI y desarrollo de la random quote machine</a>
                    </h4>
                    <span className="flex pl-2 text-xs my-2">may,2024</span>
                    <span className="flex text-xs mb-2 -mt-2">
                      Este projecto esta terminado
                    </span>
                    <h3 className="mt-8">Overview:</h3>
                    <p className="mt-2 mb-6">
                      El "Random Quote Machine" es una aplicación web
                      desarrollada por mi este proyecto sirve como plataforma
                      para mostrar citas aleatorias a los usuarios.
                    </p>
                    <h3>Funcionalidad:</h3>
                    <p className="mt-2 mb-6">
                      Al cargar la página, la aplicación muestra una cita
                      aleatoria. Los usuarios pueden generar una nueva cita
                      aleatoria con solo hacer clic en un botón. Lo que hace que
                      este proyecto sea especial es que proporciona a los
                      usuarios una nueva cita cada día, lo que permite a los
                      usuarios consumir nuevas frases todos los días. Esto puede
                      ser especialmente útil para aquellos que buscan una dosis
                      diaria de inspiración o reflexión.
                    </p>
                    <p className="mt-2 mb-6">Tecnologías utilizadas:</p>
                    <p className="mt-2 mb-6">
                      El proyecto está construido utilizando una combinación de
                      tecnologías que incluyen:
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
                      <a>-- UI y desarrollo de mi propia Calculadora</a>
                    </h4>
                    <span className="flex pl-2 text-xs my-2">Fab,2024</span>
                    <span className="flex text-xs mb-2 -mt-2">
                      Este projecto esta terminado
                    </span>
                    <h3 className="mt-8">Overview:</h3>
                    <p className="mt-2 mb-6">
                      Este proyecto, desarrollado por mi, es una aplicación de
                      calculadora sencilla. Forma parte de una colección más
                      grande de proyectos en el repositorio Libraries-Projects
                      en GitHub.
                    </p>
                    <h3 className="mt-8">Diseño:</h3>
                    <p className="mt-2 mb-6">
                      La calculadora tiene una interfaz fácil de usar que se
                      asemeja a una calculadora de mano tradicional. Los botones
                      están claramente etiquetados con números y operaciones
                      matemáticas, lo que facilita su uso incluso para aquellos
                      que no están familiarizados con las aplicaciones de
                      calculadora digitales.
                    </p>
                    <p className="mt-2 mb-6">Tecnologías utilizadas:</p>
                    <p className="mt-2 mb-6">
                      El proyecto está construido utilizando una combinación de
                      tecnologías que incluyen:
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
                  {/* Projecto 4 */}
                  <li className="">
                    <div className="mt-8"></div>
                    <h4 className="text-xl">
                      <a>-- UI y desarrollo de mi Drum Machine</a>
                    </h4>
                    <span className="flex pl-2 text-xs my-2">Fab,2024</span>
                    <span className="flex text-xs mb-2 -mt-2">
                      Este projecto esta terminado
                    </span>
                    <h3 className="mt-8">Overview:</h3>
                    <p className="mt-2 mb-6">
                      Este proyecto, desarrollado por mi, es una aplicación de
                      máquina de batería1. Forma parte de una colección más
                      grande de proyectos en el repositorio Libraries-Projects
                      en GitHub
                    </p>
                    <h3 className="mt-8">Diseño:</h3>
                    <p className="mt-2 mb-6">
                      La interfaz de la aplicación es sencilla y fácil de usar.
                      Cada botón está claramente etiquetado con el sonido de
                      batería que activa, y los botones están organizados de
                      manera intuitiva para facilitar la creación de ritmos
                    </p>
                    <h3 className="mt-8">Funcionalidad:</h3>
                    <p className="mt-2 mb-6">
                      La Máquina de Batería es una aplicación interactiva que
                      permite a los usuarios tocar sonidos de batería. Cada
                      sonido de batería se activa al hacer clic en un botón
                      correspondiente o al presionar una tecla específica en el
                      teclado1. Los sonidos de batería incluyen una variedad de
                      golpes de tambor y platillos, lo que permite a los
                      usuarios crear su propia música de percusión, pero en este
                      caso yo le agrege sonidos del videojuego Zelda, para
                      hacerlo un poco mas diferente y divertido
                    </p>
                    <p className="mt-2 mb-6">Tecnologías utilizadas:</p>
                    <p className="mt-2 mb-6">
                      El proyecto está construido utilizando una combinación de
                      tecnologías que incluyen:
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
                        ---HTML5 Y CSS3 PARTE 1: MI PRIMERA PÁGINA WEB
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1qNoKqnm7g1otPxLkCQkI28MaC8iPqpLL/view"
                      >
                        ---HTML5 Y CSS3 PARTE 2: POSICIONAMIENTO, LISTAS Y
                        NAVEGACIÓN
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1k22yAHr_I2XT-nuk8RJStiP6XM25OsOL/view"
                      >
                        ---HTML5 Y CSS3 PARTE 3: TRABAJANDO CON FORMULARIOS Y
                        TABLAS
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1Tk6q1ONSU5TCUWNOoz-ML41Gz4J3GNLV/view"
                      >
                        ---HTML5 Y CSS3 PARTE 4: AVANZANDO EN CSS
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1ysuzAJSyMPUQ3OETs8TRz-ppts67eech/view"
                      >
                        ---LÓGICA DE PROGRAMACIÓN: PRIMEROS PASOS
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1WCdRBFivqVoqDnJNB_nqzxDmXrLg4oXd/view"
                      >
                        ---LÓGICA DE PROGRAMACIÓN: CONCEPTOS PRIMORDIALES
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1u7-g_0gn4FGYqe6B4Dk0AezjPK2lqHUU/view"
                      >
                        ---LÓGICA DE PROGRAMACIÓN: PRACTICANDO CON JUEGOS Y
                        ANIMACIONES
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1cpSvKC-LckK6u2mAhGQY1y_ufjov5swp/view"
                      >
                        ---JAVA JRE Y JDK: COMPILE Y EJECUTE SU PRIMER PROGRAMA
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
                        ---FOCO: ENFOCARSE TRAE MÁS RESULTADOS PARA EL DÍA A DÍA
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1b0LXDxm7LcNTsf7MviHYxh_weiAqWGq4/view"
                      >
                        ---GIT Y GITHUB: CONTROLE Y COMPARTA SU CÓDIGO
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1xJQKK4jWdKCdFoq1kZdk_IgW1STRvZ2M/view"
                      >
                        ---HÁBITOS: SER PRODUCTIVO PARA CUMPLIR SUS METAS
                        PERSONALES
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1In-XMLD7BwvOq2N2ohELQkQ82IuDldcx/view"
                      >
                        ---LINKEDIN: COMO HACER QUE TU PERFIL TRABAJE POR TI
                      </a>
                    </li>
                    <li className="pl-3">
                      <a
                        className="text-slate-500 cursor-pointer hover:text-teal-500"
                        target="_blank"
                        href="https://drive.google.com/file/d/1CmfQqN9OXPI38OEsWZy1uc9fQCEDyUQ1/view"
                      >
                        ---PRODUCTIVIDAD: ESTRATEGIAS PARA ACTIVIDADES DIARIAS
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
                          <div
                            key={index}
                            className="container-logo2 hadow-lg"
                          >
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
