<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";

const amiibos = ref([]);

onBeforeMount(() => {
  axios.get("https://www.amiiboapi.com/api/amiibo").then((response) => {
    amiibos.value = response.data.amiibo;
  });
});
</script>

<template>
  <section id="main">
    <div class="container">
      <!-- Content -->
      <article class="box post">
        <header>
          <h2>Ma Collection</h2>
          <p>(ici le nombre d'amiibo)</p>
        </header>
        <table>
          <tr>
            <th>Character</th>
            <th>game Series</th>
            <th>Action</th>
          </tr>
          <tr v-for="amiibo in amiibos" :key="amiibo.tail">
            <td>{{ amiibo.character }}</td>
            <td>{{ amiibo.gameSeries }}</td>
            <td>
              <router-link
                :to="{ name: 'details', params: { tail: amiibo.tail } }"
                >Voir</router-link
              >
            </td>
          </tr>
        </table>
      </article>
    </div>
  </section>
</template>

<script></script>

<style></style>
