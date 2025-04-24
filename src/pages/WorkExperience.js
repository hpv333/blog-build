import React from "react";
import { Typography, Box, Grid, Paper, Stack, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

import abc from "../images/abc.png";
import Donna_3_cut from "../images/Donna_3_cut.jpeg";
import './Skills.css';

const timelineData = [
  {
    date: "Jan 2022 - June 2022",
    title: "Full Stack Intern",
    company: "Sindala Trading and Pvt Ltd",
  },
  {
    date: "Mar 2023 — May 2023",
    title: "Software Development Intern",
    company: "Style Pro Pvt Ltd",
  },
  {
    date: "Sep 2023 — Present",
    title: "Graduate Assistant IT (Web developer)",
    company: "CVAD University Of North Texas",
  },
];

const itemData = [
  {
    img: abc,
    title: "text-behind-image",
    author: "Rexon Wong's",
    link: "https://textbehindimage.rexanwong.xyz/",
  },
  {
    img: Donna_3_cut,
    title: "Donna AI",
    author: "Mobiversite",
    link: "https://www.musicdonna.com/",
  },
];

const WorkExperience = () => {
  return (
    <section className="scroll-section">
      <h2 className="text-4xl font-bold text-[var(--base-theme-font-color-dark)] font-['Georgia',_serif] mb-6">
        Technical Skills
        <span className="heading-underline"></span>
      </h2>

      <Stack spacing={4} sx={{ mb: 6 }}>
        {timelineData.map((item, idx) => (
          <Paper
            key={idx}
            elevation={3}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              borderLeft: '5px solid var(--base-theme)',
              background: 'var(--bg-gradient-light)',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.01)' },
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {item.date}
            </Typography>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LaptopMacIcon sx={{ fontSize: '1.2rem', color: 'var(--base-theme)' }} />
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.company}
            </Typography>
          </Paper>
        ))}
      </Stack>

      <Box sx={{ width: "90%", mt: 5 }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
              sx={{ cursor: "pointer" }}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: "30%", width: "20rem", height: "20rem" }}
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
  );
};

export default WorkExperience;
