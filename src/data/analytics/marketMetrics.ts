interface MetricPoint {
  metric: string;
  phones: number;
  laptops: number;
  maxValue: number;
}

export const marketMetricsData: MetricPoint[] = [
  {
    metric: "salesVolume",
    phones: 95,
    laptops: 48,
    maxValue: 100,
  },
  {
    metric: "revenue",
    phones: 75,
    laptops: 65,
    maxValue: 100,
  },
  {
    metric: "growthRate",
    phones: 88,
    laptops: 30,
    maxValue: 100,
  },
  {
    metric: "marketShare",
    phones: 60,
    laptops: 80,
    maxValue: 100,
  },
  {
    metric: "customerRating",
    phones: 85,
    laptops: 62,
    maxValue: 100,
  },
  {
    metric: "profitMargin",
    phones: 87,
    laptops: 68,
    maxValue: 100,
  },
];
