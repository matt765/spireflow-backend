type YearOverviewCategory = {
  name: string;
  sales: { name: string; value: number }[];
  revenue: { name: string; value: number }[];
  unitsSold: { name: string; value: number }[];
  returns: { name: string; value: number }[];
};

export const yearOverviewData: YearOverviewCategory[] = [
  {
    name: "Phones",
    sales: [
      { name: "iPhone 80A", value: 32040 },
      { name: "Samsung Galaxy Z99", value: 28704 },
      { name: "Google Pixel X20", value: 15045 },
      { name: "OnePlus 30T", value: 13205 },
      { name: "Xiaomi Mi 20X", value: 12400 },
    ],
    revenue: [
      { name: "iPhone 80A", value: 25600 },
      { name: "Samsung Galaxy Z99", value: 22400 },
      { name: "Google Pixel X20", value: 12000 },
      { name: "OnePlus 30T", value: 10405 },
      { name: "Xiaomi Mi 20X", value: 9600 },
    ],
    unitsSold: [
      { name: "iPhone 80A", value: 800 },
      { name: "Samsung Galaxy Z99", value: 700 },
      { name: "Google Pixel X20", value: 375 },
      { name: "OnePlus 30T", value: 325 },
      { name: "Xiaomi Mi 20X", value: 300 },
    ],
    returns: [
      { name: "iPhone 80A", value: 25 },
      { name: "Samsung Galaxy Z99", value: 22 },
      { name: "Google Pixel X20", value: 15 },
      { name: "OnePlus 30T", value: 13 },
      { name: "Xiaomi Mi 20X", value: 12 },
    ],
  },
  {
    name: "Tablets",
    sales: [
      { name: "iPad Z50", value: 29400 },
      { name: "Samsung Galaxy Note S20", value: 28700 },
      { name: "Microsoft Surface X7", value: 25600 },
      { name: "Amazon Fire HDX 20", value: 22400 },
      { name: "Lenovo Tab Z10", value: 19200 },
    ],
    revenue: [
      { name: "iPad Z50", value: 25600 },
      { name: "Samsung Galaxy Note S20", value: 23040 },
      { name: "Microsoft Surface X7", value: 20480 },
      { name: "Amazon Fire HDX 20", value: 17920 },
      { name: "Lenovo Tab Z10", value: 15360 },
    ],
    unitsSold: [
      { name: "iPad Z50", value: 500 },
      { name: "Samsung Galaxy Note S20", value: 450 },
      { name: "Microsoft Surface X7", value: 400 },
      { name: "Amazon Fire HDX 20", value: 350 },
      { name: "Lenovo Tab Z10", value: 300 },
    ],
    returns: [
      { name: "iPad Z50", value: 20 },
      { name: "Samsung Galaxy Note S20", value: 18 },
      { name: "Microsoft Surface X7", value: 16 },
      { name: "Amazon Fire HDX 20", value: 14 },
      { name: "Lenovo Tab Z10", value: 12 },
    ],
  },
  {
    name: "Laptops",
    sales: [
      { name: "MacBook Air X", value: 30000 },
      { name: "Dell XLS 30", value: 26900 },
      { name: "HP Phantom x500", value: 23800 },
      { name: "Lenovo ThinkPad Z1 Ultra", value: 20700 },
      { name: "ASUS ZenBook Pro 30", value: 17600 },
    ],
    revenue: [
      { name: "MacBook Air X", value: 24000 },
      { name: "Dell XLS 30", value: 21500 },
      { name: "HP Phantom x500", value: 19000 },
      { name: "Lenovo ThinkPad Z1 Ultra", value: 16500 },
      { name: "ASUS ZenBook Pro 30", value: 14000 },
    ],
    unitsSold: [
      { name: "MacBook Air X", value: 250 },
      { name: "Dell XLS 30", value: 225 },
      { name: "HP Phantom x500", value: 208 },
      { name: "Lenovo ThinkPad Z1 Ultra", value: 183 },
      { name: "ASUS ZenBook Pro 30", value: 167 },
    ],
    returns: [
      { name: "MacBook Air X", value: 15 },
      { name: "Dell XLS 30", value: 13 },
      { name: "HP Phantom x500", value: 12 },
      { name: "Lenovo ThinkPad Z1 Ultra", value: 11 },
      { name: "ASUS ZenBook Pro 30", value: 10 },
    ],
  },
];
