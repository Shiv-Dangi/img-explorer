import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const images = [
  {
    id: "one",
    title: "image title",
    Href: "https://global-uploads.webflow.com/553ae5d16f1f25be1cc44473/574e0bd08b442692574c28be_Robot%20Kits.png"
  },
  {
    id: "two",
    title: "image title",
    Href: "https://global-uploads.webflow.com/553ae5d16f1f25be1cc44473/574e0bd08b442692574c28be_Robot%20Kits.png"
  },
  {
    id: "three",
    title: "image title",
    Href: "https://global-uploads.webflow.com/553ae5d16f1f25be1cc44473/574e0bd08b442692574c28be_Robot%20Kits.png"
  },
  {
    id: "four",
    title: "image title",
    Href: "https://global-uploads.webflow.com/553ae5d16f1f25be1cc44473/574e0bd08b442692574c28be_Robot%20Kits.png"
  },
  {
    id: "five",
    title: "image title",
    Href: "https://global-uploads.webflow.com/553ae5d16f1f25be1cc44473/574e0bd08b442692574c28be_Robot%20Kits.png"
  }
];

class ImageApi {
  static getAllImages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], images));
      }, delay);
    });
  }
}

export default ImageApi;
