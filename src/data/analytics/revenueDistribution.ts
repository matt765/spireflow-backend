interface RevenueData {
  category: string;
  inStore: number;
  online: number;
}

export const revenueDistributionData: RevenueData[] = [
  { category: "laptops", inStore: 28000, online: 23200 },
  { category: "phones", inStore: 82000, online: 24500 },
  { category: "chargers", inStore: 15000, online: 13900 },
  { category: "headphones", inStore: 18000, online: 19000 },
  { category: "tablets", inStore: 64000, online: 58000 },
  { category: "accessories", inStore: 27000, online: 20200 },
];
