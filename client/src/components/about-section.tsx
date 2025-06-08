import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We believe in recognizing the selfless acts that make our community stronger."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections between heroes and those inspired by their actions."
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Celebrating both grand gestures and small acts of everyday kindness."
  },
  {
    icon: Target,
    title: "Impact",
    description: "Creating lasting change by inspiring others to become heroes themselves."
  }
];


interface AdvisoryMember {
  name: string;
  title: string;
  description: string;
  imageAlt: string;
  imageUrl: string;
}

const members: AdvisoryMember[] = [
  {
    name: 'Rashi Shrivastava',
    title: 'CTO - Qentelli',
    description: 'Leading educational reform initiatives in Hyderabad for over 15 years.',
    imageAlt: 'Rashi Shrivastava',
    imageUrl: 'https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Board+of+Advisory+Sample+-+variation+1.png',
  },
  {
    name: 'Pavani Saripella',
    title: 'Head-Resource Management Group Tech-Mahindra BPS ',
    description: 'Pioneering sustainable technology solutions for urban development.',
    imageAlt: 'Portrait of Pavani Saripella',
    imageUrl: 'https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Board+of+Advisory+Sample+-+variation+2+(2).png',
  },
  {
    name: 'Srinivas Rao',
    title: 'Mahankali (MSR)',
    description: 'Transforming healthcare accessibility in underserved communities.',
    imageAlt: 'Portrait of Srinivas Rao',
    imageUrl: 'https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Board+of+Advisory+Sample+-+variation+2.png',
  },
  // {
  //   name: 'Amit Patel',
  //   title: 'Social Entrepreneur',
  //   description: 'Driving innovation through community-led social ventures.',
  //   imageAlt: 'Portrait of Amit Patel',
  //   imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
  // },
];


