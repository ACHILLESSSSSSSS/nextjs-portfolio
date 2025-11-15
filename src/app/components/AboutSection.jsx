"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li><strong>Frontend:</strong> React, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+)</li>
        <li><strong>Backend:</strong> Node.js, Express.js, REST APIs</li>
        <li><strong>Database:</strong> MongoDB, Firebase, MySQL</li>
        <li><strong>Tools & DevOps:</strong> Git, GitHub, VS Code, Postman</li>
        <li><strong>Other:</strong> TypeScript, JWT Auth, Socket.io, Prisma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li><strong>B.Tech in Computer Science</strong> – Viswajyothi College of Engineering & Technology (VJCET)</li>
        <li><strong>Higher Secondary</strong> Kerala State Board, 2020-2022</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li><strong>Meta Front-End Developer</strong> – Coursera, Meta</li>
        <li><strong>Full-Stack Web Development</strong> – BroCodeCamp</li>
        <li><strong>Node.js & Express</strong> – Udemy</li>
        <li><strong>Responsive Web Design</strong> – freeCodeCamp</li>
        <li><strong>Git & GitHub</strong> – Google Developer Certification</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTabTransition] = useTransition();

  const handleTabChange = (id) => {
    startTabTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image1.png" width={700} height={600} alt="About section image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2  className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a Computer Science and Design undergraduate with a strong interest in crafting impactful digital experiences.

I combine creative thinking with problem-solving to develop responsive websites, mobile applications, and interactive games. With a focus on user experience and clean design, I strive to build solutions that are both functional and visually refined.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
              Certification
            </TabButton>
          </div>
          {/* Corrected Content Alignment */}
          <div className="mt-8 flex flex-col items-start">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
