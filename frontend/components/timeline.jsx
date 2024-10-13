import * as React from 'react';
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
import data from '../data/timeline_data.js';
import Card from './card.jsx';

export default function CustomizedTimeline() {

  function handleMouseOver(index){
    console.log("Event Mouse Over", index)
  }

  function handleMouseLeave(index){
    console.log("Event Mouse Leave", index) 
  }
  return (
    <Timeline position="alternate">
      {data["August"].map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Aug 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '20px', px: 2 }}>
            <Typography variant="h6" 
            component="span" 
            style = {{cursor:'default'}} 
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave(index)}>
              {event}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}