document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");

    hamburger.addEventListener("click", function () {
      navigation.classList.toggle("open"); // Activează/dezactivează meniul
    });
  });
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        includedLanguages: 'ro,en,pt,es,uk',
        autoDisplay: false,
    }, 'google_translate_element');
}
    function changeLanguage(language) {
    if (language) {
        var selectField = document.querySelector(".goog-te-combo");
        if (selectField) {
            selectField.value = language;
            selectField.dispatchEvent(new Event('change'));
        }
    }
}