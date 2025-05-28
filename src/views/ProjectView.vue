<template>
    <div class="container">
        <TitleComponent title="Projects" />
        <div class="grid grid-cols-1 gap-8">
            <ProjectCard v-for="(project, index) in data" :key="index" :item="project" />
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
