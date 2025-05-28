<template>
    <div class="container">
        <div class="text-center md:text-left flex h-[20vh] border-b-1 border-b-[#F97316]">
            <h3 class="text-3xl font-bold mb-4">Lets Connect here</h3>
            <a href="#"
                class="mt-4 inline-block bg-[#F97316] text-white px-6 py-2 rounded-full hover:bg-orange-500">Hire me
                ➤</a>
        </div>

        <div class="mx-auto grid sm:grid sm:grid-cols-1 md:grid-cols-4 gap-4 mt-6 py-8">
            <!-- Left Section -->
            <div class="text-center md:text-left">
                <img src="@/assets/images/logo.png" class="rounded-xl mb-6 mt-6 h-40" alt="Logo">
                <p>Hey, thanks for checking out my profile. I would greatly appreciate hearing from! Here are my social medias:</p>
                <div class="icon flex w-[150px] lg:w-[60%] py-6">
                    <i class="pi pi-instagram"></i>
                    <i class="pi pi-github"></i>
                    <i class="pi pi-linkedin"></i>
                    <i class="pi pi-envelope"></i>
                    <i class="pi pi-reddit"></i>
                </div>
            </div>

            <!-- Middle Section -->
            <div class="text-center">
                <h3 class="text-lg font-semibold mb-4 text-[#F97316]">Navigation</h3>
                <ul class="space-y-2">
                    <li><a href="#home" class="text-gray-400 hover:text-[#F97316]">Home</a></li>
                    <li><a href="#about" class="text-gray-400 hover:text-[#F97316]">About Us</a></li>
                    <li><a href="#skills" class="text-gray-400 hover:text-[#F97316]">Service</a></li>
                    <li><a href="#projects" class="text-gray-400 hover:text-[#F97316]">Projects</a></li>
                    <li><a href="#contact" class="text-gray-400 hover:text-[#F97316]">Contact Me</a></li>
                </ul>
            </div>

            <!-- Right Section -->
            <div class="text-center md:text-left">
                <h3 class="text-lg font-semibold mb-4 text-[#F97316]">Contact</h3>
                <p class="text-gray-400 mb-2">+250 791 646 583</p>
                <p class="text-gray-400 mb-2">sanrdushimimana@gmail.com</p>
                <p class="text-gray-400 mb-2">Kigali, Rwanda</p>
            </div>

            <!-- Ignored section -->
            <div class="">
                <h3 class="text-lg font-semibold mt-4 mb-2 text-[#F97316]">Get the latest information</h3>
                <div class="flex justify-around md:justify-end input-group">
                    <input type="email" placeholder="Email Address"
                        class="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none">
                    <button class="bg-[#F97316] text-white px-4 py-2 rounded-r-md hover:bg-orange-500">➤</button>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center text-gray-400 text-sm mb-6">
            <p>Made by Sandrine © 2025. All Rights Reserved.</p>
        </div>
    </div>
</template>

<style scoped>

@media (max-width: 768px) {
    .container {
    margin: 0 auto;
    padding: 20px;
    text-align: left;
    margin: 0;
}
.input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
}
}
</style>