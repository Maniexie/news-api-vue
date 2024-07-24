const content = new Vue({
  el: "#content",
  data() {
    return {
      articles: [],
      searchQuery: "", // Tambahkan searchQuery ke data
    };
  },
  computed: {
    displayedArticles() {
      // Filter artikel yang memiliki url, urlToImage, dan title
      const filteredArticles = this.articles.filter(
        (art) => art.url && art.urlToImage && art.title && art.description
      );
      // Ambil hingga 10 artikel, tetapi pastikan untuk menampilkan yang sudah difilter
      return filteredArticles.slice(0, 10);
    },
    filteredArticles() {
      // Filter artikel berdasarkan searchQuery
      const query = this.searchQuery.toLowerCase();
      return this.articles.filter(
        (art) =>
          art.title.toLowerCase().includes(query) ||
          art.description.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    truncate(text, length) {
      return text.length > length ? text.substring(0, length) + "..." : text;
    },
    searchArticles() {
      // Metode ini dipanggil ketika formulir pencarian disubmit
      // Pencarian sudah terjadi secara otomatis melalui filteredArticles
    },
    formatDate(dateString) {
      const options = {
        weekday: "short",
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      };
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("id-ID", options).format(date);
    },
  },
  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=64d715d9983f451394da8a9ec223f068"
      )
      .then((response) => (this.articles = response.data.articles))
      .catch((error) => {
        console.log(error);
      });
  },
});
