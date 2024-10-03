"use client";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience as Exp, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Exp[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className="bg-[#210B2C] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-[#55286F]/20 scrollbar-thumb-[#D22B2B]/80 hover:scrollbar-thumb-[#D22B2B]">
      <Head>
        <title>My Portfolio</title>
      </Head>

      {/* Header */}

      <Header socials={socials}/>

      {/* Hero */}

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}

      <section id="exp" className="snap-center">
        <Experience experiences={experiences} />
      </section>

      {/* Skills */}

      <section id="skill" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={urlFor(pageInfo.heroImage).url()}
              alt="pic"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Exp[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
 
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };

}