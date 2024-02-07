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

export const productsData: Product[] = [
  {
    name: "iPhone 80A",
    price: 2400,
    type: "Phone",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
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
        value: "2532x1170 pixels at 460 ppi",
      },
      {
        title: "Dimensions & weight",
        value: "146.7x71.5x7.65, 174 grams",
      },
      {
        title: "Color Options",
        value: "Blue, Moonlight, Pink",
      },
    ],
  },
  {
    name: "Samsung Galaxy Z99",
    price: 3400,
    type: "Phone",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
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
      { title: "Display Resolution", value: "2400x1080 pixels" },
      {
        title: "Dimensions & weight",
        value: "151.7x71.2x7.9, 169 grams",
      },
      {
        title: "Color Options",
        value: "Black, Silver",
      },
    ],
  },
  {
    name: "Google Pixel X20",
    price: 1400,
    type: "Phone",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
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
      { title: "Display Resolution", value: "2340x1080 pixels" },
      {
        title: "Dimensions & weight",
        value: "144.7x70.4x8.0, 151 grams",
      },
      { title: "Color Options", value: "Black, Purple" },
    ],
  },
  {
    name: "OnePlus 30T",
    price: 2500,
    type: "Phone",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
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
      { title: "Display Resolution", value: "2400x1080 pixels" },
      {
        title: "Dimensions & weight",
        value: "160.7x74.1x8.4, 188 grams",
      },
      { title: "Color Options", value: "Green, Silver" },
    ],
  },
  {
    name: "Xiaomi Mi 20X",
    price: 1600,
    type: "Phone",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/phone_knj3g4.png",
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
      { title: "Display Resolution", value: "2400x1080 FHD+" },
      {
        title: "Dimensions & weight",
        value: "163.7x76.4x7.8, 196 grams",
      },
      {
        title: "Color Options",
        value: "Black, White",
      },
    ],
  },

  {
    name: "iPad Z50",
    price: 2400,
    type: "Tablet",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
    parameters: [
      { title: "Screen Size", value: "10.9 inches" },
      { title: "Processor", value: "A14 Bionic chip" },
      { title: "Memory", value: "4 GB" },
      { title: "Storage", value: "64 GB / 256 GB" },
      {
        title: "Battery Life",
        value: "Up to 10 hours video playback",
      },
      { title: "Operating System", value: "iPadOS 14" },
      { title: "Camera Resolution", value: "12MP Wide camera" },
      { title: "Port Types", value: "USB-C" },
      { title: "Graphics", value: "Apple GPU" },
      {
        title: "Display Resolution",
        value: "2360x1640 pixels at 264 ppi",
      },
      {
        title: "Dimensions & weight",
        value: "247x178x6.1, 458 grams",
      },
      {
        title: "Color Options",
        value: "Silver, Grey",
      },
    ],
  },
  {
    name: "Samsung Galaxy Note S20",
    price: 2400,
    type: "Tablet",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
    parameters: [
      { title: "Screen Size", value: "12.4 inches" },
      { title: "Processor", value: "Qualcomm Snapdragon 865+" },
      { title: "Memory", value: "8 GB" },
      { title: "Storage", value: "128 GB / 256 GB / 512 GB" },
      { title: "Battery Life", value: "Up to 14 hours video playback" },
      { title: "Operating System", value: "Android 10" },
      { title: "Camera Resolution", value: "13MP front-facing" },
      { title: "Port Types", value: "USB Type-C" },
      { title: "Graphics", value: "Adreno 650" },
      { title: "Display Resolution", value: "2800x1752 pixels" },
      {
        title: "Dimensions & weight",
        value: "285x185x5.7, 575 grams",
      },
      {
        title: "Color Options",
        value: "Black, White",
      },
    ],
  },
  {
    name: "Microsoft Surface X7",
    price: 2400,
    type: "Tablet",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
    parameters: [
      { title: "Screen Size", value: "13 inches" },
      { title: "Processor", value: "Microsoft SQ1" },
      { title: "Memory", value: "16 GB" },
      { title: "Storage", value: "256 GB SSD" },
      {
        title: "Battery Life",
        value: "Up to 15 hours video playback",
      },
      { title: "Operating System", value: "Windows 10 Home" },
      {
        title: "Camera Resolution",
        value: "10MP rear-facing, 5MP front-facing",
      },
      { title: "Port Types", value: "2xUSB-C, 1xSurface Connect port" },
      { title: "Graphics", value: "Microsoft SQ1 Adreno 685 GPU" },
      { title: "Display Resolution", value: "2880x1920 (267 PPI)" },
      {
        title: "Dimensions & weight",
        value: "287x208x7.3, 774 grams",
      },
      { title: "Color Options", value: "White" },
    ],
  },
  {
    name: "Amazon Fire HDX 20",
    price: 2400,
    type: "Tablet",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
    parameters: [
      { title: "Screen Size", value: "8.9 inches" },
      { title: "Processor", value: "Quad-core Snapdragon 800" },
      { title: "Memory", value: "2 GB" },
      { title: "Storage", value: "32 GB / 64 GB" },
      { title: "Battery Life", value: "Up to 12 hours video playback" },
      { title: "Operating System", value: "Fire OS 5" },
      { title: "Camera Resolution", value: "8 MP rear-facing camera" },
      { title: "Port Types", value: "Micro USB 2.0" },
      { title: "Graphics", value: "Adreno 330" },
      { title: "Display Resolution", value: "2560x1600 (339 ppi)" },
      {
        title: "Dimensions & weight",
        value: "231x158x7.8, 374 grams",
      },
      { title: "Color Options", value: "Black" },
    ],
  },
  {
    name: "Lenovo Tab Z10",
    price: 2400,
    type: "Tablet",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330257/spireflow/tablet_norqnr.png",
    parameters: [
      { title: "Screen Size", value: "10.3 inches" },
      { title: "Processor", value: "MediaTek Helio P22T" },
      { title: "Memory", value: "4 GB" },
      { title: "Storage", value: "64 GB" },
      { title: "Battery Life", value: "Up to 9 hours video playback" },
      { title: "Operating System", value: "Android 9 Pie" },
      {
        title: "Camera Resolution",
        value: "8 MP rear-facing, 5 MP front-facing",
      },
      { title: "Port Types", value: "USB Type-C 2.0" },
      { title: "Graphics", value: "IMG PowerVR GE8320 GPU" },
      { title: "Display Resolution", value: "1920x1200" },
      {
        title: "Dimensions & weight",
        value: "244x153x8, 460 grams",
      },
      { title: "Color Options", value: "Grey" },
    ],
  },

  {
    name: "MacBook Air X",
    price: 2400,
    type: "Laptop",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
    parameters: [
      { title: "Screen Size", value: "13.3 inches" },
      { title: "Processor", value: "Apple M1 chip" },
      { title: "Memory", value: "8 GB" },
      { title: "Storage", value: "256 GB / 512 GB SSD" },
      { title: "Battery Life", value: "Up to 18 hours of mixed usage" },
      { title: "Operating System", value: "macOS" },
      {
        title: "Camera Resolution",
        value: "640×480 (0.3 MP)",
      },
      { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
      { title: "Graphics", value: "Integrated 7-core GPU" },
      { title: "Display Resolution", value: "2560x1600 pixels" },
      {
        title: "Dimensions & weight",
        value: "304.1x212.4x16.1, 1.29 kg",
      },
      { title: "Color Options", value: "Silver, Grey" },
    ],
  },
  {
    name: "Dell XLS 30",
    price: 2400,
    type: "Laptop",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
    parameters: [
      { title: "Screen Size", value: "15.6 inches" },
      { title: "Processor", value: "Intel Core i7-10750H" },
      { title: "Memory", value: "16 GB DDR4" },
      { title: "Storage", value: "512 GB SSD" },
      { title: "Battery Life", value: "Up to 10 hours of mixed usage" },
      { title: "Operating System", value: "Windows 10 Pro" },
      {
        title: "Camera Resolution",
        value: "640×480 (0.3 MP)",
      },
      { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
      { title: "Graphics", value: "NVIDIA GeForce GTX 1650 Ti" },
      { title: "Display Resolution", value: "1920x1080 pixels" },
      {
        title: "Dimensions & weight",
        value: "357.1x235.8x18, 1.83 kg",
      },
      { title: "Color Options", value: "Black" },
    ],
  },
  {
    name: "HP Phantom x500",
    price: 2400,
    type: "Laptop",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
    parameters: [
      { title: "Screen Size", value: "15.6 inches" },
      { title: "Processor", value: "AMD Ryzen 7 4800H" },
      { title: "Memory", value: "16 GB DDR4" },
      { title: "Storage", value: "1 TB SSD" },
      { title: "Battery Life", value: "Up to 12 hours of mixed usage" },
      { title: "Operating System", value: "Windows 10 Home" },
      {
        title: "Camera Resolution",
        value: "640×480 (0.3 MP)",
      },
      { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
      { title: "Graphics", value: "NVIDIA GeForce RTX 2060" },
      { title: "Display Resolution", value: "1920x1080 pixels" },
      {
        title: "Dimensions & weight",
        value: "360x262x24, 2.45 kg",
      },
      { title: "Color Options", value: "Green, Black" },
    ],
  },
  {
    name: "Lenovo ThinkPad Z1 Ultra",
    price: 2400,
    type: "Laptop",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
    parameters: [
      { title: "Screen Size", value: "14 inches" },
      { title: "Processor", value: "Intel Core i5-10210U" },
      { title: "Memory", value: "8 GB DDR4" },
      { title: "Storage", value: "256 GB SSD" },
      { title: "Battery Life", value: "Up to 14.1 hours of mixed usage" },
      { title: "Operating System", value: "Windows 10 Pro" },
      {
        title: "Camera Resolution",
        value: "640×480 (0.3 MP)",
      },
      { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
      { title: "Graphics", value: "Integrated Intel UHD Graphics" },
      { title: "Display Resolution", value: "1920x1080 pixels" },
      {
        title: "Dimensions & weight",
        value: "329x227x17.9, 1.46 kg",
      },
      { title: "Color Options", value: "Yellow, Black" },
    ],
  },
  {
    name: "ASUS ZenBook Pro 30",
    price: 2400,
    type: "Laptop",
    image:
      "https://res.cloudinary.com/dvor7ybke/image/upload/v1702330253/spireflow/laptop_gmo3uc.png",
    parameters: [
      { title: "Screen Size", value: "15.6 inches" },
      { title: "Processor", value: "Intel Core i7-9750H" },
      { title: "Memory", value: "16 GB DDR4" },
      { title: "Storage", value: "1 TB SSD" },
      { title: "Battery Life", value: "Up to 9 hours of mixed usage" },
      { title: "Operating System", value: "Windows 10 Pro" },
      {
        title: "Camera Resolution",
        value: "640×480 (0.3 MP)",
      },
      { title: "Port Types", value: "USB Type-C 2.0, 3.0, HDMI" },
      { title: "Graphics", value: "NVIDIA GeForce RTX 2060" },
      { title: "Display Resolution", value: "3840x2160 pixels" },
      {
        title: "Dimensions & weight",
        value: "354x220x18.9, 1.8 kg",
      },
      { title: "Color Options", value: "Blue" },
    ],
  },
];
