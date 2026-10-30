// Add or edit your projects here
const projects = [
    {
        title: "Basketball Scoreboard",
        description: "A Basketball Scoreboard interface supporting point increment, reset and scorekeeping.",
        path: "./basketball-scoreboard/",
        tags: ["DOM Manipulation", "Events"]
    },
    {
        title: "To-Do List",
        description: "Task management app utilizing localStorage to persist data.",
        path: "./project-02-todo-app/",
        tags: ["localStorage", "JSON"]
    },
    {
        title: "Weather Dashboard",
        description: "Fetches real-time weather information from an external API.",
        path: "./project-03-weather-dashboard/",
        tags: ["Fetch API", "Async/Await"]
    }
];

const grid = document.getElementById("project-grid");
const searchInput = document.getElementById("search");

function renderProjects(items) {
    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b;">No matching projects found.</p>`;
        return;
    }

    grid.innerHTML = items.map(project => `
    <article class="card">
      <div>
        <h2 class="card-title">${project.title}</h2>
        <p class="card-desc">${project.description}</p>
        <div class="card-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <a href="${project.path}" class="btn">Launch Project →</a>
    </article>
  `).join('');
}

// Initial Render
renderProjects(projects);

// Search / Filter Event Handler
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = projects.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
    );
    renderProjects(filtered);
});