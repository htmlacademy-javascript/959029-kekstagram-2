const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

const ID_FOTO_COUNT = 25;

const ID_COMMENT_COUNT = 150;

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

let idFoto = Array.from(Array(ID_FOTO_COUNT).keys().map(index => index + 1));

shuffle(idFoto);

let urlFoto = Array.from(Array(ID_FOTO_COUNT).keys().map(index => index + 1));

shuffle(urlFoto);

let idComment = Array.from(Array(ID_COMMENT_COUNT).keys().map(index => index + 1));

shuffle(idComment);

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getId = (idArr) => {return idArr.splice(0,1)[0]};

const createFoto = () => ({
  id: getId(idFoto),
  url: 'photos/' + getId(urlFoto) +'.jpg',
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15,20),
  comments: Array.from({length: getRandomInteger(0,30)}, createComments),
});

const createComments = () => ({
  id: getId(idComment),
  avatar:'img/avatar-' + getRandomInteger(1, 6) + '.svg',
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});


const testFoto = Array.from({length: ID_FOTO_COUNT}, createFoto);
