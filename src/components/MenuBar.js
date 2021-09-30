import React, { useEffect } from 'react'

import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {signIn,signOut,useSession} from "next-auth/client"
import { useRouter } from 'next/dist/client/router'


function MenuBar() {
  
  // return focus to the button when we transitioned from !open -> open
  const [session] =useSession();
  const router =useRouter();

    return    (
        <Stack direction="row" spacing={2}>
          <Paper>
            <MenuList className="bg-amazon_blue-light text-white">
              <MenuItem className={`${ !session && "cursor-not-allowed"} hover:bg-white hover:text-black`}  onClick={()=>( session && router.push("/userProfile")) }  >My account</MenuItem>
              <MenuItem className={`${!session && "cursor-not-allowed"} hover:bg-white hover:text-black`}  onClick={()=>(session && router.push("/createNFT"))}>Create NFT</MenuItem>
        
              <MenuItem className="hover:bg-white hover:text-black" onClick={()=>router.push("/contact")}> Contact </MenuItem>
              <MenuItem className="hover:bg-white hover:text-black" onClick={session?  signOut: signIn}> {!session ? "Log In":  "Log Out" } </MenuItem>
            </MenuList>
          </Paper>
         
        </Stack>
      );
    
    }

export default MenuBar
