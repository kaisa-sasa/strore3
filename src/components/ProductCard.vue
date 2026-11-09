<script setup>
import { ref } from "vue";

defineProps(["nama", "harga", "gambar"]);

const gambarDipilih = ref(null);

function bukaPreview(src) {
  gambarDipilih.value = src;
}

function tutupPreview() {
  gambarDipilih.value = null;
}

function tambahKeKeranjang(nama) {
  const suara = new Audio("/audio/notifikasi.mp3");
  suara.play();
  alert(`${nama} ditambahkan ke keranjang!`);
}
</script>

<template>
  <div class="card">
    <img
      :src="gambar"
      :alt="nama"
      @click="bukaPreview(gambar)"
      class="product-image"
    />

    <h3>{{ nama }}</h3>

    <p>Rp {{ harga.toLocaleString("id-ID") }}</p>

    <button @click="tambahKeKeranjang(nama)">Tambah ke Keranjang</button>
  </div>

  <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview">
    <img :src="gambarDipilih" class="preview-besar" />
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  min-height: 480px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
}

.card:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
}

.card h3 {
  margin-top: 12px;
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 600;
}

.card p {
  margin: 0;
  color: #666;
}

.card button {
  margin-top: auto;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background: #360606;
  color: white;
  cursor: pointer;
}

.card button:hover {
  background: #5a0a0a;
}

.preview-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: zoom-out;
  z-index: 999;
}

.preview-besar {
  max-width: 80%;
  max-height: 80%;
  border-radius: 8px;
}
</style>
