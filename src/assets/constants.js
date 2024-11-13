import { PlaceHolderImg } from "../assets/images";
import { Call, Instagram, Location, Sms, Whatsapp } from "../assets/icons";

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
    bgColor: "bg-green-color",
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
    icon: Location,
    title: "861 route de la seoune 46140 Sauzet",
  },
  {
    icon: Call,
    title: "05 65 24 56 45 / 06 51 78 13 79",
  },
  {
    icon: Sms,
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
        name: "Acceuil",
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
    icon: Instagram,
    link: "https://www.instagram.com",
  },
  {
    icon: Whatsapp,
    link: "/",
  },
];

export const contactItems = [
  {
    text: "cleaningup46@gmail.com",
    icon: Sms,
  },
  {
    text: "05 65 24 56 45",
    icon: Call,
  },
];

// inputStyle: "input-submit input-submit-btn",
