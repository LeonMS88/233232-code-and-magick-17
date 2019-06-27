'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
setupOpen.querySelector('img').setAttribute('tabindex', 0);

var setupClose = setup.querySelector('.setup-close');
setupClose.setAttribute('tabindex', 0);

var setupUserName = setup.querySelector('.setup-user-name');
setupUserName.setAttribute('minlength', 2);
setupUserName.setAttribute('maxlength', 25);

var setupSubmit = document.querySelector('.setup-submit');
var setupForm = document.querySelector('.setup-wizard-form');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupSubmit.addEventListener('click', function () {
  setupForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');
  }
});

setupUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Массивы параметров
var nameWizards = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameWizards = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Находим случайное имя и фамилию
var nameWizard = function () {
  var name = Math.floor(Math.random() * nameWizards.length);
  var surname = Math.floor(Math.random() * surnameWizards.length);
  var nameSurename = nameWizards[name] + ' ' + surnameWizards[surname];

  return nameSurename;
};

// Находим случайный цвет
var getRandomColor = function (array) {
  var color = Math.floor(Math.random() * array.length);

  return array[color];
};

var setupWizard = document.querySelector('.setup-wizard');
var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');

var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

setupWizardCoat.addEventListener('mouseover', function () {
  setupWizardCoat.addEventListener('click', function () {
    var wizardCoat = setupWizardCoat.style.fill = getRandomColor(coatColor);
    setupWizardAppearance.querySelector('input[name="coat-color"]').value = wizardCoat;
  });
});

setupWizardEyes.addEventListener('mouseover', function () {
  setupWizardEyes.addEventListener('click', function () {
    var wizardEyes = setupWizardEyes.style.fill = getRandomColor(eyesColor);
    setupWizardAppearance.querySelector('input[name="eyes-color"]').value = wizardEyes;
  });
});

setupWizardFireball.addEventListener('mouseover', function () {
  setupWizardFireball.addEventListener('click', function () {
    var fireball = setupWizardFireball.style.background = getRandomColor(fireballColor);
    setupWizardFireball.querySelector('input').value = fireball;
  });
});

var wizards = [];

for (var i = 0; i < 4; i++) {
  var renderDataWizard = function (name, coatColor, eyesColor) {
    var data = {
      name: nameWizard(),
      coatColor: getRandomColor(coatColor),
      eyesColor: getRandomColor(eyesColor)
    };
    return data;
  };
  wizards.push(renderDataWizard(name, coatColor, eyesColor));
}


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getFragment = function (fragment) {
  fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  setup.querySelector('.setup-similar').classList.remove('hidden');

  return fragment;
};

getFragment();
