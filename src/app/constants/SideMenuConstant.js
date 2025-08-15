import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import TuneIcon from "@mui/icons-material/Tune";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PaidIcon from "@mui/icons-material/Paid";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

export const SIDEMENU_LINKS = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },

  {
    text: "People",
    icon: <PeopleIcon />,
    children: [
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
  },

  {
    text: "Payroll",
    icon: <PaidIcon />,
    children: [
      {
        text: "Overview",
        icon: <ReceiptIcon />,
        href: "/dashboard/payroll/overview",
      },
      {
        text: "Reports",
        icon: <AssessmentIcon />,
        href: "/dashboard/payroll/reports",
      },
    ],
  },

  {
    text: "Attendance",
    icon: <EventAvailableIcon />,
    children: [
      {
        text: "Daily",
        icon: <EventNoteIcon />,
        href: "/dashboard/attendance/daily",
      },
      {
        text: "Monthly",
        icon: <AccessTimeIcon />,
        href: "/dashboard/attendance/monthly",
      },
    ],
  },

  {
    text: "Settings",
    icon: <SettingsIcon />,
    children: [
      {
        text: "Profile Setting",
        icon: <BuildIcon />,
        href: "/dashboard/profile",
      },
    ],
  },
];
