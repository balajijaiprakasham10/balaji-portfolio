import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'I am Balaji from Erode, with a Diploma in Electronics and Communication Engineering from KPC and a B.Tech in Information Technology, graduating with a CGPA of 7.00',
        line2: 'My interests span both development and testing, and I have proficiency in Java, JavaScript, ReactJS, Linux, and MySQL.',
        line3: 'Currently, I am expanding my knowledge in Agile methodology and error codes. My diverse skill set and continuous learning drive my passion for delivering high-quality software solutions.'
    }

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt="Description of about image" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-5'>{config.line3}</p>
                </div>
            </div>
        </section>
    );
}
