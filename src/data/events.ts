type Event = {
  id: string;
  title: string;
  start: string;
  end?: string;
};

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

export const eventsData: Event[] = [
  {
    id: "1",
    title: "Market strategy",
    start: new Date(currentYear, currentMonth, 3).toISOString(),
  },
  {
    id: "2",
    title: "Team Sync",
    start: new Date(currentYear, currentMonth, 3, 15, 0).toISOString(),
  },
  {
    id: "3",
    title: "Product review",
    start: new Date(currentYear, currentMonth, 6).toISOString(),
  },

  {
    id: "4",
    title: "Supplier Meeting",
    start: new Date(currentYear, currentMonth, 17, 12, 30).toISOString(),
  },
  {
    id: "5",
    title: "Daily Inventory Check",
    start: new Date(currentYear, currentMonth, 14, 10, 0).toISOString(),
  },
  {
    id: "6",
    title: "Marketing Strategy Review",
    start: new Date(currentYear, currentMonth, 14, 16, 0).toISOString(),
  },
  {
    id: "7",
    title: "SEO Strategy Meeting",
    start: new Date(currentYear, currentMonth, 25, 14, 0).toISOString(),
  },
  {
    id: "8",
    title: "Client Meeting",
    start: new Date(currentYear, currentMonth, 25, 16, 0).toISOString(),
  },
  {
    id: "9",
    title: "Sales Promotion Planning",
    start: new Date(currentYear, currentMonth, 27, 11, 0).toISOString(),
    end: new Date(currentYear, currentMonth, 27, 13, 0).toISOString(),
  },
  {
    id: "10",
    title: "1-on-1 Meeting",
    start: new Date(currentYear, currentMonth, 30, 15, 0).toISOString(),
  },
  {
    id: "11",
    title: "Sales Review",
    start: new Date(currentYear, currentMonth, 30, 10, 0).toISOString(),
  },
  {
    id: "12",
    title: "Product Launch Webinar",
    start: new Date(currentYear, currentMonth, 9).toISOString(),
    end: new Date(currentYear, currentMonth, 12).toISOString(),
  },
  {
    id: "13",
    title: "E-commerce Platform Training",
    start: new Date(currentYear, currentMonth, 21).toISOString(),
    end: new Date(currentYear, currentMonth, 24).toISOString(),
  },
];
