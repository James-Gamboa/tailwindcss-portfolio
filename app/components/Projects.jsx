import ProjectCard from "./ProjectCard"

import P1Img from "../../public../../public/img//projects/cocacola-page.png";
import P2Img from "../../public/img//projects/pokedex-page.png";
import P3Img from "../../public/img//projects/trivia-game-page.png";
import P4Img from "../../public/img//projects/news-homepage-page.jpg";
import P5Img from "../../public/img//projects/conectaCuatro-page.png";
import P6Img from "../../public/img//projects/loopstudios-page.png";
import P7Img from "../../public/img//projects/events-site-page.png";
import P8Img from "../../public/img//projects/landing-page-manage.png";
import P9Img from "../../public/img//projects/contraluz-page.png";
import P10Img from "../../public/img//projects/landing-page-bank.png";
import P11Img from "../../public/img//projects/fylo-landig-page.png";
import P12Img from "../../public/img//projects/landig-page-tailwind.png";

const projects = [
    {   
        "id": 1,
        "image": P1Img,
        "title": "Coca Cola Landing Page",
        "description": "Project created as a practice in a Bootcamp ",
        "link": "https://james-gamboa.github.io/Practical-coca-cola-page/"
    },
    {
        "id": 2,
        "image": P2Img,
        "title": "Pokedex" ,
        "description": "Project created as a practice for knowledge in Javascript",
        "link": "https://james-gamboa.github.io/Pokedex/"
    },
    {
        "id": 3,
        "image": P3Img,
        "title": "Trivia Game" ,
        "description": "Trivia game web page created using Vite and React for a hands-on practice project ",
        "link": "https://triviagameinreact.netlify.app/"
    },
    {
        "id": 4,
        "image": P4Img,
        "title": "News Homepage" ,
        "description": "Page created as a practice for knowledge in Html, Css, Javascript, and Sass",
        "link": "https://flourishing-taffy-990027.netlify.app/"
    },
    {
        "id": 5,
        "image": P5Img,
        "title": "Connect Four" ,
        "description": "Project created as a practice for knowledge in Javascript",
        "link": "https://james-gamboa.github.io/conecta-cuatro/conecta4.html"
    },
    {
        "id": 6,
        "image": P6Img,
        "title": "Frontend-Mentor-Loopstudios" ,
        "description": "Page created as a practice for knowledge in Sass",
        "link": "https://james-gamboa.github.io/Frontend-Mentor-Loopstudios-landing-page/"
    },
    {
        "id": 7,
        "image": P7Img,
        "title": "Events Site" ,
        "description": "Page created as a practice for knowledge in Javascript",
        "link": "https://monumental-kringle-6493f0.netlify.app/"
    },
    {
        "id": 8,
        "image": P8Img,
        "title": "Manage Landing Page" ,
        "description": "Page created as practice in my knowledge in next js and tailwind",
        "link": "https://landing-page-with-tailwind-iota.vercel.app/"
    },
    {
        "id": 9,
        "image": P9Img,
        "title": "Contraluz" ,
        "description": "During my final project at CETAV, I collaborated with a real client to develop and launch an ecommerce for selling paints using the Shopify platform",
        "link": "https://www.contraluzcr.com/"
    },
    {
        "id": 10,
        "image": P10Img,
        "title": "James Bank" ,
        "description": "A landing page crafted to demonstrate proficiency in Next.js and Tailwind CSS, featuring dynamic animations powered by Frame Motion",
        "link": "https://landing-page-bank-kappa.vercel.app/"
    },
    {
        "id": 11,
        "image": P11Img,
        "title": "Fylo Page" ,
        "description": "A responsive landing page designed to showcase expertise in Next.js and Tailwind CSS.",
        "link": "https://fylo-landing-page-ten-peach.vercel.app/"
    },
    {
        "id": 12,
        "image": P12Img,
        "title": "Web Studio" ,
        "description": "A modern web studio landing page built to highlight proficiency in Next.js and Tailwind CSS.",
        "link": "https://tailwind-landing-page-ecru-three.vercel.app/"
    },
];


function Projects() {
    return (
        <>
        <h2 className="title">Projects</h2>
            <div className="projects-grid-container">
                {
                    projects.map(proyecto => 
                    <ProjectCard 
                    key={proyecto.id}
                    image={proyecto.image} 
                    title={proyecto.title} 
                    description={proyecto.description} 
                    link={proyecto.link} />)
                }
                    {/* <ProjectCard/> */}
            </div>
        </>
    )
}

export default Projects