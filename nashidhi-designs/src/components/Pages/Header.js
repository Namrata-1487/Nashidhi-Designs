import React from 'react';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: "Home", path: "/" },
  { text: "Portfolio", path: "/portfolio" },
  { text: "Services", path: "/services" },
  { text: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #1E3C72, #2A5298)", // Deep blue gradient
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#FFD93D", // Golden accent
                fontWeight: "bold",
                fontSize: "1.5rem",
                textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
              }}
            >
              Nashidhi Designs
            </Link>
          </motion.div>

          {/* Menu Items */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "rgba(255, 217, 61, 0.2)", // Golden glow
                      transform: "scale(1.05)",
                      boxShadow: "0px 4px 15px rgba(255,217,61,0.5)",
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  {item.text}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Header;
