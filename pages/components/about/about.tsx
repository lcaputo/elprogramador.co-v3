import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row mx-auto
    md:justify-center mt-10 md:w-3/4 xl:w-2/4"
    >
      <Image
        src="/assets/img/andy.png"
        alt="andy"
        width={285}
        height={519}
        loading="lazy"
        className="hidden md:block w-4/12 md:w-2/6 lg:w-3/12 2xl:w-1/5"
      />
      <div className="flex flex-col justify-center mt-10 mx-auto md:mx-3">
        <h1 className="text-3xl font-semibold tracking-wider">Laszlo Caputo</h1>
        <p className="my-4 max-w-md tracking-wide">
          Desarrollador de software apasionado.
          <br />
          Lider, servicial, comprometido, autodidacta, solucionador de
          problemas.
        </p>
        <div className="flex gap-4">
          <img
            src="assets/icons/node.svg"
            alt="Node"
            width={32}
            height={32}
            data-tooltip-target="tooltip-node"
            data-tooltip-placement="bottom"
          />
          <div
            id="tooltip-node"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 transition-opacity duration-300"
          >
            NodeJS
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <img
            src="assets/icons/react.svg"
            alt="React"
            width={32}
            height={32}
            data-tooltip-target="tooltip-react"
            data-tooltip-placement="bottom"
          />
          <div
            id="tooltip-react"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 transition-opacity duration-300"
          >
            React
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <img
            src="assets/icons/angular.svg"
            alt="Angular"
            width={32}
            height={32}
            data-tooltip-target="tooltip-angular"
            data-tooltip-placement="bottom"
          />
          <div
            id="tooltip-angular"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 transition-opacity duration-300"
          >
            Angular
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <img
            src="assets/icons/csharp.svg"
            alt="CSharp"
            width={32}
            height={32}
            data-tooltip-target="tooltip-csharp"
            data-tooltip-placement="bottom"
          />
          <div
            id="tooltip-csharp"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 transition-opacity duration-300"
          >
            .Net Core
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <img
            src="assets/icons/python.svg"
            alt="Pythom"
            width={32}
            height={32}
            data-tooltip-target="tooltip-python"
            data-tooltip-placement="bottom"
          />
          <div
            id="tooltip-python"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 transition-opacity duration-300"
          >
            Python
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <img
            src="assets/icons/aws.svg"
            alt="AWS"
            width={32}
            height={32}
            data-tooltip-target="tooltip-aws"
            data-tooltip-placement="bottom"
          />
          <div
            id="tooltip-aws"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 transition-opacity duration-300"
          >
            Amazon Web Services
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <img
            src="assets/icons/docker.svg"
            alt="Docker"
            width={32}
            height={32}
            data-tooltip-target="tooltip-docker"
            data-tooltip-placement="bottom"
          />
          <div
            id="tooltip-docker"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-black bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 transition-opacity duration-300"
          >
            Docker
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        <div className="mt-10">
          <button className="contact-button mt-1 px-3 py-2 tracking-wider rounded-md">
            CONTACTAR
          </button>
        </div>
      </div>
    </section>
  );
}
