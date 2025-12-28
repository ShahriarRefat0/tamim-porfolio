import React from 'react';

const SoftwareCard = () => {
  return (
    <div className="relative group cursor-pointer mb-8">
      <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-lg mx-auto transform transition duration-500 hover:scale-[1.02]">
        <img
          alt="Real Estate Software"
          className="w-full h-auto object-cover opacity-90 transition duration-500 transform group-hover:scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq-_TavUBqHPq4WnOEwea-4qezirh1CmkuQb3pt89l61uCdhlT6zhd1MEaJ24SDwV9WNHBXR8KEDHgCL1QRKTEMEB9BxqXvOHop24nTaqu-JWPGidui6zxiUq8JeeKUc7oLPzMXgFTZFOpEUsXhtC-Tu-CG4n_6AqywukW3IX-Vu2Fc8uWQxYfu-lHEoAMePMpBItJO0_IZtVwXah2rOVC16f58X6sz9fHt4YYvKvVQEekIDMAtSwlU7vsuJReanfJ3QgkofPDE7rS"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-left">
          <span className="text-white text-xs font-bold tracking-wider uppercase mb-1 opacity-80">David Choi's</span>
          <h3 className="text-white font-display font-extrabold text-3xl leading-none uppercase">
            Real Estate<br />Software
          </h3>
        </div>
        <img
          alt="David Laughing"
          className="absolute bottom-0 right-0 w-1/3 h-auto object-cover object-top mask-image-gradient"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFcka96wcewwl3AYJozwMiCrDxhSRePksu227CIZxfWXX3RfXfhh_xVhuF8pKx6ZkuT98mS2s2-AUNVuBHj1VRmJGbUTIFNVzvhjs1g6dthmp7Vpn57zM_moEDZpQJSTiANKE07ZX-6-0EXAiSiOkk0tujUa4nkeYUxHQxjatIynPAtOkxDAY-3SJB1vgWPWG-gjNLqec32xRJ5VKIGpt93a7E_qClE8EiEFplADbg1hCkSLCkH1maawuTga084xh7B5mkEw4gxgdr"
        />
      </div>
    </div>
  );
};

export default SoftwareCard;
