// import { Grid } from "gridjs";
// import "gridjs/dist/theme/mermaid.css";
// console.log(import);

new gridjs.Grid({
  columns: ["Name", "Email", "Title"],
  search: true,
  sort: true,
  pagination: {
    limit: 5
  },
  fixedHeader: true,
  height: '400px',
  data: [
    ["Jonas", "nided42238@raotus.com", "+1 505-346-4886"],
    ["Speed", "lihal43349@raotus.com", "+1 208-920-0638"],
    ["Unohana", "kemabeh399@raotus.com", "+1 505-380-7325"],
    ["Sarah", "woyic60144@raotus.com", "+1 332-823-9262"],
    ["Keratos", "pameca7672@momoshe.com", "+1 219-991-0889"],
    ["Kung Lao", "tipiyo9773@momoshe.com", "+81 70-9070-9418"],
    ["Liu Kang", "waxam96086@momoshe.com", "+81 80-7458-3795"],
    ["Benkai", "rixesy@brand-app.biz", "+90 561 615 20 75"],
    ["Potter", "pozusa@lyft.live", "+90 507 123 24 50"],
    ["Ashfarin", "lodyca@clout.wiki", "+598 91 485 871"],
  ]
}).render(document.getElementById("wrapper"));

// const faker = require('faker');
// import { faker } from '@faker-js/faker';
// console.log(faker);

// const grid = new Grid({
//   columns: [
//       'Name',
//       'Email',
//       'Title',
//    ],
//   sort: true,
//   pagination: true,
//   fixedHeader: true,
//   height: '400px',
//   data: Array(50).fill().map(x => [
//     faker.name.findName(),
//     faker.internet.email(),
//     faker.name.title(),
//   ])
// }).render(document.getElementById("wrapper"));