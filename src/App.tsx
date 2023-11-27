import { useEffect, useState } from "react";
import "./App.css";

// i18n
import { IntlProvider } from "react-intl";

// Bootstrap icons
import {
  Linkedin,
  Twitter,
  Github,
  Globe,
  SunFill,
  MoonFill,
  EnvelopeFill,
} from "react-bootstrap-icons";
import cx from "classnames";

// Components
import Tag from "./components/Tag";
import { useWindupString } from "windups";

// import { useWindupString } from "windups";
// import { gsap } from "../gsap";

const messages = {};

const contact: string = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Exercitationem necessitatibus sed, tenetur aperiam nesciunt cum!
    Neque, temporibus corporis, doloremque molestias incidunt
    quaerat cum itaque quasi eos et rem! Enim, dolorem.`;

function App() {
  const [locale, setLocale] = useState<"fr" | "en">("en");
  const [theme, setTheme] = useState<"dark" | "light">("light");

  // const [text] = useWindupString("Side hustles on which I worked");
  // const [contactText] = useWindupString(contact);

  const [text] =
    useWindupString(`Involved in software development for more than 4 years, I have
  been working as a design and development engineer for more than
  3 years in the Spring and Angular environment. Having gained a
  lot of experience in different environments, I have developed a
  strong knowledge of software architecture, software lifecycle
  management, and development.`);

  useEffect(() => {
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#projects",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
    // tl.fromTo("#projects", { opacity: 0 }, { opacity: 1 });
  }, []);

  function handleThemeChange() {
    setTheme((value) => (value === "light" ? "dark" : "light"));
  }

  function handleLocaleChange() {
    setLocale((value) => (value === "fr" ? "en" : "fr"));
  }

  return (
    <>
      <IntlProvider messages={messages} locale={locale} defaultLocale="en">
        {/* <Navbar /> */}
        <div className={cx({ dark: theme === "dark" })}>
          <div
            className={cx(
              "flex flex-col items-center box-border dark:bg-black transition-colors"
            )}
          >
            <div className="max-w-screen-xl w-full flex md:gap-4">
              <div
                className="flex flex-col gap-4 items-center h-screen box-border py-8 px-4 md:py-16 sticky top-0 transition-all"
                style={{ height: "100dvh" }}
              >
                <div className="flex-1 border-solid border border-indigo-600" />
                <a
                  href="mailto:samuel.tih@outlook.com"
                  className="dark:text-gray-300"
                >
                  <EnvelopeFill size={25} />
                </a>
                <a
                  href="https://linkedin.com/in/samuel-tih"
                  className="dark:text-gray-300"
                >
                  <Linkedin size={25} />
                </a>
                <a href="https://twitter.com/" className="dark:text-gray-300">
                  <Twitter size={25} />
                </a>
                <a
                  href="https://github.com/samueltih"
                  className="dark:text-gray-300"
                >
                  <Github size={25} />
                </a>
              </div>

              <div className="flex-1 flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <div className="flex flex-col gap-4 py-16 md:sticky h-screen box-border md:top-0">
                    <div className="flex-1">
                      <ul className="h-full list-none pl-0">
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#experiences">Work Experience</a>
                        </li>
                        <li>
                          <a href="#gigs">Freelance Gigs</a>
                        </li>
                        <li>
                          <a href="#projects">Projects</a>
                        </li>
                        <li>
                          <a href="#blog">Blog</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a href="/resume.pdf">Get Resume</a>
                    </div>
                    <h1 className="text-[3.25rem] md:text-[4rem] my-0 dark:text-white">
                      Tih <br />
                      Samuel
                      <br /> Mbiyimo'o
                    </h1>
                    <p className="font-bold text-2xl dark:text-white">
                      Software Engineer
                    </p>
                  </div>
                </div>

                <div className="flex-1 py-16 flex flex-col gap-16 dark:text-slate-100 transition-colors">
                  <section id="about" className="h-[85vh]">
                    {/* Involved in software development for more than 4 years, I have
                been working as a design and development engineer for more than
                3 years in the Spring and Angular environment. Having gained a
                lot of experience in different environments, I have developed a
                strong knowledge of software architecture, software lifecycle
                management, and development. */}
                    {text}
                  </section>

                  <section id="experience">
                    {/* <Timeline>
                    <TimelineItem stillWorking start={new Date()}>
                      <h2 className="my-0">Associate Software Engineer</h2>
                      <h4 className="my-0 font-semibold text-gray-500 flex gap-4 items-center">
                        <span className="flex gap-2 items-center whitespace-nowrap">
                          <Buildings />
                          <a href="https://sci2m.com">SCI 2M</a>
                        </span>
                        <span>-</span>
                        <span className="flex gap-2 items-center whitespace-nowrap">
                          <MapPin /> Yaounde, Cameroon
                        </span>
                      </h4>
                      <p className="my-4">
                         Analyse des besoins  Conception et modélisation
                        logiciel  Suivi du développement des applications selon
                        la méthodologie agile Scrum.  Développement des
                        applications aussi dans le frontend que le backend. 
                        Maintenance de l’infrastructure IT par des mises à jour
                        ou par des améliorations.  Formation techniques des
                        nouveaux venus sur environnement IT de l'entreprise. 
                        Réalisation de tests.  Documentation
                      </p>
                      <div className="flex flex-wrap gap-2 items-center text-sm">
                        <Tag>Angular</Tag>
                        <Tag>Spring Boot</Tag>
                        <Tag>Docker</Tag>
                        <Tag>RabbitMQ</Tag>
                        <Tag>Microservices</Tag>
                      </div>
                    </TimelineItem>
                    <TimelineItem
                      start={new Date("08-01-2017")}
                      end={new Date("03-01-2018")}
                    >
                      <h2 className="my-0">Full Stack Developper</h2>
                      <h4 className="my-0 font-semibold text-gray-500 flex gap-4 items-center">
                        <span className="flex gap-2 items-center">
                          <Buildings />
                          <a href="https://sci2m.com">Hadron SA</a>
                        </span>
                        <span>-</span>
                        <span className="flex gap-2 items-center">
                          <MapPin /> Yaounde, Cameroon
                        </span>
                      </h4>
                      <p className="my-4">
                         Développement de nouvelle fonctionnalité pour la
                        plateforme « Plexus » à travers la création d’API REST.
                         Réalisations des interfaces graphiques conformes aux
                        prototypes.
                      </p>
                      <div className="flex flex-wrap gap-2 items-center text-sm">
                        <Tag>Python</Tag>
                        <Tag>React</Tag>
                        <Tag>Django</Tag>
                        <Tag>REST API</Tag>
                      </div>
                    </TimelineItem>
                  </Timeline> */}
                  </section>

                  <section id="experience">
                    {/* <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">Carcam</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        Car rental web application targeting the cameroonian
                        market.
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>React</Tag>
                        <Tag>Bulma CSS</Tag>
                        <Tag>MongoDB</Tag>
                        <Tag>NodeJS</Tag>
                        <Tag>ExpressJS</Tag>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">Visit My Cellar</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        Wine cellar app for booking experiences on target
                        cellars bundled with a e-commerce shop for selling
                        cellar products.
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>React</Tag>
                        <Tag>MySQL</Tag>
                        <Tag>NodeJS</Tag>
                        <Tag>ExpressJS</Tag>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">Urgence Plus Monde</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        Wine cellar app for booking experiences on target
                        cellars bundled with a e-commerce shop for selling
                        cellar products.
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>React</Tag>
                        <Tag>MySQL</Tag>
                        <Tag>NodeJS</Tag>
                        <Tag>ExpressJS</Tag>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">Uzenze</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        Wine cellar app for booking experiences on target
                        cellars bundled with a e-commerce shop for selling
                        cellar products.
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>React</Tag>
                        <Tag>MySQL</Tag>
                        <Tag>NodeJS</Tag>
                        <Tag>ExpressJS</Tag>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">Systac</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        Odoo module for the handling of bank transactions.
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>React</Tag>
                        <Tag>MySQL</Tag>
                        <Tag>NodeJS</Tag>
                        <Tag>ExpressJS</Tag>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">The Vision</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        Odoo module for the handling of bank transactions.
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>Svelte</Tag>
                        <Tag>Svelte Kit</Tag>
                        <Tag>Vite</Tag>
                        <Tag>ExpressJS</Tag>
                      </div>
                    </div>
                  </div> */}
                  </section>

                  <section id="projects">
                    <div className="flex gap-4 items-center my-4">
                      <img
                        src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                        alt="project-image"
                        className="w-32"
                      />
                      <div className="flex-1 flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <h2 className="my-0 flex-1">Document Signer</h2>
                          <a href="https://carcam.cm">
                            <Globe />
                          </a>
                          <a href="https://github.com/samueltih">
                            <Github />
                          </a>
                        </div>
                        <p className="my-2">
                          Document Signing SaaS software for digitally signing
                          documesnts.
                        </p>
                        <div className="flex gap-2 items-center flex-wrap text-sm">
                          <Tag>React</Tag>
                          <Tag>Bulma CSS</Tag>
                          <Tag>MongoDB</Tag>
                          <Tag>NodeJS</Tag>
                          <Tag>ExpressJS</Tag>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">Sentechnicien</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        Work Platform similar to upwork to act as middleman
                        between customers and artisans.
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>React</Tag>
                        <Tag>MySQL</Tag>
                        <Tag>NodeJS</Tag>
                        <Tag>ExpressJS</Tag>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">Phoecc</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">Medical App for handling urgency</p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>React</Tag>
                        <Tag>Tailwind CSS</Tag>
                        <Tag>NextJS</Tag>
                        <Tag>NodeJS</Tag>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">KSell</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        Wine cellar app for booking experiences on target
                        cellars bundled with a e-commerce shop for selling
                        cellar products.
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>React</Tag>
                        <Tag>MySQL</Tag>
                        <Tag>NodeJS</Tag>
                        <Tag>ExpressJS</Tag>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">Richesse d'Afrique</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        E-Commerce beauty and cosmetics shop for the brand
                        "Richesse d'Afrique"
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>Nuxt 3</Tag>
                        <Tag>Prisma</Tag>
                        <Tag>Apollo</Tag>
                        <Tag>TailwindCSS</Tag>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <img
                      src="https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912"
                      alt="project-image"
                      className="w-44"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <h2 className="my-0 flex-1">Mboa Fighters</h2>
                        <a href="https://carcam.cm">
                          <Globe />
                        </a>
                        <a href="https://github.com/samueltih">
                          <GithubLogo />
                        </a>
                      </div>
                      <p className="my-2">
                        2D Fighting Game including humor icons from the African
                        scenery.
                      </p>
                      <div className="flex gap-2 items-center flex-wrap text-sm">
                        <Tag>React</Tag>
                        <Tag>MySQL</Tag>
                        <Tag>NodeJS</Tag>
                        <Tag>ExpressJS</Tag>
                      </div>
                    </div>
                  </div> */}
                  </section>
                </div>
              </div>
              <div
                className="flex flex-col gap-4 items-center py-8 px-4 md:py-16 sticky top-0 h-screen box-border transition-all"
                style={{ height: "100dvh" }}
              >
                <button className="dark:text-white" onClick={handleThemeChange}>
                  {theme === "light" ? <SunFill size={30} /> : <MoonFill size={30} />}
                </button>
                <button
                  className="dark:text-white"
                  onClick={handleLocaleChange}
                >
                  {locale}
                </button>
                <div className="flex-1 border-solid border border-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </IntlProvider>
      {/* <div className="flex justify-center">
        <div className="max-w-screen-xl w-full h-[90vh] flex gap-32 items-center justify-center">
          <span className="flex-1 text-[5rem] font-bold">
            TIH
            <br />
            SAMUEL
            <br />
            MBIYIMO'O
          </span>
          <span className="flex-1 flex flex-col gap-4 items-end justify-end font-bold capitalize">
            <span className="text-[3rem] font-semibold">Software Engineer</span>
            <a
              href="/resume.pdf"
              className="flex gap-2 items-center bg-yellow-300"
            >
              <DownloadSimple size={25} /> Get Resume
            </a>
            <div className="flex gap-2 items-center">
              <button className="bg-yellow-400">
                <LinkedinLogo size={30} />
              </button>
              <button className="bg-yellow-400">
                <TwitterLogo size={30} />
              </button>
              <button className="bg-yellow-400">
                <FacebookLogo size={30} />
              </button>
            </div>
          </span>
        </div>
      </div> */}

      {/* About me */}
      {/* <div className="flex justify-center">
        <div id="about" className="max-w-screen-xl w-full flex flex-col mb-16">
          <h1>About Me</h1>
          <div className="flex gap-16 items-center self-center">
            <div className="relative flex items-center m-16">
              <div
                className="bg-yellow-400 h-96 w-96 rounded-xl absolute top-8 left-0 -z-10"
                style={{ transform: "rotate(15deg)" }}
              ></div>
              <img
                src="https://img.freepik.com/free-photo/elegant-man-suit-arms-crossed_1149-1591.jpg?w=740&t=st=1695297105~exp=1695297705~hmac=506512d594b828aabbef9fba4c8c40d34a430de0f67463b1cd16b3121eca3f74"
                height={500}
                className="shadow"
              />
              <img
                src="https://img.freepik.com/free-photo/elegant-man-suit-arms-crossed_1149-1591.jpg?w=740&t=st=1695297105~exp=1695297705~hmac=506512d594b828aabbef9fba4c8c40d34a430de0f67463b1cd16b3121eca3f74"
                height={500}
                className="shadow absolute top-0 left-0"
              />
              <img
                src="https://img.freepik.com/free-photo/elegant-man-suit-arms-crossed_1149-1591.jpg?w=740&t=st=1695297105~exp=1695297705~hmac=506512d594b828aabbef9fba4c8c40d34a430de0f67463b1cd16b3121eca3f74"
                height={500}
                className="shadow absolute top-0 left-0"
              />
            </div>
            <div className="flex-1">
              <p className="rounded">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                quae soluta impedit exercitationem doloremque sapiente sunt
                voluptas deleniti unde sint. Porro vitae expedita facere quia,
                repudiandae nisi maiores atque non?
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                quae soluta impedit exercitationem doloremque sapiente sunt
                voluptas deleniti unde sint. Porro vitae expedita facere quia,
                repudiandae nisi maiores atque non?
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Work Experiences */}
      {/* <div className="flex justify-center my-16">
        <div id="about" className="max-w-screen-xl w-full flex flex-col">
          <div className="flex gap-8 items-center">
            <h1 className="flex-1">Experiences </h1>
            <a
              href="/resume.pdf"
              className="flex gap-2 items-center bg-yellow-300"
            >
              <DownloadSimple size={25} /> Get Resume
            </a>
          </div>

          <div className="mt-16">
            <div className="w-full flex gap-16">
              <div className="w-96">
                <div
                  className="p-8 flex flex-col"
                  style={{ borderLeft: "5px solid blue" }}
                >
                  <div className="text-3xl font-bold">SCI 2M</div>
                  <h4>June 2018 - Present</h4>
                </div>
                <div
                  className="p-8 flex flex-col"
                  style={{ borderLeft: "5px solid grey" }}
                >
                  <div className="text-3xl font-bold">Hadron SA</div>
                  <h4>August 2017 - Mars 2018</h4>
                </div>
              </div>
              <div className="bg-yellow-300 rounded-xl p-8 flex-1">
                <h2 className="text-2xl font-semibold">
                  Associate Software Engineer
                </h2>
                <div className="flex gap-2 my-2">
                  <span className="p-2 bg-stone-100">React</span>
                  <span className="p-2 bg-stone-100">Flutter</span>
                  <span className="p-2 bg-stone-100">Microservices</span>
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-6">
                  <li>
                    Conception et développement d’une plateforme de portemonnaie
                    électronique avec création d’une passerelle de paiement
                    intégrant les méthodes locaux de paiement tels qu’Orange
                    Money ou MTN Mobile Money
                  </li>
                  <li>
                    Conception et réalisation d’un module de réservation des
                    espaces réservées aux résidents des habitations détenus par
                    l’entreprise.
                  </li>
                  <li>
                    Conception et développement d’un module de maintenance
                    curative pour résidents.
                  </li>
                  <li>
                    Pris part dans le développement des applications mobiles
                    Android destinées au personnel de l’entreprise et pour les
                    assister dans leurs tâches quotidiennes.
                  </li>
                </ul>
                <div className="flex items-center justify-right gap-2 my-4 text-xs italic text-stone-500">
                  <Calendar /> 10th March 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Projects */}
      {/* <div className="flex justify-center my-16">
        <div id="projects" className="max-w-screen-xl w-full flex flex-col">
          <h1>Projects</h1>

          <div className="flex gap-16 items-center mt-16">
            <div className="w-96">{text}</div>
            <div className="flex gap-8 relative">
              <div className="absolute bg-yellow-300 -z-10 rounded-xl -left-4 -bottom-16 w-full h-full"></div>
              <div
                className="pf-cd transition-all h-[25rem] w-[25rem] rounded-lg p-8 relative shadow"
                style={{
                  backgroundImage:
                    "url('https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex gap-4 items-center text-2xl font-semibold text-shadow text-white">
                  <span className="flex-1 text-shadow">Carcam</span>
                  <a href="http://carcam.cm" target="_blank">
                    <Globe />
                  </a>
                  <a
                    className="transition-colors hover:text-yellow-300"
                    href="http://github.com/samueltih"
                    target="_blank"
                  >
                    <GithubLogo />
                  </a>
                </div>
                <div className="pf-cd-desc absolute -bottom-8 p-4 left-[20%] bg-blue-800 text-white text-sm">
                  {contactText}
                </div>
              </div>
              <div
                className="pf-cd transition-all h-[25rem] w-[25rem] rounded-lg p-8 relative shadow"
                style={{
                  backgroundImage:
                    "url('https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912https://outofthesandbox.com/cdn/shop/files/Flex-Trending-2_1600x.png?v=1692198912')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex gap-4 items-center text-2xl font-semibold text-shadow text-white">
                  <span className="flex-1 text-shadow">Carcam</span>
                  <a href="http://carcam.cm" target="_blank">
                    <Globe />
                  </a>
                  <a
                    className="transition-colors hover:text-yellow-300"
                    href="http://github.com/samueltih"
                    target="_blank"
                  >
                    <GithubLogo />
                  </a>
                </div>
                <div className="pf-cd-desc absolute -bottom-8 p-4 left-[20%] bg-blue-800 text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia quod error nisi! Cum molestiae tempore officiis,
                  corporis ullam ex neque provident aliquid totam odio
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-24">
            <a href="#" className="flex gap-4 flex-end items-center">
              <ArrowRight size={25} /> See all projects
            </a>
          </div>
        </div>
      </div> */}

      {/* Contact */}
      {/* <div className="flex justify-center my-16">
        <div
          id="contact"
          className="max-w-screen-xl w-full flex flex-col py-32"
        >
          <h1>Contact</h1>
          <div className="flex gap-16">
            <div>
              <p>{contactText}</p>
              <div className="flex gap-4">
                <button className="bg-yellow-400">
                  <LinkedinLogo size={30} />
                </button>
                <button className="bg-yellow-400">
                  <TwitterLogo size={30} />
                </button>
                <button className="bg-yellow-400">
                  <FacebookLogo size={30} />
                </button>
              </div>
            </div>
            <div>
              <div
                className="p-8 rounded-lg shadow-xl bg-emerald-400 flex flex-col"
                style={{
                  height: "20em",
                  width: "35.5em",
                  transform: "rotate(-6deg)",
                }}
              >
                <div className="flex-1">
                  <h1 className="text-xl md:text-3xl font-bold mt-4 mb-2">
                    TIH SAMUEL MBIYIMO&apos;O
                  </h1>
                  <h3 className="md:text-xl font-semibold">
                    Software Engineer
                  </h3>
                </div>
                <div>
                  <a
                    href="mailto:samuel.tih@outlook.com"
                    className="flex hover:text-blue-500 gap-4 my-1"
                  >
                    <Envelope size={25} /> samuel.tih@outlook.com
                  </a>
                  <a
                    href="mailto:samuel.tih@outlook.com"
                    className="flex hover:text-blue-500 gap-4 my-1"
                  >
                    <Phone size={25} /> (+237) 6 56 76 04 88 | (+237) 6 53 58 33
                    11
                  </a>
                  <a href="#" className="flex hover:text-blue-500 gap-4 my-1">
                    <MapPin size={25} /> Yaounde, Cameroon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
