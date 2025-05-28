<template>
    <div class="container project-container flex flex-col md:flex-row gap-6">
        <div class="project-description px-8 w-full md:w-1/2">
            <h3>{{ item.projectName }}</h3>
            <p>{{ item.projectDescription }}</p>
            <a :href="item.projectURL" class="button font-base" target="_blank">View project</a>
        </div>
        <div class="project-view w-full md:w-1/2">
            <img :src="item.projectImage" alt="Project preview">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        item: {
            projectName: String,
            projectDescription: String,
            projectImage: String,
            projectURL: String
        }
    }
}
</script>

<style scoped>
.project-container {
    background-color: #F9FAFF;
    border-radius: 24px;
    height: auto;
    margin: 20px auto 10px;
}

.project-container img {
    height: auto;
    border-radius: 0 24px 24px 0;
    margin-right: 0;
}

p {
    height: auto;
    margin: 30px 0;
}
</style>