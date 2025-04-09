import React from "react";
import img2 from "../../../assets/spaceImages/2(1).jpg";
import img3 from "../../../assets/spaceImages/5(1).jpg";
import img4 from "../../../assets/spaceImages/7(1).jpg";
import eventSpace from "../../../assets/spaceImages/8.jpg";
import dedicatedDesk from "../../../assets/spaceImages/IMG_20181013_151720-01-01.jpeg";
import image from "../../../assets/spaceImages/5.jpg";
import meetingRoom from "../../../assets/spaceImages/meeting_room.jpeg";
import { FaBrain, FaBriefcase, FaDumbbell } from "react-icons/fa";
import openSeat from "../../../assets/spaceImages/open_seats.jpg";
import chair from "../../../assets/images/chair.png";
import onlineSupport from "../../../assets/images/online-support.png";
import wifi from "../../../assets/images/wi-fi.png";
import cleaningService from "../../../assets/images/cleaning-services.png";
import phoneBooth from "../../../assets/images/phone-booth.png";
import printer from "../../../assets/images/printer.png";
import cafe from "../../../assets/images/cafe.png";
import shower from "../../../assets/images/shower.png";
import skippingRope from "../../../assets/images/skipping-rope.png";
import saddia from "../../../assets/teamImages/saddia.jpg";
import himanshu from "../../../assets/teamImages/himanshu.jpg";
import anshul from "../../../assets/teamImages/anshul.jpg";
import nikhil from "../../../assets/teamImages/nikhil.jpg";
import parking from "../../../assets/images/parking.png";
import powerBackup from "../../../assets/images/power_backup.png";
import gameZone from "../../../assets/images/game_zone.png";

export const imageGallery = [
  { id: 1, src: openSeat },
  { id: 2, src: meetingRoom },
  { id: 3, src: dedicatedDesk },
  { id: 4, src: eventSpace },
];

export const membershipPlan = [
  {
    id: 1,
    img: image,
    title: "Private Office Space",
    description:
      "Confidentiality is key. Understanding that, the customized private office plans at Eccosphere are built to exclusively provide you with safe and secure co sharing office spaces within a single location, so that you always enjoy full autonomy.",
  },
  {
    id: 2,
    img: dedicatedDesk,
    title: "Dedicated Desk",
    description:
      "We provide you with an interesting concept of ‘Dedicated’ Desk plans as part of our coworking office space membership option. These plans allow you as a member to feel at home and have your own fixed personal space in a buzzing hub of creativity and commerce.",
  },
  {
    id: 2,
    img: img2,
    title: "Coworking-Night",
    description:
      "Anyone who is committed towards his or her work knows that work does not stop, be it day or night. At Eccosphere, we have exciting hot desk plans not just for the day, but also for the night.",
  },
  {
    id: 2,
    img: meetingRoom,
    title: "Meeting Rooms",
    description:
      "Full of light and positivity, our meeting/conference rooms designed keeping creativity in mind. Furnished along with all the possible modern amenities, it is a prefect space to have a impactful meeting or to close deal!!",
  },
  {
    id: 2,
    img: eventSpace,
    title: "Event Space",
    description:
      "Looking for the perfect venue to host your next event? Look no further than our versatile event space at Eccosphere Coworking. Whether you’re planning a workshop, seminar, networking event, or celebration, our space is designed to meet your needs and exceed your expectations",
  },
  {
    id: 2,
    img: openSeat,
    title: "Day Pass",
    description:
      "Access to any open seats in the common area. Just shop up, Set up shop, and get to work",
  },
];

export const pointList = [
  {
    id: 1,
    spaceFeatures: [
      {
        list: "A modern, shared office space designed for productivity and collaboration.",
      },
      {
        list: "Connect with like-minded professionals, entrepreneurs, and freelancers.",
      },
      {
        list: "Choose from private offices, shared desks, and meeting rooms tailored to your needs.",
      },
      {
        list: "Green spaces, meditation zones, and ergonomic workstations for a stress-free experience.",
      },
    ],
  },
  {
    id: 2,
    spaceFeatures: [
      {
        list: "Flexible workspaces for remote teams and individual freelancers.",
      },
      {
        list: "Access to premium amenities and resources for your productivity needs.",
      },
      {
        list: "Support from our team of experienced professionals and mentors.",
      },
      {
        list: "A supportive community for networking and collaboration.",
      },
      {
        list: "Regular events and workshops to keep you motivated and engaged.",
      },
    ],
  },
];

