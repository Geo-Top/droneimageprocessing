import React from 'react';

const FirstSection = ({ introText,introText2, videoUrl, consultationText, consultationLink }) => {
  return (
    <>
      {/* First Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed">{introText}</p>
          </div>
        </div>
      </section>
      
      <section className="pt-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-black">{introText2}</p>
          </div>
        </div>
      </section>

      {/* Course Preview Video */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Call */}
      <section className='bg-white'>
        <div className="container mx-auto px-4 text-center">
          <a
            href={consultationLink}
            className="inline-block bg-indigo-600 text-white px-12 py-4 rounded-full font-bold hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            {consultationText}
          </a>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
