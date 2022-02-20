<script>
import { ref } from "vue"

export default {
  setup() {
    const galleries = ref([])

    const fetchImage = () => {
      fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_ACCESS_KEY}&per_page=30`)
        .then(res => res.json())
        .then(response => galleries.value = response)
        .catch(error => console.log(error))
    }

    fetchImage()

    return { galleries } 
  }
}
</script>

<template>
  <div class="container">
    <h1>My Gallery</h1>
    <div class="container-photo">
      <figure v-for="image in galleries" :key="image.id" >
        <img v-scrollanimation :src="image.urls.regular" :alt="image.alt_description" />
      </figure>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 48rem;
  margin: 0 auto;
}

.container-photo {
  column-count: 2;
}

@media (min-width: 768px) {
  .container-photo {
    column-count: 3;
    gap: 15px;
  }
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

img {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}

.before-enter {
  transform: translateY(50px);
  opacity: 0;
}

.enter {
  transform: translateX(0);
  opacity: 1;
  transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
