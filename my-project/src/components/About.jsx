const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Who I Am?</h2>
          <p className="text-lg text-gray-600 mb-8">With over 30 years of experience in investigative journalism, I am a seasoned professional dedicated to share my knowledge with aspiring journalists.</p>
          <img src="https://live-production.wcms.abc-cdn.net.au/2d1695e5869d86ba1c6293485e1603d9?impolicy=wcms_crop_resize&cropH=1688&cropW=3000&xPos=0&yPos=274&width=862&height=485" alt="Motivation" className="rounded-full mx-auto mb-8" style={{ maxWidth: '400px' }} />
          <p className="text-lg text-gray-600 mb-8">Join My journalism course and embark on a transformative journey into the world of journalism. Whether you are a beginner or an experienced journalist looking to sharpen your skills, My course offers invaluable lessons and hands-on experience to help you excel in your career.</p>
          <a href="#enroll-now" className="bg-[#20B486] hover:bg-[#0b5840] hover:text-[#20B486] text-white py-3 px-8 rounded-md font-semibold inline-block transition-colors duration-300">Enroll Now</a>
        </div>
      </div>
    </section>
  );
};

export default About;
