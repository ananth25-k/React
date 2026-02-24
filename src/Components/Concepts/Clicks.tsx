import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

function Clicks() {
  const [expanded, setExpanded] = useState<string | false>(false);

   const hadelChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    const accordionHoverStyle = {
  '&:hover': {
    backgroundColor: 'tomato',
  },
};
  return (
    <>
      <div>
      <Box sx={{width:'500px'}}> 
         <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={hadelChange("panel1")}
          sx={ accordionHoverStyle}
        >
          <AccordionSummary
            id="panel1"
            aria-controls="panel-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion</Typography>
          </AccordionSummary>
          <AccordionDetails id="panel1">
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              hic nisi saepe mollitia dolorum aut commodi aliquid ab nesciunt
              ullam minus corporis sapiente asperiores blanditiis voluptas
              praesentium alias, ex aspernatur!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
         expanded={expanded === "panel2"}
          onChange={hadelChange("panel2")}
           sx={ accordionHoverStyle}
         >
          <AccordionSummary
            id="panel2"
            aria-controls="panel-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion2</Typography>
          </AccordionSummary>
          <AccordionDetails id="panel2">
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              hic nisi saepe mollitia dolorum aut commodi aliquid ab nesciunt
              ullam minus corporis sapiente asperiores blanditiis voluptas
              praesentium alias, ex aspernatur!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
         sx={ accordionHoverStyle}
         expanded={expanded === "panel3"}
          onChange={hadelChange("panel3")}
        >
          <AccordionSummary
            id="panel3"
            aria-controls="panel-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion3</Typography>
          </AccordionSummary>
          <AccordionDetails id="panel3">
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              hic nisi saepe mollitia dolorum aut commodi aliquid ab nesciunt
              ullam minus corporis sapiente asperiores blanditiis voluptas
              praesentium alias, ex aspernatur!
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
      </Box>
      </div>
    </>
  );
}

export default Clicks;
