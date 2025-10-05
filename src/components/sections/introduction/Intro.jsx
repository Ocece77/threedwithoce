import React from "react";

const Intro = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-white">
      {/* Introduction */}
      <div className="w-full h-full grid grid-cols-2 items-center justify-center px-20">
        
        {/* Texte */}
        <div className="space-y-6 pr-10">
          <h2 className="text-6xl font-extrabold text-gray-800">
            Merci <span className="text-pompadour">Becomtech</span> &{" "}
            <span className="text-pompadour">Chanel</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Grâce à leur don d’un PC, j’ai pu plonger à fond dans la{" "}
            <strong>3D</strong> et le <strong>développement web</strong> — deux
            domaines qui me passionnent. Mon ancien ordi ne suivait plus du
            tout, et sans ce nouveau setup, je n’aurais probablement jamais pu
            développer cette passion.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Depuis, j’ai pu créer mes premiers projets en 3D, tester des
            prototypes interactifs ( tinkercad ), et apprendre à fond les outils que j’aime.
            C’est un vrai game changer pour moi ce !
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Aujourd’hui, en <strong>prépa ATS</strong>, je m’oriente vers la{" "}
            <strong>robotique</strong>, les <strong>systèmes embarqués</strong>{" "}
            et le <strong>machine learning</strong>. Ce opportunité m’a clairement ouvert
            la voie pour aller encore plus loin.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Un énorme merci à <strong>Becomtech</strong> et{" "}
            <strong>Chanel</strong> pour leur soutien. Grâce à eux, je peux
            enfin donner vie à mes idées 
          </p>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src="/images/pc-setup.jpg"
            alt="Mon setup 3D"
            className="rounded-3xl shadow-2xl w-4/5 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
