document.addEventListener('DOMContentLoaded', () => {
    const courseContainer = document.getElementById('course-list-container');
    
    if (courseContainer && typeof coursesData !== 'undefined') {
        renderCourses(courseContainer, coursesData);
    }

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (currentTheme == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});

function renderCourses(container, data) {
    container.innerHTML = ''; // Clear existing content

    data.forEach(section => {
        const sectionEl = document.createElement('section');
        sectionEl.className = 'course-section';

        const titleEl = document.createElement('h2');
        titleEl.textContent = section.title;
        sectionEl.appendChild(titleEl);

        const listEl = document.createElement('div');
        listEl.className = 'course-grid';

        section.courses.forEach(course => {
            const card = document.createElement('a');
            card.href = course.url;
            card.className = 'course-card';

            const iconEl = document.createElement('div');
            iconEl.className = 'course-icon';
            iconEl.textContent = course.icon;

            const nameEl = document.createElement('div');
            nameEl.className = 'course-name';
            nameEl.textContent = course.name;

            card.appendChild(iconEl);
            card.appendChild(nameEl);
            listEl.appendChild(card);
        });

        sectionEl.appendChild(listEl);
        container.appendChild(sectionEl);
    });
}
