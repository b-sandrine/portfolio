// document.addEventListener("DOMContentLoaded", async function () {
//     const projectList = document.getElementById("project-list");

//     const projects = [
//         { 
//             name: "Clean Shine", 
//             description: "A design implementation project completed in a single day.", 
//             tech: "JavaScript", 
//             link: "https://github.com/b-sandrine/clean-shine",
//             desktopView: "https://charming-biscuit-7bfa2d.netlify.app/",
//             mobileView: "images/clean-shine-desktop.png"
//         },
//         { 
//             name: "Portfolio", 
//             description: "Your personal portfolio built with HTML, CSS, and PHP.", 
//             tech: "HTML, CSS, PHP", 
//             link: "https://github.com/b-sandrine/portfolio",
//             desktopView: "images/portfolio-desktop.png",
//             mobileView: "images/portfolio-mobile.png"
//         },
//         { 
//             name: "Meme Generator", 
//             description: "A meme generator with a React frontend and Java/Spring backend.", 
//             tech: "React, Java, Spring", 
//             link: "https://github.com/b-sandrine/meme-generator-testing-project",
//             desktopView: "images/meme-generator-desktop.png",
//             mobileView: "images/meme-generator-mobile.png"
//         },
//         { 
//             name: "Quote Generator", 
//             description: "A simple app that randomly generates quotes.", 
//             tech: "HTML, CSS, Vanilla JavaScript", 
//             link: "https://github.com/b-sandrine/quote-generator",
//             desktopView: "images/quote-generator-desktop.png",
//             mobileView: "images/quote-generator-mobile.png"
//         },
//         { 
//             name: "Todos App", 
//             description: "A Python app with PostgreSQL to help plan daily tasks.", 
//             tech: "Python, PostgreSQL", 
//             link: "https://github.com/b-sandrine/Todos",
//             desktopView: "images/todos-desktop.png",
//             mobileView: "images/todos-mobile.png"
//         },
//         { 
//             name: "Car Rental System", 
//             description: "A Java-based car rental application.", 
//             tech: "Java", 
//             link: "https://github.com/b-sandrine/car_rental",
//             desktopView: "images/car-rental-desktop.png",
//             mobileView: "images/car-rental-mobile.png"
//         }
//     ];

//     projects.forEach(project => {
//         const projectDiv = document.createElement("div");
//         projectDiv.classList.add("project");
//         projectDiv.innerHTML = `
//             <h3>${project.name}</h3>
//             <p>${project.description}</p>
//             <p><strong>Tech Stack:</strong> ${project.tech}</p>
//             <a href="${project.link}" target="_blank">View Code</a>
//             <div class="preview">
//                 <img src="${project.desktopView}" alt="Desktop view of ${project.name}">
//                 <img src="${project.mobileView}" alt="Mobile view of ${project.name}">
//             </div>
//         `;
//         projectList.appendChild(projectDiv);
//     });

//     // Switching themes 
//     const themeToggle = document.getElementById("theme-toggle");
//     const body = document.body;

//     // Check saved theme preference
//     if (localStorage.getItem("theme") === "light") {
//         body.classList.add("light-mode");
//     }

//     themeToggle.addEventListener("click", function () {
//         body.classList.toggle("light-mode");

//         // Save preference
//         if (body.classList.contains("light-mode")) {
//             localStorage.setItem("theme", "light");
//         } else {
//             localStorage.setItem("theme", "dark");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", async function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Apply saved theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
    });

    // Smooth fade-in animations
    document.querySelectorAll(".fade-in").forEach(element => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    });

    // Fetch GitHub stats
    fetch("https://api.github.com/users/b-sandrine")
        .then(response => response.json())
        .then(data => {
            document.getElementById("github-stats").innerHTML = `
                <h2>GitHub Stats</h2>
                <p>Public Repos: ${data.public_repos}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
            `;
        });

    // Featured projects
    const projects = [
        { name: "Clean Shine", description: "A design implementation project.", tech: "JavaScript", link: "https://github.com/b-sandrine/clean-shine", desktopView: "images/clean-shine-desktop.png", mobileView: "images/clean-shine-mobile.png" },
        { name: "Portfolio", description: "Your personal portfolio built with HTML, CSS, and PHP.", tech: "HTML, CSS, PHP", link: "https://github.com/b-sandrine/portfolio", desktopView: "images/portfolio-desktop.png", mobileView: "images/portfolio-mobile.png" },
        { name: "Meme Generator", description: "A meme generator with React and Java/Spring.", tech: "React, Java, Spring", link: "https://github.com/b-sandrine/meme-generator-testing-project", desktopView: "images/meme-generator-desktop.png", mobileView: "images/meme-generator-mobile.png" },
    ];

    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Tech Stack:</strong> ${project.tech}</p>
            <a href="${project.link}" target="_blank">View Code</a>
            <div class="preview">
                <img src="${project.desktopView}" alt="Desktop view of ${project.name}">
                <img src="${project.mobileView}" alt="Mobile view of ${project.name}">
            </div>
        `;
        projectList.appendChild(projectDiv);
    });
});