export const whyChooseUs = [
  {
    id: 1,
    icon: <FaBrain style={{ color: "green", width: "40px", height: "40px" }} />,
    title: "Mind",
    description: "Zen Garden, Library, Meditation",
  },
  {
    id: 2,
    icon: (
      <FaDumbbell style={{ color: "green", width: "40px", height: "40px" }} />
    ),
    title: "Body",
    description: "Sports & CrossFit Gym",
  },
  {
    id: 3,
    icon: (
      <FaBriefcase style={{ color: "green", width: "40px", height: "40px" }} />
    ),
    title: "Work",
    description: "High-speed WiFi, Outdoor Café, Networking Events",
  },
];

export const workspaces = [
  { id: 1, name: "Private Offices", image: img3 },
  { id: 2, name: "Open Workspaces", image: img2 },
  { id: 3, name: "Meeting Rooms", image: meetingRoom },
  { id: 4, name: "Community Café", image: img4 },
  { id: 5, name: "Event Space", image: eventSpace },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Eccosphere has completely transformed my work experience! The vibrant community, inspiring atmosphere, and top-notch facilities make it the perfect place to be productive and connect with like-minded professionals.",
    name: "Sadia Siddiqui​",
    company: "Director Sales-Media",
    image: saddia,
  },
  {
    id: 2,
    quote:
      "My experience at Eccosphere has been truly amazing! The staff is incredibly helpful and welcoming. If you're looking for a top-notch coworking space, Eccosphere in Noida Sector 67 is a must-visit!",
    name: "HIMANSHU JAISWAL",
    company: "HEAD RESEARCH: MARKET RESEARCH",
    image: himanshu,
  },
  {
    id: 3,
    quote:
      "The ambience is great, and the location is convenient, just a short walk from Sector 59 Metro Station. However, parking can be a challenge, so it's best to plan accordingly.",
    name: "Anshul Sharma",
    company: "AVP SALES,INFRA LINES RESEARCH",
    image: anshul,
  },
  {
    id: 4,
    quote:
      "t's a fantastic place to work and collaborate with others. The co-working space is well-designed, offering a productive and comfortable environment. Highly recommended!",
    name: "NIKHIL CHAINANI",
    company: "FOUNDER PERSPECTICO-EDUCATION",
    image: nikhil,
  },
];

export const partners = [saddia, himanshu, anshul, nikhil];

export const amenities = [
  {
    id: 1,
    img: chair,
    title: "SPACIOUS & UNIQUE COMMON AREAS",
    description:
      "We boast of customized art and furniture designed exclusively to enhance your creativity, comfort, and productivity. Step into the aesthetic best.",
  },
  {
    id: 2,
    img: onlineSupport,
    title: "ONSITE STAFF",
    description:
      "From front-desk concierge to IT support, we ensure all your needs are taken care of, every moment, everyday",
  },
  {
    id: 3,
    img: wifi,
    title: "SUPER-FAST INTERNET",
    description:
      "Get spoilt with extremely fast and secure internet, unmatched IT support services, guest log-in functionality to continually amplify work efficiency.",
  },
  {
    id: 4,
    img: cleaningService,
    title: "CLEANING SERVICES",
    description:
      "Let our motivated cleaning crew help you ensure that all common areas, meeting rooms, and private offices are constantly orderly and spiffy.",
  },
  {
    id: 5,
    img: phoneBooth,
    title: "PRIVATE PHONE BOOTHS",
    description:
      "Use our soundproofed alcoves for conducting disturbance free private calls and video chats.",
  },
  {
    id: 6,
    img: printer,
    title: "PRINTING/SCANNING",
    description: "Best in class printers for all your business needs.",
  },

  {
    id: 7,
    img: cafe,
    title: "FREE REFRESHMENT",
    description:
      "Fuel up at any time of the day with complimentary refreshments including fresh fruit water, coffee, and tea.",
  },
  {
    id: 8,
    img: shower,
    title: "SHOWER ROOMS",
    description:
      "Our sanctuary is equipped with state of the art shower facilities to ensure you’re fresh and energized, every moment.",
  },
  {
    id: 9,
    img: skippingRope,
    title: "CROSSFIT",
    description:
      "We believe that a well-rested and physically fit body can enhance your work efficiency and enable seamless higher thinking.",
  },
  {
    id: 10,
    img: parking,
    title: "PARKING",
    description:
      "We believe that a well-rested and physically fit body can enhance your work efficiency and enable seamless higher thinking.",
  },
  {
    id: 11,
    img: powerBackup,
    title: "POWER BACKUP",
    description:
      "We believe that a well-rested and physically fit body can enhance your work efficiency and enable seamless higher thinking.",
  },

  {
    id: 12,
    img: gameZone,
    title: "GAME ZONE",
    description:
      "We believe that a well-rested and physically fit body can enhance your work efficiency and enable seamless higher thinking.",
  },
];
