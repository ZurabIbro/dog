document.addEventListener('DOMContentLoaded', () => {
  // количество загружаемых изображений
  const IMAGES_COUNT = 4;

  // ссылка для загрузки изображений
  const IMAGES_URL = `https://dog.ceo/api/breeds/image/random/${IMAGES_COUNT}`;

  // ссылка для загрузки списка пород
  const BREEDS_URL = "https://dog.ceo/api/breeds/list";

  // узел, в котором будет список изображений
  const imagesContainer = document.querySelector('.images');

  // узел, в котором будет список пород
  const breedsContainer = document.querySelector('.breeds');

  // узел кнопки обновления
  const button = document.querySelector('button');

  // сразу загружаем изображения
  fetchAndRenderImages(IMAGES_URL, imagesContainer);

  // загружаем список пород
  fetchBreedsList(BREEDS_URL, breedsContainer);

  // еще раз загружаем изображения, если кликнули на кнопку обновления
  button.addEventListener('click', () => {
    fetchAndRenderImages(IMAGES_URL, imagesContainer);
  });

async function fetchAndRenderImages(url, container){
  container.innerHTML = ''

  const response =  await fetch(url)
  const {message} = await response.json()

  message.forEach(i => {
    const div = document.createElement('div')
    const img = document.createElement('img')

    img.src = i
    div.classList.add('images__item')
    container.append(div)
    div.append(img)
  })
}

async function fetchBreedsList(url, container){
  const response = await fetch(url)
  const {message} = await response.json()

  message.forEach(i => {
    const li = document.createElement('li')
    li.textContent = i
    container.append(li)
  })
}
});
