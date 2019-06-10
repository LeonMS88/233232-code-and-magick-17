'use strict';

// Показываем окно
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Массивы параметров
var nameWizards = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameWizards = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// Находим случайное имя и фамилию
var nameWizard = function () {
  var name = Math.floor(Math.random() * nameWizards.length);
  var surname = Math.floor(Math.random() * surnameWizards.length);
  var nameSurename = nameWizards[name] + ' ' + surnameWizards[surname];

  return nameSurename;
};

// Находим случайный цвет мантии
var coatColorWizard = function () {
  var color = Math.floor(Math.random() * coatColor.length);
  return coatColor[color];
};

// Находим случайный цвет глаз
var eyesColorWizard = function () {
  var color = Math.floor(Math.random() * eyesColor.length);
  return eyesColor[color];
};

var wizards = [
  {
    name: nameWizard(),
    coatColor: coatColorWizard(),
    eyesColor: eyesColorWizard()
  },
  {
    name: nameWizard(),
    coatColor: coatColorWizard(),
    eyesColor: eyesColorWizard()
  },
  {
    name: nameWizard(),
    coatColor: coatColorWizard(),
    eyesColor: eyesColorWizard()
  },
  {
    name: nameWizard(),
    coatColor: coatColorWizard(),
    eyesColor: eyesColorWizard()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
