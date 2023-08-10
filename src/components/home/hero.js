const Intro = () => {
  return (
    <>
      <header className="bg-white text-[#001d35] dark:bg-black dark:text-white">
        {/* <header className="bg-gradient-to-r from-[#001d35] to-[#068297]"> */}
       
        <div className="pt-10">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* <!--Left Col--> */}
            <div className="flex flex-col w-full  justify-center items-center text-center p-10 mx-auto  md:w-11/12 xl:w-9/12">
              <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Start</span>{" "}
                <span class="block w-full py-2 leading-12  lg:inline">
                  building a buzz
                </span>{" "}
                <span>around your product ?</span>
              </h1>
              <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                we specialize in crafting custom digital strategies that drive
                growth, increase revenue, and enhance brand visibility.
              </p>
              <a href="#" class="btn-action style-2">
                Contact Us
              </a>
            </div>
            {/* <!--Right Col--> */}
          </div>
        </div>
        {/* <div className="relative -mt-12 lg:-mt-24">
          <svg viewBox="0 0 1428 174" version="1.1" >
            <g stroke="none" stroke-width="1" fill="none">
              <g
                transform="translate(-2.000000, 44.000000)"
                className="fill-white dark:fill-black"
                fill-rule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                className="fill-white dark:fill-black"
                fill-rule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div> */}
      </header>
    </>
  );
};

export default Intro;
