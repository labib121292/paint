import React from "react";

export default function App() {
  return (
    <div className="font-sans bg-[#FEEDBC]">
      {/* Header */}
      <header className=" py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="bg-white w-7xl h-11.5 rounded-2xl flex items-center justify-center my-5 gap-2">
           
            <span className="h-11.5 w-20">
              <img src="/p.png" alt="" />
            </span>
          </div>
         
        </div>
      </header>

      {/* Hero */}
      <section className="flex py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 justify-between items-center">
          <div className="flex-col w-100">
            <p className="text-[#F6C544] font-bold uppercase text-sm mb-2">Blog Product Features</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#222] leading-tight mb-4">
              Cursus Integer <br /> Consequat Tristique.<span className="text-black">|</span>
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white px-3 py-1 rounded-full text-neutral-700 font-medium">Cursus Integer</span>
              <span className="bg-white px-3 py-1 rounded-full text-neutral-700 font-medium">Integer Consequat </span>
              <span className="bg-white px-3 py-1 rounded-full text-neutral-700 font-medium">Tellus Euismod Pellentesque</span>
              <span className="bg-white px-3 py-1 rounded-full text-neutral-700 font-medium">Aliquot Tristique</span>
            </div>
            <button className="btn btn-warning text-black px-6 rounded-full font-semibold text-sm shadow-none border-none">
              Learn More →
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="/a.png "
              alt="Illustration"
              className="w-full max-w-xs md:max-w-sm rounded-xl"
            />
            
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#1F1F1F] text-white flex py-16 px-4 h-200">
        <div className="lg:max-w-7xl  md:max-w-2xl sm:max-w-150  mx-auto flex items-start justify-between gap-18">
           <div className="flex-col w-100">
            <p className="text-[#F6C544] font-bold uppercase text-sm mb-2">Blog Product Features</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#fbf7f7] leading-tight mb-4">
              Cursus Integer <br /> Consequat Tristique.
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white px-3 py-1 rounded-full text-neutral-700 font-medium">Cursus Integer</span>
              <span className="bg-white px-3 py-1 rounded-full text-neutral-700 font-medium">Integer Consequat </span>
              <span className="bg-white px-3 py-1 rounded-full text-neutral-700 font-medium">Tellus Euismod Pellentesque</span>
              <span className="bg-white px-3 py-1 rounded-full text-neutral-700 font-medium">Aliquot Tristique</span>
            </div>
            <button className="btn btn-warning text-black px-6 rounded-full font-semibold text-sm shadow-none border-none">
              Learn More →
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 flex-col justify-between items-center w-100">
            <div className="bg-[#2A2A2A] p-6  rounded-2xl flex flex-col justify-center h-55">
              <span className="text-3xl font-bold text-[#F6C544] mb-2">1.</span>
              <span className="text-sm">Phasellus Vitae Ornare Vitae</span>
            </div>
            <div className="bg-[#F6C544] p-6 rounded-2xl flex flex-col justify-center mt-14 h-55 text-black">
              <span className="text-3xl font-bold mb-2">2.</span>
              <span className="text-sm ">Donec Amet Tristique Nulla</span>
            </div>
            <div className="bg-[#FFE28A] p-6 rounded-2xl flex flex-col justify-center mb-14 h-55 text-black">
              <span className="text-3xl font-bold mb-2">3.</span>
              <span className="text-sm">Efficitur Posuere Lorem</span>
            </div>
            <div className="bg-white p-6 rounded-2xl flex flex-col justify-center mb-0 h-55 text-black">
              <span className="text-3xl font-bold text-[#F6C544] mb-2">4.</span>
              <span className="text-sm">Molestie Dui Phas</span>
            </div>
          </div>
        </div>
      </section>
     
      

      {/* Testimonial */}
     <section className="bg-[#f9b200]   h-100">
  <div className="flex justify-center translate-y-[-150px] lg:translate-y-[-102px] h-80">
    <div className="flex flex-col lg:flex-row w-[80%] justify-around bg-white rounded-[60px] gap-[72px] sm:gap-[0px] items-center text-center lg:text-left">
      <div className=" lg:min-w-[40%] flex justify-center">
        <img
          src="/m.png"
          alt=""
          className="pt-[20px] lg:py-[100px] lg:pl-[135px] lg:h-100 md:h-35 sm:h-30 object-contain block"
        />
      </div>
      <div className=" lg:pt-[178px] px-10">
        <div className="text-black py-2 text-[30px] lg:text-[40px] font-[700] mt-5">
          What our customers thought?
        </div>
        <div className="text-black  text-[16px] lg:text-[20px] font-[400]">
          Euismod magna id purus eget nunc ligula suspendisse dui netus.
          Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.
        </div>
        <div className="text-black text-[24px] font-[700]">Holly Davidson</div>
        <div className="flex justify-center gap-[40px] pt-[40px] pb-[40px] lg:pb-[168px] lg:justify-normal">
          <div>
            <img src="desktop/trending-flat-left-black.png" alt="" />
          </div>
          <div>
            {" "}
            <img src="desktop/trending-flat-right.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FAQ */}
      <section className="bg-[#1F1F1F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Phasellus a vitae iaculis magna.</h2>
          <div className="space-y-4 text-left">
            <div className="collapse collapse-plus bg-white text-black rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Quam vehicula faucibus amet lorem
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white text-black rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Porttitor feugiat phasellus vel
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white text-black rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Mauris fermentum praesent
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-white text-black rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Vulputate et vulputate suspendisse
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFF7E0] py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-sm">Vulputate et pulvinar ethre</h3>
            <p className="text-sm">Suspendisse tellus consectetur</p>
          </div>
          <button className="btn btn-warning text-black px-6 rounded-full font-semibold text-sm shadow-none border-none">
            Learn More →
          </button>
        </div>
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>
            &copy; Bant.{" "}
            <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms &amp; Conditions</a>
          </p>
        </div>
      </footer>
    </div>
  );
}