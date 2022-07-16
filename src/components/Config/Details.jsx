// import React from 'react'

import { GithubImage, CovidLiveInfo, Gyip, TipCalc, DanceLife } from '../../assets/Images/ExportImages'
import { 
    SiReact,
    SiVuedotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiGithub,
    SiGit,
    SiMongodb,
    SiSass,
    SiLinkedin,
    SiInstagram,
    SiTwitter } from 'react-icons/si'


export const Details = {
        name: 'Reydel Ocon',
        status: 'Full-Stack Developer',
        age: '19',
        location: 'Gensan, Philippines',
}

export const Projects = [
        {
            projectName: 'Github User Search',
            projectAbout: 'A simple search engine for Github users. Search by username, name, or email.',
            projectImage: GithubImage,
            projectTags: ['React', 'Tailwind CSS', 'CSS', 'HTML', 'JavaScript', 'Github API'],
        },
        {
            projectName: 'Covid 19 Live Info',
            projectAbout: 'A simple search engine for Github users. Search by username, name, or email.',
            projectImage: CovidLiveInfo,
            projectTags: ['React', 'CSS', 'HTML', 'JavaScript', 'API'],
        },
        {
            projectName: 'Get yo IP',
            projectAbout: 'a website that can get your ip address which also stands for got yo ip.',
            projectImage: Gyip,
            projectTags: ['React', 'CSS', 'HTML', 'JavaScript'],
        },
        {
            projectName: 'Tip Calculator',
            projectAbout: 'A tip calculator that can calculate various percentages and translate them to real money for ya to make things much easier.',
            projectImage: TipCalc,
            projectTags: ['CSS', 'HTML', 'JavaScript'],
        },{
            projectName: 'Dance is Life',
            projectAbout: 'a static landing page website made with HTML and CSS and also my final project for the first semester on web development.',
            projectImage: DanceLife,
            projectTags: ['CSS', 'HTML'],
        }
]

export const Links = [
    ['About', '/#about'],
    ['Projects', '/#projects'],
    ['Blogs', '/#blogs'],
    ['Contact', '/#contact'],

]


export const Stack = [
    {
      id: 'react',
      name: 'React JS',
      Icon: SiReact,
    },
    {
      id: 'vue',
      name: 'Vue Js',
      Icon: SiVuedotjs,
    },
    {
      id: 'tailwind',
      name: 'Tailwind',
      Icon: SiTailwindcss,
    },
    {
      id: 'node',
      name: 'Node JS',
      Icon: SiNodedotjs,
    },
    {
      id: 'github',
      name: 'Github',
      Icon: SiGithub,
    },
    {
      id: 'git',
      name: 'Git',
      Icon: SiGit,
    },
    {
      id: 'mongo',
      name: 'Mongo',
      Icon: SiMongodb,
    },
    {
      id: 'sass',
      name: 'Sass',
      Icon: SiSass,
    },
  ]

  export const SocialIcons = [
      {
        id: 'github',
        name: 'Github',
        Icon: SiGithub,
        link: 'https://github.com/reydelshit'
      },
      {
        id: 'linkedin',
        name: 'Linkedin',
        Icon: SiLinkedin,
        link: 'https://www.linkedin.com/in/reydelocon/'
      },
      {
        id: 'instagram',
        name: 'Instagram',
        Icon: SiInstagram,
        link: 'https://www.instagram.com/reydelshit/'
      },
      {
        id: 'twitter',
        name: 'Twitter',
        Icon: SiTwitter,
        link: 'https://twitter.com/reydelsht'
      }
  ]

