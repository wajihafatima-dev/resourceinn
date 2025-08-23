export const ATTENDANCE_SUMMARY_DATA = {
  title: "Attendance Summary",
  cardData: [
    { id: 1, title: "Shifts", description: 1235 },
    { id: 2, title: "Expected Minutes", description: 1235 },
    { id: 3, title: "Worked Minutes", description: 1235 },
    { id: 4, title: "Short Minutes", description: 1235 },
    { id: 5, title: "Leaves", description: 1235 },
    { id: 6, title: "Approved Overtime Minutes", description: 1235 },
    { id: 6, title: "Overtime Minutes", description: 1235 },
    { id: 6, title: "Early Arrival Minutes", description: 1235 },
  ],
  styles: {
    mainBox: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection:"column"
    },
    maincard: {
      width: "100%",
      borderRadius: 4,
      boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
    },
    cardStyle: {
      mx: "auto",
      px: 2,
      py: 3,
      height: "8vh",
      borderRadius: 2,
      cursor: "pointer",
    },
    cardTitleStyle: { fontSize: "16px", fontWeight: 600, color: "#000" },
    title: {
      pl: 3,
      py: 2,
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
      },
    },
  },
};
export const CLOCK_WIDGET_DATA = {
  title: "Clock",
  styles: {
    mainBox: {
      width: "100%",
      display: "flex",
      justifyContent: "left",
    },
    maincard: {
      width: "auto",
      display: "flex",
      flexDirection: "column",
      borderRadius: 4,
      boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
    },
    title: {
      pl: 3,
      py: 2,
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
      },
    },
    clockStyle: {
      width: { xs: 165, sm: 220, md: 250 },
      height: { xs: 165, sm: 220, md: 250 },
      borderRadius: "50%",
      border: "6px dashed #e0e0e0",
      mx: { xs: 1.5, md: 3 },
      my: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
};
export const SLIDER_TABS_DATA = {
sliderTabs:[
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Gallery", link: "/gallery" },
  { title: "Contact", link: "/contact" },
  { title: "Login", link: "/login" },
],
styles:{
  cardStyle:{
  textAlign:"center",
  borderRadius:"50px",
  
  },
  cardTitleStyle:{
    fontSize:"20px"

  }
}
}