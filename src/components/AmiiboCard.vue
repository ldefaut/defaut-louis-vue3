<template>
  <div class="col-4 col-12-medium">
    <section class="middle">
      <img :src="img" />
      <header>
        <h2>{{ character }}</h2>
      </header>
      <p>{{ gameSerie }}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    character: String,
    gameSerie: String,
    img: String,
  },
};
</script>

<style></style>
