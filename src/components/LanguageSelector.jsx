import { useState } from "react";

function LanguageSelector() {
  const [lang, setLang] = useState("en");

  const handleChange = (e) => {
    setLang(e.target.value);
    window.location.href = `/${e.target.value}`; // or implement i18n change
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="border rounded px-2 py-1 text-sm"
    >
      <option value="en">English</option>
      <option value="pl">Polski</option>
      <option value="ps">Pashtu</option>
      <option value="fa">Dari</option>
    </select>
  );
}

export default LanguageSelector;
