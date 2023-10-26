import Image from "next/image";

export default function Footer() {
  return (
    <section>
      <div className="sm:px-10 md:mx-20 md:px-20 mb-4 flex justify-center md:justify-between">
        <Image
          src="/assets/img/brand.png"
          alt="El Programador Full Logo"
          width={147}
          height={50}
          className="hidden md:block"
        />
        <div className="flex flex-row gap-8 justify-center">
          <a className="flex items-center gap-2" href="https://www.linkedin.com/in/lcaputo" target="_blank">
            <Image
              src="/assets/icons/linkedin.svg"
              alt="Linkedin Logo"
              width={23}
              height={23}
            />
            Linkedin
          </a>
          <a className="flex items-center gap-2" href="https://github.com/lcaputo" target="_blank">
            <Image
              src="/assets/icons/github.svg"
              alt="Github Logo"
              width={23}
              height={23}
            />
            Github
          </a>
        </div>
      </div>
      <hr className="opacity-20" />
      <p className="text-center text-[#F5F5F5] opacity-20 my-2 text-sm md:text-lg">
        © 2024 El Programador. Todos los derechos reservados.
      </p>
    </section>
  );
}
