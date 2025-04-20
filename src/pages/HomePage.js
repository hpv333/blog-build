import React, { useEffect , useState} from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import abc from "../images/abc.png"; 
import Donna_3 from "../images/Donna_3.jpeg";
import Donna_3_cut from "../images/Donna_3_cut.jpeg";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import HariPriya_Profile_img from '../images/HariPriya_Profile_img.jpg';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle'; 
import Dialog_Alert from '../components/Dialog_Alert';

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
<br />
        {/* Education Section */}
        <section id="education" className="scroll-section  bg-gradient-to-b from-gray-50 to-white">
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                mb: 6,
                textAlign: 'center',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 100,
                  height: 4,
                  bgcolor: 'primary.main',
                  borderRadius: 2
                }
              }}
            >
              Education & Certifications
            </Typography>

            {/* University Card */}
            <Card 
              elevation={3}
              sx={{
                mb: 6,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Grid2 container spacing={3} alignItems="center">
                  <Grid2 item xs={12} md={2}>
                    <Avatar 
                      src="/unt-logo.png" 
                      alt="UNT Logo"
                      sx={{ 
                        width: 100, 
                        height: 100,
                        margin: 'auto'
                      }}
                    />
                  </Grid2>
                  <Grid2 item xs={12} md={7}>
                    <Typography variant="h4" color="primary.main" gutterBottom>
                      University of North Texas
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Master of Science, Computer Science
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Denton, TX
                    </Typography>
                  </Grid2>
                  <Grid2 item xs={12} md={3} sx={{ textAlign: { md: 'right' } }}>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      2023 — Present
                    </Typography>
                    <Chip
                      label="CGPA: 4.00"
                      color="success"
                      sx={{ 
                        p: 2,
                        '& .MuiChip-label': { 
                          fontSize: '1.1rem',
                          fontWeight: 'bold'
                        }
                      }}
                    />
                  </Grid2>
                </Grid2>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 4 }}>
              Professional Certifications
            </Typography>
            <Grid2 container spacing={3}>
              {[
                {
                  title: 'Front-End Development',
                  issuer: 'Meta',
                  date: 'February 2024',
                  icon: <WebIcon />
                },
                {
                  title: 'AZ-900',
                  issuer: 'Microsoft',
                  date: 'February 2024',
                  icon: <CloudIcon />
                },
                {
                  title: 'MySQL Essential Training',
                  issuer: 'LinkedIn',
                  date: 'October 2024',
                  icon: <StorageIcon />
                }
              ].map((cert, index) => (
                <Grid2 item xs={12} md={4} key={index}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                          {cert.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {cert.title}
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary">
                            {cert.issuer} • {cert.date}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
          </Container>
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