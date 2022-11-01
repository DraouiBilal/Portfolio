import Image from "next/image"
import Link from "next/link"

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-[url('/img/background.jpg')]">
        <div className="flex items-center justify-center flex-wrap bg-gradient-to-r from-cyan-500 via-blue-900 to-blue-500 w-full h-full opacity-90">
          <div className="border-4 border-blue-600 rounded-full w-52 h-52 bg-cover bg-[url('/img/Me.jpeg')]" />
          <div className=" mx-5 text-white flex flex-col h-52 justify-center">
            <span className="text-6xl">Hello I&apos;m DRAOUI Bilal!</span>
            <span className="text-xl my-5">
              <span className="mt-3 ml-1">LET&apos;S CONNECT<span className="text-yellow-500 font-bold">&nbsp; &gt;</span></span>
              <span className="ml-5 inline">
                <Link target={"_blank"} className="mr-10" href="https://www.linkedin.com/in/bilal-draoui/"><Image className="inline" src="/icons/linkedin.png" height={24} width={24} alt="LinkedIn logo" /></Link>
                <Link target={"_blank"} className="mr-10" href="https://www.facebook.com/profile.php?id=100009523967316"><Image className="inline" src="/icons/facebook.png" height={24} width={24} alt="LinkedIn logo" /></Link>
                <Link target={"_blank"} className="mr-10" href="https://www.instagram.com/draoui_bilal/"><Image className="inline" src="/icons/instagram.png" height={24} width={24} alt="LinkedIn logo" /></Link>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-[rgb(244,243,248)]">
        <div className="flex justify-between flex-wrap w-full h-full opacity-90 py-16 px-16">
          <div>
            <h1 className="text-blue-600 text-7xl text-extrabold">QUI SUIS-JE ?</h1>
            <h3 className="my-8 mx-3 text-3xl">
              Je m&apos;appelle DRAOUI Bilal. Je suis un étudiant en Master 2 Ingénierie parcours UBINET.
            </h3>
            <p className="text-slate-500 mx-3">
              J&apos;ai des compétences en intelligence artificielle(Machine learning avec scikit learn et Deep Learning avec Tensorflow/Keras), DEVOPS (Git, Github, Docker, Kubernetes), développement WEB(Nextjs, Nestjs, Typescript, JEE, ReactJS, Node.js, PHP...) et en development Desktop (Python, Java SE, C++, C#, ... ) et aussi dans les SGBDR (MySQL, Postgresql, Oracle, SQLServer) and NoSQL (MongoDB, Cassadra, Neo4J) databases, with experience in &quot;Competitive Programming&quot; (MCPC 2021, Code IT 5.0) with C/C++.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="w-full h-full opacity-90 py-16 px-16">
          <div>
            <h1 className="text-blue-600 text-7xl text-extrabold text-center">MON PARCOURS</h1>
            <div className="md:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
              <div className="md:mr-20 md:w-1/3">
                <h1 className="font-bold italic mb-10">Les écoles</h1>

                <div className="relative mt-5 text-left">

                  <div className="flex items-center relative pb-5 justify-start">

                    <div className="border-r-2 border-black absolute h-full top-2 z-10 ">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-6 pt-5">
                      <div className="flex justify-center space-x-16">
                        <div>
                          <img className="w-12" src="/img/polytech.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="flex items-center relative pb-5 justify-start">

                    <div className="border-r-2 border-black absolute h-full top-2 z-10 ">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-6">
                      <div className="flex space-x-16">
                        <div>
                          <img className="w-12" src="/img/Ensat.jpg" alt="" />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="flex items-center relative pb-5 justify-start">

                    <div className="border-r-2 border-black absolute h-full top-2 z-10 ">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-6">
                      <div className="flex space-x-16">
                        <div>
                          <img className="w-12" src="/img/ibnalkhatib.jpeg" alt="" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              <div className="md:w-2/3">
                <h1 className="font-bold italic mb-10">Le parcours</h1>

                <div className="relative mt-5 text-left">

                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20">
                      <div className="font-bold italic">2022</div>
                      <div className="md:flex space-x-1 text-xs">
                        <div>09</div>
                        <div>-</div>
                        <div>present</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-10">
                      <div className="font-bold">MASTER 2 INFORMATIQUE Ingénierie parcours Ubinet</div>
                      <div className="italic md:mb-4">Polytech Nice-Sophia</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold">2022</div>
                        <div className="text-xs">Abril - Junio</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20">
                      <div className="font-bold italic">2018</div>
                      <div className="md:flex space-x-1 text-xs">
                        <div>09</div>
                        <div>-</div>
                        <div>present</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                      <i className="fas fa-circle bottom-0 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-10">
                      <div className="font-bold">Cycle d&apos;ingénieur en informatique</div>
                      <div className="italic md:mb-4">Ecole Nationale des Sciences Appliquées de Tanger</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold">2021</div>
                        <div className="text-xs">01-Juillet - </div>
                      </div>
                    </div>

                  </div>
                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20">
                      <div className="font-bold italic">2017</div>
                      <div className="md:flex space-x-1 text-xs">
                        <div>09</div>
                        <div>-</div>
                        <div>06/2018</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                      <i className="fas fa-circle bottom-0 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-10">
                      <div className="font-bold">Baccalauréat sciences math A Mention bien</div>
                      <div className="italic md:mb-4">Lycée Ibn Alkhatib</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold">2017</div>
                        <div className="text-xs">01-Juillet - </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[rgb(244,243,248)]">
        <div className="w-full h-full opacity-90 py-16 px-16">
          <div>
            <h1 className="text-blue-600 text-7xl text-extrabold text-center">MES EXPERIENCES PROFESSIONNELLES</h1>
            <div className="md:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
              <div className="md:mr-20 md:w-1/3">
                <h1 className="font-bold italic mb-10">Technologies utilisées</h1>

                <div className="relative mt-5 text-left">

                  <div className="flex items-center relative pb-5 justify-start">

                    <div className="border-r-2 border-black absolute h-full top-2 z-10 ">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-6 pt-5">
                      <div className="flex mb-4 space-x-16">
                        <div>
                          <img className="w-40" src="/img/Nextjs.png" alt="" />
                        </div>
                        <div>
                          <img className="w-40" src="/img/nestjs.png" alt="" />
                        </div>
                        <div>
                          <img className="w-40" src="/img/Typescript.png" alt="" />
                        </div>
                      </div>
                      <div className="flex mb-4 space-x-16">
                        <div>
                          <img className="w-40" src="/img/Nodejs.png" alt="" />
                        </div>
                        <div>
                          <img className="w-40" src="/img/postgres.png" alt="" />
                        </div>
                        <div>
                          <img className="w-40" src="/img/Git.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="flex items-center relative pb-5 pt-5 justify-start">

                    <div className="border-r-2 border-black absolute h-full top-2 z-10 ">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-6 pt-5">
                      <div className="flex mb-4 space-x-16">
                        <div>
                          <img className="w-40" src="/img/react.png" alt="" />
                        </div>
                        <div>
                          <img className="w-40" src="/img/Nodejs.png" alt="" />
                        </div>
                        <div>
                          <img className="w-40" src="/img/docker.png" alt="" />
                        </div>
                      </div>
                      <div className="flex mb-4 space-x-16">
                        <div>
                          <img className="w-40" src="/img/mysql.png" alt="" />
                        </div>
                        <div>
                          <img className="w-40" src="/img/python.png" alt="" />
                        </div>
                        <div>
                          <img className="w-40" src="/img/Git.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="md:w-2/3">
                <h1 className="font-bold italic mb-10">Stages</h1>

                <div className="relative mt-5 text-left">

                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20">
                      <div className="font-bold italic">2022</div>
                      <div className="md:flex space-x-1 text-xs">
                        <div>01/07</div>
                        <div>-</div>
                        <div>01/10</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-10">
                      <div className="font-bold">Stage PFA</div>
                      <div className="italic md:mb-4">Coficab</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold">2022</div>
                        <div className="text-xs">Abril - Junio</div>
                      </div>
                      <div className="mb-10">
                        Création d&apos;une application web pour crée, réaliser, et consulter des audits.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center relative">
                    <div className="hidden md:block w-20">
                      <div className="font-bold italic">2021</div>
                      <div className="md:flex space-x-1 text-xs">
                        <div>01/07</div>
                        <div>-</div>
                        <div>01/09</div>
                      </div>
                    </div>

                    <div className="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                      <i className="fas fa-circle -top-1 -ml-2 absolute"></i>
                      <i className="fas fa-circle bottom-0 -ml-2 absolute"></i>
                    </div>

                    <div className="ml-10">
                      <div className="font-bold">Stage d&apos;application</div>
                      <div className="italic md:mb-4">Tanger Alliance</div>
                      <div className="mb-4 mt-2 md:hidden">
                        <div className="font-bold">2021</div>
                        <div className="text-xs">01-Juillet - </div>
                      </div>
                      <div className="mb-10">
                        Trois tâches principales:
                        <ul>
                          <li>&emsp;- Création du site web officiel de l&apos;entreprise.</li>
                          <li>&emsp;- Création d&apos;une application web pour gérer les services offerts par l&apos;entreprise.</li>
                        </ul>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
