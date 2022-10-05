"use: strict";

const personality = document.querySelector(".personality");
const abilities = document.querySelector(".abilities");
const fightingStyle = document.querySelector(".fighting-style");
const overlay = document.querySelector(".overlay");
const closeBox1 = document.querySelector(".close-icon-1");
const closeBox2 = document.querySelector(".close-icon-2");
const closeBox3 = document.querySelector(".close-icon-3");

const personalityClick = document.querySelector(".personality-click");
const abilitiesClick = document.querySelector(".abilities-click");
const fightingStyleClick = document.querySelector(".fighting-style-click");

const openPersonality = function () {
  personality.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePersonality = function () {
  personality.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openAbilities = function () {
  abilities.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeAbilities = function () {
  abilities.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openFightingStyle = function () {
  fightingStyle.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeFightingStyle = function () {
  fightingStyle.classList.add("hidden");
  overlay.classList.add("hidden");
};

personalityClick.addEventListener("click", openPersonality);
abilitiesClick.addEventListener("click", openAbilities);
fightingStyleClick.addEventListener("click", openFightingStyle);

closeBox1.addEventListener("click", closePersonality);
closeBox2.addEventListener("click", closeAbilities);
closeBox3.addEventListener("click", closeFightingStyle);
