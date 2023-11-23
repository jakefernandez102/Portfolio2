
import {Parallax,ParallaxLayer} from '@react-spring/parallax';
import { useRef, useState } from 'react';
import {config, useSpring,animated} from '@react-spring/web';
import {Waypoint} from 'react-waypoint'
import FlipCard from './FlipCard';
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
    <Parallax pages={totalDuration} ref={ref1} >
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
        >
            <h2 className='animate__animated animate__fadeInTopRight font-ephesis text-9xl font-bold text-white'>Jake Fernandez</h2>
        </ParallaxLayer>

        <ParallaxLayer
            offset={0}
            speed={3}
            style={{ 
                width: '100%',
            }}
        >
            <div className='w-1/5 absolute bottom-0 right-0 animate__animated animate__fadeInLeft animate__delay-1s filter grayscale'>
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

                <div className='w-full md:w-3/4  bg-gray-900 h-1/2 rounded-xl border-2 border-emerald-600 m-auto flex flex-col gap-4 justify-center items-center hover:shadow-lg hover:shadow-emerald-800 transition-all duration-300'>
                    <h2 className='text-bold text-2xl uppercase'>It&apos;s nice to meet you! </h2>
                    <p>
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
                width: `${window.innerWidth > 768 ? '33%' : '100%'}`,
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
            sticky={{ start: window.innerWidth >= 768 ? 4 : 5, end: window.innerWidth >= 768 ? 5 : 6 }}
            style={{
                width:`${window.innerWidth > 768 ? '33%' : '100%'}`,
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
            offset={6}
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
            bottomOffset='80%'
            onEnter={()=> setIsInView(false)} />

        </ParallaxLayer>

        <ParallaxLayer
            offset={6}
            sticky={{ start: 6, end: 8.5}}
            style={{
                backgroundColor: "transparent",
                width: "30%",
                left: "70%!important",
                bottom: "0!important",
                marginLeft: "70%!important",
                float: "right",
                backgroundImage: `url(/img/2.webp)`,
                backgroundPosition: "bottom",
                backgroundSize: "contain",
                zIndex: -1
            }}
        >

        </ParallaxLayer>
 
        <ParallaxLayer
            offset={6}
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
            offset={7}
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
            offset={8}
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
            offset={9}
            speed={0.70}
            factor={window.innerWidth < 768 ? 1.5 : 1}
            className='bg-white '
        >
        </ParallaxLayer>

        <ParallaxLayer
            offset={9.1}
            speed={0.75}
            className='text-emerald-800 font-arvo '
        >
            <h2 className='text-4xl font-bold uppercase text-center'>My Stacks</h2>
        </ParallaxLayer>

        <ParallaxLayer
            offset={9.2}
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

    </Parallax>
</main>

    );
};

export default ParalaxComponent;
