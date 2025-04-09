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
      "Eccosphere has transformed the way I work. Amazing community and work environment!",
    name: "Sadia Siddiqui​",
    company: "Director Sales-Media",
    image:
      "https://eccosphere.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-05-at-17.35.41_58096da3.jpg",
  },
  {
    id: 2,
    quote:
      "The best co-working space! Great facilities, networking, and a truly inspiring place.",
    name: "HIMANSHU JAISWAL",
    company: "HEAD RESEARCH: MARKET RESEARCH",
    image:
      "https://eccosphere.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-05-at-17.35.39_1b749bb2.jpg",
  },
  {
    id: 3,
    quote:
      "The best co-working space! Great facilities, networking, and a truly inspiring place.",
    name: "Anshul Sharma",
    company: "AVP SALES,INFRA LINES RESEARCH",
    image:
      "https://eccosphere.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-05-at-17.35.40_940e8987.jpg",
  },
  {
    id: 4,
    quote:
      "The best co-working space! Great facilities, networking, and a truly inspiring place.",
    name: "NIKHIL CHAINANI",
    company: "FOUNDER PERSPECTICO-EDUCATION",
    image:
      "https://eccosphere.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-05-at-17.35.40_7b305c33.jpg",
  },
];

export const partners = [
  "https://eccosphere.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-05-at-17.35.41_58096da3.jpg",
  "https://eccosphere.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-05-at-17.35.39_1b749bb2.jpg",
  "https://eccosphere.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-05-at-17.35.40_940e8987.jpg",
  "https://eccosphere.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-05-at-17.35.40_7b305c33.jpg",
];

export const amenities = [
  {
    id: 1,
    img: "https://eccosphere.com/wp-content/uploads/2024/03/icons8-chairs-100.png",
    title: "SPACIOUS & UNIQUE COMMON AREAS",
    description:
      "We boast of customized art and furniture designed exclusively to enhance your creativity, comfort, and productivity. Step into the aesthetic best.",
  },
  {
    id: 2,
    img: "https://eccosphere.com/wp-content/uploads/2024/03/icons8-online-support-100.png",
    title: "ONSITE STAFF",
    description:
      "From front-desk concierge to IT support, we ensure all your needs are taken care of, every moment, everyday",
  },
  {
    id: 3,
    img: "https://eccosphere.com/wp-content/uploads/2024/03/icons8-wi-fi-100.png",
    title: "SUPER-FAST INTERNET",
    description:
      "Get spoilt with extremely fast and secure internet, unmatched IT support services, guest log-in functionality to continually amplify work efficiency.",
  },
  {
    id: 4,
    img: "https://eccosphere.com/wp-content/uploads/2024/03/icons8-cleaning-services-100-1.png",
    title: "CLEANING SERVICES",
    description:
      "Let our motivated cleaning crew help you ensure that all common areas, meeting rooms, and private offices are constantly orderly and spiffy.",
  },
  {
    id: 5,
    img: "https://eccosphere.com/wp-content/uploads/2024/03/icons8-phone-booth-100.png",
    title: "PRIVATE PHONE BOOTHS",
    description:
      "Use our soundproofed alcoves for conducting disturbance free private calls and video chats.",
  },
  {
    id: 6,
    img: "https://eccosphere.com/wp-content/uploads/2024/03/icons8-printer-100.png",
    title: "PRINTING/SCANNING",
    description: "Best in class printers for all your business needs.",
  },

  {
    id: 7,
    img: "https://eccosphere.com/wp-content/uploads/2024/03/icons8-cafe-100.png",
    title: "FREE REFRESHMENT",
    description:
      "Fuel up at any time of the day with complimentary refreshments including fresh fruit water, coffee, and tea.",
  },
  {
    id: 8,
    img: "https://eccosphere.com/wp-content/uploads/2024/03/icons8-shower-100.png",
    title: "SHOWER ROOMS",
    description:
      "Our sanctuary is equipped with state of the art shower facilities to ensure you’re fresh and energized, every moment.",
  },
  {
    id: 9,
    img: "https://eccosphere.com/wp-content/uploads/2024/03/icons8-skipping-rope-100.png",
    title: "CROSSFIT",
    description:
      "We believe that a well-rested and physically fit body can enhance your work efficiency and enable seamless higher thinking.",
  },
];
