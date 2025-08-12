import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";

export const Tabs = [
    { text: "Dashboard", icon: <InboxIcon />,href:"/dashboard" },
    { text: "People", icon: <MailIcon /> ,href:"/dashboard/people/profile" },
    { text: "Payroll", icon: <SettingsIcon />,href:"/dashboard/payroll/overview" },
    { text: "Attendence", icon: <InfoIcon />,href:"/dashboard/attendence/daily" },
    { text: "Requests", icon: <HelpIcon /> ,href:"/dashboard/requests/pending"},
  ];

export const Nasted_Tabs = {
  People: [
    {
      text: "Profile",
      icon: <InboxIcon />,
      href: "/dashboard/people/profile",
    },
    {
      text: "Salary Revisions",
      icon: <MailIcon />,
      href: "/dashboard/people/salary-revisions",
    },
    {
      text: "Leave Encashment",
      icon: <SettingsIcon />,
      href: "/dashboard/people/leave-encashment",
    },
  ],
  Payroll: [
    {
      text: "Overview",
      icon: <InboxIcon />,
      href: "/dashboard/payroll/overview",
    },
    {
      text: "Reports",
      icon: <MailIcon />,
      href: "/dashboard/payroll/reports",
    },
    {
      text: "Payroll Settings",
      icon: <SettingsIcon />,
      href: "/dashboard/payroll/settings",
    },
  ],
  Attendence: [
    {
      text: "Daily",
      icon: <InboxIcon />,
      href: "/dashboard/attendence/daily",
    },
    {
      text: "Monthly",
      icon: <MailIcon />,
      href: "/dashboard/attendence/monthly",
    },
    {
      text: "Analysis",
      icon: <SettingsIcon />,
      href: "/dashboard/attendence/analysis",
    },
  ],
  Requests: [
    {
      text: "Pending",
      icon: <InboxIcon />,
      href: "/dashboard/requests/pending",
    },
    {
      text: "Approved",
      icon: <MailIcon />,
      href: "/dashboard/requests/approved",
    },
    {
      text: "Rejected",
      icon: <SettingsIcon />,
      href: "/dashboard/requests/rejected",
    },
  ]
}