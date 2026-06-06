<template>
  <div class="tab-bar">
    <div class="tabs-container">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: activeTab === index }]"
        @click="switchTab(index)"
      >
        <span class="tab-title">{{ tab.title }}</span>
        <button @click.stop="closeTab(index)" class="tab-close">×</button>
      </div>
    </div>
    <button @click="newTab" class="new-tab-btn">+</button>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      tabs: [{ title: 'New Tab', url: 'about:home' }],
      activeTab: 0,
    };
  },
  methods: {
    switchTab(index) {
      this.activeTab = index;
    },
    newTab() {
      this.tabs.push({ title: 'New Tab', url: 'about:home' });
      this.activeTab = this.tabs.length - 1;
    },
    closeTab(index) {
      this.tabs.splice(index, 1);
      if (this.activeTab >= this.tabs.length) {
        this.activeTab = this.tabs.length - 1;
      }
    },
  },
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  height: 40px;
  padding: 0 10px;
}

.tabs-container {
  display: flex;
  gap: 5px;
  flex: 1;
  overflow-x: auto;
}

.tab {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 15px;
  background-color: #e0e0e0;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  white-space: nowrap;
  font-size: 13px;
  height: 100%;
}

.tab.active {
  background-color: #fff;
  border-bottom: 2px solid #4285f4;
}

.tab-title {
  flex: 1;
}

.tab-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  color: #666;
}

.tab-close:hover {
  color: #000;
}

.new-tab-btn {
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 4px;
}

.new-tab-btn:hover {
  background-color: #d0d0d0;
}
</style>
