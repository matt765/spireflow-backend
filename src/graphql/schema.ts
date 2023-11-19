import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean,
} from "graphql";
import { ordersData } from "../data/orders";
import { customersData } from "../data/customers";
import { eventsData } from "../data/events";
import { productsData } from "../data/products";
import { assetsData } from "../data/analytics/assetPerformance";
import { performanceData } from "../data/analytics/performance";
import { revenuePerCountryData } from "../data/analytics/revenuePerCountry";
import { todaySalesData } from "../data/analytics/todaySales";
import { totalProfitProductsData } from "../data/analytics/totalProfitProducts";
import { totalProfitSalesData } from "../data/analytics/totalProfitSales";
import { yearOverviewData } from "../data/analytics/yearOverview";
import { bestSellingProductsData } from "../data/homepage/bestSellingProducts";
import { customerSatisfactionData } from "../data/homepage/customerSatisfaction";
import { regionsData } from "../data/homepage/regionsData";
import { revenueOverTimeData } from "../data/homepage/revenueOverTime";
import { tradersTableData } from "../data/homepage/tradersTable";
import { homeSmallCardsData } from "../data/homepage/homeSmallCards";

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    type: { type: GraphQLString },
    image: { type: GraphQLString },
    parameters: { type: new GraphQLList(ProductParameterType) },
  }),
});

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    photo: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    phone: { type: GraphQLString },
    totalBuys: { type: GraphQLInt },
  }),
});

const EventType = new GraphQLObjectType({
  name: "Event",
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    start: { type: GraphQLString },
    end: { type: GraphQLString },
  },
});

const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    id: { type: GraphQLInt },
    productName: { type: GraphQLString },
    user: { type: GraphQLString },
    price: { type: GraphQLFloat },
    deliveryType: { type: GraphQLString },
    date: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

// Analytics page
const AssetType = new GraphQLObjectType({
  name: "Asset",
  fields: () => ({
    name: { type: GraphQLString },
    industry: { type: GraphQLString },
    sales: { type: GraphQLFloat },
    delta: { type: GraphQLFloat },
    deltaType: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

const PerformanceType = new GraphQLObjectType({
  name: "Performance",
  fields: () => ({
    month: { type: GraphQLString },
    sales: { type: GraphQLInt },
    profit: { type: GraphQLInt },
  }),
});

const CountryRevenueType = new GraphQLObjectType({
  name: "CountryRevenue",
  fields: () => ({
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
  }),
});

const TodaySalesType = new GraphQLObjectType({
  name: "TodaySales",
  fields: () => ({
    hour: { type: GraphQLString },
    today: { type: GraphQLInt },
    average: { type: GraphQLInt },
    yesterday: { type: GraphQLInt },
  }),
});

const ProductProfitType = new GraphQLObjectType({
  name: "ProductProfit",
  fields: () => ({
    title: { type: GraphQLString },
    value: { type: GraphQLInt },
    metric: { type: GraphQLString },
  }),
});

const TotalProfitType = new GraphQLObjectType({
  name: "TotalProfit",
  fields: () => ({
    month: { type: GraphQLString },
    sales: { type: GraphQLInt },
  }),
});

const YearOverviewCategoryType = new GraphQLObjectType({
  name: "YearOverviewCategory",
  fields: () => ({
    name: { type: GraphQLString },
    sales: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "SalesData",
          fields: {
            name: { type: GraphQLString },
            value: { type: GraphQLInt },
          },
        })
      ),
    },
    revenue: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "RevenueData",
          fields: {
            name: { type: GraphQLString },
            value: { type: GraphQLInt },
          },
        })
      ),
    },
    unitsSold: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "UnitsSoldData",
          fields: {
            name: { type: GraphQLString },
            value: { type: GraphQLInt },
          },
        })
      ),
    },
    returns: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "ReturnsData",
          fields: {
            name: { type: GraphQLString },
            value: { type: GraphQLInt },
          },
        })
      ),
    },
  }),
});

const ProductParameterType = new GraphQLObjectType({
  name: "Parameter",
  fields: () => ({
    title: { type: GraphQLString },
    value: { type: GraphQLString },
  }),
});

const ProductCategoryType = new GraphQLObjectType({
  name: "ProductCategory",
  fields: () => ({
    name: { type: GraphQLString },
    sales: { type: new GraphQLList(ProductType) },
  }),
});

const AnalyticsType = new GraphQLObjectType({
  name: "Analytics",
  fields: () => ({
    assets: { type: new GraphQLList(AssetType) },
    performance: { type: new GraphQLList(PerformanceType) },
    revenuePerCountry: { type: new GraphQLList(CountryRevenueType) },
    todaySales: { type: new GraphQLList(TodaySalesType) },
    totalProfitProducts: { type: new GraphQLList(ProductProfitType) },
    totalProfitSales: { type: new GraphQLList(TotalProfitType) },
    yearOverview: { type: new GraphQLList(YearOverviewCategoryType) },
  }),
});

// Homepage
const BestSellingProductType = new GraphQLObjectType({
  name: "BestSellingProduct",
  fields: () => ({
    name: { type: GraphQLString },
    profit: { type: GraphQLInt },
  }),
});

const CustomerSatisfactionType = new GraphQLObjectType({
  name: "CustomerSatisfaction",
  fields: () => ({
    brandName: { type: GraphQLString },
    customerSatisfaction: { type: GraphQLFloat },
    totalSales: { type: GraphQLInt },
    numberOfOrders: { type: GraphQLInt },
  }),
});

