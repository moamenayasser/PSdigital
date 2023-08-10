const OurTeam = () => {
  return (
    <section className="container">
      <div class="relative text-center">
        <h1 class="text-[#022441] absolute left-[27px] right-0 top-[-40px] mx-auto text-center text-[180px] tracking-[24px] uppercase -z-10 max-[1024px]:text-[150px] opacity-30">
          <span class="heading-bg animate-fade-up  animate-delay-[2s]">
            Team
          </span>
        </h1>
        <h5 class="text-[#022441] dark:text-white capitalize relative leading-[2.5] mb-[5px] after:absolute after:content-[''] after:bottom-0 after:w-[36px] after:h-[5px] after:bg-tf after:left-0 after:right-0 after:mx-auto after:text-center ">
          our Team
        </h5>
        <h3 class="mb-[28px] text-[#022441] dark:text-white capitalize animate-fade-up  animate-delay-[2s]">
          latest projects
        </h3>
      </div>

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
        <div className="flex gap-8 lg:gap-16  justify-center flex-wrap animate-fade-up  animate-delay-[2s]">
          <div className="text-center text-gray-500 dark:text-gray-400  hover:animate-fade-up ">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full "
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="Bonnie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Bonnie Green</a>
            </h3>
            <p>CEO/Co-founder</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 hover:animate-fade-up ">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
              alt="Helene Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Helene Engels</a>
            </h3>
            <p>CTO/Co-founder</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 hover:animate-fade-up ">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Jese Leos</a>
            </h3>
            <p>SEO & Marketing</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 hover:animate-fade-up  ">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="Joseph Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Joseph Mcfall</a>
            </h3>
            <p>Sales</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 hover:animate-fade-up ">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
              alt="Sofia Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Lana Byrd</a>
            </h3>
            <p>Web Designer</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 hover:animate-fade-up ">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
              alt="Leslie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Leslie Livingston</a>
            </h3>
            <p>Graphic Designer</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 hover:animate-fade-up ">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="Michael Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Michael Gough</a>
            </h3>
            <p>React Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
