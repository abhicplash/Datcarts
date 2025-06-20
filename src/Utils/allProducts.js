import marketingCart from "../Assets/products/MARKETINGCART.png";
import SELFCHECKOUTCART from "../Assets/products/SELFCHECKOUTCART.png";
import SELFCHECKOUTCOUNTER from "../Assets/products/SELFCHECKOUTCOUNTER.png";
import MOBILEAPP from "../Assets/products/MOBILEAPP.png";

export const allProducts = [
  {
    productName: "Marketing cart",
    id: 0,
    Image: marketingCart,
    desc: "Enhance every customer's journey with our Smart Trolley — delivering faster, frictionless shopping while unlocking new revenue through targeted ads and data insights.",
    details: [
      {
        pid: 1,
        list: "Location based, personalized advertisements and offers",
      },
      {
        pid: 2,
        list: "Search and locate product within supermarket",
      },
      {
        pid: 3,
        list: "Compare prices, offers and features of products",
      },
      {
        pid: 4,
        list: "Check product price using onboard scanner",
      },

      {
        pid: 5,
        list: "Market study and analytics tool through consumer data",
      },

      {
        pid: 6,
        list: "Can be retrofitted to existing carts",
      },
      {
        pid: 7,
        list: "Anti tampering design with integrated anti theft system",
      },
    ],
  },
  {
    productName: "Self Check-out Cart",
    id: 1,
    Image: SELFCHECKOUTCART,
    desc: "Turn every cart into a checkout counter seamless scan-and-go shopping, reduces wait times, and unlocks new revenue with real-time promotions and data-driven insights",
    details: [
      {
        pid: 1,
        list: "Automated billing and check-out integrated onto a cart",
      },
      {
        pid: 2,
        list: "Location based, personalized advertisements and offers",
      },
      {
        pid: 3,
        list: "Search and locate product within supermarket",
      },
      {
        pid: 4,
        list: "Compare prices, offers and features of products",
      },

      {
        pid: 5,
        list: "Market study and analytics tool through consumer data",
      },

      {
        pid: 6,
        list: "Can be retrofitted to existing carts",
      },
      {
        pid: 7,
        list: "AI Verification using on-board camera system to detect theft",
      },
      {
        pid: 8,
        list: "Anti tampering design with integrated anti theft system",
      },
    ],
  },
  {
    productName: "Self Check-out Counter",
    id: 2,
    Image: SELFCHECKOUTCOUNTER,
    desc: "Empower customers with fast, hassle-free self-checkout — reducing queues, cutting labor costs, and driving higher throughput and revenue",
    details: [
      {
        pid: 1,
        list: "Static unmanned check-out counters",
      },
      {
        pid: 2,
        list: "AI assisted verification system using on-board camera",
      },
      {
        pid: 3,
        list: "Market study and analytics tool through consumer data",
      },
      {
        pid: 4,
        list: "Barcode based system without RFID",
      },

      {
        pid: 5,
        list: "Integrated payment system ",
      },

      {
        pid: 6,
        list: "Compact design requiring lesser floor space",
      },
    ],
  },
  {
    productName: "Mobile App",
    id: 3,
    Image: MOBILEAPP,
    desc: "One app. Smarter shopping. Connect to Smart Trolleys, Self-Checkout Carts, and Counters — scan, save, and checkout in seconds",
    details: [
      {
        pid: 1,
        list: "Personal phones can be retrofitted to use as marketing or self checkout carts ",
      },
      {
        pid: 2,
        list: "Location based, personalized advertisements and offers",
      },
      {
        pid: 3,
        list: "Market study and analytics tool through consumer data",
      },
      {
        pid: 4,
        list: "Search and locate product within supermarket",
      },

      {
        pid: 5,
        list: "Compare prices, offers and features of products",
      },

      {
        pid: 6,
        list: "Market study and analytics tool through consumer data",
      },
    ],
  },
];
