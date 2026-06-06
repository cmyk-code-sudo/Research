<template>
  <div id="app" class="research-browser">
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content Area -->
    <div class="main-content">
      <!-- Sidebar (optional) -->
      <Sidebar />

      <!-- Tab Bar -->
      <TabBar />

      <!-- Browser View -->
      <div class="browser-view">
        <router-view />
      </div>
    </div>

    <!-- Status Bar -->
    <StatusBar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import TabBar from './components/TabBar.vue';
import StatusBar from './components/StatusBar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    TabBar,
    StatusBar,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.browser-view {
  flex: 1;
  overflow: auto;
  background-color: #ffffff;
}
</style>
