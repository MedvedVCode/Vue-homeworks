Vue.component('blog', {
  props: ['article'],
  template: `
		<li class="blog-short" @click="selectedArticle(article)">
			<p>{{article.title}}</p>
			<p>{{article.shortText}}</p>
		</li>
	`,
  methods: {
    selectedArticle(article) {
      console.log('blog', ' нажата');
      this.$emit('selectedArticle', article);
    },
  },
});

Vue.component('blog-list', {
  props: ['articles'],
  template: `
	<ol>
		<blog v-for="article in articles" :key="article.id" :article="article" @selectedArticle="selectedArticle">
		</blog>
	</ol>
	`,
  methods: {
    selectedArticle(article) {
      this.$emit('selected-article', article);
    },
  },
});

Vue.component('blog-details', {
  props: ['article'],
  template: `
	<div class="blog-details">
		<h2 class="blog-details-title">{{article.title}}</h2>
		<img :src="article.url" alt="interior photo">
		<p >{{article.fullText}}</p>
		<p>{{article.date}}</p>
		<ul class="blog-details-tags">
			<li v-for="(tag, index) in article.tags" :key="index" class="blog-details-tags__item">		
				{{tag}}
			</li>
		</ul>
	</div>
	`,
});

const app = new Vue({
  el: '#blog-page',
  data: {
    tags: [
      { id: 1, name: 'kitchen', checked: false },
      { id: 2, name: 'bedroom', checked: false },
      { id: 3, name: 'building', checked: false },
      { id: 4, name: 'architecture', checked: false },
      { id: 5, name: 'kitchen planning', checked: false },
      { id: 6, name: 'bathroom', checked: false },
    ],
    currentTag: '',
    articles: [
      {
        id: 1,
        title: 'article 01',
        url: '/img/blog-item-img-01.png',
        shortText: 'interior article 01',
        fullText:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident repellat minus voluptas voluptatum eum. Architecto facilis beatae molestias quam dolor fuga blanditiis. Quod, blanditiis ad. Placeat sequi tempore ex laboriosam.',
        date: '22 December, 2021 ',
        tags: ['kitchen', 'building', 'architecture', 'bathroom'],
      },
      {
        id: 2,
        title: 'article 02',
        url: '/img/blog-item-img-02.png',
        shortText: 'interior article 02',
        fullText:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste. Ex labore omnis tempore consequuntur mollitia praesentium saepe aperiam atque! Doloribus reprehenderit explicabo iure accusantium. Pariatur vitae suscipit repudiandae neque.',
        date: '25 October, 2022 ',
        tags: ['building', 'architecture'],
      },
      {
        id: 3,
        title: 'article 03',
        url: '/img/blog-item-img-03.png',
        shortText: 'interior article 03',
        fullText:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, blanditiis nesciunt. Odit quas in odio velit culpa quod nisi tempora fugit, nobis debitis impedit facere exercitationem quaerat tempore dolorum laborum!',
        date: '26 May, 2023 ',
        tags: ['bedroom', 'architecture', 'kitchen planning'],
      },
      {
        id: 4,
        title: 'article 04',
        url: '/img/blog-item-img-04.png',
        shortText: 'interior article 04',
        fullText:
          'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Парадигматическая продолжил lorem эта безорфографичный рекламных, себя возвращайся бросил одна пояс ipsum ручеек не всеми, лучше агентство свой первую страна.',
        date: '4 June, 2023 ',
        tags: ['kitchen', 'architecture', 'kitchen planning'],
      },
      {
        id: 5,
        title: 'article 05',
        url: '/img/blog-item-img-05.png',
        shortText: 'interior article 05',
        fullText:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo autem deleniti perspiciatis, aspernatur iusto quos facere laudantium? Quas, repudiandae.',
        date: '14 September, 2020 ',
        tags: ['bedroom', 'architecture', 'bathroom'],
      },
      {
        id: 6,
        title: 'article 06',
        url: '/img/blog-item-img-06.png',
        shortText: 'interior article 06',
        fullText:
          'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Продолжил однажды собрал живет города, взгляд ему диких составитель буквенных!',
        date: '13 December, 2020 ',
        tags: ['kitchen', 'bedroom'],
      },
    ],
    currentArticle: '',
  },
  methods: {
    setCurrentTag(selectedTag) {
      if (this.currentTag) {
        this.tags[this.currentTag.id - 1].checked = false;
      }
      this.currentTag = selectedTag;
      this.tags[selectedTag.id - 1].checked = true;
    },
    setCurrentArticle(article) {
      this.currentArticle = article;
    },
  },
  computed: {
    filterArticles() {
      if (!this.currentTag) {
        return this.articles;
      }
			const resultArticle = this.articles.filter((item) =>
			item.tags.includes(this.currentTag.name));
			this.currentArticle = resultArticle[0];
      return resultArticle;
    },
    sendArticleToBlogDetails() {
      return !this.currentArticle
        ? this.filterArticles[0]
        : this.currentArticle;
    },
  },
});
