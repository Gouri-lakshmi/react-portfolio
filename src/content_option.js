import ecommerceImage from "./assets/images/ecommerce.png";
import shoppingImage  from './assets/images/shop.jpg';
import onlineShop from './assets/images/online.webp'

const logotext = "Gourilakshmi";
const meta = {
    title: "Gourilakshmi",
    description: "I’m Gourilakshmi Frontend Developer",
};
const introdata = {
    title: "I’m Gourilakshmi",
    animated: {
        first: "I specialize in building responsive websites with React",
        second: "I'm passionate about creating websites using React",
        // third: "I develop mobile apps",
    },
    description: "React developer with 2 years of experience in developing , designing and implementing applications and solutions using a range of technologies and programming languages. Proficient in all phases of software developing life cycle",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I'm a React developer with 2 years of experience, specializing in crafting advanced web solutions.",
};
const experience = [
    "Developed an advanced e-commerce platform using Next.js, TypeScript, and GraphQL",
    "Implemented responsive and visually appealing user interfaces using HTML,CSS, Tailwind CSS, and Material-UI, resulting in improved user engagement and satisfaction",
    "Skilled in designing, analyzing, developing, testing, deploying, and supporting, applications",
    "Proficient in utilizing Postman for RESTful API interactions and crafting GraphQL queries for Altair.",
    "Excellent communication and interpersonal skills",
    "sound decision-making abilities",
    "Familiarity with vision control tools like GIT",
    "Experience in web application development"
]
const worktimeline = [{
    jobtitle: "Frontend Developer",
    where: "Ceymox Technologies",
    date: "2022 - 2024",
},
];

const skills = [{
    name: "React Js",
    value: 90,
},
{
    name: "Next Js",
    value: 90,
},
{
    name: "Javascript",
    value: 85,
},
{
    name: "Typescript",
    value: 85,
},
{
    name: "Redux",
    value: 80,
},
{
    name: "Html5",
    value: 90,
},
 {  name: "Css",
   value: 90
}
];


const dataportfolio = [{
    img: ecommerceImage,
    // description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://kalyansilks.com/",
},
{
    img: shoppingImage,
    // description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://kalyanhyper.com/",
},
{
    img: onlineShop,
    // description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.alukkasjewellery.com/",
},

];

const contactConfig = {
    YOUR_EMAIL: "gourilakshmits@gmail.com",
    YOUR_FONE: "7591960173",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    // github: "https://github.com",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/gourilakshmi-t-s-62536b209/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    experience,
};