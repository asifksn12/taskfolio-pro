import { useEffect, useState } from "react";

function Popup() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4">

      <div className="glass w-full max-w-2xl rounded-[35px] p-10 relative overflow-hidden border border-cyan-500/20">

        {/* Glow Effects */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 text-center">

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Coming Soon
          </p>

          <h1 className="text-5xl font-bold gradient-text leading-tight">

            Hey 👋 <br />

            My Name is ASIF

          </h1>

          <p className="mt-8 text-gray-300 text-xl leading-9">

            From <span className="text-cyan-400 font-semibold">LKO IN</span>.

            <br /><br />

            Its a First Months Trailer 🚀

            <br />

            Full Movie Coming Soon 🎬🔥

          </p>

          <button
            onClick={() => setShowPopup(false)}
            className="mt-10 neon-btn px-8 py-4 rounded-2xl font-semibold"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default Popup;