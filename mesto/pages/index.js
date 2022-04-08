const popup = document.querySelector('.pop-up');
const edit = document.querySelector('.profile__edit');
const closes = document.querySelector('.pop-up__close');

const formElement = document.querySelector('#form__autor-info');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#about');

const profileTitle = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const infoSave = document.querySelector('.form__save');

/*form*/
edit.addEventListener('click', oppenFormEdit);

closes.addEventListener('click', closeFormEdit);

function copyText() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileAbout.textContent;
}

function focusText() {
  nameInput.addEventListener('focusin', function () {
    nameInput.value = "";
  });
  jobInput.addEventListener('focusin', function () {
    jobInput.value = "";
  });
}

function oppenFormEdit() {
  popup.classList.add('pop-up_opened');
  copyText();
  focusText();
}

function closeFormEdit() {
  popup.classList.remove('pop-up_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

/************/
/*card*/
const popapGalery = document.querySelector('#galery-popup'); //-форма
const openButtonCardForm = document.querySelector('#add'); // кнопка открытия формы
const closeButtonCardForm = document.querySelector('.popup__close-mesto');// кнопка закрытия формы

const galery = document.querySelector('.galery');// секция для добавления в нее карточек

const card = document.querySelector('.card'); // карточка
const cardImage = document.querySelector('.card__image');// картинка
const cardName = document.querySelector('.card__name');// название карточки
const cardLike = document.querySelector('.card__like');// лайк
const cardDelete = document.querySelector('.card__delete');// кнопка удаления карточки

const saveCardButton = document.querySelector('#mesto-save');// кнопка сохранения карточки


const inputNameMesto = document.querySelector('#name-mesto');// инпут
const inputLinkMesto = document.querySelector('#link-mesto');// инпут

const bigGaleryImage = document.querySelector('#galery-image'); // большая карточка
const bigCardTitle = document.querySelector('.pop-up__form-title_galery-title');
const bigGaleryClose = document.querySelector('.pop-up__close_galery');// кнопка закрытия формы

// массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// добавление карточек из массива
function addCard() {
  initialCards.forEach(creatMesto);
};

// обработчик 
function Obr(el) {
  el.querySelector('#add').addEventListener('click', openFormCard);
  el.querySelector('.popup__close-mesto').addEventListener('click', closeFormCard);
  el.querySelector('#galery-popup').addEventListener('submit', creatMesto);
  el.querySelector('.card__delete').addEventListener('click', deletCard);
  el.querySelector('.card__like').ddEventListener('click', activLike);
  el.querySelector('.card__image').querySelector('click', bigCard);
};

//форма добавления
function openFormCard() {
  popapGalery.classList.add('pop-up_opened');
};

// закрыть форму
function closeFormCard() {
  popapGalery.classList.remove('pop-up_opened');
};

//функция создания карточки
function creatMesto(evt) {
  evt.preventDefault();
  let cardTemplate = document.querySelector('.template-card').content;
  let cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = inputLinkMesto.value;
  cardElement.querySelector('.card__name').textContent = inputNameMesto.value;
  galery.prepend(cardElement);
  closeFormCard();
};

// удалениe
function deletCard(event) {
  console.log(event.target);
  event.target.closest('.card').remove();
};
// лайк
function activLike(event) {
  event.target.classList.add('.card__like_activ');
};

function bigCard(event) {
  event.target.closes('.#galery-image').classList.add('.pop-up_opened');
};
addCard();