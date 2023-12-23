"use client";
import React, {useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from "./TabButton";


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>FullStack Academy of Code</li>
                <li> thte</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS CLOUD PRACTIONER</li>
                <li>University of Sanata</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-1'>
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className='mt-4 mf:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Commodi illum nostrum doloremque hic, praesentium dolore
                     veritatis sequi libero atque aliquid recusandae maiores,
                    at beatae neque? Enim porro sapiente fugit vero.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}>
                            {" "}Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}>
                            {" "}Experience{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection 