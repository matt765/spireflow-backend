-- CreateTable
CREATE TABLE "assets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "sales" INTEGER NOT NULL,
    "delta" DOUBLE PRECISION NOT NULL,
    "deltaType" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "best_selling_products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "best_selling_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "totalBuys" INTEGER NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_satisfaction" (
    "id" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "customerSatisfaction" DOUBLE PRECISION NOT NULL,
    "totalSales" INTEGER NOT NULL,
    "numberOfOrders" INTEGER NOT NULL,

    CONSTRAINT "customer_satisfaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home_small_cards" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "metricPrev" TEXT NOT NULL,
    "delta" TEXT NOT NULL,
    "deltaType" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "increased" BOOLEAN NOT NULL,
    "changeValue" DOUBLE PRECISION NOT NULL,
    "changeText" TEXT NOT NULL,
    "chartData" JSONB NOT NULL,

    CONSTRAINT "home_small_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "month_performance" (
    "id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "sales" DOUBLE PRECISION NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "month_performance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "deliveryType" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "parameters" JSONB NOT NULL,
    "metrics" JSONB NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenue_per_country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "revenue_per_country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "sales" INTEGER NOT NULL,
    "delta" TEXT NOT NULL,
    "deltaType" TEXT NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenue_over_time" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "websiteSales" INTEGER NOT NULL,
    "inStoreSales" INTEGER NOT NULL,

    CONSTRAINT "revenue_over_time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "today_sales" (
    "id" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "today" INTEGER NOT NULL,
    "average" INTEGER NOT NULL,
    "yesterday" INTEGER NOT NULL,

    CONSTRAINT "today_sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "total_profit_months" (
    "id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "sales" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "total_profit_months_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "total_profit_products" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "metric" TEXT NOT NULL,

    CONSTRAINT "total_profit_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "leads" INTEGER NOT NULL,
    "sales" TEXT NOT NULL,
    "quota" TEXT NOT NULL,
    "variance" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "deltaType" TEXT NOT NULL,

    CONSTRAINT "traders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "year_overview" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sales" JSONB NOT NULL,
    "revenue" JSONB NOT NULL,
    "unitsSold" JSONB NOT NULL,
    "returns" JSONB NOT NULL,

    CONSTRAINT "year_overview_pkey" PRIMARY KEY ("id")
);
