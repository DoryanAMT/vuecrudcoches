<template>
  <div>
    <router-link class="btn btn-dark" to="/" >Back to list</router-link>
    <h1>Details Coche</h1>
    
    <div class="card" style="width: 18rem">
      <img :src="coche.imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Marca: {{ coche.marca }}</h5>
        <h5 class="card-title">Modelo: {{ coche.modelo }}</h5>
        <h5 class="card-title">Conductor: {{ coche.conductor }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCoches from "./../services/ServiceCoches";
const service = new ServiceCoches();

export default {
  name: "DetailsCoche",
  data() {
    return {
      coche: [],
    };
  },
  mounted() {
    let idCoche = this.$route.params.id;
    service.findCoche(idCoche).then((result) => {
      this.coche = result;
    });
  },
};
</script>