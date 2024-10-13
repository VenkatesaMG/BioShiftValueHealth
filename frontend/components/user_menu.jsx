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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IoIosMenu } from "react-icons/io";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeIcon from '@mui/icons-material/Home';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [listItem, setListItem] = React.useState(0);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function handleChangeList(index){
    setListItem(index)
  }

  const menuIcons = [<HomeIcon />, <DescriptionOutlinedIcon />, <FolderOpenOutlinedIcon />, <BiotechOutlinedIcon />]
  const DrawerList = (
    <Box sx={{width: 250, backgroundColor:'white'}} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Overview', 'Notes', 'Documents', 'Labs'].map((text, index) => (
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