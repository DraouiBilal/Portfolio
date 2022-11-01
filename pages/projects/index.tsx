import { Project } from "../../interfaces/types";
import Card from "../../components/card";

export async function getStaticProps() {
    return {
      props: {}, // will be passed to the page component as props
    }
  }

const projects: Project[] = [
    {
        name: "Validation de signature",
        description: "Application web qui utilise un CNN pour vérifier si une signature est réelle ou bien fraudée",
        date: "04/2022 - 05/2022",
        image: "/img/signature-verification.png",
        tags: ["Python", "Tensorflow", "Keras", "OpenCV", "PHP"],
        url: "https://github.com/DraouiBilal/Signature-Validation"
    },
    {
        name: "The Linker",
        description: "Application web des réseaux sociaux permettant une communication entre les amis d'une manière sécurisé",
        date: "04/2022 - 05/2022",
        image: "/img/the-linker.png",
        tags: ["Nextjs", "NestJS", "Socket.io", "MongoDB", "Neo4j", "Git"],
        url: "https://github.com/DraouiBilal/The-Linker"
    },
    {
        name: "Déploiment d'une solution cloud",
        description: "Mise en place des infrastructures cloud computing avec OpenStack Xena en utilisant la machine virtuelle Ubuntu dans l'hyperviseur VMware.",
        date: "03/2022 - 04/2022",
        image: "/img/OpenStack.png",
        tags: ["OpenStack", "Ubuntu", "VMware"],
        url: "https://www.canva.com/design/DAFDVVhVKwQ/hiD5KUjYV6jYgHDUsQMd2g/view?utm_content=DAFDVVhVKwQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
        name: "IZIEV",
        description: "Application Web de gestion des événements organisés par des clubs d'une école.",
        date: "12/2021 - 01/2022",
        image: "/img/iziev.webp",
        tags: ["React.JS", "Bootstrap", "Node.js", "Socket.io", "MySQL", "Git"],
        url: "https://github.com/FARESAkram/Gestion-des-evenements-des-clubs-GUI"
    },
    {
        name: "SCOL",
        description: "Application Desktop de gestion et d'échange des notes , d'emploi du temps ... d'une école.",
        date: "12/2021 - 01/2022",
        image: "/img/scol.png",
        tags: ["Java", "XML", "Git"],
        url: "https://github.com/FARESAkram/Gestion_Scolarite"
    },
    {
        name: "Gestion de réservation d'hotel",
        description: "Application web qui permet des clients de réserver des chambres dans des hôtels.",
        date: "01/2020 - 03/2020",
        image: "/img/hotel.png",
        tags: ["Node.js", "Express.js", "EJS", "MongoDb", "Git"],
        url: "https://github.com/DraouiBilal/hotel-Reservation"
    },
]

const Projects = () => {
    return (
        <div className="bg-[rgb(244,243,248)]">
            <h1 className="text-blue-600 text-7xl text-extrabold text-center py-10">Mes projets</h1>

            <h3 className="my-8 mx-3 text-3xl text-center">
              Voici une liste de projets sur lesquels j&apos;ai travaillé 
            </h3>

            <div className="flex flex-wrap ">
                {
                    projects.map((project,index) => (
                        <Card key={index} project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;