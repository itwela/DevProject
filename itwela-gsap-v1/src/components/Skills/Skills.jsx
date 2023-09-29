import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box'
import Img1 from '../../../public/python-icon.png'
import Img2 from '../../../public/react-icon.png'
import Img3 from '../../../public/html-icon.png'
import Img4 from '../../../public/csha-icon.png'
import Img5 from '../../../public/css-icon.png'
import Img6 from '../../../public/js-icon.png'
import './Skills.css'

function Skills() {
    return (
        <>
            <Box sx={{ 
                // width: '67vw', 
                // borderColor: 'red', 
                // borderStyle: 'solid', 
                display: 'flex',  
                justifyContent: 'center' 
                }}>
                    <Avatar alt="Remy Sharp" src={Img1}/>
                    <Avatar alt="Travis Howard" src={Img2}/>
                    <Avatar alt="Cindy Baker" src={Img3} />
            </Box>

            <Box sx={{ 
                // width: '67vw', 
                // borderColor: 'red', 
                // borderStyle: 'solid', 
                display: 'flex',  
                justifyContent: 'center' 
                }}>
                    <Avatar alt="Remy Sharp" src={Img4}/>
                    <Avatar alt="Travis Howard" src={Img5}/>
                    <Avatar alt="Cindy Baker" src={Img6} />
            </Box>
        </>
    );
}

export default Skills
