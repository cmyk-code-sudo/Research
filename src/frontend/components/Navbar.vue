<template>
  <nav class="navbar">
    <div class="navbar-left">
      <button class="nav-btn" @click="goBack" title="Back">←</button>
      <button class="nav-btn" @click="goForward" title="Forward">→</button>
      <button class="nav-btn" @click="reload" title="Reload">⟳</button>
    </div>

    <div class="navbar-center">
      <div class="address-bar">
        <input
          v-model="currentUrl"
          type="text"
          placeholder="Enter URL or search query..."
          @keyup.enter="navigate"
          class="address-input"
        />
        <button @click="navigate" class="search-btn">Go</button>
      </div>
    </div>

    <div class="navbar-right">
      <button class="icon-btn" title="Bookmarks">★</button>
      <button class="icon-btn" title="Settings">⚙️</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      currentUrl: '',
    };
  },
  methods: {
    goBack() {
      console.log('Going back...');
    },
    goForward() {
      console.log('Going forward...');
    },
    reload() {
      console.log('Reloading...');
    },
    navigate() {
      console.log('Navigating to:', this.currentUrl);
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  height: 50px;
}

.navbar-left,
.navbar-right {
  display: flex;
  gap: 5px;
}

.navbar-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.address-bar {
  display: flex;
  width: 500px;
  max-width: 100%;
  gap: 5px;
}

.address-input {
  flex: 1;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.address-input:focus {
  outline: none;
  border-color: #4285f4;
  box-shadow: 0 0 4px rgba(66, 133, 244, 0.3);
}

.search-btn,
.nav-btn,
.icon-btn {
  padding: 6px 12px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.search-btn:hover,
.nav-btn:hover,
.icon-btn:hover {
  background-color: #f0f0f0;
}
</style>
