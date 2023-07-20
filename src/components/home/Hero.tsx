const Hero = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <img
          src="./menReadingBooks.jpeg"
          className="max-w-xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Uncover the Infinite Worlds of Imagination!
          </h1>
          <p className="py-6 tracking-wide ">
            Welcome to BookWorm Haven, where books come alive. Dive into a world
            of captivating tales, explore diverse genres, and connect with
            fellow book lovers. Get ready to unleash your imagination and
            discover the joy of reading. Happy reading! 📚✨
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
