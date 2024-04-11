import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "(32)",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function () {
  const value = 3.5;
  return (
    <>
      <div className="flex ml-[25%]">
        <div className="flex-col">
          <div className="flex flex-col mt-[100px]">
            <h3 className="font-semibold text-xl text-[#151875]">
              Хадгалсан бүтээгдэхүүн
            </h3>
            <p className="text-[#8A8FB9] text-xs ">8 бүтээгдэхүүн</p>
          </div>
          <div className="flex ml-[35px] mt-[30px]">
            <div>
              <img src="./Image2.svg" alt="" />
            </div>
            <div className="flex-col">
              <div className="flex-col  ml-[20px]">
                <div className="flex items-center gap-5">
                  <h5 className=" text-[#151875] font-semibold text-lg flex mt-[5px]">
                    Усан ягаан сандал
                  </h5>

                  <button className="flex gap-2 ">
                    <img src="Ellipse 24.svg" alt="" />
                    <img src="Ellipse 25.svg" alt="" />
                    <img src="Ellipse 26.svg" alt="" />
                  </button>
                </div>
                <p className=" text-[#151875] mt-[5px]">750’000₮</p>
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon fontSize="inherit" />}
                  />
                  <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                </Box>
                <p className="mt-[5px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est <br /> adipiscing in phasellus non in justo.
                </p>
                <Stack direction="row" spacing={1} marginTop={10}>
                  <Button sx={{
                    backgroundColor:"#FB2E86",
                    color:"#FFFFFF",
                    width:"165"
                  }} variant="contained" >Худалдан авах</Button>
                  <Button sx={{
                    backgroundColor:"#F6F5FF",
                    color:"#535399",
                    width:"97"
                  }} variant="contained" >
                    Хасах
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
