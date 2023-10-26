export default function Experience() {
  return (
    <section className="flex flex-col mx-auto md:justify-center mt-20 md:w-3/4 xl:w-3/4">
      <h2 className="text-2xl text-[#F9A430] text-center font-light tracking-widest mb-10">
        EXPERIENCIA Y DESARROLLOS
      </h2>

        <ul className="lg:columns-2 mx-auto gap-12 lg:px-5 xl:px-4">

          <li className="flex relative mb-10">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 mt-20 bg-white pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative">
              <img
                src="/assets/icons/message.svg"
                alt="Message icon"
                width={58}
                height={58}
              />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2018
              </h2>
              <p className="leading-relaxed text-white">
                Encuestas y segmentacion por grupos etareos.
              </p>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">PHP</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Javascript</span>

            </div>
          </li>

          <li className="flex relative mb-10">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-white mt-20 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <img
                src="/assets/icons/wrench.svg"
                alt="Wrench icon"
                width={58}
                height={58}
              />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2019
              </h2>
              <p className="leading-relaxed text-white">
                Mantenimiento de equipos médicos.
              </p>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Java (Spring Boot)</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Angular</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">AWS</span>
            </div>
          </li>


          <li className="flex relative mb-10">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-white mt-20 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <img
                src="/assets/icons/reload.svg"
                alt="Reload icon"
                width={58}
                height={58}
              />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2019 - 2020
              </h2>
              <p className="leading-relaxed text-white">
                Automatización de consultas (crawler).
              </p>
              <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Python (Django)</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Docker</span>

            </div>
          </li>


          <li className="flex relative mb-10">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-white mt-20 block lg:hidden pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <img
                src="/assets/icons/calc.svg"
                alt="Calculator icon"
                width={58}
                height={58}
              />
            </div>
            <div className="flex-grow pl-4 break-after-column">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2020 - 2021
              </h2>
              <p className="leading-relaxed text-white">
                Inventario y facturación.
              </p>
              <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Angular</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Docker</span>


            </div>
          </li>

          <li className="flex relative mb-10">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-white mt-20 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <img
                src="/assets/icons/heart-beat.svg"
                alt="Heart icon"
                width={58}
                height={58}
              />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2021
              </h2>
              <p className="leading-relaxed text-white">
                Medidor de oxígeno en sangre y ritmo cardíaco
              </p>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Java (Android)</span>
            </div>
          </li>

          <li className="flex relative mb-10">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-white mt-20 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <img
                src="/assets/icons/truck.svg"
                alt="Truck icon"
                width={58}
                height={58}
              />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2021 - 2022
              </h2>
              <p className="leading-relaxed text-white">
                Logistica, inventario y seguimiento de carga.
              </p>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">PHP</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Javascript</span>
            </div>
          </li>

          <li className="flex relative mb-10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex p-1 justify-center text-primary relative z-10">
              <img
                src="/assets/icons/map-pin.svg"
                alt="Truck icon"
                width={58}
                height={58}
              />
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                2022 - Hasta la fecha
              </h2>
              <p className="leading-relaxed text-white">
                Plataforma de trabajo remoto y marketing.
              </p>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">.Net Core</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Angular</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">AWS</span>

            </div>
          </li>

        </ul>


    </section>
  );
}
