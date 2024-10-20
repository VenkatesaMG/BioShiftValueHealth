import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoIosMenu } from "react-icons/io";

export default function TemporaryDrawer({menuIcons = [], menuLabels = [], listItem, handleChangeList}) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{width: 250, backgroundColor:'white'}} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuLabels.map((text, index) => (
          <ListItem key={text} disablePadding className= {listItem === index ? 'changeListBackground' : '' }>
            <ListItemButton onClick={() => handleChangeList(index)}>
              <ListItemIcon>
                {menuIcons[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><IoIosMenu style={{fontSize:'1.5rem', color:'black'}}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}