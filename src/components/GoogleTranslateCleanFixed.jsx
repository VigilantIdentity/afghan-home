import { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "pl", label: "Polski" },
  { code: "ps", label: "Pashtu" },
  { code: "fa", label: "Dari" },
];

export default function GoogleTranslateCleanFixed() {
  const [lang, setLang] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: languages.map((l) => l.code).join(","),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element_hidden"
      );

      // Apply saved language
      const savedLang = localStorage.getItem("selectedLanguage");
      if (savedLang && savedLang !== "en") {
        const frame = document.querySelector(
          "#google_translate_element_hidden select"
        );
        if (frame) {
          frame.value = savedLang;
          frame.dispatchEvent(new Event("change"));
        }
      }
    };
  }, []);

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    localStorage.setItem("selectedLanguage", selectedLang);

    const frame = document.querySelector(
      "#google_translate_element_hidden select"
    );
    if (frame) {
      frame.value = selectedLang;
      frame.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="ml-4 flex items-center">
      {/* Hidden container for Google Translate widget */}
      <div
        id="google_translate_element_hidden"
        style={{ display: "none" }}
      ></div>

      {/* Custom dropdown */}
      <select
        value={lang}
        onChange={handleChange}
        className="appearance-none border-none bg-transparent text-gray-800 text-sm cursor-pointer"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
