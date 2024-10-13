const Footer = () => {
  return (
    <footer className=" absolute w-full h-[380px] top-[5120px] ">
      <center>
        <svg
          width="178"
          height="57"
          viewBox="0 0 178 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="178" height="58" fill="url(#pattern0_116_80)" />
          <defs>
            <pattern
              id="pattern0_116_80"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_116_80"
                transform="matrix(0.00194175 0 0 0.00595916 0 -0.000569133)"
              />
            </pattern>
            <image
              id="image0_116_80"
              width="515"
              height="168"
              xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCACoAgMDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAQFBgMCAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAr8AABGhlqzsM1zHTzRK6eegAAAAAAAAAAAAAAAAAAAAAAAAAAQar5VEqHdzzJS9h7M3PtRAhXgysTajIWNxCO03NSi7AAAAAAAAAAAAAAAAAAAAAAAABnIkyGa4AAAAAHOruKstAAAAAAAAAAAAAAAAAAAAAAAAAZ6FOgmuAAAAAAiS/J6AAAAAAAAAAAAAAAAAAAAAAAABQQLCAa0EfHXNEXugwu5KyhvM6bgGPuaG7LqtsqooLvPXxRPWmIlVqccffdjKOV/gdUWhTEan8aYzl7IrzS52RnD20nkj6DBaYppEKKb/ADc+rO9bOtjMFkSKbXYgkdbarNHIzXw+V8jRma0UCkNxjNXjjbyI0kAAAoq+xrjWleZi5z0oj6nL2BbZ3RZw3Ln6MZd0lyXlVZVpmr6hvjOepGnPuT2uKNDcUk8zU6m0Zc5fUUBC1mF2BKRYJX85tKblG+GbkVV8U/TnclFL9Vhc6bM6YxlvUW5eYDf4AtoMivLqq2WXLa6yWoOmB1OWNJm9bkjbSYck9gAAq8/sMMb3L3/oydzb+zOUm+4FTnd38MLa6X6Y6LuhhdBdejEX1t0ME3IpKfbczDtv7MzqvoePYyFfv4xibTRyDnlNeMA24zWr9DFXVt7OWK3nIz2m5dTGW9v6PeA3/Ih0es+GZvOvcw/DfRjF3131OGH3/IwvbaDqAABnNH4MxqsVdl0AAAAABw7wD5YUd4IkukLCXEliDOpSfLhzBFlUxPlU1yK2yzxcSai3EaTUFuCF659SUCH6qrg7gAAAAAAAAAAj5HbciqusjINM8ewA4/TqABHkCtsgRJYhzAQZwiSwV9gIsoEaSIsoEaSAOProAIsoAAAAAAAAAAAAFTbDI3FtXEis7WpCnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//aAAwDAQACAAMAAAAh8844www888888888888888888888888888QMcM8sIE8888888888888888888888888A88888888888888888888888888888888A888888o888888408w888888884888888A8oYA80sA4QMwowgcEUAowMIA0gU48888EoEwE4UwA0A8Q8c0gwcEAUAoEQ0wIw888ssEIoEIkAMIcsscks8MI8cEogc8cgE8888Q888888oc8U8U8880o8M8Q88888888888o488088sc88scs8scs888888888888888880c888888888888888888888888888888888888888888888888888888888888//9oADAMBAAIAAwAAABDzzzDzzDzzzzzzzzzzzzzzzzzzzzzzzzwDzCAQxyywjzzzzzzzzzzzzzzzzzzzzzzwDwDzzzzzwTzzzzzzzzzzzzzzzzzzzzzzwDwDzzzzzyzzzzzzzzzzzzzzzzzzzjTzzwDzjxxSDySyDyjyDyjSxQQDiAgBARSxjzwDxjyCQDhTwAijwixjgjiwRRQCgxjTyDjwDwyQxDiRgCjwSAzyRjgRQzxwDhzyCTjDwDyxjzzzzzyhThSjzxzzTjwzxzzzzzzzzwDzyhDTzDzzzyzzxyxyzyzxzyzzzzzzzzwDzzwwyhzzzzzzzzzzzzzzzzzzzzzzzzzwDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwD//xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAECAQE/ADX/AP/EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQMBAT8ANf8A/8QASxAAAQMBAggICgkACQUAAAAAAQIDBAAFEQYQEhMhMUFxFDI1UWFyc7EiIzM0QlJTgZLBIDBDUFRigpGhFRYkNkBgY9HwJkSissL/2gAIAQEAAT8C/wAjuWhEZ48hvdfTmEENHEzi9wpzCVf2UdI6xvpy3Jzn2gR1U0i2JyDfnyetppnCRY8swD0pN1M25Cd1rLZ/OKQ6h0XtrSoc4P3tPtRqApKVoWpSheLqcwkcPkmEjrG+nLanOfa5I/KKcfdd8o4tfWN9AFRu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"
            />
          </defs>
        </svg>
        <div className=" h-[30px] w-[386px] top-[35px] left-[564px] gap-[40px] flex  my-[60px] justify-between text-[20px] font-medium leading-[30px] ">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Testimonial
          </a>
        </div>
      </center>
      <div className=" absolute w-full flex justify-center items-center content-center  p-[5%]  ">
        <p className="w-[398px] h-[30px] text-center content-center font-medium text-[#AAAAAA] text-[20px] leading-[30px]">
          © 2024 Allied Controls. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
