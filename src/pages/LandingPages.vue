<template>
  <main>
    <div class="hero">
      <h1><b>Welcome to Our Store</b></h1>

      <h1>bag 💼 shoes👠 belt</h1>

      <p>Happy shopping!</p>

      <RouterLink to="/product" class="btn-grad">Product</RouterLink>
    </div>
    <div class="vid">
      <video controls width="480" muted loop>
        <source src="/vidio/promo-toko.mp4" type="video/mp4" />
        Browser kamu tidak mendukung pemutaran video.
      </video>
    </div>

    <div class="contain">
      <div class="card">
        <h3>Understated Luxury</h3>
        <p>
          Clean lines, soft structure, and a touch of art. Designed to be
          noticed, not loud.
        </p>
      </div>
      <div class="card">
        <h3>Designed Around Your Day</h3>
        <p>
          Spacious enough for essentials, structured enough to stay elegant. One
          bag that moves seamlessly from work to weekend.
        </p>
      </div>
      <div class="card">
        <h3>Art You Can Carry</h3>
        <p>
          Featuring exclusive Japanese artwork on a timeless, structured
          silhouette.
        </p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.hero {
  text-align: center;
  padding: 50px;
  background: #650f27;
  color: #fff;
  height: 200px;
  border-radius: 50px;
  margin: 20px 20px;
}
.card {
  margin: 10px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 14px;
  width: 200px;
  height: auto;
  text-align: center;
}
.contain {
  display: flex;
  justify-content: center;
  gap: 20 px;
}

.hero a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #fff;
  color: #360606;
  text-decoration: none;
  border-radius: 5px;
}

video {
  margin-top: 16px;
  border-radius: 10px;
  display: block;
}

.vid {
  justify-content: center;
  display: flex;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #f5f5f4 0%,
    #190a05 51%,
    #870000 100%
  );
}

.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  outline: none;
  border: none;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
