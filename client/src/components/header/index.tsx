import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { AppRouter } from "../../consts/router";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const LINKS = [
    {
        id: 0,
        name: "Глоссарий",
        route: AppRouter.Dictionary,
    },
    {
        id: 1,
        name: "Граф",
        route: AppRouter.Graph,
    },
];

export default function Header() {
    const navigate = useNavigate();

    const handleLinkClick = (link: string) => {
        navigate(link);
    };

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {LINKS.map((link) => (
                                <MenuItem
                                    key={link.id}
                                    onClick={() => handleLinkClick(link.route)}
                                >
                                    <Typography textAlign="center">
                                        {link.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {LINKS.map((link) => (
                            <Button
                                key={link.id}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                                onClick={() => handleLinkClick(link.route)}
                            >
                                {link.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <Button
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                <Container>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        sx={{
                                            mr: 2,
                                            display: { xs: "none", md: "flex" },
                                            fontFamily: "monospace",
                                            fontWeight: 600,

                                            color: "inherit",
                                            textDecoration: "none",
                                        }}
                                    >
                                        <GitHubIcon
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "flex",
                                                },
                                                mr: 1,
                                            }}
                                        />
                                        GITHUB
                                    </Typography>
                                </Container>
                            </Button>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
