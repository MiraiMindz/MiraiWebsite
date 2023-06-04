"use client";

import { useEffect, useState } from "react";
import { MiraiLogo } from "../components/assets/Logo";
import Link from "next/link";

export function BodyLayout({ children }: any) {
  // Theme Switcher
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
      const localStorageTheme = localStorage.getItem('theme');

      setIsDarkTheme(localStorageTheme === 'dark' || (!localStorageTheme && getCurrentTheme()));

      const mqListener = (e: any) => {
        setIsDarkTheme(e.matches);
        e.matches ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
      };

      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);

      return () => darkThemeMq.removeListener(mqListener);
    }
  }, []);

  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    !isDarkTheme ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
  };

  // Mobile Menu Toggler
  const [isMenuOn, setIsMenuOn] = useState(false);
  const handleMenu = () => {
    setIsMenuOn(!isMenuOn);
  };


  // Gradient Background
  
  //type RGBColor = [number, number, number];

  //const blendColors = (color1: RGBColor, color2: RGBColor, percentage: number): RGBColor => {
    // Calculate the blended RGB values
    //const blendedR: number = Math.round(color1[0] * (1 - percentage) + color2[0] * percentage);
    //const blendedG: number = Math.round(color1[1] * (1 - percentage) + color2[1] * percentage);
    //const blendedB: number = Math.round(color1[2] * (1 - percentage) + color2[2] * percentage);

    // Return the blended RGB color
    //return [blendedR, blendedG, blendedB];
  // }


  //const darkStartColor = [200, 200, 255];
  //const darkStopColor = [255, 200, 255];
  //const lightStartColor = [200, 200, 255];
  //const lightStopColor = [255, 200, 255];
  //const tailwindDarkBGColor = [10, 10, 10];
  //const tailwindLightBGColor = [250, 250, 250];
  
  const darkStartColor = "rgb(0, 0, 255)";
  const darkStopColor = "rgb(255, 0, 255)";
  const lightStartColor = "rgb(0, 0, 255)";
  const lightStopColor = "rgb(255, 0, 255)";
  const tailwindDarkBGColor = "rgb(0, 0, 0)"; // 10, 10, 10
  const tailwindLightBGColor = "rgb(250, 250, 250)";
  const tailwindLightMixPercentage = 90;
  const tailwindDarkMixPercentage = 90;
  let   darkColors:string[] = [];
  let   lightColors:string[] = [];

  for (let i = 0; i < 20; i++ ) {
    let percent = (i+1)*5;
    let currDarkColr =  `color-mix(in srgb, ${darkStartColor} ${percent}%, ${darkStopColor})`;
    let currLightColr = `color-mix(in srgb, ${lightStartColor} ${percent}%, ${lightStopColor})`;
    darkColors.push(`color-mix(in srgb, ${tailwindDarkBGColor} ${tailwindDarkMixPercentage}%, ${currDarkColr}) ${percent}%`);
    lightColors.push(`color-mix(in srgb, ${tailwindLightBGColor} ${tailwindLightMixPercentage}%, ${currLightColr}) ${percent}%`);
  }

  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
      // Generate a random rotation value between 0 and 360 degrees
        const newRotation = Math.floor(Math.random() * 361);
        setTargetRotation(newRotation);
      }, 2000); // Change target rotation every 2 seconds

      return () => {
        clearInterval(interval);
      };
    }, []);

  useEffect(() => {
    const changeRotation = () => {
      if (rotation !== targetRotation) {
        const diff = targetRotation - rotation;
        const step = diff / 200; // Divide the difference by the number of steps

        setRotation(prevRotation => prevRotation + step);
      }
    };

    const interval = setInterval(changeRotation, 20); // Gradually change rotation every 100 milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [rotation, targetRotation]);

  const mainComponentStyle = {
    background: isDarkTheme
      ? `linear-gradient(${rotation}deg, ${darkColors[0]}, ${darkColors[1]}, ${darkColors[2]}, ${darkColors[3]}, ${darkColors[4]}, ${darkColors[5]}, ${darkColors[6]}, ${darkColors[7]}, ${darkColors[8]}, ${darkColors[9]}, ${darkColors[10]}, ${darkColors[11]}, ${darkColors[12]}, ${darkColors[13]}, ${darkColors[14]}, ${darkColors[15]}, ${darkColors[16]}, ${darkColors[17]}, ${darkColors[18]}, ${darkColors[19]}) no-repeat`
      : `linear-gradient(${rotation}deg, ${lightColors[0]}, ${lightColors[1]}, ${lightColors[2]}, ${lightColors[3]}, ${lightColors[4]}, ${lightColors[5]}, ${lightColors[6]}, ${lightColors[7]}, ${lightColors[8]}, ${lightColors[9]}, ${lightColors[10]}, ${lightColors[11]}, ${lightColors[12]}, ${lightColors[13]}, ${lightColors[14]}, ${lightColors[15]}, ${lightColors[16]}, ${lightColors[17]}, ${lightColors[18]}, ${lightColors[19]}) no-repeat`
  };

  return (
    <div className={isDarkTheme ? 'dark' : 'light'}>
      <div className="gradient-animation min-h-screen" style={mainComponentStyle}>
        <div className="text-neutral-950 dark:text-neutral-50 flex flex-col min-h-screen items-stretch flex-grow">
          <header className="sticky top-0 backdrop-blur-sm px-2 py-2 md:px-1 blur-mobile z-10">
            <div className="flex flex-row justify-between mb-1 items-center">
              <div className="flex flex-row items-center">
                <div className="w-16 fill-neutral-950 dark:fill-neutral-50">
                  <MiraiLogo />
                </div>
                <ul className="nav-bar list-none uppercase overflow-hidden transition-colors ml-8 font-black hidden md:flex">
                  {[
                    { href: '/', text: 'Início' },
                    { href: '/classes', text: 'Aulas' },
                    { href: '/projects', text: 'Projetos' },
                    { href: '/blog', text: 'Blog' },
                    { href: '/about', text: 'Sobre' }
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="hover:text-neutral-50 hover:bg-neutral-950 px-1 dark:hover:text-neutral-950 dark:hover:bg-neutral-50 transition-colors duration-75"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between content-center items-center w-16 md:w-8">
                <button
                  className={(isMenuOn ? 'is-active ' : '') + 'hamburger hamburger--spin relative md:hidden'}
                  type="button"
                  onClick={handleMenu}
                >
                  <span className={(isMenuOn ? '' : 'hamhover ') + 'hamburger-box w-6 h-1'}>
                    <span className="hamburger-inner bg-neutral-950 after:bg-neutral-950 before:bg-neutral-950 dark:bg-neutral-50 dark:before:bg-neutral-50 dark:after:bg-neutral-50 before:-top-2 after:-bottom-2" />
                  </span>
                </button>
                <button id="theme-toggle" onClick={handleTheme}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.39 472.39" className="w-8 h-8">
                    <g className="toggle-sun">
                      <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
                    </g>
                    <g className="toggle-circle">
                      <circle className="cls-1" cx="236.2" cy="236.2" r="103.78" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <ul className={(isMenuOn ? 'h-8 ' : 'h-0 ') + 'md:hidden nav-bar flex list-none uppercase overflow-hidden show-menu transition-colors justify-center content-center items-center font-black'}>
                {[
                  { href: '/', text: 'Início' },
                  { href: '/classes', text: 'Aulas' },
                  { href: '/projects', text: 'Projetos' },
                  { href: '/blog', text: 'Blog' },
                  { href: '/about', text: 'Sobre' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-neutral-50 hover:bg-neutral-950 px-1 dark:hover:text-neutral-950 dark:hover:bg-neutral-50 transition-colors duration-75"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <hr className={(isMenuOn ? 'active ' : '') + 'block md:hidden h-1 transition-hr ease-in-out duration-500 bg-neutral-950 dark:bg-neutral-50 rounded-full'} />
            </div>
          </header>
          <div className="px-2 min-h-screen flex-grow items-stretch flex">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


