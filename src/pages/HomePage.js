import React, { useEffect , useState} from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import abc from "../images/abc.png"; 
import Donna_3 from "../images/Donna_3.jpeg";
import Donna_3_cut from "../images/Donna_3_cut.jpeg";

import EduCert from './EduCert'


import { Grid2, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Stack } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NameCard from './NameCard';

import Chip from '@mui/material/Chip';
import WebIcon from '@mui/icons-material/Web';
import DnsIcon from '@mui/icons-material/Dns';
import MemoryIcon from '@mui/icons-material/Memory';

import { Container, Card, CardContent, IconButton } from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import CloudIcon from "@mui/icons-material/Cloud";

import WorkExperience  from './WorkExperience';
import Projects from  './Projects';
import Skills from './Skills';


// import { makeStyles } from '@mui/styles';
// import {hp_img}  from "../images/hp_img.png";
const hpImg = require('../images/hp_img.png');

const HomePage = () => {
  // const [dialogOpen, setDialogOpen] = useState(false);
  // useEffect(()=>
  //   {
  //     setDialogOpen(true);
  //   }
  //     , [])
  //     const handleDialogClose = () => {
  //       setDialogOpen(false);
  //     };

  return (
    <div className='horizontal-scroll-container flex' >
   
        {/* Blog Section */}
        <section id="blog" className="scroll-section">
          <NameCard /> 
        </section>
        <section id="projects" className="scroll-section ">
          <Projects/>
        </section>

        <section id="work-experience" className="scroll-section">
         <WorkExperience/>
        </section>   

      <section id="skills" className="scroll-section ">
        <Skills/>
      </section>
       
        {/* Education Section */}
        <section id="education" className="scroll-section  bg-gradient-to-b from-gray-50 to-white">
          <EduCert/>
        </section>

  </div>
  )
}
const skillsData = [
  {
    title: 'Languages',
    icon: <CodeIcon />,
    skills: ['JavaScript', 'SQL', 'NoSQL', 'Python', 'Java'],
  },
  {
    title: 'Technologies',
    icon: <StorageIcon />,
    skills: ['React.js', 'Django', 'Node.js', 'MongoDB', 'REST APIs', 'Bootstrap', 'Azure'],
  },
  {
    title: 'Tools & Strengths',
    icon: <BuildIcon />,
    skills: ['Git', 'VS Code', 'Docker', 'Kafka', 'OOP', 'Agile', 'Documentation'],
  }
];
const itemData = [
  {
    img: abc,
    title: 'text-behind-image',
    author: `Rexon Wong's`,
    link: 'https://textbehindimage.rexanwong.xyz/',
  },
  {
    img: Donna_3_cut,
    title: 'Donna AI',
    author: 'Mobiversite',
    link:'https://www.musicdonna.com/'
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
  //   title: 'Sink',
  //   author: 'Charles Deluvio',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
  //   title: 'Kitchen',
  //   author: 'Christian Mackie',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
  //   title: 'Blinds',
  //   author: 'Darren Richardson',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
  //   title: 'Chairs',
  //   author: 'Taylor Simpson',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
  //   title: 'Laptop',
  //   author: 'Ben Kolde',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
  //   title: 'Doors',
  //   author: 'Philipp Berndt',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
  //   title: 'Coffee',
  //   author: 'Jen P.',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
  //   title: 'Storage',
  //   author: 'Douglas Sheppard',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
  //   title: 'Candle',
  //   author: 'Fi Bell',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
  //   title: 'Coffee table',
  //   author: 'Hutomo Abrianto',
  // },
];
export default HomePage