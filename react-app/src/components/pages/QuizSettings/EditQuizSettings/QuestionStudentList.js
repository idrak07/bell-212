import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { getDateDiff } from "../../../../util";
import MainPdfResult from "../PDF/MainPdfResult";
import QuestionArea from "./Questions/QuestionArea";
import StudentsArea from "./Students/StudentsArea";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function QuestionStudentList({ quiz }) {
  const [value, setValue] = React.useState(2);
  const isDisabled = getDateDiff(new Date(quiz.startTime), new Date()) >= 0;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Questions" {...a11yProps(0)} />
          <Tab label="Students" {...a11yProps(1)} />
          <Tab label="Results" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {value == 0 && <QuestionArea quiz={quiz} isDisabled={isDisabled} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {value == 1 && <StudentsArea quiz={quiz} isDisabled={isDisabled} />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {value == 2 && (
          <>
            <MainPdfResult quiz={quiz}/>
          </>
        )}
      </TabPanel>
    </Box>
  );
}
