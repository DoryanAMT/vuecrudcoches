<template>
  <div>
    <h1>Update Coche</h1>
    <form v-if="coche" v-on:submit.prevent="updateCoche()">
      <label>Id Coche</label>
      <input type="number" v-model="coche.iCoche" class="form form-control" disabled/>
      <label>Marca: </label>
      <input type="text" v-model="coche.marca" class="form form-control" />
      <label>Modelo: </label>
      <input type="text" v-model="coche.modelo" class="form form-control" />
      <label>Conductor: </label>
      <input type="text" v-model="coche.conductor" class="form form-control" />
      <label>Imagen: </label>
      <input type="text" v-model="coche.imagen" class="form form-control" />
      <button class="btn btn-success">Actualizar</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from "./../services/ServiceCoches";
const service = new ServiceCoches();
export default {
  name: "UpdateCoche",
  data() {
    return {
      coche: null,
    };
  },
  methods: {
    updateCoche() {
      service.updateCoche(this.coche).then((result) => {
        console.log("coche actualizado: " + result);
        this.$router.push("/");
      });
    },
  },
  mounted() {
    let idCoche = this.$route.params.id;
    service.findCoche(idCoche).then((result) => {
      this.coche = result;
      console.log(result);
    });
  },
};
</script>