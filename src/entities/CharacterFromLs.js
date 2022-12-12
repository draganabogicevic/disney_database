export default class Character {
  constructor({ id, name, films, image, url, bookmarked }) {
    this.id = id;
    this.name = name;
    this.films = films;
    this.image = image;
    this.url = url;
    this.bookmarked = bookmarked;
  }
  toggleBookmark() {
    this.bookmarked = !this.bookmarked;
  }
}
