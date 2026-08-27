export const businessInfo = {
  name: "Amrita's Dental & Maxillofacial Center",
  shortName: "Amrita's Dental",
  address: {
    line1: "Sri Rangapuram Colony",
    line2: "Rangapuram, Miyapur",
    city: "Hyderabad",
    state: "Telangana 500049",
    plusCode: "G947+F9 Miyapur, Telangana"
  },
  phone: "091829 88355",
  phoneLink: "tel:09182988355",
  hours: "Open · Closes 8 PM",
  rating: 4.9,
  reviewCount: 138,
  doctor: {
    name: "Dr. Amrita",
    description: "Providing thoughtful dental care with clear communication and a patient-focused approach."
  }
};

export const images = {
  hero: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop", // Dentist with patient
  aboutMain: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", // Treatment
  aboutSmall1: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop", // Equipment
  aboutSmall2: "https://images.unsplash.com/photo-1598256989800-fea5f67ada92?q=80&w=2070&auto=format&fit=crop", // Clean clinic
  doctor: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop", // Professional female doctor
  serviceGeneral: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  serviceRootCanal: "https://images.unsplash.com/photo-1598256989800-fea5f67ada92?q=80&w=800&auto=format&fit=crop",
  serviceWisdom: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  serviceImplants: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
  serviceDentures: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  serviceMaxillo: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
};

export const reviews = [
  {
    reviewer: "Patient",
    text: "For the service that you provide thank you is a very small word Doctor.",
    rating: 5
  },
  {
    reviewer: "Patient",
    text: "Very good execution of work by the staff and the staff.",
    rating: 5
  },
  {
    reviewer: "Patient",
    text: "Received root canal treatment for front incisor tooth.",
    rating: 5
  },
  {
    reviewer: "Deepak Kumbhar",
    text: "I am very satisfied with the care and treatment I received from Dr. Amrita. From the initial consultation to the entire course of treatment, she explained every dental issue in a clear and reassuring manner.",
    rating: 5
  },
  {
    reviewer: "Kambhampati Maya vally",
    text: "I recently got my 20 year old dentures replaced at Dr Amrita's since they had become loose and were falling off. She has done a great job and I am now able to use my teeth very well. She is extremely calm and deals with a lot of patience.",
    rating: 5
  },
  {
    reviewer: "Gayathri Gayathri raju Nayak",
    text: "Thank you madam. Very happy to receive treatment from you. Was very afraid due to my last experience with another clinic. Now i feel very satisfied that here on i can rely on u for my dental issues. Thank you once again for treating me so well.",
    rating: 5
  }
];

export const services = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description: "Routine dental consultations, preventive care and treatments to support everyday oral health.",
    iconName: "Stethoscope",
    image: images.serviceGeneral
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Treatment focused on addressing dental problems involving the inner part of the tooth.",
    iconName: "ShieldPlus",
    image: images.serviceRootCanal
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Care",
    description: "Assessment and treatment for wisdom tooth-related dental concerns.",
    iconName: "Activity",
    image: images.serviceWisdom
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Restorative dental solutions for replacing missing teeth.",
    iconName: "Layers",
    image: images.serviceImplants
  },
  {
    id: "dentures",
    title: "Dentures",
    description: "Dental prosthetic solutions designed to help restore everyday oral function.",
    iconName: "Smile",
    image: images.serviceDentures
  },
  {
    id: "maxillofacial",
    title: "Maxillofacial Care",
    description: "Specialized oral and maxillofacial care based on individual patient needs.",
    iconName: "Crosshair",
    image: images.serviceMaxillo
  }
];
