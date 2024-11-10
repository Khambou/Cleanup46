import { PlaceHolderImg } from "../assets/images";

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
