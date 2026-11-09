<script setup>
import ProductCard from "../components/ProductCard.vue";
const daftarProduk = [
  {
    id: 1,
    nama: "DC Shoes Studded Belt",
    harga: 20000000,
    gambar:
      "https://i.pinimg.com/1200x/6f/62/82/6f6282071f0e165ce5218d0d63dbbd6f.jpg",
  },
  {
    id: 2,
    nama: "shoulder bag Vintage Y2k",
    harga: 100000000,
    gambar:
      "https://i.pinimg.com/736x/cd/5f/c4/cd5fc4c2d68e32c842e315f41b7fd484.jpg",
  },
  {
    id: 3,
    nama: "The Beckham Tote Bag",
    harga: 25000000,
    gambar:
      "https://i.pinimg.com/1200x/09/c4/49/09c449336769d71ec59e0f1497f4140d.jpg",
  },
  {
    id: 4,
    nama: "shoulder bag Vintage punk",
    harga: 50000000,
    gambar:
      "https://i.pinimg.com/736x/55/fd/6f/55fd6fbfc22e76ce4f50f0bc543e4762.jpg",
  },
  {
    id: 5,
    nama: "Toe Stiletto Stretch Ankle Boots",
    harga: 25000000,
    gambar:
      "https://i.pinimg.com/1200x/ac/86/2e/ac862e913ffa895e044c500aea78153c.jpg",
  },
  {
    id: 6,
    nama: "blue belt",
    harga: 25000000,
    gambar:
      "https://i.pinimg.com/1200x/a2/87/1c/a2871cb46f71ec4d37977a5d977ebff7.jpg",
  },
];
</script>
<template>
  <main>
    <div class="hero">
      <h1>our products</h1>
      <h2>
        We don't just make products. We make them with heart. With full
        attention to every stitch, every finish because we know you'll carry it
        every day.
      </h2>
    </div>
    <div class="grid">
      <ProductCard
        v-for="produk in daftarProduk"
        :key="produk.id"
        :nama="produk.nama"
        :harga="produk.harga"
        :gambar="produk.gambar"
      />
    </div>
  </main>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 50px;
  background-color: #410404;
  color: #fff;
  min-height: 200px;
  border-radius: 50px;
  margin: 20px;
}
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
