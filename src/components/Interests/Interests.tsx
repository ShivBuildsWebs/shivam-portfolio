import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import styles from "./Interests.module.css";

const interests = [
  {
    title: "Motorsports",
    description: "I live for the throttle and the open road. Motorcycling isn’t just a ride—it’s a shot of pure adrenaline, freedom roaring through my veins. Every twist, every turn, every heartbeat echoes adventure.",
    image: "/Biking.jpg"
  },
  {
    title: "Chess",
    description: "I’ve always been fascinated by chess for its deep strategy and mental challenge. Whether playing casually or studying openings, I enjoy how the game sharpens my focus, improves my problem-solving skills, and teaches me to think several steps ahead. Chess inspires me to approach every challenge with patience and creativity.",
    image: "/Chess.jpg"
  },
  {
    title: " Fitness & Health",
    description: "Staying active is an important part of my life. I enjoy fitness and healthy living because it helps me maintain focus, build discipline, and feel my best every day. Whether I’m working out or just going for a walk, I believe in the power of consistent habits.",
    image: "/fitness.jpg"
  }
];

const Interests = () => (
  <section className={styles.interestsSection} id="interests">
    <h2 className={styles.sectionTitle}>My Interests</h2>
    <Swiper
      modules={[EffectCoverflow, Navigation]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true
      }}
      navigation
      className={styles.swiperContainer}
    >
      {interests.map((interest, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <div className={styles.card}>
            <img src={interest.image} alt={interest.title} />
            <div className={styles.cardContent}>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Interests;
