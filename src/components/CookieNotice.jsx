import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const KEY = "cs-cookie-notice";

export default function CookieNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true); } catch { setShow(true); }
  }, []);
  if (!show) return null;
  const close = () => { try { localStorage.setItem(KEY, "1"); } catch {} setShow(false); };
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-50 bg-white border border-[#D9E0EA] rounded-2xl shadow-2xl p-5" role="dialog" aria-label="Cookies" data-testid="cookie-notice">
      <p className="text-sm text-[#475569] leading-relaxed mb-4">Ce site n'utilise que les cookies nécessaires à son fonctionnement et ne dépose aucun traceur publicitaire. <Link to="/politique-de-confidentialite" className="text-[#1F2D5A] underline">Politique de confidentialité</Link></p>
      <button onClick={close} className="bg-[#1F2D5A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#040F2F]">J'ai compris</button>
    </div>
  );
}
