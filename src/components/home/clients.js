import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="py-16 overflow-x-hidden">
      <div class="relative text-center">
        <h1 class="text-[#022441] absolute left-[27px] right-0 top-[-40px] mx-auto text-center text-[180px] tracking-[24px] uppercase -z-10 max-[1024px]:text-[150px] opacity-30">
          <span class="heading-bg">Clients</span>
        </h1>
        <h5 class="text-[#022441] capitalize relative leading-[2.5] mb-[5px] after:absolute after:content-[''] after:bottom-0 after:w-[36px] after:h-[5px] after:bg-tf after:left-0 after:right-0 after:mx-auto after:text-center ">
          our Clients
        </h5>
        <h3 class="mb-[28px] text-[#022441] capitalize">latest projects</h3>
      </div>

      <div className="pt-20">
        <Marquee gradient="true" pauseOnHover="true" >
          <img
            className=" max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            className=" max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            className=" max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            className=" max-h-12 w-full object-contain sm:col-start-2 m-4"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            className=" col-start-2 max-h-12 w-full object-contain sm:col-start-auto m-4"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            className=" max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            className=" max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            className=" max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            className=" max-h-12 w-full object-contain sm:col-start-2 m-4"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            className=" col-start-2 max-h-12 w-full object-contain sm:col-start-auto m-4"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
