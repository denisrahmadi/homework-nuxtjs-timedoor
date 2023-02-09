<template>
  <div >
    <div class="grid grid-cols-4 gap-3">
      <nuxt-link
        v-for="(classItem, index) in classData"
        :key="index"
        class="relative inline gap-3 rounded-xl border border-gray-100 p-8 shadow-xl"
        tag="a"
        to="#"
      >
        <span
          class="relative right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
        >
        {{ classItem.level }}
        </span>
        <img :src="classItem.imageLink" :alt="classItem.title" class="w-72 h-40">

        <div class="mt-4 text-gray-500 sm:pr-8">
          <!-- disini taro video youtubenya -->

          <h3 class="mt-4 text-xl font-bold text-gray-900">
            {{ classItem.title }}
          </h3>

          <p class="mt-2 hidden text-sm sm:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            adipisci quam iure quae reiciendis aut mollitia at sequi. Enim,
            harum.
          </p>
          <nuxt-link
            class="justify-center mt-6 inline-block rounded border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-indigo-500"
            tag="a"
            :to="{name: 'kelas-detail', params:{detail: classItem }}"
          >
            Watch Class
          </nuxt-link>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    classData(){
      return this.$store.getters.getClassData
    }
  }
};
</script>
<style></style>
