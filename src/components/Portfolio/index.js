import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'neighbourhood-library',
      description: 'A neighbourhood library service.',
      link: "https://neighborhood-library-2c3090787093.herokuapp.com/",
      repo: "https://github.com/Keegan-Omel/Neighborh00d-Library",
      image: "neighbourhood-library"
    },
    {
      name: 'thought-wand',
      description: 'The Thought Wand project is a text editor web application',
      link: "https://thought-wand-c2087ec758f7.herokuapp.com/",
      repo: "https://github.com/Keegan-Omel/Thought-Wand",
      image: "thought-wand"
    },
    {
      name: 'blog-hits',
      description: 'Blog-Hits is a simple CMS-style blog site that allows developers to publish and read blog posts.',
      link: "https://bloghits.herokuapp.com/",
      repo: "https://github.com/Keegan-Omel/Blog-Hits",
      image: "blog-hits"
    },
    {
      name: 'Poké-Feels-Movie-Edition',
      description: 'Welcome to the Pokémon Feels Movie Edition Web Application!',
      link: "https://keegan-omel.github.io/Pokemon-Movie-Generator/",
      repo: "https://github.com/Keegan-Omel/Pokemon-Movie-Generator",
      image: "Poke-Feels-Movie-Edition"
    },
    {
      name: 'pro-note',
      description: 'This is an Express.js-based note-taking application that allows users to create, retrieve, update, and delete notes.',
      link: "https://pro-note.herokuapp.com/",
      repo: "https://github.com/Keegan-Omel/Note-Taker-App",
      image: "pro-note"
    },
    {
    name: 'xrpl-wallet',
    description: 'XRPL-Wallet is a simple browser-based wallet for the XRP Ledger',
    link: "https://drive.google.com/file/d/1azwt2enoH0L8xb6e0bfUuprkhhLYOWZg/view",
    repo: "https://github.com/Keegan-Omel/XRPL-Wallet",
    image: "xrpl-wallet"
  },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
