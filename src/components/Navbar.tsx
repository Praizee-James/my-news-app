import { Box, InputBase, Typography, Divider, ButtonGroup, Button } from "@mui/material"; 
import SearchIcon from '@mui/icons-material/Search';
import { useState, type KeyboardEvent, type ChangeEvent, type FC } from "react";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Navbar: FC = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            navigate("/search", {
                state: { title: `What we found for ${search}`, query: search },
            });
            setSearch("");
        }
    };

    const handleSearchIconClick = () => {
        navigate("/search", {
            state: { title: `What we found for ${search}`, query: search },
        });
        setSearch("");
    };

    return (
        <div className="bg-blue-900 text-white gap-3 items-center">
            <Box
                onClick={() => navigate("/")}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: { sm: "90%", xs: "95%" },
                    mx: "auto",
                    py: 1,
                    gap: 2,
                }}
            >
                {/* Logo */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        fontSize: { md: "1.5rem", sm: "1.25rem", xs: "1rem" },
                        fontFamily: "serif",
                    }}
                >
                    <Typography sx={{ fontFamily: "inherit", fontSize: "inherit", fontWeight: "bold" }}>
                        Daily
                    </Typography>
                    <Typography sx={{ fontFamily: "inherit", fontSize: "inherit", fontWeight: "light" }}>
                        News
                    </Typography>
                </Box>

                {/* Search Box */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        px: { sm: 4, xs: 3 },
                        borderRadius: "999px",
                    }}
                    className="bg-blue-800"
                >
                    <SearchIcon onClick={handleSearchIconClick} />
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "gray" }} />
                    <InputBase
                        value={search}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        sx={{
                            color: "white",
                            width: { md: "350px", sm: "300px", xs: "180px" },
                            fontSize: { sm: "1rem", xs: "0.85rem" },
                            fontFamily: "serif",
                            "&::placeholder": { color: "#646464" },
                        }}
                        placeholder="search..."
                    />
                </Box>
            </Box>

            {/*
            
             - On large screens: all buttons visible in one row
             - On mobile screens: horizontally scrollable row
             - Scrollbar is hidden but scrolling still works
             
            */}
            <Box
                sx={{
                    width: "100%",
                    overflowX: { xs: "auto", sm: "auto", md: "hidden" }, // allow horizontal scroll on mobile
                    overflowY: "hidden",
                    whiteSpace: "nowrap", // keeps buttons on one line
                    scrollbarWidth: "none", // hide scrollbar (Firefox)
                    "::-webkit-scrollbar": { display: "none" }, // hide scrollbar (Chrome)
                }}
                className="bg-blue-800 rounded-none"
            >
                <ButtonGroup
  className="bg-blue-800 w-full rounded-none 
             overflow-x-auto scrollbar-hide 
             flex-nowrap"
  sx={{
    '& .MuiButton-root': { 
      color: 'white',
      flex: { xs: '0 0 auto', md: '1 1 0%' } // xs scrolls, md distributes evenly
    },
    display: 'flex',
    width: '100%'
  }}
  variant='text'
>
  {categories.map((item, ind) => (
    <Button
      key={ind}
      onClick={() => navigate(`/explore`, { state: { category: item } })}
      sx={{ fontSize: { md: '14px', sm: '13px', xs: '12px' } }}
      className="hover:bg-blue-900 whitespace-nowrap"
    >
      {item}
    </Button>
  ))}
</ButtonGroup>

            </Box>
        </div>
    );
};

export default Navbar;
