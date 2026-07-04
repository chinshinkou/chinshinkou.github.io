// Has to be in the head tag, otherwise a flicker effect will occur.

// Toggle between English and Japanese language settings.
let toggleLangSetting = () => {
  let langSetting = determineLangSetting();
  if (langSetting == "en") {
    setLangSetting("ja");
  } else {
    setLangSetting("en");
  }
};

// Change the language setting and apply it to the document.
let setLangSetting = (langSetting) => {
  localStorage.setItem("lang", langSetting);

  document.documentElement.setAttribute("data-lang", langSetting);
  // Keep the native lang attribute in sync for accessibility / SEO.
  document.documentElement.setAttribute("lang", langSetting);
};

// Determine the language setting, which can be "en" or "ja".
// Default is "en".
let determineLangSetting = () => {
  let langSetting = localStorage.getItem("lang");
  if (langSetting != "en" && langSetting != "ja") {
    langSetting = "en";
  }
  return langSetting;
};

let initLang = () => {
  let langSetting = determineLangSetting();

  setLangSetting(langSetting);

  // Add event listener to the language toggle button.
  document.addEventListener("DOMContentLoaded", function () {
    const lang_toggle = document.getElementById("language-toggle");

    lang_toggle.addEventListener("click", function () {
      toggleLangSetting();
    });
  });
};
