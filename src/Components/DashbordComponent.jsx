import { Box, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Lara from "../assets/lara.png";
import Lara1 from "../assets/Lara-1.png";
import thomos from "../assets/thomos.png";
import thomos1 from "../assets/thomos-1.png";
import like from "../assets/heart.png";
import comment from "../assets/comment.png";
import dots from "../assets/dots.png";
import share from "../assets/share.png";
import filter from "../assets/filter.svg";

export default function DashbordComponent({ toggleTheme, isMobile }) {


    const [isReadMore, setIsReadMore] = useState(true);
    const container = [
        {
            profi: Lara,
            namer: "Lara Leones",
            usernmes: "@thewallart",
            menu: "",
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout fact that a reader will be distracted by the readable content of established  by the readable content of a page when looking at.",
            bgIm: Lara1
        },
        {
            profi: thomos,
            namer: "Thomas J.",
            usernmes: "@thecustomcreater",
            menu: "",
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout fact that a reader will be distracted by the readable content of established  by the readable content of a page when looking at.",
            bgIm: thomos1
        },
    ]
    return (
        <div className='container flex flex-col items-center justify-center w-full'>
            <div className={`${isMobile ? 'w-full' : 'w-full'} rounded-lg  ${toggleTheme ? 'bg-[#FFFFFF]' : 'bg-[#353434]'}  p-3`}>
                <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'} spacing={3} >
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search or type a command"
                        className={`border-0 ${!isMobile ? "me-5" : ""}`}
                        sx={{
                            backgroundColor: toggleTheme
                                ? "#2a2a2e"
                                : isMobile
                                    ? "#FFFFFF"
                                    : "#fff",
                            borderRadius: "10px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderRadius: "10px",
                                    borderWidth: 0,
                                },
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                                <Box sx={{ marginRight: "8px" }}>
                                    <FaSearch
                                        style={{ color: toggleTheme ? "#fff" : "#1F2E31" }}
                                    />
                                </Box>
                            ),
                        }}
                    />
                    <div className='flex items-center text-white' >
                        <img src={filter} alt="" className='text-white' loading="lazy" />
                        <p className='font-Gilroy font-medium text-xs text-black' >Filters</p>
                    </div>
                </Stack>
            </div>
            <div>
                {
                    container.map((items, index) => {
                        return (
                            <div key={index} className={`${isMobile ? 'w-full h-2/4' : 'w-full'}  w-full rounded-lg bg-[#ffffff] p-4 mt-6`}>
                                <div className='flex ites-center justify-between'>
                                    <div className='flex items-center gap-3 mb-5'>
                                        <div>
                                            <img src={items.profi} height={48} width={48} alt="" loading="lazy" />
                                        </div>
                                        <div className='flex items-left flex-col '>
                                            <p className='font-Gilroy font-semibold text-xl text-[#101010] opacity-100'>{items.namer}</p>
                                            <p className='font-Gilroy font-medium text-sm text-[#8D8D8D] opacity-90'>{items.usernmes}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <img src={dots} height={30} width={30} alt="" loading="lazy" />
                                    </div>
                                </div>
                                <div>
                                    {
                                        !isMobile && (
                                            <p className='font-Gilroy font-medium text-sm text-[#101010] mb-6 opacity-95'>{items.content}
                                                <span className='Font-medium text-sm text-[#FF5E8A]'>.Read More</span> </p>
                                        )
                                    }

                                    {
                                        isMobile && (
                                            <p className='font-Gilroy font-medium text-sm text-[#101010] mb-6 opacity-95'>
                                                {isReadMore ? items.content.slice(0, 120) : items.content} {items.content.length > 120 &&
                                                    <span className='Font-medium text-sm text-[#FF5E8A]' onClick={() => { setIsReadMore(!isReadMore) }}>
                                                        {isReadMore ? '...read more' : ' ...show less'}</span>} </p>
                                        )
                                    }

                                    {/* <Typography variant="body2" >
                                        {isReadMore ? element.jobDetailsFromCompany.slice(0, 150) : element.jobDetailsFromCompany}
                                        {element.jobDetailsFromCompany.length > 150 &&
                                            <Button onClick={() => { setIsReadMore(!isReadMore) }}>{isReadMore ? '...read more' : ' ...show less'}</Button>
                                        }
                                    </Typography> */}
                                    <img src={items.bgIm} alt="" className='w-full' loading="lazy" />
                                </div>
                                <div className='flex items-center gap-8 mt-10'>
                                    <div className='flex items-center gap-2'>
                                        <img src={like} alt="" loading="lazy" />
                                        <h1 className='font-Gilroy font-semibold text-xl text-[#101010]'>9.8k</h1>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={comment} alt="" loading="lazy" />
                                        <h1 className='font-Gilroy font-semibold text-xl text-[#101010]'>8.6k</h1>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src={share} alt="" loading="lazy" />
                                        <h1 className='font-Gilroy font-semibold text-xl text-[#101010]'>7.2k</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
