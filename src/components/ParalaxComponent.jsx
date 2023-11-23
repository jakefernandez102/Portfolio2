
import {Parallax,ParallaxLayer} from '@react-spring/parallax';
import { useRef } from 'react';
import 'animate.css';


const ParalaxComponent = () =>
{
    const ref = useRef(null) 

    return (
<main >
    <Parallax pages={50} ref={ref} >
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
            <h2 className='text-white text-2xl text-center font-arvo font-bold'>My top Projects</h2>

        </ParallaxLayer>

        <ParallaxLayer
            offset={6}
            sticky={{ start: 6, end: 9}}
            style={{
                backgroundColor: "transparent",
                width: "30%",
                left: "70%!important",
                bottom: "0!important",
                marginLeft: "70%!important",
                float: "right",
                backgroundImage: `url(/img/3.webp)`,
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

    </Parallax>
</main>

    );
};

export default ParalaxComponent;
