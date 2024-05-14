import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [

    {
        id: 1,
        name: 'Food recipe',
        description: "This project is called " + "Food Recipe." + "It's about making a digital platform to share recipes for food. We use different tools like React, Typescript, and Javascript to build it. We also connect to APIs (which are like tools to get information from the internet) like RESP APIs and use Axios to communicate with them. Tailwind is a tool we use to make the website look nice. My role in this project is mainly on the Frontend, which means I work on how the website looks and feels to users.",
        tools: ["React", "Typescript", "Javascript", "RESPAPis", "Axios", "Tailwind"],
        role: 'Frontend',
        code: 'https://github.com/AlaaSassii/recepies2023',
        demo: 'https://euphonious-kangaroo-8043f5.netlify.app/',
        image: travel,
    },
    {
        id: 2,
        name: 'Ecommerce',
        description: "This project is an Ecommerce platform, which means it's a website where people can buy and sell products online. We're using tools like React, Typescript, and Javascript to create it. We also connect to APIs (like special internet tools) called RESP APIs, and we use Axios to communicate with them. Tailwind is another tool we're using to make the website look good. My role in this project is on the Frontend, where I focus on how the website appears and functions for users.",
        tools: ["React", "Typescript", "Javascript", "RESPAPis", "Axios", "Scss"],
        role: 'Frontend',
        code: 'https://github.com/AlaaSassii/ecommerce2023as',
        demo: 'https://visionary-tartufo-ca7e35.netlify.app/',
        image: crefin,
    },
    {
        id: 3,
        name: 'League of Legends Insights website',
        description: 'The "League of Legends Insights" website is a platform designed to provide players with valuable information and analysis related to the popular online game, League of Legends. It offers a range of features such as player statistics, match histories, champion guides, and strategic insights. Utilizing data from the game' + "'s API, this website offers players a deeper understanding of gameplay dynamics, enabling them to improve their skills, optimize strategies, and stay updated on the latest trends within the League of Legends community. Whether it'" + "'s analyzing personal performance metrics or exploring advanced gameplay tactics, the " + "League of Legends Insights" + "website aims to empower players with the knowledge they need to succeed in the competitive world of online gaming.'",
        tools: ["React", "Typescript", "Javascript", "RESPAPis", "Axios", "Tailwind", "Riot Games APIS"],
        code: " https://github.com/AlaaSassii/LoLInsightHub-2023",
        role: 'Frontend',
        demo: 'https://melodic-bonbon-545560.netlify.app/',
        image: realEstate,
    },

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },