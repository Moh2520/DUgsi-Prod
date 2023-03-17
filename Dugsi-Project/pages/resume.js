import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import TimelineResume from '../pages/TimelineResume';
import 'react-vertical-timeline-component/style.min.css';
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <meta name="description" content="My resume" />
        <title>Resume For me | My Website</title>
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Resume</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Link href="/">
                  <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                    Home
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <TimelineResume />
        </section>
      </main>
    </div>
  );
}