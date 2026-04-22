<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<style scoped>
h1 {
    font-weight: 600;
}
</style>
