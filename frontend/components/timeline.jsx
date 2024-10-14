import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { data, description } from '../data/timeline_data.js';
import { useState } from 'react'
import Card from './card.jsx';


export default function CustomizedTimeline() {
  const [visibleCards, setVisibleCards] = useState([false, false, false]); 

  const cards = description["August"].map((item, index) => (
    <Card 
      key={index}
      headers={data["August"][index]}
      description = {item}
    />
  ))

  let hoverTimeout = null;

  function handleMouseOver(index){
    setVisibleCards(prevState => {
      const newState = [...prevState]
      newState[index] = true
      return newState
    })
    console.log(`handleMouseOver ${index}`, visibleCards[index])
  }

  function handleMouseLeave(index){
    setTimeout(()=>{
      clearTimeout(hoverTimeout)
    }, 5000)

    setVisibleCards(prevState => {
      const newState = [...prevState]
      newState[index] = false
      return newState
    })
    console.log("handleMouseLeave", visibleCards[index])
  }

  return (
    <Timeline position="right">
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
          <TimelineContent sx={{ py: '25px', px: 2}}>
          <div 
            onMouseEnter={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Typography variant="h6"
              component="span"
              style = {{cursor:'default'}} 
            >
              {event}
            </Typography>
            <Typography>
              {visibleCards[index] && cards[index]}
            </Typography>
          </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}