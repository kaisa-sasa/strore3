<template>
  <div class="contact-page">
    <!-- HERO -->
    <section class="hero">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>

      <div class="hero-content">
        <p class="hero-label">💌 CONTACT US</p>

        <h1>Hubungi Kami</h1>

        <p>Kami siap membantu dan mendengarkan pesan dari kamu ❤️</p>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact-container">
      <!-- LEFT -->
      <div class="contact-info">
        <p class="section-label">GET IN TOUCH</p>

        <h2>Info Kontak</h2>

        <p class="description">
          Jangan ragu untuk menghubungi kami jika kamu memiliki pertanyaan atau
          membutuhkan informasi lebih lanjut.
        </p>

        <div class="info-card">
          <div class="icon">📍</div>

          <div>
            <h3>Alamat</h3>

            <p>Jl. Pendidikan No. 1, Soreang, Kabupaten Bandung</p>
          </div>
        </div>

        <div class="info-card">
          <div class="icon">📞</div>

          <div>
            <h3>Telepon</h3>

            <p>(022) 123-4567</p>
          </div>
        </div>

        <!-- EMAIL -->
        <div class="info-card">
          <div class="icon">✉️</div>

          <div>
            <h3>Email</h3>

            <p>onlineshop@yadika.sch.id</p>
          </div>
        </div>

        <div class="social">
          <p>Follow Us</p>

          <div class="social-icons">
            <a href="#">📷</a>
            <a href="#">💬</a>
            <a href="#">🎵</a>
          </div>
        </div>
      </div>

      <div class="form-card">
        <div class="form-header">
          <div class="form-icon">💌</div>

          <div>
            <h2>Kirim Pesan</h2>

            <p>Isi form di bawah untuk menghubungi kami.</p>
          </div>
        </div>

        <form @submit.prevent="kirimPesan">
          <div class="form-group">
            <label> Nama </label>

            <input
              type="text"
              v-model="nama"
              placeholder="Masukkan nama kamu"
              required
            />
          </div>

          <div class="form-group">
            <label> Email </label>

            <input
              type="email"
              v-model="email"
              placeholder="nama@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label> Pesan </label>

            <textarea
              v-model="pesan"
              placeholder="Tulis pesan kamu..."
              required
            ></textarea>
          </div>

          <button type="submit">
            Kirim Pesan

            <span> ➜ </span>
          </button>

          <div v-if="terkirim" class="success">❤️ Pesan berhasil dikirim!</div>
        </form>
      </div>
    </section>

    <footer>
      <h3>❤️ SMK Yadika Soreang</h3>
      <p>© 2026 SMK Yadika Soreang — Onlineshop</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      nama: "",
      email: "",
      pesan: "",
      terkirim: false,
    };
  },

  methods: {
    kirimPesan() {
      this.terkirim = true;

      this.nama = "";
      this.email = "";
      this.pesan = "";

      setTimeout(() => {
        this.terkirim = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.contact-page {
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  color: #3b2025;
  background: linear-gradient(180deg, #fffafa 0%, #fdf3f4 100%);
}

.navbar {
  width: 100%;
  max-width: 1150px;
  height: 80px;
  margin: auto;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #800020;
  font-size: 16px;
  font-weight: 700;
}

.logo span {
  color: #a58e92;
  font-size: 13px;
  font-weight: 400;
}

.menu {
  display: flex;
  gap: 32px;
}

.menu a {
  color: #806d70;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: 0.3s;
}

.menu a:hover {
  color: #800020;
}

.menu a.active {
  color: #800020;
  position: relative;
}

.menu a.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 2px;
  border-radius: 10px;
  background: #800020;
}

.hero {
  position: relative;
  width: calc(100% - 40px);
  max-width: 1150px;
  height: 270px;
  margin: auto;
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #3b0715, #650f27, #8f233c);
  box-shadow: 0 20px 50px rgba(100, 15, 40, 0.25);
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
}

.circle1 {
  width: 300px;
  height: 300px;
  right: -120px;
  top: -160px;
}

.circle2 {
  width: 220px;
  height: 220px;
  left: -100px;
  bottom: -140px;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-label {
  color: #f8dfe5;
  font-size: 12px;
  letter-spacing: 3px;
  font-weight: 700;
}

.hero h1 {
  margin: 12px 0;
  color: white;
  font-size: 44px;
  font-weight: 800;
}

.hero-content > p:last-child {
  color: #f5dce2;
  font-size: 14px;
}

.contact-container {
  width: 100%;
  max-width: 1050px;
  margin: 70px auto;
  padding: 0 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
}
.section-label {
  color: #8f233c;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.contact-info h2 {
  color: #4b1723;
  font-size: 32px;
  margin: 8px 0 15px;
}

.description {
  color: #8b777b;
  font-size: 13px;
  line-height: 1.8;
  margin-bottom: 28px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  border-radius: 16px;
  padding: 15px;
  margin-bottom: 14px;
  box-shadow: 0 8px 25px rgba(90, 25, 40, 0.08);
  transition: 0.3s;
}

.info-card:hover {
  transform: translateX(7px);
  box-shadow: 0 12px 30px rgba(90, 25, 40, 0.15);
}

.icon {
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8e4e8, #efd0d7);
  font-size: 20px;
}

.info-card h3 {
  color: #54202c;
  font-size: 13px;
  margin-bottom: 5px;
}

.info-card p {
  color: #917d82;
  font-size: 11px;
  line-height: 1.5;
}

.social {
  margin-top: 27px;
}

.social > p {
  color: #77666a;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  gap: 9px;
}

.social-icons a {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f4dfe4;
  text-decoration: none;
  transition: 0.3s;
}

.social-icons a:hover {
  color: white;
  background: #800020;
  transform: translateY(-4px);
}

.form-card {
  background: white;
  padding: 32px;
  border-radius: 25px;
  box-shadow: 0 20px 50px rgba(80, 20, 35, 0.12);
}

.form-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 27px;
}

.form-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #f8e4e8, #edcbd2);
  font-size: 21px;
}

.form-header h2 {
  color: #4b1723;
  font-size: 21px;
}

.form-header p {
  color: #99878a;
  font-size: 11px;
  margin-top: 4px;
}

.form-group {
  margin-bottom: 17px;
}

.form-group label {
  display: block;
  color: #60474e;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 7px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  border: 1px solid #eadcdf;
  background: #fffafa;
  border-radius: 11px;
  padding: 13px;
  outline: none;
  font-family: Arial;
  font-size: 12px;
  transition: 0.3s;
}

.form-group textarea {
  min-height: 115px;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #8f233c;
  background: white;
  box-shadow: 0 0 0 4px rgba(143, 35, 60, 0.1);
}

button {
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 12px;
  background: linear-gradient(135deg, #650f27, #9a2945);
  color: white;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 9px 22px rgba(101, 15, 39, 0.25);
  transition: 0.3s;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(101, 15, 39, 0.32);
}

button span {
  margin-left: 8px;
}

.success {
  margin-top: 15px;
  padding: 11px;
  text-align: center;
  color: #800020;
  background: #f8e4e8;
  border-radius: 10px;
  font-size: 12px;
}

footer {
  margin-top: 30px;
  padding: 28px;
  text-align: center;
  background: #f7e9ec;
  border-top: 1px solid #ead6db;
}

footer h3 {
  color: #800020;
  font-size: 14px;
}

footer p {
  color: #968488;
  font-size: 10px;
  margin-top: 6px;
}

@media (max-width: 700px) {
  .navbar {
    height: auto;

    padding: 20px;
    flex-direction: column;
    gap: 20px;
  }

  .menu {
    gap: 18px;
  }

  .hero {
    height: 220px;
  }

  .hero h1 {
    font-size: 32px;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 45px;
  }
}
</style>
