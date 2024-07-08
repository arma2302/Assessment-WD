import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";

export default function Acordion() {
  const [isToggel, setToggel] = useState(null);

  const handleAccordion = (index) => {
    setToggel(index === isToggel ? null : index);
  };
  const Data = [
    {
      Quetion: "What is Your Return Policy?",
      Ans: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam quas modi mollitia sapiente tempore ipsam ullam quae",
    },
    {
      Quetion: "How Do i Track My Order?",
      Ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam quas modi mollitia sapiente tempore ipsam ullam quae, ad voluptatem dolorum enim illo optio vero suscipit laudantium voluptas voluptatibus laboriosam.",
    },
    {
      Quetion: "Can i Purchase Items Again?",
      Ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam quas modi mollitia sapiente tempore ipsam ullam quae, ad voluptatem dolorum enim illo optio vero suscipit laudantium voluptas voluptatibus laboriosam.",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {Data.map((item, index) => {
          return (
            <div className="col">
              <div className="acc-wrap">
                <div className="acc-head">
                  <h3>{item.Quetion}</h3>
                  <IconButton onClick={() => handleAccordion(index)}>{isToggel !== index ? <ExpandMoreIcon sx={{ color: "Black" }} /> : <KeyboardArrowRightIcon sx={{ color: "black" }} />}</IconButton>
                </div>
                {isToggel !== index && (
                  <div className="acc-body">
                    <p>{item.Ans}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
