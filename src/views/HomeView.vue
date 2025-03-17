<template>
  <div class="layout-container">
    <!-- Navigation Bar -->
    <nav class="navbar">
  <div class="nav-content">
<h2 class="logo">
  <span class="graph-container">
  <svg class="graph-svg" viewBox="0 0 50 50">
    <!-- Graph Line -->
    <polyline points="5,40 12,35 18,30 25,28 32,22 38,20 44,18"
      class="graph-line"></polyline>

    <!-- Data Points -->
    <circle v-for="(point, index) in graphPoints" :key="index"
      :cx="point.x"
      :cy="point.y"
      class="graph-point"
      :style="{ animationDelay: point.delay + 's' }">
    </circle>
  </svg>
</span>


  Md Dilshadur Rahman
</h2>







    <button class="menu-toggle" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </button>
    <div :class="['nav-links', { 'show': isMenuOpen }]">
      <a href="#bio" @click="closeMenu">
        <i class="fas fa-user-circle"></i> Bio
      </a>
      <a href="#research" @click="closeMenu">
        <i class="fas fa-flask"></i> Research
      </a>
      <a href="#teaching" @click="closeMenu">
        <i class="fas fa-chalkboard-teacher"></i> Teaching
      </a>
      <a href="#publications" @click="closeMenu">
        <i class="fas fa-book"></i> Publications
      </a>
      <a href="#service" @click="closeMenu">
            <i class="fas fa-hands-helping"></i> Service
            </a>
      <a href="#cv" @click="closeMenu">
        <i class="fas fa-file-alt"></i> CV
      </a>
    </div>
  </div>
</nav>

    
    <!-- Main Content: Bio Section -->
    <div class="content" id="bio">
      <div class="bio-container">
        <!-- Left Section: Profile Image & Name -->
        <div class="left-section">
          <img src="/headshot.jpg" alt="Your Name" class="profile-photo" />
          <h1 class="name">Md Dilshadur Rahman</h1>
          <div class="contact-info">
            <p><i class="fas fa-envelope"></i> dilshadur@sci.utah.edu</p>
          </div>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://scholar.google.com/citations?user=your-profile" target="_blank">
              <i class="fas fa-graduation-cap"></i> Google Scholar
            </a>
            <a href="https://github.com/your-profile" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>

        <!-- Right Section: Bio Description -->
        <div class="right-section">
          <p>
            I'm a Computer Science PhD student at the
            <a href="https://www.cs.utah.edu/" target="_blank">Kahlert School of Computing at the University of Utah</a>.
            I work at the
            <a href="https://www.sci.utah.edu/" target="_blank">Scientific Computing and Imaging Institute (SCI)</a>
            with
            <a href="https://www.sci.utah.edu/people/prosen.html" target="_blank">Dr. Paul Rosen</a>.
            Currently, we're investigating how people annotate different charts to effectively communicate information.
            Additionally, I am developing a peer review dashboard designed to improve review quality through behavioral nudges.
          </p>
          <p>
            My broader research interests encompass understanding and optimizing visualization design, annotations in visualizations,
            visualization perception, trust in visualizations, and the development of visualization tools that empower users to better
            interpret and engage with their data.
          </p>
          <!-- Recent Updates Section -->
<div class="recent-updates">
  <h2>Recent Updates</h2>
  <ul>
    <li v-for="(update, index) in updates" :key="index">
      <strong>[{{ update.date }}]</strong> {{ update.text }}
    </li>
  </ul>
</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      graphPoints: [] // Empty initially
    };
  },
  mounted() {
    this.graphPoints = this.generateGraphPoints();
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    generateGraphPoints() {
      return [
        { x: 5, y: 40, delay: 0.1 },
        { x: 12, y: 35, delay: 0.2 },
        { x: 18, y: 30, delay: 0.3 },
        { x: 25, y: 28, delay: 0.4 },
        { x: 32, y: 22, delay: 0.5 },
        { x: 38, y: 20, delay: 0.6 },
        { x: 44, y: 18, delay: 0.7 }
      ];
    }
  }
};

</script>









<style scoped>
/* Base Layout Styling */
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Fix Navbar Shadow */
.navbar {
  font-family: 'Poppins', sans-serif;
  background-color: #3657A7;
  color: white;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-bottom: none; /* Ensure no double border */
  z-index: 1000;
}

/* Ensure No Extra Background Layer */
.layout-container {
  background: white; /* Ensure background doesn't create extra layering */
}


/* Ensure the navbar content aligns properly */
/* Ensure the navbar content aligns properly */
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Ensures vertical alignment */
  width: 90%;
  max-width: 1200px;
  height: 60px; /* Ensures all elements have the same height */
}



