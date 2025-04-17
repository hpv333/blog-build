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
    <div className='homepage flex w-full' >
      <Box sx={{ width: "100%", marginTop: "10px" }}>
        {/* Blog Section */}
        <section id="blog" className="min-h-screen p-8 h-8">
      <NameCard />
          
        </section>


        <section id="work-experience" className="min-h-screen p-8">
          <div variant="h4" component="h2" gutterBottom>
            Work Experience
          </div>
        
          <div>
          <Timeline position="alternate">
            
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Jan 2022 - June 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  color="primary">
          <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Full Stack Intern
          </Typography>
          <Typography> Sindala Trading and Pvt Ltd</Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <CircleIcon /> */}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {/* Sleep */}
          </Typography>
          {/* <Typography>Because you need rest</Typography> */}
        </TimelineContent>
      </TimelineItem>

      

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Mar 2023 — May 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Software Development Intern
          </Typography>
          <Typography> Style Pro Pvt Ltd </Typography>
        </TimelineContent>
      </TimelineItem>
     
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          {/* <CircleIcon /> */}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">

          </Typography>
          <Typography></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
         Sep 2023 — Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  color="primary">
          <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Graduate Assistant IT (Web developer)
          </Typography>
          <Typography>  CVAD University Of North Texas</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
          </div>
          <Box sx={{ width: "90%", height: "80%", marginBottom: "5%" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                // <Avatar alt="HP Sharp" src={HariPriya_Profile_img} sx={{display: 'flex' ,height:"30rem", width:"30rem"}}/>
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                    style={{ cursor: 'pointer', borderRadius: '30%', width: '20rem', height: '20rem' }}
                  />
                  <ImageListItemBar
                    position="below"
                    title={item.author}
                    subtitle={<span><strong>{item.title}</strong></span>}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </section>
    
        <section id="projects" className="min-h-screen p-8">
        <Box sx={{ bgcolor: '#f5f5f7', minHeight: '100vh', pt: 10, pb: 8 }}>
        <Container maxWidth="lg">
  {/* Section Header */}
  <Typography
    variant="h3"
    component="h1"
    gutterBottom
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
    Featured Projects
  </Typography>

  <Grid2 container spacing={4}>
    {/* Unified Scheduler System */}
    <Grid2 item xs={12} md={6} >
      <Card
        elevation={3}
        sx={{
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 8
          },
          position: 'relative',
          overflow: 'visible',
          width: '100%'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -12,
            right: 24,
            zIndex: 1,
            bgcolor: 'primary.main',
            color: 'white',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            boxShadow: 2
          }}
        >
          <Typography variant="subtitle2">December 2024 — Present</Typography>
        </Box>

        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
            <Box>
              <Typography variant="h4" color="primary.main" gutterBottom>
                Unified Scheduler System
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                <Chip icon={<WebIcon />} label="MERN Stack" color="primary" variant="outlined" />
                <Chip icon={<StorageIcon />} label="MongoDB Atlas" color="primary" variant="outlined" />
                <Chip icon={<DeveloperModeIcon />} label="React.js" color="primary" variant="outlined" />
              </Stack>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary" sx={{ bgcolor: 'primary.light' }}>
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" sx={{ bgcolor: 'primary.light' }}>
                <LinkIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box sx={{ mb: 3 }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="Centralized Platform Development"
                  secondary="Designing and developing a MERN stack platform for equipment reservations and device checkouts, hoping to achieve 40% reduction in usage time"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="Advanced Access Control"
                  secondary="Implementing multi-level administrative hierarchy with role-based access control (RBAC) using MongoDB Atlas, with the roles being staff, manager, and various admins: Unit Admin, Aread Admin and Site Admin. "
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="System Integration"
                  secondary="Collaborated with stakeholders to ensure scalability and adaptability, integrating comprehensive API testing with Postman"
                />
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </Grid2>

    {/* Digital Signage Project */}
    <Grid2 item xs={12} md={6} >
      <Card
        elevation={3}
        sx={{
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 8
          },
          position: 'relative',
          overflow: 'visible',
          width: '100%'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -12,
            right: 24,
            zIndex: 1,
            bgcolor: 'primary.main',
            color: 'white',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            boxShadow: 2
          }}
        >
          <Typography variant="subtitle2">September 2023 — November 2024</Typography>
        </Box>

        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
            <Box>
              <Typography variant="h4" color="primary.main" gutterBottom>
                Digital Signage
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                <Chip icon={<WebIcon />} label="React.js" color="primary" variant="outlined" />
                <Chip icon={<StorageIcon />} label="Node.js" color="primary" variant="outlined" />
                <Chip icon={<DeveloperModeIcon />} label="Raspberry Pi" color="primary" variant="outlined" />
              </Stack>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary" sx={{ bgcolor: 'primary.light' }}>
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" sx={{ bgcolor: 'primary.light' }}>
                <LinkIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box sx={{ mb: 3 }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="Frontend Optimization"
                  secondary="Reduced manual playlist management time by 70% through an efficient MERN(MongoDB, Express, React, Node) stack web application dashboard implemented in the University Of North Texas, Art Building, Denton."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="Backend Development"
                  secondary="Implemented Node.js backend with robust API and file system functionalities for improved efficiency"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="Hardware Integration"
                  secondary="Successfully deployed across UNT Art Building using Raspberry Pi hardware for screen identification and management making it a cost effective and efficient solution that is scalable. "
                />
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </Grid2>
  </Grid2>
</Container>
    </Box>
        </section>

   
       

        <section id="skills" className="min-h-screen py-16">
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
          Technical Skills
        </Typography>

        <Grid2 container spacing={20}>
          {skillsData.map((category, index) => (
            <Grid2 item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8
                  }
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    pb: 2,
                    borderBottom: '2px solid',
                    borderColor: 'primary.light'
                  }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                      {category.icon}
                    </Avatar>
                    <Typography variant="h5" color="primary.main">
                      {category.title}
                    </Typography>
                  </Box>
                  <Stack spacing={1.5}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        icon={<CheckCircleOutlineIcon />}
                        label={skill}
                        color="primary"
                        variant="outlined"
                        sx={{
                          p: 2,
                          '& .MuiChip-label': { fontSize: '1rem' },
                          transition: 'all 0.2s',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                            '& .MuiSvgIcon-root': { color: 'white' }
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </section>
<br />
        {/* Education Section */}
        <section id="education" className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white">
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
      </Box>



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