<template>
  <div>
    <div class="text-4xl right-[50px] bottom-[56px] fixed z-50">
      <nuxt-link
        class="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-white bg-emerald-500 focus:outline-none focus:ring active:text-red-500"
        to="/addClass"
      >
        <span
          class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
        >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#000"
        class="h-4 w-4"
      >
        <path
          d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
        />
      </svg>
          <!-- <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg> -->
        </span>

        <span class="text-sm font-medium transition-all group-hover:mr-4">
          Add Class
        </span>
      </nuxt-link>
    </div>
    <ClassItem />
  </div>
</template>
<script>
import ClassItem from "./ClassItem.vue";
export default {
  components: {
    ClassItem,
  },
};
</script>
<style></style>