.logo {
  display: flex;
  align-items: center;
  justify-content: center; /* Centers scatterplot horizontally */
  font-size: 22px;
  font-weight: bold;
  white-space: nowrap;
  height: 100%;
  line-height: 60px;
  flex-grow: 1; /* Allows the logo section to take equal space */
  text-align: center;
}


/* Menu Toggle Button */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
}

/* Navbar Links with Icons */
.nav-links {
  display: flex;
  gap: 30px;
}

/* Navbar Links with Fancy Font */
.nav-links a {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: opacity 0.3s ease, transform 0.2s ease;
}


/* Style the Icons to Match the Fancy Look */
.nav-links a i {
  font-size: 20px;
  color: white;
  transition: color 0.3s ease;
}

/* Underline effect on hover */
.nav-links a::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s ease, left 0.3s ease;
}

/* Hover Effect */
.nav-links a:hover {
  opacity: 1.0;
  transform: translateY(-2px); /* Slight raise effect */
}

.nav-links a:hover i {
  color: #f1f1f1; /* Slightly lighter color on hover */
}

.nav-links a:hover::after {
  width: 100%;
  left: 0;
}


/* Responsive Design */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #3657A7;
    width: 100%;
    padding: 10px 0;
  }

  .nav-links.show {
    display: flex;
  }

  .nav-links a {
    text-align: center;
    padding: 10px;
    display: block;
  }
}

/* Adjust Content Section to Avoid Overlap */
.content {
  margin-top: 60px; /* Adjusted for the fixed navbar */
  padding: 20px;
  background-color: white; /* Ensure no overlapping shadow effect */
}

/* Bio Page Layout */
.bio-container {
  display: flex;
  align-items: flex-start; /* Align content at the top */
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  gap: 40px; /* Reduce unnecessary space */
  padding: 20px;
}

/* Left Section: Profile Image & Name */
.left-section {
  text-align: center;
  max-width: 300px;
  flex-shrink: 0; /* Prevent shrinking */
}

.profile-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid #bbb;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-photo:hover {
  transform: scale(1.05);
}

.name {
  font-size: 26px;
  margin-top: 15px;
  font-weight: 600;
  color: #222;
}

/* Contact Info */
.contact-info p {
  font-size: 16px;
  color: #666;
}

/* Social Links */
.social-links {
  margin-top: 10px;
}

.social-links a {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: #3657A7;
  text-decoration: none;
  margin-top: 6px;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #1d3d8f;
}

.social-links a i {
  font-size: 18px;
}

/* Right Section: Bio Content */
.right-section {
  flex: 2;
  font-size: 17px;
  line-height: 1.7;
  color: #444;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align bio text to the top */
}

.right-section a {
  color: #3657A7;
  text-decoration: none;
  font-weight: bold;
}

.right-section a:hover {
  text-decoration: underline;
}

/* Recent Updates Section */
.recent-updates {
  margin-top: 30px;
  padding: 16px;
  background-color: #f9f9f9;
  border-left: 4px solid #3657A7;
  max-width: 90%; /* Prevents excessive width */
}

.recent-updates h2 {
  color: #3657A7;
  font-size: 20px;
  margin-bottom: 12px;
}

.recent-updates ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.recent-updates li {
  font-size: 16px;
  padding: 4px 0;
  color: #444;
}

/* Highlight date for better visibility */
.recent-updates li strong {
  color: #222;
  font-weight: bold;
  margin-right: 5px;
}


/* Responsive Fixes */
@media (max-width: 1024px) {
  .bio-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .left-section {
    max-width: 100%;
  }

  .right-section {
    max-width: 90%;
  }

  .recent-updates {
    max-width: 100%;
  }
}

/* Graph Container */
.graph-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 50px;
  position: relative;
  margin-right: 10px;
}

/* SVG for Graph */
.graph-svg {
  width: 100%;
  height: 100%;
}

/* Graph Line */
.graph-line {
  fill: none;
  stroke: #FFD700; /* Gold for contrast */
  stroke-width: 2.5;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  opacity: 0;
  animation: drawGraphLine 3s infinite ease-in-out 1s;
}

/* Data Points */
.graph-point {
  r: 3.5;
  fill: white;
  opacity: 0;
  animation: pointAppear 3s infinite ease-in-out alternate;
}

/* Line Animation */
@keyframes drawGraphLine {
  0% {
    opacity: 0;
    stroke-dashoffset: 50;
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}

/* Data Points Animation */
@keyframes pointAppear {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}






</style>
