import { GraphQLObjectType, GraphQLSchema, GraphQLList } from "graphql";
import { PrismaClient } from "@prisma/client";

import {
  AnalyticsType,
  AssetType,
  BestSellingProductType,
  CustomerSatisfactionType,
  CustomerType,
  EventType,
  HomeSmallCardType,
  HomepageType,
  MonthPerformanceType,
  OrderType,
  ProductType,
  RegionType,
  RevenueOverTimeType,
  RevenuePerCountryType,
  TodaySalesType,
  TotalProfitMonthType,
  TotalProfitProductsType,
  TraderType,
  YearOverviewType,
} from "./types";

const prisma = new PrismaClient();

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    assets: {
      type: new GraphQLList(AssetType),
      resolve() {
        return prisma.asset.findMany();
      },
    },
    bestSellingProducts: {
      type: new GraphQLList(BestSellingProductType),
      resolve() {
        return prisma.bestSellingProduct.findMany();
      },
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve() {
        return prisma.customer.findMany();
      },
    },
    customerSatisfaction: {
      type: new GraphQLList(CustomerSatisfactionType),
      resolve() {
        return prisma.customerSatisfaction.findMany();
      },
    },
    events: {
      type: new GraphQLList(EventType),
      resolve() {
        return prisma.event.findMany();
      },
    },
    homeSmallCards: {
      type: new GraphQLList(HomeSmallCardType),
      resolve() {
        return prisma.homeSmallCard.findMany();
      },
    },
    monthPerformance: {
      type: new GraphQLList(MonthPerformanceType),
      resolve() {
        return prisma.monthPerformance.findMany();
      },
    },
    orders: {
      type: new GraphQLList(OrderType),
      resolve() {
        return prisma.order.findMany();
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        return prisma.product.findMany();
      },
    },
    revenuePerCountry: {
      type: new GraphQLList(RevenuePerCountryType),
      resolve() {
        return prisma.revenuePerCountry.findMany();
      },
    },
    regions: {
      type: new GraphQLList(RegionType),
      resolve() {
        return prisma.region.findMany();
      },
    },
    revenueOverTime: {
      type: new GraphQLList(RevenueOverTimeType),
      resolve() {
        return prisma.revenueOverTime.findMany();
      },
    },
    todaySales: {
      type: new GraphQLList(TodaySalesType),
      resolve() {
        return prisma.todaySales.findMany();
      },
    },
    totalProfitMonths: {
      type: new GraphQLList(TotalProfitMonthType),
      resolve() {
        return prisma.totalProfitMonth.findMany();
      },
    },
    totalProfitProducts: {
      type: new GraphQLList(TotalProfitProductsType),
      resolve() {
        return prisma.totalProfitProduct.findMany();
      },
    },
    traders: {
      type: new GraphQLList(TraderType),
      resolve() {
        return prisma.trader.findMany();
      },
    },
    yearOverview: {
      type: new GraphQLList(YearOverviewType),
      resolve() {
        return prisma.yearOverview.findMany();
      },
    },
    analytics: {
      type: AnalyticsType,
      resolve() {
        return Promise.all([
          prisma.asset.findMany(),
          prisma.monthPerformance.findMany(),
          prisma.revenuePerCountry.findMany(),
          prisma.todaySales.findMany(),
          prisma.totalProfitProduct.findMany(),
          prisma.totalProfitMonth.findMany(),
          prisma.yearOverview.findMany(),
        ]).then(
          ([
            assets,
            performance,
            revenuePerCountry,
            todaySales,
            totalProfitProducts,
            totalProfitSales,
            yearOverview,
          ]) => ({
            assetPerformance: assets,
            performance,
            revenuePerCountry,
            todaySales,
            totalProfitProducts,
            totalProfitSales,
            yearOverview,
          })
        );
      },
    },
    homepage: {
      type: HomepageType,
      resolve() {
        return Promise.all([
          prisma.bestSellingProduct.findMany(),
          prisma.customerSatisfaction.findMany(),
          prisma.homeSmallCard.findMany(),
          prisma.region.findMany(),
          prisma.revenueOverTime.findMany(),
          prisma.trader.findMany(),
        ]).then(
          ([
            bestSellingProducts,
            customerSatisfaction,
            homeSmallCards,
            regions,
            revenueOverTime,
            tradersTable,
          ]) => ({
            bestSellingProducts,
            customerSatisfaction,
            homeSmallCards,
            regions,
            revenueOverTime,
            tradersTable,
          })
        );
      },
    },
  },
});

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
