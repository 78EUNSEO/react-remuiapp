import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { 
    MyList , 
    ActionIconsContainerDesktop, 
    ActionIconsContainerMobile,
} from "../../styles/appber";
import ShoppingCardIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Component } from "react";
import { Colors } from "../../styles/theme";


export default function Actions({ matches}) {

    const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

    return (
        <Component>
                <MyList type="row">
                <ListItemButton
                sx={{
                    justifyContent: 'center',
                }}
                >
                    <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Colors.secondary,
                    }}
                    >
                    <ShoppingCardIcon />  
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem />

                <ListItemButton
                sx={{
                    justifyContent: 'center',
                }}
                >
                    <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Colors.secondary,
                    }}
                    >
                    <FavoriteIcon />  
                    </ListItemIcon>
                </ListItemButton>

                <Divider orientation="vertical" flexItem />

                <ListItemButton
                sx={{
                    justifyContent: 'center',
                }}
                >
                    <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Colors.secondary,
                    }}
                    >
                    <PersonIcon />  
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
            </MyList>
        </Component>
        
    )
}
