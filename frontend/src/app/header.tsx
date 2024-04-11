import React, { ChangeEvent } from "react";
import EnvelopeIcon from "./Icons/EnvelopeIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        onSearch(query);
    };

    return (
        <TextField
            placeholder="Search..."
            InputProps={{
                style: { height: "44px" },
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

const Header: React.FC = () => {
    const handleSearch = (query: string) => {
        console.log(query);
    };

    return (
        <div className="flex flex-col">
            <div className="flex bg-[#7E33E0] h-[44px] items-center justify-around px-4 md:px-10">
                {" "}
                <div className="flex gap-4 md:gap-10">
                    {" "}
                    <div className="flex flex-row items-center">
                        <EnvelopeIcon />
                        <p className="text-white ml-2 md:ml-4">
                            info@ecommerce.mn
                        </p>{" "}
                    </div>
                    <div className="flex flex-row items-center">
                        <PhoneIcon />
                        <p className="text-white ml-2 md:ml-4">77123456</p>{" "}
                    </div>
                </div>
                <div className="flex gap-4 md:gap-10">
                    {" "}
                    <Button className="text-white">Нэвтрэх</Button>
                    <Button className="text-white">Хадгалах</Button>
                </div>
            </div>
            <div className="flex bg-white h-[60px] items-center justify-around px-4 md:px-10">
                {" "}
                <div className="flex gap-4 md:gap-10">
                    {" "}
                    <h1 className="text-black text-[34px] font-bold">
                        Ecommerce
                    </h1>
                    <div className="flex flex-row items-center gap-[20px]">
                        <div className="flex flex-row items-center">
                            <p className="text-black font-semibold">Нүүр</p>
                            <KeyboardArrowDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                        <p className="text-black font-semibold">Ангилал</p>
                    </div>
                </div>
                <div>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
        </div>
    );
};

export default Header;
