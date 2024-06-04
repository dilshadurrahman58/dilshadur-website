<template>
  <div class="container-fluid vh-100 p-4">
    <div class="row h-100">
      <aside class="col-md-3 bg-light">
        <div class="text-center py-4">
          <!-- Updated cartoon placeholder image -->
          <img
            src="https://robohash.org/your-placeholder?set=set4"
            alt="Cartoon Headshot"
            class="img-thumbnail rounded-circle mb-3 headshot"
          />
          <div class="social-icons mb-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              class="btn btn-outline-secondary mr-2"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a
              href="https://www.github.com"
              target="_blank"
              class="btn btn-outline-secondary mr-2"
              ><i class="fab fa-github"></i
            ></a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              class="btn btn-outline-secondary mr-2"
              ><i class="fab fa-google"></i
            ></a>
          </div>
          <div class="contact-info mb-3">
            <p>Email: dilshadur@sci.utah.edu</p>
            <p>Phone: (520) 448-8557</p>
          </div>
        </div>
        <nav class="nav flex-column buttons-container">
          <a
            class="nav-link custom-btn mb-2"
            href="#"
            @click="scrollTo('about')"
            >About Me</a
          >
          <a class="nav-link custom-btn mb-2" href="#" @click="scrollTo('news')"
            >Recent News</a
          >
          <a
            class="nav-link custom-btn mb-2"
            href="#"
            @click="scrollTo('publications')"
            >Publications</a
          >
          <a
            class="nav-link custom-btn mb-2"
            href="#"
            @click="scrollTo('projects')"
            >Research Projects</a
          >
          <a
            class="nav-link custom-btn mb-2"
            href="#"
            @click="scrollTo('education')"
            >Education</a
          >
        </nav>
      </aside>
      <main class="col-md-9 overflow-auto content-scrollable" ref="contentArea">
        <section id="about" class="section-content hover-effect">
          <h2>About Me</h2>
          <p>
            Etiam vitae turpis in sapien bibendum molestie. Phasellus non mi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Long text
            repeated for demonstration: Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Pellentesque
            suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Pellentesque suscipit. (Repeat as
            needed to ensure the content is lengthy enough to require scrolling)
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            scelerisque, nibh quis ultricies sollicitudin, libero massa rutrum
            turpis, at elementum leo justo a libero. Long text repeated for
            demonstration: Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
            eget, tempor sit amet, ante. (Repeat as needed to ensure the content
            is lengthy enough to require scrolling)
          </p>
        </section>
        <section id="news" class="section-content hover-effect">
          <h2>Recent News</h2>
          <p>
            Etiam vitae turpis in sapien bibendum molestie. Phasellus non mi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Long text
            repeated for demonstration: Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Pellentesque
            suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Pellentesque suscipit. (Repeat as
            needed to ensure the content is lengthy enough to require scrolling)
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            scelerisque, nibh quis ultricies sollicitudin, libero massa rutrum
            turpis, at elementum leo justo a libero. Long text repeated for
            demonstration: Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
            eget, tempor sit amet, ante. (Repeat as needed to ensure the content
            is lengthy enough to require scrolling)
          </p>
        </section>
        <section id="publications" class="section-content hover-effect">
          <h2>Publications</h2>
          <div class="publication-item">
            <div class="publication-details">
              <h3>
                Doe, J., & Smith, A. (2023). A Comprehensive Study on Machine
                Learning Algorithms. Journal of Artificial Intelligence, 45(3),
                123-145.
              </h3>
              <p class="description">
                Abstract: This paper presents an in-depth analysis of various
                machine learning algorithms, highlighting their strengths,
                weaknesses, and practical applications. The study provides a
                comparative evaluation based on performance metrics across
                different datasets.
              </p>
            </div>
          </div>
          <div class="publication-item">
            <div class="publication-details">
              <h3>
                Johnson, R., & Wang, L. (2022). Advances in Deep Learning for
                Natural Language Processing. Computational Linguistics Journal,
                38(2), 98-120.
              </h3>
              <p class="description">
                Abstract: This research explores the latest advancements in deep
                learning techniques for natural language processing. It
                discusses novel architectures and approaches that have
                significantly improved the accuracy and efficiency of language
                models.
              </p>
            </div>
          </div>
          <div class="publication-item">
            <div class="publication-details">
              <h3>
                Lee, K., & Gupta, M. (2021). Enhancing Data Visualization
                through Interactive Techniques. Journal of Data Science, 12(4),
                215-230.
              </h3>
              <p class="description">
                Abstract: The paper investigates interactive data visualization
                methods that enhance user engagement and comprehension. It
                introduces new tools and frameworks designed to facilitate the
                exploration and analysis of complex datasets.
              </p>
            </div>
          </div>
        </section>
        <section id="projects" class="section-content hover-effect">
          <h2>Research Projects</h2>
          <ol>
            <li>
              <h3>Project Title 1</h3>
              <p>
                Description: A brief overview of the project's goals, methods,
                and outcomes...
              </p>
            </li>
            <li>
              <h3>Project Title 2</h3>
              <p>
                Description: A brief overview of the project's goals, methods,
                and outcomes...
              </p>
            </li>
            <li>
              <h3>Project Title 3</h3>
              <p>
                Description: A brief overview of the project's goals, methods,
                and outcomes...
              </p>
            </li>
          </ol>
        </section>
        <section id="education" class="section-content hover-effect">
          <h2>Education</h2>
          <div class="education-item">
            <img
              src="https://via.placeholder.com/50"
              alt="University of Utah Logo"
              class="institution-logo"
            />
            <div class="education-details">
              <h3>PhD in Computer Science</h3>
              <p class="institution">University of Utah</p>
              <p class="date">Ongoing</p>
              <p class="description">
                Engaged in advanced research in the field of computer science,
                focusing on areas such as artificial intelligence, machine
                learning, and data science.
              </p>
            </div>
          </div>
          <div class="education-item">
            <img
              src="https://via.placeholder.com/50"
              alt="University of South Florida Logo"
              class="institution-logo"
            />
            <div class="education-details">
              <h3>MS in Computer Science</h3>
              <p class="institution">University of South Florida</p>
              <p class="date">Graduated: Year</p>
              <p class="description">
                Specialized in software development, systems engineering, and
                computational theory, with a focus on practical and theoretical
                knowledge.
              </p>
            </div>
          </div>
          <div class="education-item">
            <img
              src="https://via.placeholder.com/50"
              alt="Khulna University of Engineering and Technology Logo"
              class="institution-logo"
            />
            <div class="education-details">
              <h3>BS in Computer Science and Engineering</h3>
              <p class="institution">
                Khulna University of Engineering and Technology
              </p>
              <p class="date">Graduated: Year</p>
              <p class="description">
                Acquired a strong foundation in computer science principles,
                including programming, algorithms, and hardware systems.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    scrollTo(sectionId) {
      const element = this.$refs.contentArea.querySelector(`#${sectionId}`);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Adjust offset to ensure title is visible
        this.$refs.contentArea.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

body {
  font-family: "Roboto", sans-serif;
  color: #333;
  background-color: #f1f1f1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container-fluid {
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.row {
  height: calc(100% - 40px);
}

aside {
  height: 100%;
  width: 300px;
  position: fixed;
  overflow-y: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  animation: fadeIn 1s ease-in-out;
}

.content-scrollable {
  height: 100%;
  overflow-y: auto;
  margin-left: 320px;
  width: calc(100% - 320px);
  padding: 20px;
  box-sizing: border-box;
  animation: fadeIn 1s ease-in-out;
}

.buttons-container {
  margin-top: 5px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px; /* Adjust this value to move buttons to the right */
}

.nav-link.custom-btn {
  background-color: #d3d3d3; /* Very light grey */
  color: #333;
  padding: 10px 15px;
  display: block;
  width: 100%;
  text-align: center;
  border: 1px solid #d3d3d3; /* Match the background color */
  border-radius: 0.375rem;
  margin-bottom: 8px;
  transition: all 0.3s ease-in-out;
  font-weight: 500;
  font-size: 14px;
}

.nav-link.custom-btn:hover,
.nav-link.custom-btn:focus {
  background-color: #b0b0b0; /* Slightly darker light grey for hover effect */
  color: #333;
  border-color: #b0b0b0; /* Match the hover background color */
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-content {
  padding-top: 80px; /* Add padding to ensure section title is below the margin */
  transition: background-color 0.3s ease-in-out;
}

.section-content h2 {
  color: #555; /* Darker grey */
  margin-bottom: 15px;
  border-bottom: 2px solid #e2e6ea;
  padding-bottom: 5px;
  font-weight: 700;
}

.section-content p,
.section-content ol {
  color: #555;
  line-height: 1.7;
}

.section-content ol {
  padding-left: 20px;
}

.section-content ol li {
  margin-bottom: 20px;
}

.section-content.hover-effect:hover {
  background-color: #f0f0f0; /* Slightly darker background color for hover effect */
}

.education-item,
.publication-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px; /* Increased spacing for better readability */
  padding-left: 10px; /* Indentation for left alignment */
  border-left: 4px solid #d3d3d3; /* Left border for visual separation */
  padding-bottom: 10px; /* Spacing at the bottom */
  transition: all 0.3s ease-in-out;
  animation: fadeIn 1s ease-in-out;
}

.publication-item .publication-details {
  flex: 1;
}

.education-item .institution-logo {
  width: 50px;
  height: 50px;
  margin-right: 15px; /* Spacing between logo and details */
  transition: transform 0.3s ease;
}

.education-item:hover .institution-logo {
  transform: scale(1.1);
}

.education-item .education-details,
.publication-item .publication-details {
  flex: 1;
}

.education-item h3,
.publication-item h3 {
  margin-bottom: 5px;
  font-size: 1.4em; /* Slightly larger font for prominence */
  color: #333;
  transition: color 0.3s ease;
}

.education-item:hover h3,
.publication-item:hover h3 {
  color: #000;
}

.education-item p.institution,
.education-item p.date,
.education-item p.description,
.publication-item p.description {
  margin: 0;
  font-size: 1.1em;
  font-weight: 500;
  color: #777;
}

.education-item p.date,
.publication-item p.description {
  font-size: 1em;
  color: #999;
}

.education-item p.description,
.publication-item p.description {
  margin-top: 5px;
  font-size: 0.95em;
  color: #555;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.education-item:hover p.description,
.publication-item:hover p.description {
  opacity: 0.85;
  transform: translateX(10px); /* Subtle movement to the right */
}

img.headshot {
  width: 135px;
  height: 135px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.social-icons a {
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d3d3d3; /* Very light grey */
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;
  transition: all 0.3s ease-in-out;
}

.social-icons a:hover {
  background-color: #d3d3d3; /* Very light grey */
  color: #333;
  border-color: #b0b0b0; /* Slightly darker light grey for hover effect */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 992px) {
  aside {
    width: 100%;
    height: auto;
    position: static;
    padding: 10px;
  }
  .content-scrollable {
    margin-left: 0;
    width: 100%;
    padding: 10px;
  }
}
</style>
