<template>
    <div class="container skill-container shadow-sm rounded-[8px]">
        <div class="project-view w-full">
            <img :src="item.skillImage" class="h-auto" alt="Project preview">
            <!-- <img :src="item.skillImage" class="h-30" alt="Project preview"> -->
        </div>
        <div class="project-description w-full p-4">
            <h5>{{ item.skillName }}</h5>
            <p class="px-2 pb-4">{{ item.skillDescription }}</p>
        </div>
    </div>
</template>

<style scoped>
img {
    border-radius: 8px;
    margin: 10px auto 0;
}

.skill-container {
    margin-bottom: 0;
    width: 100%;
}

@media (max-width: 978px) {
    .skill-container {
        width: 80%;
        margin-right: 10px auto;
    }
}
</style>

<script>
export default {
    name: 'SkillCard',
    props: {
        item: {
            skillName: String,
            skillDescription: String,
            skillImage: String
        }
    }
}
</script>