import { imageConstants } from "./image.constants";

export const navItems = [
    {
        label : "Destination",
        href : "/destination"
    },
    {
        label : "Hotels",
        href : "/hotels"
    },
    {
        label : "Flights",
        href : "/flights"
    },
    {
        label : "Bookings",
        href : "/bookings"
    }
]
export const categoryItems = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    image: imageConstants.categoryImg1
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: imageConstants.categoryImg2
  },
  {
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    image: imageConstants.categoryImg3
  },
  {
    title: "Customization",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    image: imageConstants.categoryImg4
  },
];

export const destinations = [
    {
        image : imageConstants.romeImage,
        name : "Rome, Italy",
        cost : "$5.43k",
        trip : "10 Days Trip"
    },
    {
        image : imageConstants.londonImage,
        name : "London, UK",
        cost : "$4.2k",
        trip : "12 Days Trip"
    },
    {
        image : imageConstants.europeImage,
        name : "Full Europe",
        cost : "$15k",
        trip : "28 Days Trip"
    }
]

export const processSteps = [
  {
    title: "Choose Destination",
    description:
      "Pick your perfect getaway, from stunning beaches to historic cities and scenic mountains.",
    image: imageConstants.processStep1,
  },
  {
    title: "Make Payment",
    description: "Securely book your trip with hassle-free payment options.",
    image: imageConstants.processStep2,
  },
  {
    title: "Reach Airport on Selected Date",
    description:
      "Arrive on time with your documents ready for a smooth departure.",
    image: imageConstants.processStep3,
  },
];

export const brands = [
  imageConstants.brand1,
  imageConstants.brand2,
  imageConstants.brand3,
  imageConstants.brand4,
];



