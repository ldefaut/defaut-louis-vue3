<script setup>
import AmiiboCard from "../components/AmiiboCard.vue";
import axios from "axios";
import { ref, onBeforeMount } from "vue";

const amiibos = ref([]);

onBeforeMount(() => {
  axios.get("https://www.amiiboapi.com/api/amiibo").then((response) => {
    amiibos.value = response.data.amiibo.slice(0, 3);
  });
});
</script>

<template>
  <main>
    <div id="page-wrapper">
      <!-- Header -->
      <!-- Intro -->
      <section id="intro" class="container">
        <div class="row">
          <AmiiboCard
            v-for="amiibo in amiibos"
            :img="amiibo?.image"
            :character="amiibo.character"
            :gameSerie="amiibo.gameSeries"
            :key="amiibo.tail"
          />
        </div>
        <footer>
          <ul class="actions">
            <li>
              <router-link class="button large" to="list"
                >Liste complete</router-link
              >
            </li>
          </ul>
        </footer>
      </section>
    </div>
  </main>
</template>
