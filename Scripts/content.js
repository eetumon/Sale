let SalePictures = [
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.helsinkitimes.fi%2Fimages%2F2018%2FJul%2Fniinistoe_sauli-summit_expectations.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.helsinkitimes.fi%2Fimages%2F2019%2FDec%2Fniinistoe_sauli-new_years_speech.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Foikeamedia.com%2Fstatic%2Fimg%2Fkuvat%2Fimg47511-47512-630.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffi-seiska-cdn-pro.seiska.fi%2Ffiles%2Fstyles%2Fmedium_teaser%2Fs3%2F2017-08%2Fthumb_saleniinisto.jpg&f=1&nofb=1"
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * SalePictures.length);
    imgs[i].src = SalePictures[randomImg];
}

const headers = document.getElementsByTagName("h2");
for (let i = 0; i < headers.length; i++) {
    headers[i].InnerText = "Sale Niinistö";
}

const regularText = document.getElementsByTagName("d5");
for (let i = 0; i < headers.length; i++) {
    headers[i].InnerText = "Sale Niinistö";
}

