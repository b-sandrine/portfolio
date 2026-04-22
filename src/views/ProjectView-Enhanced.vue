<template>
    <div class="projects-container">
        <div class="container">
            <TitleComponent title="Projects" class="title-section" />
            <div class="projects-grid fade-in-up">
                <div v-for="(project, index) in data" :key="index" class="project-card-wrapper"
                    :style="{ '--stagger-delay': `${index * 0.1}s` }">
                    <ProjectCard :item="project" class="project-card" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const data = [
    {
        projectName: "Comment Analysis App",
        projectDescription: "This is a mobile app that works across different platforms, designed to analyze and categorize user comments in real time. It can detect sentiments—whether they're positive, negative, or neutral—filter out toxic comments, and spot spam. This app is perfect for social media platforms or any feedback systems you might have!",
        projectImage: new URL('../assets/images/projects/project-1-1.png', import.meta.url),
        projectURL: "https://github.com/b-sandrine/twitter-clone-rn"
    },
    {
        projectName: "Clean & Shine",
        projectDescription: "This platform is all about making life easier for cleaning services. It allows clients to browse, book their services, manage appointments, and get real-time updates.",
        projectImage: new URL('../assets/images/projects/project-2-1.png', import.meta.url),
        projectURL: "https://charming-biscuit-7bfa2d.netlify.app/"
    },
    {
        projectName: "Shopcart",
        projectDescription: "Check out my e-commerce web application clone that showcases product listings, lets you add items to your cart, and guides you through a smooth checkout process. It also comes with backend APIs to manage products and orders efficiently.",
        projectImage: new URL('../assets/images/projects/project-3.png', import.meta.url),
        projectURL: "https://shopcartclone.vercel.app/"
    },
    {
        projectName: "SNOF Application",
        projectDescription: "I worked on an enterprise-grade application designed for scheduling, notifications, and sending feedback to designated users. While it aims to serve various sectors, its primary focus is on schools. Think of it as a sophisticated automated bell system that streamlines operations, with the added potential for document uploads and administrative roles.",
        projectImage: new URL('../assets/images/projects/project-4.png', import.meta.url),
        projectURL: "https://www.google.com/chrome/"
    },
    {
        projectName: "Cyangugu Anglican Website",
        projectDescription: "Looking to create a dynamic and engaging website for a religious organization? Imagine a site that showcases announcements, sermons, and event listings all in one place! This one, I worked on it. Contact me, if you want the same.",
        projectImage: new URL('../assets/images/projects/project-5.png', import.meta.url),
        projectURL: "https://www.earcyangugudiocese.rw/"
    }
]
</script>

<style scoped>
.projects-container {
    background: linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary-active) 100%);
    border-radius: 20px;
    padding: 60px 40px;
    margin: 60px 0;
    position: relative;
    overflow: hidden;
}

.projects-container::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--color-primary), transparent);
    opacity: 0.08;
    border-radius: 50%;
}

.projects-container::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--color-primary), transparent);
    opacity: 0.08;
    border-radius: 50%;
}

.container {
    position: relative;
    z-index: 2;
}

:deep(.title-section) {
    margin-bottom: 40px;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}

/* Projects Grid */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;
}

.project-card-wrapper {
    animation: fadeInUp 0.8s ease-out;
    animation-delay: var(--stagger-delay);
}

.project-card {
    height: 100%;
}

/* Responsive */
@media (max-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }
}

@media (max-width: 768px) {
    .projects-container {
        margin: 30px 0;
        padding: 40px 20px;
    }

    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

@media (max-width: 480px) {
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
}
</style>