// components/GoogleTranslateSelect.jsx
import { useState, useEffect } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "pl", label: "Polski" },
  { code: "ps", label: "Pashtu" },
  { code: "fa", label: "Dari" },
];

export default function GoogleTranslateSelect() {
  // Load initial language from localStorage or default to "en"
  const [lang, setLang] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);

    // Store selection in localStorage
    localStorage.setItem("selectedLanguage", selectedLang);

    const currentUrl = window.location.href;

    // Avoid redirect on localhost
    if (!currentUrl.includes("localhost")) {
      const googleUrl = `https://translate.google.com/translate?hl=${selectedLang}&sl=auto&tl=${selectedLang}&u=${encodeURIComponent(
        currentUrl
      )}`;
      window.location.href = googleUrl;
    } else {
      alert("Google Translate works only on deployed websites.");
    }
  };

  // Optional: On mount, persist language selection without redirect
  useEffect(() => {
    localStorage.setItem("selectedLanguage", lang);
  }, [lang]);

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="ml-4 text-sm bg-transparent cursor-pointer"
      style={{
        border: "none",
        outline: "none",
        padding: 0,
        margin: 0,
        fontFamily: "inherit",
        fontSize: "inherit",
        color: "inherit",
        appearance: "menulist", // native dropdown with arrow
        WebkitAppearance: "menulist",
        MozAppearance: "menulist",
      }}
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
