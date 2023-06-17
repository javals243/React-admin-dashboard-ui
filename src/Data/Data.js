import {
  UilHeadSideCough,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilMoneyWithdrawal,
  UilUsdSquare,
} from "@iconscout/react-unicons";
export const SidebarData = [
  {
    icon: UilHeadSideCough,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
];
export const Cardsdata = [
  {
    titles: "Sales",
    color: {
      background: "linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [{ name: "sales", data: [31, 40, 28, 51, 42, 109, 100] }],
  },
  {
    titles: "Revenue",
    color: {
      background: "linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "80,970",
    png: UilMoneyWithdrawal,
    series: [{ name: "sales", data: [31, 40, 28, 51, 42, 109, 100] }],
  },
  {
    titles: "Expenses",
    color: {
      background: "linear-gradient(180deg,#bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "70,970",
    png: UilClipboardAlt,
    series: [{ name: "sales", data: [31, 40, 28, 51, 42, 109, 100] }],
  },
];
