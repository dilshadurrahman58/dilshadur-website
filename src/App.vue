<template>
  <div class="layout-container">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-content">
        <h2 class="logo">Your Name</h2>
        <div class="nav-links">
          <a href="#bio">Bio</a>
          <a href="#research">Research</a>
          <a href="#teaching">Teaching</a>
          <a href="#publications">Publications</a>
          <a href="#cv">CV</a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
/* Base Layout Styling */
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navigation Bar */
.navbar {
  background-color: #3657A7;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
}

.logo {
  font-size: 22px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s;
}

.nav-links a:hover {
  opacity: 0.8;
}

/* Main Content */
.content {
  margin-top: 80px;
  padding: 40px;
  flex: 1;
}

@media (max-width: 768px) {
  .bio-section {
    flex-direction: column;
    text-align: center;
  }

  .bio-content {
    padding-left: 0;
    margin-top: 20px;
  }

  .nav-links {
    display: block;
  }
}

</style>

