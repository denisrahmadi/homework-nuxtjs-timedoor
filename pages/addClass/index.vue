<template>
  <div>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Add Class</h1>
      </div>

      <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="text"
              class="w-full rounded-lg border-8 p-4 pr-12 text-sm shadow-sm focus:border-emerald-500"
              placeholder="Title"
              v-model="newClassItem.title"
            />
            <input
              type="text"
              class="w-full rounded-lg border-8 p-4 pr-12 text-sm shadow-sm focus:border-emerald-500"
              placeholder="Id Link Video"
              v-model="newClassItem.link"
            />
            <input
              type="text"
              class="w-full rounded-lg border-8 p-4 pr-12 text-sm shadow-sm focus:border-emerald-500"
              placeholder="Image Link"
              v-model="newClassItem.imageLink"
            />
            <input
              type="text"
              class="w-full rounded-lg border-8 p-4 pr-12 text-sm shadow-sm focus:border-emerald-500"
              placeholder="Price"
              v-model="newClassItem.price"
            />
            <input
              type="text"
              class="w-full rounded-lg border-8 p-4 pr-12 text-sm shadow-sm focus:border-emerald-500"
              placeholder="level"
              v-model="newClassItem.level"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="ml-3 inline-block rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-white"
            @click.prevent="addNewClassItem"
          >
            Add Class
          </button>
        </div>
      </form>
      {{ newClassItem }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newClassItem: {
        id: null,
        title: "",
        link: "",
        imageLink: "",
        price: null,
        level: "",
      },
    };
  },
  methods: {
    addNewClassItem(){
        let newId = this.$store.getters.lastIdClassItem + 1
        this.$store.commit('addClassItem', {id: newId, ...this.newClassItem})
        this.$router.push("/kelas")
    }
  },
};
</script>
<style></style>
