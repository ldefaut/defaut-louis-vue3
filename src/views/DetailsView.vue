<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const amiibo = ref();
onBeforeMount(() => {
  axios
    .get("https://www.amiiboapi.com/api/amiibo/?tail=" + route.params.tail)
    .then((response) => {
      console.log(response.data.amiibo);
      amiibo.value = response.data.amiibo[0];
    });
});
</script>

<template>
  <section id="main">
    <div class="container">
      <div class="row">
        <div class="col-4 col-12-medium">
          <!-- Sidebar -->
          <section class="box">
            <header>
              <h3>Infos</h3>
            </header>
            <p>
              amiiboSeries: <b>{{ amiibo?.amiiboSeries }}</b> <br />
              character: {{ amiibo?.character }}<br />
              gameSeries: {{ amiibo?.gameSeries }}<br />
              type: {{ amiibo?.type }}
            </p>
          </section>
          <section class="box">
            <header>
              <h3>Dates sorties</h3>
            </header>

            <ul class="divided">
              <li v-for="date in amiibo?.release">{{ date }}</li>
            </ul>
          </section>
        </div>
        <div class="col-8 col-12-medium imp-medium">
          <!-- Content -->
          <article class="box post">
            <a :href="amiibo?.image" class="featured" target="_blank"
              ><img :src="amiibo?.image" alt=""
            /></a>
            <header>
              <h2>{{ amiibo?.name }}</h2>
              <p>{{ amiibo?.type }}</p>
            </header>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style></style>