export function AwardsSection() {
  return (
    <div id="award-categories" className="scroll-mt-20">
      <section className="relative min-h-screen bg-black text-white py-20 px-6">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: 'translateY(4.19306%)' }}
        >
          <div className="relative h-full w-full">
             <img
              alt="Background showing audience celebrating"
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
              loading="lazy"
              decoding="async"
              className="object-cover opacity-20"
              style={{ color: 'transparent' }}
              sizes="100vw"
            /> 
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold">
            Award Categories
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Heroes of Inspiration Award',
              'Social Impact Heroes',
              'Heroes in Entrepreneurship',
              'Heroes in Tech',
              'Heroes in HR',
              'Sustainability Heroes',
              'Heroic Influencers',
              'Heroes of Academia',
              'Heroes in Philanthropy',
              'Innovative Heroes',
              'Unsung Heroes',
            ].map((title, idx) => (
              <div
                key={idx}
                className="p-6 flex items-center justify-center text-center bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/10 shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export  function EventsSection() {
  return (
    <div id="event-night" className="scroll-mt-20">
  <div className="relative min-h-screen bg-black py-20">
    <div className="absolute inset-0 z-0" style={{ transform: 'translateY(-3.49515%)' }}>
      <div className="relative h-full w-full">
        <img
          alt="Background: event stage and ambiance"
          loading="lazy"
          decoding="async"
          className="object-cover opacity-20"
          sizes="100vw"
          src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: 0,
            color: 'transparent'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-4" style={{ opacity: 1 }}>
      <div className="mb-16 text-center" style={{ opacity: 1, transform: 'none' }}>
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">The Event Night</h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          Join us for an unforgettable evening celebrating Hyderabad’s finest heroes.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg" style={{ opacity: 1, transform: 'none' }}>
          <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
            <img
              alt="Illustration for Grand Ceremony"
              loading="lazy"
              decoding="async"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="100vw"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/GrandCeromony.webp"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: 0,
                color: 'transparent'
              }}
            />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Grand Ceremony</h3>
          <p className="text-gray-300 text-sm leading-relaxed">A prestigious awards ceremony honoring our city's heroes.</p>
        </div>

        {/* Card 2 */}
        <div className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg" style={{ opacity: 1, transform: 'none' }}>
          <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
            <img
              alt="Illustration for Networking"
              loading="lazy"
              decoding="async"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="100vw"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Networking.webp"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: 0,
                color: 'transparent'
              }}
            />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Networking</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Connect with like-minded individuals and community leaders.</p>
        </div>

        {/* Card 3 */}
        <div className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg" style={{ opacity: 1, transform: 'none' }}>
          <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
            <img
              alt="Illustration for Celebration"
              loading="lazy"
              decoding="async"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="100vw"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Celebration.webp"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: 0,
                color: 'transparent'
              }}
            />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Celebration</h3>
          <p className="text-gray-300 text-sm leading-relaxed">An evening of celebration, inspiration, and recognition.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )}


  export function WhyUniqueSection() {
    return (
      <div id="why-unique" className="scroll-mt-20">
  <div className="relative min-h-screen bg-black py-20">
    <div className="absolute inset-0 z-0" style={{ transform: "translateY(0.91772%)" }}>
      <div className="relative h-full w-full">
        <img
          alt="Crowd celebrating event"
          loading="lazy"
          decoding="async"
          className="object-cover opacity-20"
          sizes="100vw"
          srcSet="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 640w,
                   https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 750w,
                   https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 828w,
                   https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 1080w,
                   https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 1200w,
                   https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 1920w,
                   https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 2048w,
                   https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 3840w"
          src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
            color: "transparent"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
    </div>
    <div className="relative z-10 mx-auto max-w-7xl px-4" style={{ opacity: 1 }}>
      <div className="mb-16 text-center" style={{ opacity: 1, transform: "none" }}>
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Why Heroes of Hyderabad is Unique
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          Our initiative stands out for its comprehensive approach to recognizing and celebrating local heroes.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg" style={{ opacity: 1, transform: "none" }}>
          <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
            <img
              alt="Visual representing: Comprehensive Recognition"
              loading="lazy"
              decoding="async"
              className="object-fill transition-transform duration-300 group-hover:scale-110"
              sizes="100vw"
              srcSet="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CompRecog.webp 640w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CompRecog.webp 750w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CompRecog.webp 828w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CompRecog.webp 1080w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CompRecog.webp 1200w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CompRecog.webp 1920w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CompRecog.webp 2048w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CompRecog.webp 3840w"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CompRecog.webp"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
            />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Comprehensive Recognition</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We celebrate heroes across all sectors, ensuring no contribution goes unnoticed.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg" style={{ opacity: 1, transform: "none" }}>
          <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
            <img
              alt="Visual representing: Jury-Driven"
              loading="lazy"
              decoding="async"
              className="object-fill transition-transform duration-300 group-hover:scale-110"
              sizes="100vw"
              srcSet="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp 640w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp 750w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp 828w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp 1080w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp 1200w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp 1920w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp 2048w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp 3840w"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
            />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Jury-Driven</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            India's only jury driven platform.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg" style={{ opacity: 1, transform: "none" }}>
          <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
            <img
              alt="Visual representing: Prestigious Platform"
              loading="lazy"
              decoding="async"
              className="object-fill transition-transform duration-300 group-hover:scale-110"
              sizes="100vw"
              srcSet="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/PrestigiousPlat.webp 640w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/PrestigiousPlat.webp 750w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/PrestigiousPlat.webp 828w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/PrestigiousPlat.webp 1080w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/PrestigiousPlat.webp 1200w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/PrestigiousPlat.webp 1920w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/PrestigiousPlat.webp 2048w,
                       https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/PrestigiousPlat.webp 3840w"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/PrestigiousPlat.webp"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
            />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Prestigious Platform</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            A grand ceremony that gives our heroes the recognition they truly deserve.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    )}

