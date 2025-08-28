import { PlaceHolderImg } from "../assets/images";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  CleaningHand,
  SofaCouch,
  CleaningMan,
  Quality,
  Reliabale,
  Environment,
  CustomerService,
} from "./icons";

export const priceItems = [
  {
    title: "Formule standard",
    price: 60,
    benefits: [
      "Aspiration complète de l'habitacle",
      "Nettoyage de tous les plastiques intérieurs",
      "Nettoyage des vitres",
      "Aspiration du coffre",
    ],
  },
  {
    title: "Formule Premium",
    price: 90,
    benefits: [
      "Aspiration en profondeur de l'habitacle",
      "Nettoyage détaillé de tous les plastiques et aérations",
      "Application d'une protection pour les plastiques",
      "Pressing des sièges et nettoyage du cuir",
      "Nettoyage complet du coffre",
      "Nettoyage des joints de portes",
      "Nettoyage des contours de portes",
    ],
  },
  {
    title: "Formule Prestige",
    price: 150,
    benefits: [
      "Aspiration en profondeur de l'habitacle",
      "Nettoyage complet des plastiques intérieurs",
      "Nettoyage des vitres intérieures et extérieures",
      "Pressing des sièges et nettoyage en profondeur du cuir",
      "Nettoyage complet du coffre",
      "Nettoyage des joints de portes",
      "Nettoyage du ciel de toit",
      "Nettoyage détaillé du compartiment de la roue de secours",
      "Nettoyage des ceintures de sécurité",
      "Nettoyage approfondi des contours de portes",
    ],
    priceStyle: "text-white-color",
    bgColor: "bg-green-color dark:bg-grey-green-color",
  },
];

export const tabs = ["Canapés", "Matelas", "Moquettes", "Tapis"];

export const homeItemsPrices = [
  {
    key: 1,
    category: "Canapés",
    items: [
      {
        image: PlaceHolderImg,
        title: "Canapé 1-2 places",
        description: "Nettoyage complet et détachage en profondeur",
        price: 50,
      },
      {
        image: PlaceHolderImg,
        title: "Canapé 3-4 places",
        description:
          "Nettoyage complet avec soin spécifique pour les tissus délicats",
        price: 80,
      },
      {
        image: PlaceHolderImg,
        title: "Canapé d'angle / 5+ places",
        description: "Nettoyage en profondeur et compris les coussins",
        price: 110,
        priceStyle: "text-green-color",
      },
    ],
  },
  {
    key: 2,
    category: "Matelas",
    items: [
      {
        image: PlaceHolderImg,
        title: "Matelas 1 place",
        description: "Nettoyage en profondeur et traitement des taches",
        price: 40,
      },
      {
        image: PlaceHolderImg,
        title: "Matelas 2 places",
        description: "Nettoyage complet avec désinfection anti acariens",
        price: 60,
      },
      {
        image: PlaceHolderImg,
        title: "Matelas King Size",
        description:
          "Nettoyage en profondeur des deux côtés et traitement anti acariens",
        price: 80,
        priceStyle: "text-green-color",
      },
    ],
  },
  {
    key: 3,
    category: "Moquettes",
    items: [
      {
        image: PlaceHolderImg,
        title: "Petite surface (jusqu'à 10 m²)",
        description: "Nettoyage en profondeur avec traitement anti-taches",
        price: 60,
      },
      {
        image: PlaceHolderImg,
        title: "Surface moyenne (10-30 m²)",
        description: "Nettoyage complet avec désinfection",
        price: 90,
      },
      {
        image: PlaceHolderImg,
        title: "Grande surface (plus de 30 m²)",
        description:
          "Nettoyage intensif et désodorisation pour une fraîcheur durable",
        price: 120,
        priceStyle: "text-green-color",
      },
    ],
  },
  {
    key: 4,
    category: "Tapis",
    items: [
      {
        image: PlaceHolderImg,
        title: "Tapis de petite taille (jusqu'à 2 m²)",
        description: "Nettoyage et élimination des taches",
        price: 30,
      },
      {
        image: PlaceHolderImg,
        title: "Tapis de taille moyenne (2-4 m²)",
        description: "Nettoyage complet avec traitement des taches incrustées",
        price: 50,
      },
      {
        image: PlaceHolderImg,
        title: "Tapis de grande taille (plus de 4 m²)",
        description: "Nettoyage intensif et déodorisation",
        price: 70,
        priceStyle: "text-green-color",
      },
    ],
  },
];

export const contactUsFormInfos = [
  {
    icon: HiOutlineLocationMarker,
    title: "861 route de la seoune 46140 Sauzet",
  },
  {
    icon: IoCallOutline,
    title: "05 65 24 56 45 / 06 51 78 13 79",
  },
  {
    icon: IoMailOutline,
    title: "cleaningup46@gmail.com",
  },
];

export const fields = [
  {
    label: "Nom",
    type: "text",
    placeholder: "Ex. John Doe",
    name: "completeName",
    rules: {
      required: "Votre nom est requis",
      minLength: {
        value: 4,
        message: "Le nom doit contenir un minimum de 4 lettres",
      },
    },
  },
  {
    label: "Société",
    type: "text",
    placeholder: "Ex. Cleanup46",
    name: "society",
  },
  {
    label: "Numéro de téléphone",
    type: "number",
    placeholder: "+33 04 45 45 67 98",
    name: "phoneNumber",
    onChange: (value, setValue) =>
      setValue("phoneNumber", "+33 " + String(value)),
  },
  {
    label: "Sujet",
    type: "text",
    placeholder: "Ex. Achat de produit",
    name: "subject",
    rules: {
      required: "Le sujet est requis",
      minLength: {
        value: 5,
        message: "Le sujet doit contenir un minimum de 5 lettres",
      },
      maxLength: {
        value: 50,
        message: "Le sujet ne peut contenir plus de 50 lettres",
      },
    },
  },
  {
    label: "Email",
    type: "text",
    placeholder: "Insérer votre addresse email",
    name: "emailAddress",
    rules: {
      required: "Votre email est requis",
      pattern: {
        value:
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        message: "Votre email n'est pas valide",
      },
    },
  },
  {
    label: "Question",
    type: "text",
    placeholder: "Ex. Quels sont vos tarifs?",
    name: "question",
    rules: {
      required: "Votre question est requise",
      minLength: {
        value: 8,
        message: "La question doit contenir un minimum de 8 lettres",
      },
      maxLength: {
        value: 50,
        message: "Le question ne peut contenir plus de 50 lettres",
      },
    },
  },
];

export const listLinks = [
  {
    title: "Liens Utiles",
    links: [
      {
        name: "Accueil",
        url: "/",
      },
      {
        name: "A propos de nous",
        url: "/about-us",
      },
      {
        name: "Nos services",
        url: "/#services",
      },
      {
        name: "FAQ",
        url: "/#faq",
      },
    ],
  },
  {
    title: "Nos Tarifs",
    links: [
      {
        name: "Nettoyage voiture",
        url: "/tarifs#cleaning-cars",
      },
      {
        name: "Nettoyage Canapé, matelas, tapis et moquette",
        url: "/tarifs#cleaning-house",
      },
    ],
  },
];

export const socialLinks = [
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com",
  },
  {
    Icon: FaWhatsapp,
    link: "/",
  },
];

export const contactItems = [
  {
    text: "cleaningup46@gmail.com",
    icon: IoMailOutline,
  },
  {
    text: "05 65 24 56 45",
    icon: IoCallOutline,
  },
];

// inputStyle: "input-submit input-submit-btn",

export const serviceItems = [
  {
    icon: CleaningHand,
    highlighted: false,
    title: "Redonnez éclat à votre voiture et à vos textiles!",
    description:
      "Nous sommes spécialisés dans le nettoyage en profondeur de l'intérieur et de l'extérieur de votre voiture, ainsi que de vos textiles de maison. Canapés, matelas, tapis et moquettes : nous éliminons les taches, les saletés et les allergènes pour un environnement frais et sain. Confiez-nous vos espaces pour un résultat impeccable et durable.",
  },
  {
    icon: CleaningMan,
    highlighted: true,
    title: "Un nettoyage complet pour un intérieur revitalisé!",
    description:
      "Que ce soit pour l'intérieur de votre voiture ou les textiles de votre maison, nous offrons un service de nettoyage qui redonne à vos espaces toute leur splendeur. Canapés, matelas, tapis ou moquettes, nous nous assurons que chaque fibre soit parfaitement nettoyée, pour un confort et une propreté incomparables.",
  },
  {
    icon: SofaCouch,
    highlighted: false,
    title: "Votre confort passe par la propreté!",
    description:
      "Offrez à votre voiture et à vos textiles de maison un soin professionnel. Nos services de nettoyage redonnent vie à vos intérieurs en éliminant la poussière, les odeurs et les taches. Nous utilisons des techniques avancées pour garantir un nettoyage en profondeur qui respecte vos tissus tout en leur offrant une nouvelle fraîcheur.",
  },
];

export const faqQuestions = [
  {
    question: "Quels services de nettoyages proposez-vous?",
    response: "",
  },
  {
    question: "Quels produits utilisez-vous pour le nettoyage?",
    response:
      "Nous proposons un nettoyage complet de l'intérieur et de l'extérieur de votre voiture, ainsi que le nettoyage professionnel de vos textiles domestiques, incluant canapés, matelas, tapis, et moquettes.",
  },
  {
    question: "Quels types de véhicules nettoyez-vous?",
    response: "",
  },
  {
    question: "Combien de temps prend un nettoyage?",
    response: "",
  },
  {
    question: "Comment se déroule le nettoyage de ma voiture?",
    response: "",
  },
  {
    question: "Proposez-vous des services à domicile ?",
    response: "",
  },
  {
    question: "Quels types de textiles nettoyez-vous ?",
    response:
      "Nous nettoyons une large gamme de textiles domestiques, y compris les canapés en tissu et en cuir, les matelas, les tapis, et les moquettes. Nos méthodes sont adaptées pour éliminer les taches, la poussière, les allergènes et les mauvaises odeurs.",
  },
  {
    question: "Comment puis-je prendre rendez-vous ?",
    response: "",
  },
];

export const ourValues = [
  {
    valueName: "Qualité",
    valueDescription:
      "Nous utilisons des produits et des techniques de nettoyage haut de gamme pour assurer des résultats durables et satisfaisants.",
    valueIcon: Quality,
  },
  {
    valueName: "Fiabilité",
    valueDescription:
      "Vous pouvez compter sur nous pour respecter les délais et les engagements pris. Votre satisfaction est notre priorité.",
    valueIcon: Reliabale,
  },
  {
    valueName: "Respect de l’Environnement",
    valueDescription:
      "Nous privilégions l’utilisation de produits écologiques et non toxiques pour protéger votre santé et celle de la planète.",
    valueIcon: Environment,
  },
  {
    valueName: "Service Client",
    valueDescription:
      "Nous croyons en une communication ouverte et honnête. Notre équipe est toujours disponible pour répondre à vos questions et adapter nos services à vos besoins.",
    valueIcon: CustomerService,
  },
];
