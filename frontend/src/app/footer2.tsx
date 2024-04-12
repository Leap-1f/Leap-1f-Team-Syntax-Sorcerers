import * as React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer2() {
    const roundedIconStyle = {
        backgroundColor: "#151875",
        borderRadius: "50%",
        padding: "5px",
    };

    return (
        <footer className="flex justify-center items-center px-16 py-4 w-full text-base font-semibold text-gray-400 whitespace-nowrap bg-violet-100 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between max-w-full w-[1200px] max-md:flex-wrap">
                <div className="my-auto">©ecommerce</div>
                <div className="flex gap-4">
                    <div style={roundedIconStyle}>
                        <a href="https://www.facebook.com">
                            <Facebook style={{ color: "white" }} />
                        </a>
                    </div>
                    <div style={roundedIconStyle}>
                        <a href="https://www.instagram.com">
                            <Instagram style={{ color: "white" }} />
                        </a>
                    </div>
                    <div style={roundedIconStyle}>
                        <a href="https://www.twitter.com">
                            <Twitter style={{ color: "white" }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer2;
