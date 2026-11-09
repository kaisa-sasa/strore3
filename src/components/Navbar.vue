<template>
  <nav>
    <h2>CarryME</h2>

    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>

    <button>🛍️ Shop</button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 8%;
  background: #fff;
  box-shadow: 0 3px 15px #e9d5ff;
}

h2 {
  color: #4b0707;
  margin: 0;
}

div {
  display: flex;
  gap: 20px;
}

a {
  text-decoration: none;
  color: #4b0707;
  font-weight: bold;
}

a:hover {
  color: #4b0707;
}

button {
  border: 0;
  padding: 9px 15px;
  border-radius: 20px;
  background: #4b0707;
  color: white;
  font-weight: bold;
}
</style>
