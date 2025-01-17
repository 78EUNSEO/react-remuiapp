import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { 
    ActionIconsContainerDesktop, 
    ActionIconsContainerMobile,
    AppbarContainer,
    AppbarHeader, 
    MyList } from "../../styles/appber";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";


export default function AppbarDesktop({ matches })  {
    const { setShowSearchBox } = useUIContext();

    return (
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type= "row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="Contact Us"/>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon onClick={() => setShowSearchBox(true)}/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions/>
        </AppbarContainer>
        
    
    );
}