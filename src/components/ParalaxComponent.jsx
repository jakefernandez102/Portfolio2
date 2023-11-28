
import {Parallax,ParallaxLayer} from '@react-spring/parallax';
import { useRef, useState } from 'react';
import {config, useSpring,animated} from '@react-spring/web';
import {Waypoint} from 'react-waypoint'
import FlipCard from './FlipCard';

const PROJECTS=[
    {
        id:6,
        title:'Coffee Quiosco - NextJS',
        description:'Created using React with NextJS, TailwindCSS, NodeJS, MongoDB, Socket.io, and more...',
        image:'/img/CoffeeQuiosco.gif',
        githubUrl:'https://github.com/jakefernandez102/QuiscoApp',
        demo:''
    },
    {
        id:7,
        title:'GuitarLA-Remix-Strapi',
        description:'created using React ~ Hooks Context MERN ~',
        image:'/img/GuitarLA_Remix_Strapi.gif',
        githubUrl:'https://github.com/jakefernandez102/GuitarLA-React-Remix-Strapi',
        demo:''
    },
    {
        id:8,
        title:'Appointments Manager',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/ApointmentManagerbg.png',
        githubUrl:'https://github.com/jakefernandez102/AppointmentsGenerator.git',
        demo:'https://apointmentgeneratorjakefernandez.netlify.app/'
    },
    {
        id:9,
        title:'Tip Quoter',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript | Please wait a few seconds to load the data',
        image:'/img/CotizacionPropinas.png',
        githubUrl:'https://github.com/jakefernandez102/CotizacionDeServicio',
        demo:'https://cotizaciondeserviciojakefernandez.netlify.app/'
    },
    
]
const OTHERPROJECTS = [
    {
        id:11,
        title:'Festival Rock EDM',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/festivalRockEDMbg.png',
        githubUrl:'https://github.com/jakefernandez102/FestivalMusic.git',
        demo:'https://festivalmusicjakefernandez.netlify.app'
    },
    {
        id:12,
        title:'Furniture Store',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/FurnitureStorebg.png',
        githubUrl:'https://github.com/jakefernandez102/FurnitureStore.git',
        demo:'https://furniturestorejakefernandez.netlify.app'
    },
    {
        id:13,
        title:'TechPRO Headphone',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/TechPRObg.png',
        githubUrl:'https://github.com/jakefernandez102/TechProHeadphones.git',
        demo:'https://techprojakefernandez.netlify.app/'
    },
    {
        id:14,
        title:'Architecture Web Site.',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/Architecturebg.png',
        githubUrl:'https://github.com/jakefernandez102/ArchitectureDesign.git',
        demo:'https://archdesignjakefernandez.netlify.app'
    },
    {
        id:15,
        title:'Nucleus App',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/NucleusApp.png',
        githubUrl:'https://github.com/jakefernandez102/Nucleus-eWallet',
        demo:'https://nucleusappjakefernandezdev.netlify.app/'
    },
    {
        id:16,
        title:'Cafeteria Web Site',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/Cafeteria.png',
        githubUrl:'https://github.com/jakefernandez102/CafeteriaSASS',
        demo:'https://cafeteriasassjakefernandez.netlify.app/'
    },
    {
        id:17,
        title:'DeliveryApp',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/DeliveryApp.png',
        githubUrl:'https://github.com/jakefernandez102/DeliveryApp',
        demo:'https://deliveryappjakefernandez.netlify.app/'
    },
    {
        id:18,
        title:'PodCast Web Site',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/Podcast.png',
        githubUrl:'https://github.com/jakefernandez102/PodCast',
        demo:'https://podcastappjakefernandez.netlify.app/'
    },
    {
        id:19,
        title:'Air b&b clon',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/airbnbclon.png',
        githubUrl:'https://github.com/jakefernandez102/AirbNb-Clon',
        demo:'https://airbnbclonjakefernandez.netlify.app/'
    },
    {
        id:20,
        title:'Real State Web Site',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/RealState.png',
        githubUrl:'https://github.com/jakefernandez102/RealState',
        demo:'https://realstatejakefernandez.netlify.app/'
    },
    {
        id:21,
        title:'Carolina Spa Web Site',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/CarolinaSpa.png',
        githubUrl:'https://github.com/jakefernandez102/CarolinaSpaSite',
        demo:'https://carolinaspajakefernandez.netlify.app/'
    },
    {
        id:22,
        title:'Meeti Clon',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/Meeti-bg.png',
        githubUrl:'https://github.com/jakefernandez102/meeti',
        demo:'https://meetijakefernandez.netlify.app/'
    },
    {
        id:23,
        title:'Escuela Cocina Web Site',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/EscuelaCocina-bg.png',
        githubUrl:'https://github.com/jakefernandez102/EscuelaDeCocina',
        demo:'https://escuelacocinajakefernandez.netlify.app/'
    },
    {
        id:24,
        title:'Guitar LA Design',
        description:'Web design created using only HTML5 - CSS3 - FlexBox - Grid - SASS',
        image:'/img/GuitarLA.png',
        githubUrl:'https://github.com/jakefernandez102/GUITARLA',
        demo:'https://guitarlajakefernandez.netlify.app/'
    },

//JAVASCRIPT PROJECTS
    {
        id:25,
        title:'Shopping cart Emulator',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/CarShoppingbg.png',
        githubUrl:'https://github.com/jakefernandez102/ShoppingCar.git',
        demo:'https://cartshopjakefernandezjs.netlify.app'
    },
    {
        id:26,
        title:'Email Sender Emulator',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/EmailSenderbg.png',
        githubUrl:'https://github.com/jakefernandez102/EmailSenderEmulator.git',
        demo:'https://emailsendersimulatorjakefernandezjs.netlify.app'
    },
    {
        id:27,
        title:'Filter Emulator',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/filterPage.png',
        githubUrl:'https://github.com/jakefernandez102/FilterPage.git',
        demo:'https://searcherjakefernandezjs.netlify.app'
    },
    {
        id:28,
        title:'Car Insurance Emulator',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/CarInsurancebg.png',
        githubUrl:'https://github.com/jakefernandez102/CarInsuranceBudgetGenerator.git',
        demo:'https://carinsurancesimulatorjakefernandezjs.netlify.app/'
    },
    {
        id:29,
        title:'Shopping cart Emulator',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/CarShoppingbg.png',
        githubUrl:'https://github.com/jakefernandez102/ShoppingCar.git',
        demo:'https://cartshopjakefernandezjs.netlify.app'
    },
    {
        id:20,
        title:'Tweets/ToDo List clon Emulator',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/LocalStorageTweetsbg.png',
        githubUrl:'https://github.com/jakefernandez102/LocalStorageTweets-TodoList.git',
        demo:'https://localstoragesimulatorjakefernandezjs.netlify.app/'
    },
    {
        id:31,
        title:'Spends Manager Emulator',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/SpendsManagerbg.png',
        githubUrl:'https://github.com/jakefernandez102/SpendsManager.git',
        demo:'https://spendsmanagersimulatorjakefernandezjs.netlify.app/'
    },
    {
        id:32,
        title:'Mini users CRM Emilator',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/MiniCRM.png',
        githubUrl:'https://github.com/jakefernandez102/CRMindexedDB.git',
        demo:'https://minicrmjakefernandez.netlify.app/'
    },
    {
        id:33,
        title:'Climate Searcher',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/ClimateSearcher.png',
        githubUrl:'https://github.com/jakefernandez102/ClimateAPI.git',
        demo:'https://climateapisjakefernandez.netlify.app/'
    },
    {
        id:34,
        title:'API Recipes Emulator',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/RecipesAPIbg.png',
        githubUrl:'https://github.com/jakefernandez102/RecipesSearcher.git',
        demo:'https://recipessearcherjakefernandez.netlify.app/'
    },
    {
        id:35,
        title:'PixaBay API',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/PixaBayPicturesAPIbg.png',
        githubUrl:'https://github.com/jakefernandez102/PixaBayPicturesSearcher.git',
        demo:'https://picturessearcherjakefernandez.netlify.app/'
    },
    {
        id:36,
        title:'Top 10 Crypto',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/criptoMoneda.png',
        githubUrl:'https://github.com/jakefernandez102/CriptomonedasConsult',
        demo:'https://cryptocurrencyjakefernandez.netlify.app/'
    },
    {
        id:37,
        title:'Mini CRM using JSONServer',
        description:'Projects created using the functionality of HTML5 - CSS3 - Vanilla Javascript',
        image:'/img/CRMJsonServer.png',
        githubUrl:'https://github.com/jakefernandez102/CRMJsonServer-',
        demo:'https://crmjsonserverjakefernandez.netlify.app/'
    },
    
    //REACT PROJECTS
    {
        id:38,
        title:'Simple Loan Quoter',
        description:'Projects created using React ~ Hooks Context Redux MERN ~ ',
        image:'/img/CotizadorPrestamoReact.png',
        githubUrl:'https://github.com/jakefernandez102/cotizador-prestamo-react',
        demo:'https://effulgent-zuccutto-2367f2.netlify.app/'
    },
    {
        id:39,
        title:"Vet's Customer CRUD - React",
        description:'Projects created using React ~ Hooks Context Redux MERN ~ ',
        image:'/img/ReactVetCRUD.png',
        githubUrl:'https://github.com/jakefernandez102/REACT-VeterinariaClientes-CRUD',
        demo:'https://loquacious-alfajores-5186d4.netlify.app'
    },
    {
        id:40,
        title:'Expenses planner',
        description:'Projects created using React ~ Hooks Context Redux MERN ~ ',
        image:'/img/ReactBudgetExpenses.png',
        githubUrl:'https://github.com/jakefernandez102/React-Expenses',
        demo:'https://lovely-cendol-abea59.netlify.app'
    },
    {
        id:41,
        title:'CRM simulation',
        description:'Projects created using React ~ Hooks Context Redux MERN ~ ',
        image:'/img/ReactCRM-ReactRouterDOM.png',
        githubUrl:'https://github.com/jakefernandez102/CRM-REACT-ReactRouterDOM/tree/main',
        demo:'https://famous-paletas-5cc79a.netlify.app'
    },
    {
        id:42,
        title:'Budget Quote - React - Tawilwind',
        description:'Projects created using React ~ Hooks Context Redux MERN ~ ',
        image:'/img/CotizadorReactJS.png',
        githubUrl:'https://github.com/jakefernandez102/Cotizador-React-Context-Tailwind',
        demo:'https://playful-palmier-cca7ab.netlify.app'
    },
    {
        id:43,
        title:'Climate app - React - Tailwind',
        description:'Projects created using React ~ Hooks Context Redux MERN ~ ',
        image:'/img/ClimateReactJS.png',
        githubUrl:'https://github.com/jakefernandez102/Climate-ReactJS-Tailwind/tree/main',
        demo:'https://fastidious-sawine-e1bf89.netlify.app'
    },
    {
        id:44,
        title:'CocktailApp Vite/TailwindCss',
        description:'Projects created using React ~ Hooks Context Redux MERN ~ ',
        image:'/img/CocktailReact.png',
        githubUrl:'https://github.com/jakefernandez102/Cocktail-app',
        demo:'https://storied-salmiakki-9b3ac1.netlify.app'
    },
    
    //ANGULAR PROJECTS
    {
        id:45,
        title:'CRUD - Heroes card',
        description:'Projects created using Angular',
        image:'/img/heoresApp.png',
        githubUrl:'https://github.com/jakefernandez102/Angular-HeroesApp',
        demo:'https://angular-heroesapp-jakefernandez.netlify.app/index'
    },
    {
        id:46,
        title:'Countries Searcher',
        description:'Projects created using Angular',
        image:'/img/CountriesApp.png',
        githubUrl:'https://github.com/jakefernandez102/ApiCountries-Angular',
        demo:'https://countriessearchjakefernandez.netlify.app'
    },
    {
        id:47,
        title:'Pipes Use - Angular',
        description:'Projects created using Angular',
        image:'/img/PipesUse.png',
        githubUrl:'https://github.com/jakefernandez102/Angular---PipesGuide',
        demo:'https://amazing-gnome-958258.netlify.app'
    },
]
const ParalaxComponent = () =>
{
    const ref1 = useRef(null) 

    const [isInView, setIsInView] = useState(false);
    const animation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translate3d(0, 0, 0) scale(1.1)' : 'translate3d(100%, 0, 0) scale(0.5)',
    config: config.molasses,
  });

    const start = 0;
	const introDuration = 7;
	const learningDuration = 3.65;
	const masteryDuration = 7;
	const helpingDuration = 3.5;
	const conclusionDuration = 2.75;

	const buffer = 1;

	// computed values, with buffer
	const introStart = start + 0;
	const learningStart = introStart + introDuration + buffer;
	const masteryStart = learningStart + learningDuration + buffer;
	const helpingStart = masteryStart + masteryDuration + buffer;
	const conclusionStart = helpingStart + helpingDuration + buffer;
	const end = conclusionStart + conclusionDuration;

	const totalDuration = end - start;

    return (
<main >
    <Parallax pages={window.innerHeight >= 571 ? totalDuration : 35 } ref={ref1} >
        <ParallaxLayer
            offset={0}
            speed={1}
            style={{ 
                background: 'linear-gradient(360deg, rgba(1,7,18,1) 0%, rgba(1,7,18,1) 10%,rgba(0,0,0,.7) 100%), url(/img/bg-full.jpg)' 
            }}
        >

        </ParallaxLayer>
        <ParallaxLayer
            offset={0}
            speed={1}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
            }}
            >
            <h1 className='animate__animated animate__fadeInTopLeft font-arvo text-4xl text-white'>Welcome to my Portfolio</h1>
        </ParallaxLayer>

        <ParallaxLayer
            offset={0.55}
            speed={-5}
            style={{ 
                textAlign: 'center',
            }}
            className='flex justify-center z-20'
        >
            <h2 className='animate__animated animate__fadeInTopRight font-ephesis absolute text-center  text-8xl sm:text-9xl font-bold text-white'>Jake Fernandez</h2>
        </ParallaxLayer>

        <ParallaxLayer
            offset={0}
            speed={3}
            style={{ 
                width: '100%',
            }}
        >
            <div className='w-2/5 sm:w-2/6  md:w-2/6 absolute -z-10 bottom-0 right-0 animate__animated animate__fadeInLeft animate__delay-1s filter grayscale'>
                <img
                    className='opacity-50 '
                    src="/img/3.webp" alt="Jake's photo" />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            offset={1}
            speed={0}
            style={{ 
                background: 'linear-gradient(180deg, rgba(1,7,18,1) 0%, rgba(1,7,18,1) 5%, rgba(0,0,0,.8) 50%, rgba(1,7,18,1) 100%),url(/img/bg-full.jpg)',
            }}
        >
        </ParallaxLayer>
        
        <ParallaxLayer
            offset={1}
            speed={0.95}
        >
            <div data-aos="fade-up" data-aos-duration='3000' className='h-screen flex items-center text-white font-arvo'>

                <div className='intro w-full md:w-3/4  bg-gray-900 h-1/2 rounded-xl border-2 border-emerald-600 m-auto flex flex-col gap-4 justify-center items-center hover:shadow-lg hover:shadow-emerald-800 transition-all duration-300'>
                    <h2 className='text-bold text-2xl uppercase'>It&apos;s nice to meet you! </h2>
                    <p className='w-2/3'>
                        I am a System Engineer - Web Development - Frontend developer
                    </p>
                    <p className='w-2/3'>
                        Trained in developing and providing support and offering top-notch customer healthcare and problem solution abilities. Motivated to continue to learn and grow as a web development professional. Provide an excellent work environment and create a solid relationship with the team and company.
                    </p>


                </div>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            sticky={{ start: window.innerWidth >= 768 ? 2.8 : 3, end: window.innerWidth >= 768 ? 4.3 : 4 }}
            style={{
                width: `${window.innerWidth >= 768 ? '33%' : '100%'}`,
                backgroundColor: '#022c22',
                color: 'white',
                display:'flex',
                alignItems:'center'
            }}
        >
            <div className='p-5 flex flex-col gap-4 font-arvo '>
                <h3 className='text-4xl font-bold text-white text-center'>Web Developer</h3>
                <p>I&apos;m a web developer with knowledge in HTML, CSS (SASS), JavaScript, plus frameworks like Booststrap, React, React Native, Laravel, NodeJs and some other things that involve them.</p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            sticky={{ start: window.innerWidth >= 768 ? 4.6 : 3.5, end: window.innerWidth >= 768 ? 4 : 5 }}
            speed={1.50}
            style={{
                width:`${window.innerWidth >= 768 ? '33%' : '100%'}`,
            }}
            className='flex justify-center items-center'
        >
            <img src="/img/logos/react.gif" alt="skills image" />

        </ParallaxLayer>

        <ParallaxLayer
            sticky={{ start: window.innerWidth >= 768 ? 3.4 : 4, end: window.innerWidth >= 768 ? 4.5 : 5 }}
            style={{
                width:`${window.innerWidth >= 768 ? '33%' : '100%'}`,
                marginLeft: `${window.innerWidth >= 768 ? "33%" : '0'}`,
                backgroundColor: '#01271e',
                color: 'white',
                display:'flex',
                alignItems:'center'
            }}
        >
            <div className='p-5 flex flex-col gap-4 font-arvo '>
                <h3 className='text-4xl font-bold text-white text-center'>Soft Skills</h3>
                <p>
                    I am passionate about what I do, I like to be in constant improvement of skills and knowledge of the latest in the market.I also like to share knowledge with other professionals.
                </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            sticky={{ start: window.innerWidth >= 768 ? 4.8 : 4.48, end: window.innerWidth >= 768 ? 4.5 : 5 }}
            style={{
                width:`${window.innerWidth >= 768 ? '33%' : '100%'}`,
                marginLeft: `${window.innerWidth >= 768 ? "33%" : '0'}`,
                color: 'white',
                display:'flex',
                alignItems:'center'
            }}
            className='flex justify-center items-center'
        >
            <img src="/img/logos/soft-skills.gif" alt="skills image" />

        </ParallaxLayer>


        <ParallaxLayer
            sticky={{ start: window.innerWidth >= 768 ? 4 : 5, end: window.innerWidth >= 768 ? 5 : 6 }}
            style={{
                width:`${window.innerWidth >= 768 ? '33%' : '100%'}`,
                marginLeft: `${window.innerWidth >= 768 ? "66%" : '0'}`,
                backgroundColor: '#012019',
                color: 'white',
                display:'flex',
                alignItems:'center'
            }}
        >
            <div className='p-5 flex flex-col gap-4 font-arvo '>
                <h1 className='text-4xl font-bold text-white text-center'>Student</h1>
                <p>
                    Due to the constant and accelerated change of technologies in the market, I try to keep up to date with what&apos;s new or what I have not enough knowledge, learning technologies for development is really exciting.
                </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            sticky={{ start: window.innerWidth >= 768 ? 5.3 : 5.5, end: window.innerWidth >= 768 ? 5 : 5.5 }}
            style={{
                width:`${window.innerWidth >= 768 ? '33%' : '100%'}`,
                marginLeft: `${window.innerWidth >= 768 ? "66%" : '0'}`,

                color: 'white',
                display:'flex',
                alignItems:'center'
            }}
            className='flex justify-center items-center'
        >
            <img src="/img/logos/student.gif" alt="skills image" />

        </ParallaxLayer>

        <ParallaxLayer
            offset={window.innerWidth >= 768 ? 6 : 7}
            speed={0.95}
            style={{
                zIndex: '5',
                width: '70%',
            }}
            className='pt-[10rem]'
            
        >
            <Waypoint  onEnter={()=> setIsInView(true)} />
            <animated.h2  style={animation} className='text-white text-2xl text-center font-arvo font-bold'>My top Projects</animated.h2>
            <Waypoint  
            bottomOffset={window.innerHeight >= 768 ? '80%' : '50%'}
            onEnter={()=> setIsInView(false)} />

        </ParallaxLayer>

        <ParallaxLayer
            offset={window.innerWidth >= 768 ? 6.1 : 7.1}
            speed={0.95}
            style={{
                zIndex: '5',
                width: '70%',
            }}
            className='pt-[10rem]'
            
        >
            <Waypoint  onEnter={()=> setIsInView(true)} />
            <animated.span  style={animation} className='underline text-white text-sm text-center font-arvo text-amber-500 '>&ldquo;Some projects simulate to be connected with a DB via JSON API hosted on render, it could take some time to load the data.&rdquo;</animated.span>
            <Waypoint  
            bottomOffset={window.innerHeight >= 768 ? '80%' : '50%'}
            onEnter={()=> setIsInView(false)} />

        </ParallaxLayer>

        <ParallaxLayer
            offset={window.innerWidth >= 768 ? 5.5 : 7}
            sticky={{ start: 6, end: 9}}
            style={{
                backgroundColor: "transparent",
                width: "30%",
                left: "70%!important",
                bottom: "0!important",
                marginLeft: "70%!important",
                float: "right",
                backgroundImage: `url(/img/4.webp)`,
                backgroundPosition: "bottom",
                backgroundSize: "contain",
                zIndex: -1,
                filter: "drop-shadow(10px 10px 30px green) grayscale(75%)",
                
            }}
        >

        </ParallaxLayer>

        {
            PROJECTS.map((project)=>(
                <ParallaxLayer 
                    key={project.id}
                    offset={window.innerWidth >= 768 ? project.id : (project.id + 1)}
                    speed={0.95}
                    style={{
                        zIndex: '5',
                        width: '70%',
                        color: '#fff',
                    }}
                    className='pt-[20rem]'
                >
                    <div className='bg-gray-950 p-5 m-5 border-2 border-emerald-700 hover:shadow-md hover:shadow-emerald-900'>
                        <div className='flex flex-col items-center gap-3'>
                            <h3>{project.title}</h3>
                            <div className='w-3/4'>
                                <img src={project.image} alt="project image/gif" />
                            </div>
                            <div>
                                <p>{project.description}</p>
                            </div>
                            <div
                                className='flex gap-3'
                            >
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-2xl hover:text-emerald-600 hover:shadow-md hover:shadow-emerald-400 hover:-translate-y-1 rounded-full transition-all'
                                >
                                        <i className="bi bi-github"></i>
                                </a>
                                {project.demo && (
                                    <a 
                                        href={project.demo} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-2xl hover:text-emerald-600 hover:shadow hover:shadow-emerald-400 hover:-translate-y-1 rounded-full transition-all'
                                    >
                                        <i className="bi bi-browser-chrome"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
            ))
        }
 
        {/* <ParallaxLayer
            offset={window.innerWidth >= 768 ? 6 : 7}
            speed={0.95}
            style={{
                zIndex: '5',
                width: '70%',
                color: '#fff',
            }}
            className='pt-[20rem]'
        >
            <div className='bg-gray-950 p-5 m-5 border-2 border-emerald-700 hover:shadow-md hover:shadow-emerald-900'>
                <div className='flex flex-col items-center gap-3'>
                    <h3>Project title</h3>
                    <div className='w-3/4'>
                        <img src="/img/bg-full.jpg" alt="" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque dicta iste rerum unde maiores. Doloribus, dolorum. Veritatis, adipisci illo. Illum hic itaque sint nam, minus laudantium cumque eveniet. Libero!</p>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
 
        <ParallaxLayer
            offset={window.innerWidth >= 768 ? 7 : 8}
            speed={0.95}
            style={{
                zIndex: '5',
                width: '70%',
                color: '#fff',
            }}
            className='pt-[20rem]'
        >
            <div className='bg-gray-950 p-5 m-5 border-2 border-emerald-700 hover:shadow-md hover:shadow-emerald-900'>
                <div className='flex flex-col items-center gap-3'>
                    <h3>Project title</h3>
                    <div className='w-3/4'>
                        <img src="/img/bg-full.jpg" alt="" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque dicta iste rerum unde maiores. Doloribus, dolorum. Veritatis, adipisci illo. Illum hic itaque sint nam, minus laudantium cumque eveniet. Libero!</p>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
 
        <ParallaxLayer
            offset={window.innerWidth >= 768 ? 8 : 9}
            speed={0.95}
            style={{
                zIndex: '5',
                width: '70%',
                color: '#fff',
            }}
            className='pt-[20rem]'
        >
            <div className='bg-gray-950 p-5 m-5 border-2 border-emerald-700 hover:shadow-md hover:shadow-emerald-900'>
                <div className='flex flex-col items-center gap-3'>
                    <h3>Project title</h3>
                    <div className='w-3/4'>
                        <img src="/img/bg-full.jpg" alt="" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque dicta iste rerum unde maiores. Doloribus, dolorum. Veritatis, adipisci illo. Illum hic itaque sint nam, minus laudantium cumque eveniet. Libero!</p>
                    </div>
                </div>
            </div>
        </ParallaxLayer> */}

        <ParallaxLayer
            offset={window.innerWidth < 768 ? 11 :10}
            speed={0.70}
            factor={window.innerWidth < 768 ? 1.5 : 1}
            className='bg-white '
        >
        </ParallaxLayer>

        <ParallaxLayer
            offset={window.innerWidth < 768 ? 11.1 :10.1}
            speed={0.75}
            className='text-emerald-800 font-arvo '
        >
            <h2 className='text-4xl font-bold uppercase text-center'>My Stacks</h2>
        </ParallaxLayer>

        <ParallaxLayer
            offset={window.innerWidth < 768 ? 11.2 :10.2}
            factor={window.innerWidth < 768 ? 2.5 : 1}
            speed={1.25}
            className='flex flex-col md:flex-row md:gap-11'
        >
            <FlipCard
						body={<h2 className='font-ephesis font-bold text-6xl'>Frontend</h2>}
						title=""
						backQuote={true}
						bgColor="teal"
						backTitle="Front End Technologies"
						backBody={[
                            '/img/logos/figma-original.svg',
                            '/img/logos/html.svg',
                            '/img/logos/css3-original.svg',
                            '/img/logos/sass-original.svg',
                            '/img/logos/bootstrap.svg',
                            '/img/logos/tailwindcss-original.svg',
                            '/img/logos/javascript.svg',
                            '/img/logos/typescript-original.svg',
                            '/img/logos/react-original.svg',
                            '/img/logos/redux-original.svg',
                            '/img/logos/nextjs-original.svg',
                            '/img/logos/angularjs.svg',
                            '/img/logos/vuejs-original.svg',
                            '/img/logos/php-original.svg',
                            '/img/logos/gulp.svg',
                            '/img/logos/socketio-original-wordmark.svg',
                            ]} />

					<FlipCard
						title=""
						body={<h2 className='font-ephesis font-bold text-6xl'>Backend</h2>}
						backQuote={true}
						bgColor="royalblue"
						backBody={[
                                '/img/logos/csharp.svg',
                                '/img/logos/express-original.svg',
                                '/img/logos/firebase.svg',
                                '/img/logos/jest.svg',
                                '/img/logos/mongodb-original.svg',
                                '/img/logos/mysql-original.svg',
                                '/img/logos/nodejs-original.svg',
                                '/img/logos/npm-original.svg',
                                '/img/logos/postgresql-original.svg',
                                '/img/logos/python-original.svg',
                                '/img/logos/sequelize-original.svg',
                            ]}
						backTitle=""
					/>

					<FlipCard
						body={<h2 className='font-ephesis font-bold text-6xl'>DevOps</h2>}
						title=""
						backQuote={true}
						backTitle="Lao-tzu"
						bgColor="darkslateblue"
						backBody={[
                            '/img/logos/docker-original.svg',
                            '/img/logos/git-original.svg',
                            '/img/logos/github-original.svg',

                        ]}
					/>
        </ParallaxLayer>

        <ParallaxLayer
            sticky={{ start: 12, end:window.innerHeight > 570 ? 25 : 40 }}
            className="flex justify-center items-center  bg-gradient-to-r from-emerald-400  to-violet-800 font-arvo  bg-clip-text"
            style={{  zIndex: -100 }}
        >
            <h2 className="text-white text-transparent text-2xl sm:text-5xl md:text-9xl font-bold">Other Projects</h2>
        </ParallaxLayer>


        <ParallaxLayer
            offset={12 + 0.75}
            speed={0.3}
            factor={1}
            className='inline-block'
            style={{backgroundColor:'transparent'}}
            >
            {   
                OTHERPROJECTS.map((project)=>(
                    <div
                        style={{backgroundFilter: 'blur(6px)'}}
                        key={project.id} 
                        className={`${project.id % 2 !== 0 ? 'float-left' : 'float-right'} w-1/2 backdrop-blur-md p-5 m-5 border-2 border-emerald-700 hover:shadow-md hover:shadow-emerald-900 text-white  `}>
                        <div className='flex flex-col items-center gap-3 font-arvo'>
                            <div className='bg-gradient-to-r from-violet-400  to-emerald-400 bg-clip-text'>
                                <h3 className='uppercase text-3xl font-bold font-arvo text-transparent '>{project.title}</h3>
                            </div>
                            <div className='w-3/4'>
                                <img src={project.image} alt="project image/gif" />
                            </div>
                            <div>
                                <p>{project.description}</p>
                            </div>
                            <div
                                className='flex gap-3'
                            >
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-2xl hover:text-emerald-600 hover:shadow-md hover:shadow-emerald-400 hover:-translate-y-1 rounded-full transition-all'
                                >
                                        <i className="bi bi-github"></i>
                                </a>
                                {project.demo && (
                                    <a 
                                        href={project.demo} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-2xl hover:text-emerald-600 hover:shadow hover:shadow-emerald-400 hover:-translate-y-1 rounded-full transition-all'
                                    >
                                        <i className="bi bi-browser-chrome"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            }
        </ParallaxLayer>

    </Parallax>
</main>

    );
};

export default ParalaxComponent;
