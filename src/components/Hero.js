import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer',
        social: {
            
            linkedin: 'https://linkedin.com/in/balaji-j-5426b126b'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl '>Hi, <br/> Im <span className='text-white'></span> BALAJI 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10 text-white'>
                
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
