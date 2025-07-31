
import { createTheme } from "@mui/material";

//overriding the color
export const myTheme = createTheme(
    {
        palette:{
            primary:{
                main:'#673ab7'
            }
        }
    }
)

//app.js--> Theme Provider
