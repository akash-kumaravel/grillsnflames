/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

export default function WhatsAppButton() {
  const launchWhatsAppDirect = () => {
    const formattedText = encodeURIComponent("Hello Grills & Flames, I would like to inquire about a custom outdoor kitchen or fireplace design.");
    window.open(`https://wa.me/97142345678?text=${formattedText}`, '_blank');
  };

  return (
    <div id="whatsapp-integration-widget" className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 font-sans">
      {/* Pulsing Main WhatsApp Button */}
      <button
        id="whatsapp-floating-trigger"
        onClick={launchWhatsAppDirect}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative group focus:outline-none transition-transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Contact us on WhatsApp (+971 4 234 5678)"
        title="Chat on WhatsApp (+971 4 234 5678)"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:hidden" />
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.513 5.35 1.515 5.548 0 10.061-4.512 10.064-10.064.002-2.69-1.045-5.216-2.946-7.119C17.154 1.582 14.636.536 12.01.536c-5.55 0-10.069 4.512-10.073 10.064-.001 2.036.529 4.01 1.535 5.713L2.503 21.64l5.477-1.436z" />
          <path d="M8.823 6.613c-.156-.347-.32-.354-.47-.36l-.398-.008c-.143 0-.376.054-.572.268-.195.214-.748.73-.748 1.779 0 1.05.764 2.062.87 2.206.107.144 1.503 2.296 3.642 3.22.508.22.905.35 1.213.448.51.162.973.139 1.34.084.408-.06 1.24-.507 1.413-.997.172-.49.172-.91.121-.997-.051-.088-.188-.139-.395-.244-.207-.104-1.226-.605-1.415-.673-.189-.068-.328-.104-.465.103-.137.207-.532.673-.652.81-.12.138-.24.156-.448.052-.207-.104-.876-.323-1.668-1.03-.615-.55-1.03-1.228-1.15-1.436-.12-.207-.013-.32.09-.423.094-.093.208-.244.312-.366.103-.122.138-.207.207-.347.069-.138.034-.26-.017-.364-.051-.104-.415-1.002-.57-1.347z" />
        </svg>
      </button>
    </div>
  );
}
