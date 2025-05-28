<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
import SkillCard from '@/components/SkillCard.vue';
const skills = [
    {
        skillName: "Frontend Development",
        skillDescription: `I build modern, responsive user interfaces that look great and work well on all devices. I focus on performance, accessibility, and clean design to give users the best experience. #HTML #CSS #JavaScript #React #Next.js #TailwindCSS #Redux #TypeScript`,
        skillImage: new URL('../assets/images/services/01.png', import.meta.url)
    },
    {
        skillName: "Backend Development",
        skillDescription: "I develop the server-side logic that powers web applications. This includes building APIs, managing databases, and handling user authentication securely and efficiently. #Node.js #Express #Java #SpringBoot #PostgreSQL #MongoDB #JWT #RESTfulAPI",
        skillImage: new URL('../assets/images/services/02.png', import.meta.url)
    },
    {
        skillName: "Mobile App Development",
        skillDescription: "I create mobile applications that are smooth, fast, and user-friendly, whether for Android, iOS, or both. I can also build cross-platform apps that run everywhere. #ReactNative #Flutter #Expo #AndroidStudio #Firebase #Java #Kotlin",
        skillImage: new URL('../assets/images/services/03.png', import.meta.url)
    },
    {
        skillName: "Custom AI Model Development",
        skillDescription: "I design and train custom AI models tailored to your specific needs—like chatbots, recommendation systems, or NLP tools. I also integrate AI into websites or mobile apps. #Python #TensorFlow #PyTorch #Transformers #HuggingFace #LangChain #OpenAIAPI",
        skillImage: new URL('../assets/images/services/04.png', import.meta.url)
    },
    {
        skillName: "IoT Sync Development",
        skillDescription: "I build systems that connect hardware devices to software, making smart and automated solutions. This includes sensors, microcontrollers, and connected applications. #C++ #Arduino #RaspberryPi #ESP32 #MicroPython #MQTT #Sensors #EmbeddedC #Breadboard",
        skillImage: new URL('../assets/images/services/05.png', import.meta.url)
    },
    {
        skillName: "Mentoring & Consultancy",
        skillDescription: "I offer guidance to students, beginners, or small teams looking to learn tech or solve development challenges. I can help with career advice, code reviews, and project planning. #Zoom #Slack #GoogleMeet #GitHub #Notion #Trello #VisualStudioCode",
        skillImage: new URL('../assets/images/services/06.png', import.meta.url)
    }
]
</script>

<template>
    <div class="container">
        <TitleComponent title="My Services" />
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <SkillCard v-for="(skills, index) in skills" :key="index" :item="skills"/>
        </div>

    </div>
</template>