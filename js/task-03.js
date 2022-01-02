const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


for (const image of images) {
  const list = document.querySelector(".gallery");
  console.log(list);
  const lastItem = document.createElement("li");
  console.log(lastItem);
  lastItem.textContent = "Hallo";
  lastItem.append(images)
  list.append(lastItem);
  const gop = document.createElement("img");
  //list.after(img);
  // const list = document.querySelector("li");
  //const lastItem = list.createElement("img");
  // img.src = image.url;
  // img.alt = image.alt;
  //img = image.url;
  //img = image.alt;
  //console.log(image);
  //list.after(image);
  //list.append(img);
}
