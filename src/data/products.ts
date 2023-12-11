type Parameter = {
  title: string;
  value: string;
};

type Product = {
  name: string;
  price: number;
  type: string;
  image: string;
  parameters: Parameter[];
};

type ProductCategory = {
  name: string;
  sales: Product[];
};

export const productsData: ProductCategory[] = [
  {
    name: "Phones",
    sales: [
      {
        name: "iPhone 80A",
        price: 2400,
        type: "Phone",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
        parameters: [
          { title: "Screen Size", value: "6.1 inches" },
          { title: "Processor", value: "A15 Bionic chip" },
          { title: "Memory", value: "6 GB" },
          { title: "Storage", value: "128 GB / 256 GB / 512 GB" },
          { title: "Battery Life", value: "Up to 19 hours talk time" },
          { title: "Operating System", value: "iOS 15" },
          { title: "Camera Resolution", value: "Dual 12MP camera system" },
          { title: "Port Types", value: "Lightning connector" },
          { title: "Graphics", value: "Apple GPU (4-core graphics)" },
          {
            title: "Display Resolution",
            value: "2532 x 1170 pixels at 460 ppi",
          },
          {
            title: "Dimensions and Weight",
            value: "146.7 mm x 71.5 mm x 7.65 mm, 174 grams",
          },
          {
            title: "Color Options",
            value: "Blue, Midnight, Starlight, Pink, Red",
          },
        ],
      },
      {
        name: "Samsung Galaxy Z99",
        price: 3400,
        type: "Phone",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
        parameters: [
          { title: "Screen Size", value: "6.2 inches" },
          { title: "Processor", value: "Exynos 2100" },
          { title: "Memory", value: "8 GB" },
          { title: "Storage", value: "128 GB / 256 GB" },
          { title: "Battery Life", value: "Up to 22 hours talk time" },
          { title: "Operating System", value: "Android 11" },
          {
            title: "Camera Resolution",
            value: "Triple 12MP + 64MP + 12MP",
          },
          { title: "Port Types", value: "USB Type-C" },
          { title: "Graphics", value: "Mali-G78 MP14" },
          { title: "Display Resolution", value: "2400 x 1080 pixels" },
          {
            title: "Dimensions and Weight",
            value: "151.7 mm x 71.2 mm x 7.9 mm, 169 grams",
          },
          {
            title: "Color Options",
            value: "Phantom Black, Phantom Silver",
          },
        ],
      },
      {
        name: "Google Pixel X20",
        price: 1400,
        type: "Phone",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
        parameters: [
          { title: "Screen Size", value: "6 inches" },
          { title: "Processor", value: "Qualcomm Snapdragon 765G" },
          { title: "Memory", value: "8 GB" },
          { title: "Storage", value: "128 GB" },
          { title: "Battery Life", value: "Up to 18 hours talk time" },
          { title: "Operating System", value: "Android 12" },
          { title: "Camera Resolution", value: "12.2 MP dual-pixel" },
          { title: "Port Types", value: "USB Type-C" },
          { title: "Graphics", value: "Adreno 620" },
          { title: "Display Resolution", value: "2340 x 1080 pixels" },
          {
            title: "Dimensions and Weight",
            value: "144.7 mm x 70.4 mm x 8.0 mm, 151 grams",
          },
          { title: "Color Options", value: "Just Black, Sorta Sage" },
        ],
      },
      {
        name: "OnePlus 30T",
        price: 2500,
        type: "Phone",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
        parameters: [
          { title: "Screen Size", value: "6.55 inches" },
          { title: "Processor", value: "Qualcomm Snapdragon 865" },
          { title: "Memory", value: "12 GB" },
          { title: "Storage", value: "256 GB" },
          { title: "Battery Life", value: "Up to 23 hours talk time" },
          { title: "Operating System", value: "OxygenOS based on Android 11" },
          { title: "Camera Resolution", value: "48MP Triple Camera" },
          { title: "Port Types", value: "USB Type-C" },
          { title: "Graphics", value: "Adreno 650" },
          { title: "Display Resolution", value: "2400 x 1080 pixels" },
          {
            title: "Dimensions and Weight",
            value: "160.7 mm x 74.1 mm x 8.4 mm, 188 grams",
          },
          { title: "Color Options", value: "Aquamarine Green, Lunar Silver" },
        ],
      },
      {
        name: "Xiaomi Mi 20X",
        price: 1600,
        type: "Phone",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
        parameters: [
          { title: "Screen Size", value: "6.67 inches" },
          { title: "Processor", value: "Qualcomm Snapdragon 870" },
          { title: "Memory", value: "6 GB / 8 GB" },
          { title: "Storage", value: "128 GB / 256 GB" },
          { title: "Battery Life", value: "Up to 20 hours talk time" },
          { title: "Operating System", value: "MIUI 12 based on Android 11" },
          { title: "Camera Resolution", value: "48MP AI Triple Camera" },
          { title: "Port Types", value: "USB Type-C" },
          { title: "Graphics", value: "Adreno 650" },
          { title: "Display Resolution", value: "2400 x 1080 FHD+" },
          {
            title: "Dimensions and Weight",
            value: "163.7 mm x 76.4 mm x 7.8 mm, 196 grams",
          },
          {
            title: "Color Options",
            value: "Midnight Black, Moonlight White",
          },
        ],
      },
    ],
  },
  {
    name: "Tablets",
    sales: [
      {
        name: "iPad Z50",
        price: 2400,
        type: "Tablet",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
        parameters: [
          { title: "Screen Size", value: "10.9 inches" },
          { title: "Processor", value: "A14 Bionic chip" },
          { title: "Memory", value: "4 GB" },
          { title: "Storage", value: "64 GB / 256 GB" },
          {
            title: "Battery Life",
            value: "Up to 10 hours",
          },
          { title: "Operating System", value: "iPadOS 14" },
          { title: "Camera Resolution", value: "12MP Wide camera" },
          { title: "Port Types", value: "USB-C" },
          { title: "Graphics", value: "Apple GPU" },
          {
            title: "Display Resolution",
            value: "2360 x 1640 pixels at 264 ppi",
          },
          {
            title: "Dimensions and Weight",
            value: "247 mm x 178 mm x 6.1 mm, 458 grams",
          },
          {
            title: "Color Options",
            value: "Silver, Space Gray, Rose Gold",
          },
        ],
      },
      {
        name: "Samsung Galaxy Note S20",
        price: 2400,
        type: "Tablet",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
        parameters: [
          { title: "Screen Size", value: "12.4 inches" },
          { title: "Processor", value: "Qualcomm Snapdragon 865+" },
          { title: "Memory", value: "8 GB" },
          { title: "Storage", value: "128 GB / 256 GB / 512 GB" },
          { title: "Battery Life", value: "Up to 14 hours video playback" },
          { title: "Operating System", value: "Android 10" },
          { title: "Camera Resolution", value: "13MP main, 5MP ultra-wide" },
          { title: "Port Types", value: "USB Type-C" },
          { title: "Graphics", value: "Adreno 650" },
          { title: "Display Resolution", value: "2800 x 1752 pixels" },
          {
            title: "Dimensions and Weight",
            value: "285 mm x 185 mm x 5.7 mm, 575 grams",
          },
          {
            title: "Color Options",
            value: "Mystic Black, Mystic Bronze, Mystic Silver",
          },
        ],
      },
      {
        name: "Microsoft Surface X7",
        price: 2400,
        type: "Tablet",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
        parameters: [
          { title: "Screen Size", value: "13 inches" },
          { title: "Processor", value: "Microsoft SQ1" },
          { title: "Memory", value: "16 GB" },
          { title: "Storage", value: "256 GB SSD" },
          {
            title: "Battery Life",
            value: "Up to 15 hours of typical device usage",
          },
          { title: "Operating System", value: "Windows 10 Home" },
          {
            title: "Camera Resolution",
            value: "10MP rear-facing, 5MP front-facing",
          },
          { title: "Port Types", value: "2 x USB-C, 1 x Surface Connect port" },
          { title: "Graphics", value: "Microsoft SQ1 Adreno 685 GPU" },
          { title: "Display Resolution", value: "2880 x 1920 (267 PPI)" },
          {
            title: "Dimensions and Weight",
            value: "287 mm x 208 mm x 7.3 mm, 774 grams",
          },
          { title: "Color Options", value: "Matte Black" },
        ],
      },
      {
        name: "Amazon Fire HDX 20",
        price: 2400,
        type: "Tablet",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
        parameters: [
          { title: "Screen Size", value: "8.9 inches" },
          { title: "Processor", value: "Quad-core Snapdragon 800" },
          { title: "Memory", value: "2 GB" },
          { title: "Storage", value: "32 GB / 64 GB" },
          { title: "Battery Life", value: "Up to 12 hours mixed use" },
          { title: "Operating System", value: "Fire OS 5" },
          { title: "Camera Resolution", value: "8 MP rear-facing camera" },
          { title: "Port Types", value: "Micro USB 2.0" },
          { title: "Graphics", value: "Adreno 330" },
          { title: "Display Resolution", value: "2560 x 1600 (339 ppi)" },
          {
            title: "Dimensions and Weight",
            value: "231 mm x 158 mm x 7.8 mm, 374 grams",
          },
          { title: "Color Options", value: "Black" },
        ],
      },
      {
        name: "Lenovo Tab Z10",
        price: 2400,
        type: "Tablet",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
        parameters: [
          { title: "Screen Size", value: "10.3 inches" },
          { title: "Processor", value: "MediaTek Helio P22T" },
          { title: "Memory", value: "4 GB" },
          { title: "Storage", value: "64 GB" },
          { title: "Battery Life", value: "Up to 9 hours video playback" },
          { title: "Operating System", value: "Android 9 Pie" },
          {
            title: "Camera Resolution",
            value: "8 MP auto-focus rear, 5 MP front",
          },
          { title: "Port Types", value: "USB Type-C 2.0" },
          { title: "Graphics", value: "IMG PowerVR GE8320 GPU" },
          { title: "Display Resolution", value: "1920 x 1200" },
          {
            title: "Dimensions and Weight",
            value: "244 mm x 153 mm x 8 mm, 460 grams",
          },
          { title: "Color Options", value: "Iron Grey" },
        ],
      },
    ],
  },
  {
    name: "Laptops",
    sales: [
      {
        name: "MacBook Air X",
        price: 2400,
        type: "Laptop",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
        parameters: [
          { title: "Screen Size", value: "13.3 inches" },
          { title: "Processor", value: "Apple M1 chip" },
          { title: "Memory", value: "8 GB" },
          { title: "Storage", value: "256 GB / 512 GB SSD" },
          { title: "Battery Life", value: "Up to 18 hours" },
          { title: "Operating System", value: "macOS" },
          {
            title: "Camera Resolution",
            value: "640×480 (0.3 MP)",
          },
          { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
          { title: "Graphics", value: "Integrated 7-core GPU" },
          { title: "Display Resolution", value: "2560 x 1600 pixels" },
          {
            title: "Dimensions and Weight",
            value: "304.1 mm x 212.4 mm x 16.1 mm, 1.29 kg",
          },
          { title: "Color Options", value: "Silver, Space Gray, Gold" },
        ],
      },
      {
        name: "Dell XLS 30",
        price: 2400,
        type: "Laptop",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
        parameters: [
          { title: "Screen Size", value: "15.6 inches" },
          { title: "Processor", value: "Intel Core i7-10750H" },
          { title: "Memory", value: "16 GB DDR4" },
          { title: "Storage", value: "512 GB SSD" },
          { title: "Battery Life", value: "Up to 10 hours" },
          { title: "Operating System", value: "Windows 10 Pro" },
          {
            title: "Camera Resolution",
            value: "640×480 (0.3 MP)",
          },
          { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
          { title: "Graphics", value: "NVIDIA GeForce GTX 1650 Ti" },
          { title: "Display Resolution", value: "1920 x 1080 pixels" },
          {
            title: "Dimensions and Weight",
            value: "357.1 mm x 235.8 mm x 18 mm, 1.83 kg",
          },
          { title: "Color Options", value: "Black" },
        ],
      },
      {
        name: "HP Phantom x500",
        price: 2400,
        type: "Laptop",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
        parameters: [
          { title: "Screen Size", value: "15.6 inches" },
          { title: "Processor", value: "AMD Ryzen 7 4800H" },
          { title: "Memory", value: "16 GB DDR4" },
          { title: "Storage", value: "1 TB SSD" },
          { title: "Battery Life", value: "Up to 12 hours" },
          { title: "Operating System", value: "Windows 10 Home" },
          {
            title: "Camera Resolution",
            value: "640×480 (0.3 MP)",
          },
          { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
          { title: "Graphics", value: "NVIDIA GeForce RTX 2060" },
          { title: "Display Resolution", value: "1920 x 1080 pixels" },
          {
            title: "Dimensions and Weight",
            value: "360 mm x 262 mm x 24 mm, 2.45 kg",
          },
          { title: "Color Options", value: "Shadow Black" },
        ],
      },
      {
        name: "Lenovo ThinkPad Z1 Ultra",
        price: 2400,
        type: "Laptop",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
        parameters: [
          { title: "Screen Size", value: "14 inches" },
          { title: "Processor", value: "Intel Core i5-10210U" },
          { title: "Memory", value: "8 GB DDR4" },
          { title: "Storage", value: "256 GB SSD" },
          { title: "Battery Life", value: "Up to 14.1 hours" },
          { title: "Operating System", value: "Windows 10 Pro" },
          {
            title: "Camera Resolution",
            value: "640×480 (0.3 MP)",
          },
          { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
          { title: "Graphics", value: "Integrated Intel UHD Graphics" },
          { title: "Display Resolution", value: "1920 x 1080 pixels" },
          {
            title: "Dimensions and Weight",
            value: "329 mm x 227 mm x 17.9 mm, 1.46 kg",
          },
          { title: "Color Options", value: "Black" },
        ],
      },
      {
        name: "ASUS ZenBook Pro 30",
        price: 2400,
        type: "Laptop",
        image: "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
        parameters: [
          { title: "Screen Size", value: "15.6 inches" },
          { title: "Processor", value: "Intel Core i7-9750H" },
          { title: "Memory", value: "16 GB DDR4" },
          { title: "Storage", value: "1 TB SSD" },
          { title: "Battery Life", value: "Up to 9 hours" },
          { title: "Operating System", value: "Windows 10 Pro" },
          {
            title: "Camera Resolution",
            value: "640×480 (0.3 MP)",
          },
          { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
          { title: "Graphics", value: "NVIDIA GeForce RTX 2060" },
          { title: "Display Resolution", value: "3840 x 2160 pixels" },
          {
            title: "Dimensions and Weight",
            value: "354 mm x 220 mm x 18.9 mm, 1.8 kg",
          },
          { title: "Color Options", value: "Deep Dive Blue, Rose Gold" },
        ],
      },
    ],
  },
];
