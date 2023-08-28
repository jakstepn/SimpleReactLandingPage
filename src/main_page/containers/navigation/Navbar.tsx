import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import Logo from "../../../assets/components/Logo";
import { scroller } from 'react-scroll';
import Link from "../../../models/Link";
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {

}

const pages = [
    new Link('Domki', 'houses'),
    new Link('Atrakcje', 'entertainment'),
    new Link('Kontakt', 'contact')
];

const Navbar: React.FunctionComponent<NavbarProps> = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [navbarColor, setNavbarColor] = React.useState<boolean>(false);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const handleScrollTo = (scrollTo?: string) => {
        handleCloseNavMenu();
        if (scrollTo) {
            scroller.scrollTo(scrollTo, {
                duration: 500,
                delay: 100,
                smooth: true,
                offset: -150
            })
        }
    };

    const changeNavbarColor = () => {
        if (window.scrollY >= window.innerHeight - 80) {
            setNavbarColor(true);
        }
        else {
            setNavbarColor(false);
        }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return (
        <AppBar
            position="fixed"
            sx={{
                background: `${navbarColor ? '#fdfdfd' : 'transparent'}`,
                boxShadow: 'none'
            }}>
            <Container sx={{
                margin: 0
            }}>
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '6px 8px',
                        }}
                        onClick={() => handleScrollTo("main")}>
                        <Logo
                            color={navbarColor ? '#36454F' : '#fdfdfd'}
                            className="pointer noselect" />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{
                                color: `${navbarColor ? '#36454F' : '#fdfdfd'}`,
                            }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            {pages.map((pageLink) => (
                                <MenuItem
                                    key={pageLink.value}
                                    onClick={() => handleScrollTo(pageLink.containerName)}
                                >
                                    <Typography textAlign="center">{pageLink.value}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((pageLink) => (
                            <Button
                                key={pageLink.value}
                                onClick={
                                    () => handleScrollTo(pageLink.containerName)
                                }
                                sx={{
                                    textTransform: 'none',
                                    my: 2,
                                    color: `${navbarColor ? '#36454F' : '#fdfdfd'}`,
                                    display: 'block'
                                }}>
                                {pageLink.value}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default Navbar;