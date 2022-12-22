export default class Character {
  constructor({ _id, name, films, imageUrl, url }) {
    this.id = _id;
    this.name = name;
    this.films = films;
    this.image = imageUrl;
    this.url = url;
  }

  get characterObject() {
    return {
      id: this.id,
      name: this.name,
      films: this.films,
      image: this.image,
      url: this.url,
      bookmarked: this.bookmarked,
    };
  }
}
