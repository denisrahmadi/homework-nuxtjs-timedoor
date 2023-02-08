<template>
    <div>
        <!-- Video -->
        <div >
            <lite-youtube 
                :videoid="$route.params.detail.link" 
                playlabel="Play: Keynote (Google I/O '18)"
                class="mx-auto align-middle justify-center mt-6"
            ></lite-youtube>
        </div>
        <!-- Judul -->
        <p class="text-4xl font-bold mt-6">{{ $route.params.detail.title }}</p>
        <!-- Explain -->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil natus excepturi distinctio sapiente fuga blanditiis animi, enim, voluptates debitis rem eaque similique esse in repudiandae necessitatibus sequi inventore ipsa.</p>
    </div>
</template> 
<script>
export default {
}
</script>