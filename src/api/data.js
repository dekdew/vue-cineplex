var c01 = require("../assets/carousel/c01.jpg");
var c02 = require("../assets/carousel/c02.jpg");
var c03 = require("../assets/carousel/c03.jpg");
var c04 = require("../assets/carousel/c04.jpg");
var c05 = require("../assets/carousel/c05.jpg");

// หมวดหมู่ภาพยนตร์
categories = [{
    id: 1,
    name: "Action"
  },
  {
    id: 2,
    name: "Adventure"
  },
  {
    id: 3,
    name: "Animation"
  },
  {
    id: 4,
    name: "Biography"
  },
  {
    id: 5,
    name: "Crime"
  },
  {
    id: 6,
    name: "Comedy"
  },
  {
    id: 7,
    name: "Drama"
  },
  {
    id: 8,
    name: "History"
  },
  {
    id: 9,
    name: "Horror"
  },
  {
    id: 10,
    name: "Mystery"
  },
  {
    id: 11,
    name: "Sci-Fi"
  },
  {
    id: 12,
    name: "Romance"
  },
];

// ภาพยนตร์
movies = [{
    id: 1,
    name: {
      en: "Captain Marvel",
      th: "กัปตันมาร์เวล"
    },
    poster: "https://image.tmdb.org/t/p/original/vW2dy7UyZqqpEP3bHageT9bei0o.jpg",
    director: "แอนนา โบเดน, ไรอัน เฟล็ก",
    actors: "บรี ลาร์สัน, ซามูเอล แอล. แจ็กสัน, ลี เพซ, จู๊ด ลอว์",
    categories: [1, 2, 11],
  },
  {
    id: 2,
    name: {
      en: "Happy Death Day 2U ",
      th: "สุขสันต์วันตาย 2U"
    },
    poster: "https://image.tmdb.org/t/p/original/whtt9F8PFqvEgc4fDSHZPkitFk4.jpg",
    director: "Christopher Landon",
    actors: "Israel Broussard, Ruby Modine, Jessica Rothe",
    categories: [11, 9],
  },
  {
    id: 3,
    name: {
      en: "Alita Battle Angel",
      th: "อลิตา แบทเทิล แองเจิ้ล"
    },
    poster: "https://image.tmdb.org/t/p/original/8ConJ03HoRTwHpdvtwqnMd2uffC.jpg",
    director: "โรเบิร์ต รอดริเกซ",
    actors: "โรซา ซาลาซาร์, อีซา กอนซาเลซ, เจนนิเฟอร์ คอนเนลลี",
    categories: [1, 2, 12],
  },
  {
    id: 4,
    name: {
      en: "The Lego Movie 2",
      th: "เดอะ เลโก้ มูฟวี่ 2"
    },
    poster: "https://image.tmdb.org/t/p/original/QTESAsBVZwjtGJNDP7utiGV37z.jpg",
    director: "Trisha Gum, Mike Mitchell",
    actors: "Elizabeth Banks, Chris Pratt, Channing Tatum",
    categories: [3, 6],
  },
  {
    id: 5,
    name: {
      en: "How to Train 3",
      th: "อภินิหารไวกิ้งพิชิตมังกร 3"
    },
    poster: "https://image.tmdb.org/t/p/original/ij0xoc13hGhrYIlXGGuPXWTh3vi.jpg",
    director: "ดีน เดอบลัวส์",
    actors: "เคต แบลนเชตต์, ที.เจ. มิลเลอร์, เจอราร์ด บัตเลอร์",
    categories: [2, 3],
  },
  {
    id: 6,
    name: {
      en: "Escape Room",
      th: "กักห้อง เกมโหด"
    },
    poster: "https://image.tmdb.org/t/p/original/7Q67pzvBD5zUuzE63bJnGaSs5xi.jpg",
    director: "อดัม โรบิเทล",
    actors: "เทย์เลอร์ รัสเซลล์, เดบาร่าห์ แอน โวลล์, โลแกน มิลเลอร์",
    categories: [9, 10],
  }
]

slides = [{
    id: 1,
    title: 'Captain Marvel',
    genre: 'Action',
    time: '130 Mins',
    releaseDate: '06 March 2019',
    url: c01
  },
  {
    id: 2,
    title: 'Alita Battle Angel',
    genre: 'Adventure',
    time: '125 Mins',
    releaseDate: '13 February 2019',
    url: c02
  },
  {
    id: 3,
    title: 'How To Train Your Dragons : The Hidden World',
    genre: 'Animation',
    time: '105 Mins',
    releaseDate: '31 January 2019',
    url: c03
  },
  {
    id: 4,
    title: 'Escape Room',
    genre: 'Horror',
    time: '100 Mins',
    releaseDate: '31 January 2019',
    url: c04
  },
  {
    id: 5,
    title: 'Bohemian Rhapsody',
    genre: 'Biography',
    time: '135 Mins',
    releaseDate: '01 November 2018',
    url: c05
  }
];
