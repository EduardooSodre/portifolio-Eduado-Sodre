import HeroSection from "../containers/HeroSection";
import ProjectsSection from "../containers/ProjectsSection";
import FooterCredits from "../containers/FooterCredits";
import AboutMe from "../containers/AboutMe";
import { GetStaticProps } from "next";
import feedParser, { IBlogPost } from "../lib/feedParser";
import getGithubRepos, { IGithubRepo } from "../lib/githubRepos";
import Parser from "rss-parser";
import AOS from "aos";
import { useEffect } from "react";

import ContactSection from "../containers/ContactSection";

let parser = new Parser();

interface HomeProps {
  blogPosts: IBlogPost[];
  githubRepos: IGithubRepo[];
}

export default function Home({ blogPosts, githubRepos }: HomeProps) {
  useEffect(() => {
    AOS.init({
      once: true,
    });

    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <ProjectsSection
        title="personal"
        subtitle="projects"
        repos={githubRepos}
      />
      <ContactSection />
      <FooterCredits />
    </div>
  );
}

export const getStaticProps = async (ctx: GetStaticProps) => {
  const feed = await feedParser("matt.vicent");

  const githubRepos = await getGithubRepos();

  return {
    props: {
      blogPosts: feed,
      githubRepos: githubRepos || null,
    },
  };
};
