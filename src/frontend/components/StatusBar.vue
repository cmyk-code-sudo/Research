<template>
  <footer class="status-bar">
    <span class="status-text">{{ statusMessage }}</span>
  </footer>
</template>

<script>
export default {
  name: 'StatusBar',
  data() {
    return {
      statusMessage: 'Ready',
    };
  },
};
</script>

<style scoped>
.status-bar {
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  height: 25px;
  font-size: 12px;
  color: #666;
}

.status-text {
  flex: 1;
}
</style>
