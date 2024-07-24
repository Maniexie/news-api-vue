// import axios from "axios";

// var app = new Vue({
//   el: "#app",
//   data: {
//     message: "ini message dari vue",
//   },
// });

// var searchNews = new Vue({
//   el: "#searchNews",
//   data: {
//     message: "Search",
//   },
// });

// const BASE_URL =
//   "https://newsapi.org/v2/top-headlines?country=id&apiKey=64d715d9983f451394da8a9ec223f068";
// // axios
// //   .get(BASE_URL)
// //   .then((response) => console.log(response.data.articles))
// //   .catch((err) => console.log(err));

// var news1 = new Vue({
//   el: "#news1",
//   data: {
//     articles: "",
//   },
//   created: function () {
//     this.selectArticle();
//   },
//   methods: {
//     selectArticle: function () {
//       axios
//         .get(BASE_URL)
//         .then((response) => {
//           this.articles = response.data.articles;
//         })
//         .catch((err) => console.log(err));
//     },
//   },
// });

new Vue({
  el: "#app",
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=64d715d9983f451394da8a9ec223f068"
      )
      .then((response) => {
        this.articles = response.data.articles;
      })
      .catch((err) => console.log(err));
  },
});
