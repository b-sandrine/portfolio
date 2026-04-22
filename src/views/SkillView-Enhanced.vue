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
    <div class="skills-container">
        <div class="container">
            <TitleComponent title="My Services" class="title-section" />
            <div class="skills-grid fade-in-up">
                <div v-for="(skill, index) in skills" :key="index" class="skill-card-wrapper"
                    :style="{ '--stagger-delay': `${index * 0.1}s` }">
                    <SkillCard :item="skill" class="skill-card" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills-container {
    background: linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-secondary-active) 100%);
    border-radius: 20px;
    padding: 40px 30px;
    margin: 60px 0;
    position: relative;
    overflow: hidden;
    text-align: justify;
}

.skills-container::before {
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

.skills-container::after {
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

/* Skills Grid */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.skill-card-wrapper {
    animation: fadeInUp 0.8s ease-out;
    animation-delay: var(--stagger-delay);
}

.skill-card {
    height: 100%;
    text-align: justify;
}

/* Responsive */
@media (max-width: 1024px) {
    .skills-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
    }
}

@media (max-width: 768px) {
    .skills-container {
        margin: 30px 0;
        padding: 30px 20px;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
}

@media (max-width: 480px) {
    .skills-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }
}
</style>