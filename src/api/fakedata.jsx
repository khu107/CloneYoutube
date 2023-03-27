import axios from 'axios';

export default class FakeData {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#serachByKeyword(keyword) : this.#mostPopular();
  }
  async #serachByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
