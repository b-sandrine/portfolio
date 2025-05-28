<template>
    <div class="w-full flex justify-around h-50 container-holder">
        <h3 class="font-bold relative custom-heading">{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'TitleComponent',
    props: {
        title: String
    }
} 
</script>

<style scoped>

.custom-heading {
    margin: 0px auto;
    padding: 5px 20px;
}

.custom-heading::after {
    content: '';
    position: absolute;
    pointer-events: none;
}

.custom-heading::after {
    border-top: 4px solid #F97316;
    border-right: 4px solid #F97316;
    width: 20px;
    height: 20px;
    top: -5px;
    right: -10px;
}

.custom-heading::before {
    content: '';
    position: absolute;
    pointer-events: none;
    border-top: 4px solid #F97316;
    border-right: 4px solid #F97316;
    width: 20px;
    height: 20px;
    bottom: -5px;
    left: -10px;
    transform: rotate(180deg);
    transform-origin: center;
}
</style>