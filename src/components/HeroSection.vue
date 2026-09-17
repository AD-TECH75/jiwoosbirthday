<template>
  <section class="hero" id="home">
    <div class="floating flower1" aria-hidden="true">🌷</div>
    <div class="floating flower2" aria-hidden="true">🌸</div>
    <div class="floating star1" aria-hidden="true">✦</div>
    <div class="floating star2" aria-hidden="true">✧</div>

    <div class="hero-content">
      <p class="small-title" data-aos="fade-down">a little celebration for</p>

      <h1 data-aos="zoom-in">Jiwoo<span>♡</span></h1>

      <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
        Today isn't just another day. Today is the day someone wonderfully
        special came into this world.
      </p>

      <a href="#message" class="scroll-btn" data-aos="fade-up" data-aos-delay="500">
        scroll to your surprise ↓
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 40px 20px;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 126, 182, 0.25), transparent 30%),
    radial-gradient(circle at 80% 30%, rgba(155, 140, 255, 0.25), transparent 30%),
    linear-gradient(135deg, #fff8fb, #f8f6ff);
}

.hero::before {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  filter: blur(20px);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 850px;
}

.small-title {
  color: var(--pink);
  font-size: 14px;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 600;
}

.hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(65px, 12vw, 145px);
  line-height: 0.85;
  font-weight: 600;
  color: var(--text);
}

.hero h1 span {
  color: var(--pink);
  font-style: italic;
}

.hero-subtitle {
  margin: 30px auto 0;
  max-width: 580px;
  font-size: 16px;
  line-height: 1.9;
  color: var(--muted);
}

.scroll-btn {
  display: inline-flex;
  margin-top: 35px;
  text-decoration: none;
  padding: 13px 25px;
  border-radius: 50px;
  background: var(--text);
  color: white;
  font-size: 13px;
  transition: 0.3s ease;
}

.scroll-btn:hover {
  background: var(--pink);
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(255, 126, 182, 0.3);
}

.floating {
  position: absolute;
  pointer-events: none;
  user-select: none;
  opacity: 0.65;
  animation: float 6s ease-in-out infinite;
}

.flower1 {
  left: 7%;
  top: 15%;
  font-size: 45px;
}

.flower2 {
  right: 8%;
  bottom: 17%;
  font-size: 50px;
  animation-delay: 1.5s;
}

.star1 {
  left: 15%;
  bottom: 20%;
  font-size: 25px;
  animation-delay: 0.5s;
}

.star2 {
  right: 16%;
  top: 17%;
  font-size: 30px;
  animation-delay: 2s;
}

@media (max-width: 700px) {
  .hero h1 {
    font-size: 70px;
  }

  .hero-subtitle {
    font-size: 13px;
  }

  .flower1 {
    left: 2%;
  }

  .flower2 {
    right: 2%;
  }
}
</style>
