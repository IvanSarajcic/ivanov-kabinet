document.addEventListener('DOMContentLoaded', () => {
    const courseContainer = document.getElementById('course-list-container');
    
    if (courseContainer && typeof coursesData !== 'undefined') {
        renderCourses(courseContainer, coursesData);
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