export function WhoNominateSection() {
  return(
    <div id="who-nominate" className="scroll-mt-20">
      <div className="relative min-h-screen bg-black py-20">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: "translateY(0.49689%)" }}
        >
          <div className="relative h-full w-full">
            <img
              alt="Event stage background"
              loading="lazy"
              decoding="async"
              className="object-cover opacity-20"
              sizes="100vw"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>
        </div>

        <div
          className="relative z-10 mx-auto max-w-7xl px-4"
          style={{ opacity: 1 }}
        >
          <div className="mb-16 text-center" style={{ opacity: 1 }}>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Who Can Nominate?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Heroes of Hyderabad celebrates individuals across various sectors
              who have made exceptional contributions to our city.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {/* Category Card */}
            {[
              {
                title: "Community Leaders",
                image: "https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/CommunityLeaders.webp",
                alt: "Category: Community Leaders",
                desc: "Individuals who have made significant contributions to community development and social welfare.",
              },
              {
                title: "Innovators",
                image: "https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Innovators.webp",
                alt: "Category: Innovators",
                desc: "Visionaries who have brought groundbreaking innovations to Hyderabad.",
              },
              {
                title: "Educators",
                image: "https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/educators.webp",
                alt: "Category: Educators",
                desc: "Dedicated teachers and educational leaders shaping the future of our youth.",
              },
              {
                title: "Healthcare Heroes",
                image: "https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Healthheros.webp",
                alt: "Category: Healthcare Heroes",
                desc: "Medical professionals and healthcare workers making a difference in people's lives.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg"
                style={{ opacity: 1 }}
              >
                <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                  <img
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="100vw"
                    src={item.image}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )}

  export function WhyNowSection() {
    return(
      <div id="why-now" className="scroll-mt-20">
      <div className="relative min-h-screen bg-black py-20">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: 'translateY(-3.35443%)' }}
        >
          <div className="relative h-full w-full">
            <img
              alt="Faded silhouettes representing judgment and legacy"
              loading="lazy"
              decoding="async"
              className="object-cover opacity-20"
              sizes="100vw"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back3.webp"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: '0px',
                color: 'transparent',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>
        </div>
        <div
          className="relative z-10 mx-auto max-w-7xl px-4"
          style={{ opacity: 1 }}
        >
          <div className="mb-16 text-center" style={{ opacity: 1 }}>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Why Now?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              The time is ripe to recognize and celebrate the extraordinary
              individuals who are shaping Hyderabad’s future.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                <img
                  alt='Timeline visual for "A New Era"'
                  loading="lazy"
                  decoding="async"
                  className="object-fill transition-transform duration-300 group-hover:scale-110"
                  sizes="100vw"
                  src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/NewERa.webp"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    color: 'transparent',
                  }}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">A New Era</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Hyderabad stands at the cusp of unprecedented growth and
                transformation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                <img
                  alt='Timeline visual for "Rising Momentum"'
                  loading="lazy"
                  decoding="async"
                  className="object-fill transition-transform duration-300 group-hover:scale-110"
                  sizes="100vw"
                  src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/RisingMomentum.webp"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    color: 'transparent',
                  }}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Rising Momentum</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The city witnessed remarkable achievements in technology,
                healthcare, and education.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                <img
                  alt='Timeline visual for "Foundation"'
                  loading="lazy"
                  decoding="async"
                  className="object-fill transition-transform duration-300 group-hover:scale-110"
                  sizes="100vw"
                  src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/Jury-driven.webp"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    color: 'transparent',
                  }}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Foundation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The seeds of innovation and community development were sown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}


    export function AdvisorySection() {
      return (
        <section id="advisory" className="scroll-mt-20">
      <div className="relative min-h-screen bg-black py-20">
        <div className="absolute inset-0 z-0" style={{ transform: 'translateY(0.71927%)' }}>
          <div className="relative h-full w-full">
            <img
              alt="Judges Silhouettes"
              className="object-cover opacity-20"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back3.webp"
              style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Advisory Board</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Our advisory board consists of distinguished experts who guide our initiative.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white/5 p-6 rounded-xl backdrop-blur border border-white/10 hover:shadow-lg transition"
              >
                <div className="relative w-40 h-56 mb-4 rounded-lg overflow-hidden bg-black/20 border border-white/10">
                  <img
                    alt={member.imageAlt}
                    className="object-contain p-2"
                    src={member.imageUrl}
                    style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-yellow-400 text-sm font-semibold mb-2">{member.title}</p>
                {/* <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      )}


export function GuestSection() {
  return (
    <div id="guests" className="scroll-mt-20">
    <div className="relative min-h-screen bg-black py-20">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: "translateY(5.52934%)" }}
      >
        <div className="relative h-full w-full">
          <img
            alt="Event Stage"
            loading="lazy"
            decoding="async"
            className="object-cover opacity-20"
            sizes="100vw"
            srcSet="
              https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp 640w,
              https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp 750w,
              https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp 828w,
              https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp 1080w,
              https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp 1200w,
              https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp 1920w,
              https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp 2048w,
              https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp 3840w
            "
            src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back4.webp"
            style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4" style={{ opacity: 1 }}>
        <div className="mb-16 text-center" style={{ opacity: 1, transform: "none" }}>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Dignitaries</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Join us in welcoming our distinguished guests who will grace the ceremony.
          </p>
        </div>

        <div className="space-y-20">
          {/* Guest 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8" style={{ opacity: 1, transform: "none" }}>
            <div className="relative h-80 w-full lg:w-1/2 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
              <img
                alt="Portrait of Shilpa Reddy"
                loading="lazy"
                decoding="async"
                className="object-fit transition-transform duration-300 hover:scale-105"
                sizes="100vw"
                srcSet="
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/shilpaVIP.webp 640w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/shilpaVIP.webp 750w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/shilpaVIP.webp 828w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/shilpaVIP.webp 1080w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/shilpaVIP.webp 1200w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/shilpaVIP.webp 1920w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/shilpaVIP.webp 2048w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/shilpaVIP.webp 3840w
                "
                src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/shilpaVIP.webp"
                style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Shilpa Reddy</h3>
              <p className="text-yellow-400 font-semibold mb-2">Mrs. India | Fashion Designer</p>
              <p className="text-gray-300 text-base leading-relaxed">
                Renowned social activist and former UN Goodwill Ambassador.
              </p>
            </div>
          </div>

          {/* Guest 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8" style={{ opacity: 1, transform: "none" }}>
            <div className="relative h-80 w-full lg:w-1/2 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
              <img
                alt="Portrait of Aditi Arya Kotak"
                loading="lazy"
                decoding="async"
                className="object-fit transition-transform duration-300 hover:scale-105"
                sizes="100vw"
                srcSet="
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/AditiVIP.webp 640w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/AditiVIP.webp 750w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/AditiVIP.webp 828w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/AditiVIP.webp 1080w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/AditiVIP.webp 1200w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/AditiVIP.webp 1920w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/AditiVIP.webp 2048w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/AditiVIP.webp 3840w
                "
                src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/AditiVIP.webp"
                style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Aditi Arya Kotak</h3>
              <p className="text-yellow-400 font-semibold mb-2">Founder - Alum-n-i</p>
              <p className="text-gray-300 text-base leading-relaxed">Award-winning journalist and documentary filmmaker.</p>
            </div>
          </div>

          {/* Guest 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8" style={{ opacity: 1, transform: "none" }}>
            <div className="relative h-80 w-full lg:w-1/2 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
              <img
                alt="Portrait of Jayesh Ranjan"
                loading="lazy"
                decoding="async"
                className="object-fit transition-transform duration-300 hover:scale-105"
                sizes="100vw"
                srcSet="
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/jayeshVIP.webp 640w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/jayeshVIP.webp 750w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/jayeshVIP.webp 828w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/jayeshVIP.webp 1080w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/jayeshVIP.webp 1200w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/jayeshVIP.webp 1920w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/jayeshVIP.webp 2048w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/jayeshVIP.webp 3840w
                "
                src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/jayeshVIP.webp"
                style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Jayesh Ranjan</h3>
              <p className="text-yellow-400 font-semibold mb-2">DKeynote Speaker</p>
              <p className="text-gray-300 text-base leading-relaxed">
              Leading expert in sustainable urban development.
              </p>
            </div>
          </div>
          

          {/* Guest 4 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8" style={{ opacity: 1, transform: "none" }}>
            <div className="relative h-80 w-full lg:w-1/2 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
              <img
                alt="Portrait of mamatha"
                loading="lazy"
                decoding="async"
                className="object-fit transition-transform duration-300 hover:scale-105"
                sizes="100vw"
                srcSet="
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/mamathaVIP.webp 640w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/mamathaVIP.webp 750w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/mamathaVIP.webp 828w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/mamathaVIP.webp 1080w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/mamathaVIP.webp 1200w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/mamathaVIP.webp 1920w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/mamathaVIP.webp 2048w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/mamathaVIP.webp 3840w
                "
                src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/mamathaVIP.webp"
                style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Mamatha Madireddy</h3>
              <p className="text-yellow-400 font-semibold mb-2">HSBC - GCC</p>
              <p className="text-gray-300 text-base leading-relaxed">Managing Director</p>
            </div>
          </div>

          {/* Guest 5 */}
          <div className="flex flex-col lg:flex-row items-center gap-8" style={{ opacity: 1, transform: "none" }}>
            <div className="relative h-80 w-full lg:w-1/2 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
              <img
                alt="Portrait of Srinivas Rao"
                loading="lazy"
                decoding="async"
                className="object-fit transition-transform duration-300 hover:scale-105"
                sizes="100vw"
                srcSet="
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/SrinivasVIP.webp 640w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/SrinivasVIP.webp 750w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/SrinivasVIP.webp 828w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/SrinivasVIP.webp 1080w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/SrinivasVIP.webp 1200w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/SrinivasVIP.webp 1920w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/SrinivasVIP.webp 2048w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/SrinivasVIP.webp 3840w
                "
                src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/SrinivasVIP.webp"
                style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Srinivas Rao Mahankali</h3>
              <p className="text-yellow-400 font-semibold mb-2">T-Hub</p>
              <p className="text-gray-300 text-base leading-relaxed">
              Chief Executive Officer - T-Hub
              </p>
            </div>
          </div>
          {/* Guest 1 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8" style={{ opacity: 1, transform: "none" }}>
            <div className="relative h-80 w-full lg:w-1/2 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
              <img
                alt="Portrait of Upasana Konidela"
                loading="lazy"
                decoding="async"
                className="object-fit transition-transform duration-300 hover:scale-105"
                sizes="100vw"
                srcSet="
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/UpasanaVIP.webp 640w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/UpasanaVIP.webp 750w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/UpasanaVIP.webp 828w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/UpasanaVIP.webp 1080w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/UpasanaVIP.webp 1200w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/UpasanaVIP.webp 1920w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/UpasanaVIP.webp 2048w,
                  https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/UpasanaVIP.webp 3840w
                "
                src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/UpasanaVIP.webp"
                style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Upasana Konidela</h3>
              <p className="text-yellow-400 font-semibold mb-2">Apollo Group of Hospitals</p>
              <p className="text-gray-300 text-base leading-relaxed">
              Vice Chairperson
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )}

  export function JurySection() {
    return (
      <div id="jury" className="scroll-mt-20">
      <div className="relative min-h-screen bg-black py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: "translateY(-1.2239%)" }}
        >
          <div className="relative h-full w-full">
            <img
              alt="Silhouettes of Judges"
              loading="lazy"
              decoding="async"
              className="object-cover opacity-20"
              sizes="100vw"
              srcSet="
                https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back5.webp 640w,
                https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back5.webp 750w,
                https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back5.webp 828w,
                https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back5.webp 1080w,
                https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back5.webp 1200w,
                https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back5.webp 1920w,
                https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back5.webp 2048w,
                https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back5.webp 3840w
              "
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back5.webp"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4" style={{ opacity: 1 }}>
          <div className="mb-16 text-center" style={{ opacity: 1, transform: "none" }}>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Our Jury</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Meet the distinguished panel of experts who will evaluate and select our heroes.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <article
              className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg"
              aria-label="Jury member Meraj Faheem"
              style={{ opacity: 1, transform: "none" }}
            >
              <header className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
                <img
                  alt="Portrait of Meraj Faheem"
                  loading="lazy"
                  decoding="async"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="100vw"
                  srcSet="
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Meraj.jpeg 640w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Meraj.jpeg 750w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Meraj.jpeg 828w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Meraj.jpeg 1080w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Meraj.jpeg 1200w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Meraj.jpeg 1920w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Meraj.jpeg 2048w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Meraj.jpeg 3840w
                  "
                  src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Meraj.jpeg"
                  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                />
              </header>
              <h3 className="mb-1 text-xl font-bold text-white">Meraj Faheem</h3>
              <p className="mb-2 text-sm font-semibold text-yellow-400">CEO</p>
              <p className="text-gray-300 text-sm leading-relaxed">Telangana Innovation Council</p>
            </article>

            <article
              className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg"
              aria-label="Jury member Debashish Ghosh"
              style={{ opacity: 1, transform: "none" }}
            >
              <header className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
                <img
                  alt="Portrait of Debashish Ghosh"
                  loading="lazy"
                  decoding="async"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="100vw"
                  srcSet="
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Debashish.jpeg 640w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Debashish.jpeg 750w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Debashish.jpeg 828w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Debashish.jpeg 1080w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Debashish.jpeg 1200w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Debashish.jpeg 1920w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Debashish.jpeg 2048w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Debashish.jpeg 3840w
                  "
                  src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Debashish.jpeg"
                  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                />
              </header>
              <h3 className="mb-1 text-xl font-bold text-white">Debashish Ghosh</h3>
              <p className="mb-2 text-sm font-semibold text-yellow-400">HR Expert & Influencer</p>
            </article>
            <article
              className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg"
              aria-label="Jury member Rajesh Dhuddu"
              style={{ opacity: 1, transform: "none" }}
            >
              <header className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
                <img
                  alt="Portrait of Rajesh Dhuddu"
                  loading="lazy"
                  decoding="async"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="100vw"
                  srcSet="
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Rajesh.jpeg 640w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Rajesh.jpeg 750w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Rajesh.jpeg 828w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Rajesh.jpeg 1080w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Rajesh.jpeg 1200w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Rajesh.jpeg 1920w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Rajesh.jpeg 2048w,
                    https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Rajesh.jpeg 3840w
                  "
                  src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/Rajesh.jpeg"
                  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                />
              </header>
              <h3 className="mb-1 text-xl font-bold text-white">Rajesh Dhuddu</h3>
              <p className="mb-2 text-sm font-semibold text-yellow-400">PwC Partner - Emerging Tech | Forbes Blockchain 50 | Most Inspiring Web 3 leader</p>
              <p className="text-gray-300 text-sm leading-relaxed">CXO Innovator of the year</p>
            </article>
          </div>
        </div>
      </div>
    </div>
    )}


export function MemoryRideSection() {
  const rotateRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageUrls = [
    'https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/person1.webp',
    'https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/person2.webp',
    'https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/person3.webp',
    'https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/person4.webp',
    'https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/person5.webp',
    'https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/person6.webp',
  ];

  useEffect(() => {
    let frameId: number;
    const rotate = () => {
      setAngle((prev) => prev + 0.2);
      frameId = requestAnimationFrame(rotate);
    };
    rotate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative z-30 min-h-screen bg-black py-20 overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Memory Ride Background"
          className="object-cover opacity-20 absolute inset-0 w-full h-full"
          src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back2.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="font-lora text-4xl font-bold text-white mb-4">The Memory Ride</h2>
        <p className="font-poppins text-lg text-gray-300 max-w-xl mx-auto">
          Step onto a rotating stage of stories and unforgettable faces.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative h-[500px] w-full flex items-center justify-center perspective-[1200px]">
        <div
          ref={rotateRef}
          className="relative w-[600px] h-[400px] transform-style-preserve-3d"
          style={{
            transform: `rotateY(${angle}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s linear',
          }}
        >
          {imageUrls.map((url, idx) => (
            <div
              key={idx}
              className="absolute top-0 left-0 w-[280px] h-[340px] shadow-lg"
              style={{
                transform: `rotateY(${idx * 60}deg) translateZ(350px)`,
              }}
            >
              <div
                className="w-full h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur cursor-pointer"
                onClick={() => setSelectedImage(url)}
              >
                <img
                  alt={`Carousel ${idx}`}
                  className="w-full h-full object-cover"
                  src={url}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
    <div className="relative">
      <button
        className="absolute top-[-20px] right-[-20px] text-white text-3xl font-bold hover:text-red-400 bg-black rounded-full w-10 h-10 flex items-center justify-center"
        onClick={() => setSelectedImage(null)}
      >
        ×
      </button>
      <img
        src={selectedImage}
        alt="Full View"
        className="w-full max-w-[90vw] md:max-w-[500px] max-h-[80vh] rounded-xl shadow-2xl border border-white/10"
      />
    </div>
  </div>
)}

    </section>
  );
}



export function WhatIsHoH() {
  return (
    <div id="what-is-hoh">
      <div className="relative z-10 min-h-[150vh] bg-black pt-[40vh] pb-20">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: "translateY(0.47761%)" }}
        >
          <div className="relative h-full w-full">
            <img
              alt="Crowd celebrating an event"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover opacity-10 transition-opacity duration-700"
              sizes="100vw"
              srcSet="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 640w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 750w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 828w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 1080w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 1200w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 1920w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 2048w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp 3840w"
              src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/back1.webp"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>
        </div>

        <div
          className="relative z-10 mx-auto max-w-7xl px-4"
          style={{ opacity: 1 }}
        >
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2
                className="mb-6 text-3xl font-bold text-white md:text-4xl"
                style={{ opacity: 1, transform: "none" }}
              >
                What is Heroes of Hyderabad?
              </h2>
              <p
                className="mb-6 text-lg text-gray-300"
                style={{ opacity: 1, transform: "none" }}
              >
                Heroes of Hyderabad is a prestigious initiative that recognizes
                and celebrates the extraordinary individuals who have made
                significant contributions to our city’s growth and development.
                These unsung heroes work tirelessly across various sectors to
                make Hyderabad a better place for everyone.
              </p>
              <p
                className="text-lg text-gray-300"
                style={{ opacity: 1, transform: "none" }}
              >
                Through this platform, we aim to shine a spotlight on their
                remarkable achievements and inspire others to follow in their
                footsteps. Join us in honoring these exceptional individuals
                who embody the true spirit of Hyderabad.
              </p>
            </div>

            <div className="relative h-[400px] md:h-[500px]">
              <div
                className="absolute inset-0"
                style={{ opacity: 1, transform: "none" }}
              >
                <img
                  alt="Trophy symbolizing recognition"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="rounded-lg object-contain"
                  sizes="100vw"
                  srcSet="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/hoh-trophy-in-hand.webp 640w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/hoh-trophy-in-hand.webp 750w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/hoh-trophy-in-hand.webp 828w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/hoh-trophy-in-hand.webp 1080w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/hoh-trophy-in-hand.webp 1200w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/hoh-trophy-in-hand.webp 1920w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/hoh-trophy-in-hand.webp 2048w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/hoh-trophy-in-hand.webp 3840w"
                  src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/hoh-trophy-in-hand.webp"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    color: "transparent",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}


  export function IntroSection() {
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    // Cap scroll value for controlled effect
    const clampedScroll = Math.min(scrollY, 300); // adjust 300 as needed
  
    // Interpolate scale and opacity
    const scale = 1.2 + (clampedScroll / 300) * 0.2; // 0.8 → 1.0
    const opacity = 1 - clampedScroll / 300; // 1 → 0
  
    return (
      <div id="intro" className="relative z-[100]">
        <div className="relative z-[10] h-[100vh]">
          <div
            className="absolute top-0 left-0 z-[150] h-screen w-full overflow-hidden bg-black isolate pointer-events-none"
            style={{ opacity, visibility: "visible" }}
          >
            <div className="absolute inset-0 z-10">
              <img
                alt="Charminar"
                decoding="async"
                className="object-contain transition-transform duration-300"
                sizes="100vw"
                srcSet="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/charminar.webp 640w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/charminar.webp 750w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/charminar.webp 828w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/charminar.webp 1080w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/charminar.webp 1200w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/charminar.webp 1920w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/charminar.webp 2048w, https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/charminar.webp 3840w"
                src="https://hoh-bucket1.s3.eu-north-1.amazonaws.com/assets/charminar.webp"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                  transform: `scale(${scale})`,
                  transition: "transform 0.1s ease-out",
                  transformOrigin: "center center",
                }}
              />
            </div>
  
            <div
              className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white"
              style={{ opacity }}
            >
              <h1 className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Heroes of Hyderabad
              </h1>
              <p className="mb-6 max-w-2xl text-base sm:mb-8 sm:text-lg md:text-xl">
                Celebrating the unsung heroes who make Hyderabad a better place
              </p>
            </div>
  
            {/* <div
              className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
              style={{ opacity }}
            >
              <div className="h-8 w-6 rounded-full border-2 border-white p-1">
                <div
                  className="h-2 w-2 rounded-full bg-white"
                  style={{ transform: "translateY(2.44646px)" }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }