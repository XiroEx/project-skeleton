import { useState } from 'react'
import { Box, ButtonBase, Grid, useMediaQuery, AppBar, Toolbar, Icon, Button,
    List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import { Link } from 'react-router-dom'




export default function Nav(props) {

    
    
    const Styles = {
        toolbar: {
            paddingLeft:0, 
            paddingRight:0,
            paddingBottom: window.location.pathname == '/send' ? 40: '',
            minHeight: window.location.pathname == '/send' ? 96 : 56,
        },
        menuButton: {
            width:128,
            fontSize:'150%'
        },
        accountButton: {
            width:128,
            fontSize:'150%'
        },
        logoutButton: {
            display: props.userData ? '' : 'none'
        }
    }

    const Menu = <Box sx={{width:'250px'}}>
        <Toolbar> <Grid container spacing={1}>
            <Grid item xs={12} style={{textAlign:'left', fontSize:'120%', fontVariant:'small-caps'}}>{ 'Menu'}</Grid>
        </Grid> </Toolbar>

            
        <List
        component="nav"
        style={{fontSize:'inherit'}}
        aria-labelledby="nested-list-subheader">

            {[['Dashboard','calculate'], ['Strategies','account_tree'], ['Trading','trending_up'], ['Algorithms','analytics'], ['Wallets','account_balance_wallet'], ['Performance','price_change'], ['History','history'], ['Analytics','data_exploration'], ['Settings','settings']].map( item => {
                return (
                <ListItem button component={Link} to={`/${item[0]}`}  disabled={props.user} onClick={props.toggleDrawer('menu',false)}>
                    <ListItemIcon>
                    <Icon>{item[1]}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={item[0]} />
                </ListItem>)
            })}
        </List>
    </Box>
    
    const md = useMediaQuery(theme => theme.breakpoints.up("md"))
    return (
        <Box>
            <AppBar elevation={1} color='inherit' sx={{ width: { md: `calc(100% - ${props.data.bigmenu ? 250 : 0}px)` }, ml: { md: `${250}px` }, }}>
                <Toolbar style={Styles.toolbar}>
                    <Grid container style={Styles.menuButton}>
                        <Button color="inherit" onClick={props.toggleDrawer(md ? 'bigmenu':'menu', md ? !props.data.bigmenu : !props.data.menu)}>
                            <Icon>{md && props.data.bigmenu ? 'chevron_left':'menu'}</Icon>
                        </Button>
                    </Grid>

                </Toolbar>
            </AppBar>
            
            <Drawer anchor={'left'} open={props.data['menu']} onClose={props.toggleDrawer('menu', false)} variant='temporary' sx={{display:{xs:'block',md:'none'}}}>
                {Menu}      
            </Drawer>
            <Drawer anchor={'left'} open={props.data['bigmenu']} variant='persistent' sx={{display:{xs:'none',md:'block',}, fontVariant:'normal'}}>
                {Menu}      
            </Drawer>
        </Box>
    )
}