const HomeSmallCardChartDataType = new GraphQLObjectType({
  name: "HomeSmallCardChartData",
  fields: () => ({
    date: { type: GraphQLString },
    metric: { type: GraphQLInt },
  }),
});

const HomeSmallCardType = new GraphQLObjectType({
  name: "HomeSmallCard",
  fields: () => ({
    title: { type: GraphQLString },
    metric: { type: GraphQLString },
    metricPrev: { type: GraphQLString },
    delta: { type: GraphQLString },
    deltaType: { type: GraphQLString },
    color: { type: GraphQLString },
    increased: { type: GraphQLBoolean },
    changeValue: { type: GraphQLFloat },
    changeText: { type: GraphQLString },
    chartData: { type: new GraphQLList(HomeSmallCardChartDataType) },
  }),
});

const RegionType = new GraphQLObjectType({
  name: "Region",
  fields: () => ({
    name: { type: GraphQLString },
    region: { type: GraphQLString },
    sales: { type: GraphQLInt },
    delta: { type: GraphQLString },
    deltaType: { type: GraphQLString },
  }),
});

const RevenueOverTimeType = new GraphQLObjectType({
  name: "RevenueOverTime",
  fields: () => ({
    date: { type: GraphQLString },
    websiteSales: { type: GraphQLInt },
    inStoreSales: { type: GraphQLInt },
  }),
});

const TraderType = new GraphQLObjectType({
  name: "Trader",
  fields: () => ({
    name: { type: GraphQLString },
    leads: { type: GraphQLInt },
    sales: { type: GraphQLString },
    quota: { type: GraphQLString },
    variance: { type: GraphQLString },
    region: { type: GraphQLString },
    status: { type: GraphQLString },
    deltaType: { type: GraphQLString },
  }),
});

const HomepageType = new GraphQLObjectType({
  name: "Homepage",
  fields: () => ({
    bestSellingProducts: { type: new GraphQLList(BestSellingProductType) },
    customerSatisfaction: { type: new GraphQLList(CustomerSatisfactionType) },
    homeSmallCards: { type: new GraphQLList(HomeSmallCardType) },
    regions: { type: new GraphQLList(RegionType) },
    revenueOverTime: { type: new GraphQLList(RevenueOverTimeType) },
    tradersTable: { type: new GraphQLList(TraderType) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parent, args) {
        return customersData;
      },
    },
    events: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        return eventsData;
      },
    },
    orders: {
      type: new GraphQLList(OrderType),
      resolve(parent, args) {
        return ordersData;
      },
    },
    products: {
      type: new GraphQLList(ProductCategoryType),
      resolve(parent, args) {
        return productsData;
      },
    },
    product: {
      type: ProductType,
      args: { name: { type: GraphQLString } },
      resolve(parent, args) {
        for (const category of productsData) {
          const foundProduct = category.sales.find(
            (product) => product.name === args.name
          );
          if (foundProduct) {
            return foundProduct;
          }
        }
        return null;
      },
    },
    // Analytics page
    assets: {
      type: new GraphQLList(AssetType),
      resolve() {
        return assetsData;
      },
    },
    performance: {
      type: new GraphQLList(PerformanceType),
      resolve() {
        return performanceData;
      },
    },
    revenuePerCountry: {
      type: new GraphQLList(CountryRevenueType),
      resolve() {
        return revenuePerCountryData;
      },
    },
    todaySales: {
      type: new GraphQLList(TodaySalesType),
      resolve() {
        return todaySalesData;
      },
    },
    totalProfitProducts: {
      type: new GraphQLList(ProductProfitType),
      resolve() {
        return totalProfitProductsData;
      },
    },
    totalProfitSales: {
      type: new GraphQLList(TotalProfitType),
      resolve() {
        return totalProfitSalesData;
      },
    },
    yearOverview: {
      type: new GraphQLList(YearOverviewCategoryType),
      resolve() {
        return yearOverviewData;
      },
    },
    analytics: {
      type: AnalyticsType,
      resolve() {
        return {
          assets: assetsData,
          performance: performanceData,
          revenuePerCountry: revenuePerCountryData,
          todaySales: todaySalesData,
          totalProfitProducts: totalProfitProductsData,
          totalProfitSales: totalProfitSalesData,
          yearOverview: yearOverviewData,
        };
      },
    },
    // Homepage
    bestSellingProducts: {
      type: new GraphQLList(BestSellingProductType),
      resolve() {
        return bestSellingProductsData;
      },
    },
    customerSatisfaction: {
      type: new GraphQLList(CustomerSatisfactionType),
      resolve() {
        return customerSatisfactionData;
      },
    },
    homeSmallCards: {
      type: new GraphQLList(HomeSmallCardType),
      resolve() {
        return homeSmallCardsData;
      },
    },
    regions: {
      type: new GraphQLList(RegionType),
      resolve() {
        return regionsData;
      },
    },
    revenueOverTime: {
      type: new GraphQLList(RevenueOverTimeType),
      resolve() {
        return revenueOverTimeData;
      },
    },
    tradersTable: {
      type: new GraphQLList(TraderType),
      resolve() {
        return tradersTableData;
      },
    },
    homepage: {
      type: HomepageType,
      resolve() {
        return {
          bestSellingProducts: bestSellingProductsData,
          customerSatisfaction: customerSatisfactionData,
          homeSmallCards: homeSmallCardsData,
          regions: regionsData,
          revenueOverTime: revenueOverTimeData,
          tradersTable: tradersTableData,
        };
      },
    },
  },
});

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
