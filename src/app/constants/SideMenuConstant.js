import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";

export const Tabs = [
    { text: "Dashboard", icon: <InboxIcon />,href:"/dashboard" },
    { text: "People", icon: <MailIcon /> },
    { text: "Payroll", icon: <SettingsIcon /> },
    { text: "Attendence", icon: <InfoIcon /> },
    { text: "Requests", icon: <HelpIcon /> },
  ];

export const Nasted_Tabs = {
    People: [
      { text: "Profile", icon: <InboxIcon /> ,href:"/dashboard/people/profile" },
      { text: "Salary Revisions", icon: <MailIcon />,href:"/dashboard/people/salary-revisions" },
      { text: "Leave Encashment", icon: <SettingsIcon /> ,href:"/dashboard/people/salary-revisions"},
    ],
    Payroll: [
      { text: "Overview", icon: <InboxIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Reports", icon: <MailIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Payroll Settings", icon: <SettingsIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Overview", icon: <InboxIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Overview", icon: <InboxIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Overview", icon: <InboxIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Overview", icon: <InboxIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Overview", icon: <InboxIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Overview", icon: <InboxIcon /> ,href:"/dashboard/people/salary-revisions"},
    ],
    Attendence: [
      { text: "Daily", icon: <InboxIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Monthly", icon: <MailIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Analysis", icon: <SettingsIcon /> ,href:"/dashboard/people/salary-revisions"},
    ],
    Requests: [
      { text: "Pending", icon: <InboxIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Approved", icon: <MailIcon /> ,href:"/dashboard/people/salary-revisions"},
      { text: "Rejected", icon: <SettingsIcon /> ,href:"/dashboard/people/salary-revisions"},
    ],
  };

  