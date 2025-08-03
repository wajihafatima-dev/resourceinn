import CardSlider from "@/app/components/global/CardSlider";
import { SLIDER_TABS_DATA } from "@/app/constants/dashboardConstant";
import { Box } from "@mui/material";

const Profile = () => {
  const {styles,sliderTabs}=SLIDER_TABS_DATA
    return (
      <Box
      sx={{
        ml: "85px",
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 2, sm: 3, lg: 5 },
      }}
    >
      <Box sx={{width:"100%"}}>
        {/* <CardSlider styles={styles} cardData={sliderTabs} /> */}
      </Box>
      </Box>
    );
  };
  
  export default Profile;
  