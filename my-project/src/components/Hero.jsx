import { heroImg } from '../assets';

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            <div className='flex flex-col justify-start gap-4'>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Welcome to My <span className='text-[#20B486]'>Journalism Course</span> where experience meets expertise.</h1>
                <p className = 'py-2 text-2xl text-[#20B486] font-medium'>Join me on a transformative journey into the world of journalism.</p>
                <a href="#enroll-now" className='w-auto max-w-[180px] my-4 gap-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Enroll Now</a>
            </div>
            <img  src={heroImg} className="md:order-last  order-first h-[460px]" />
        </div>
    </div>
  )
}

export default Hero