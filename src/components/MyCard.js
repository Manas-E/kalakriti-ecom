import React from 'react'


import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function MyCard({title,description,image,icon}) {
    return (
        <div >
       
            <CardContent className="flex flex-col items-center">
                <Typography component="h3" variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {description}
                </Typography>
            </CardContent>
       
        
            
           
        </div>
    )
}

export default MyCard
