<template>
  <div>
    <h1>Create Coche</h1>
    <form v-on:submit.prevent="InsertarCoche()">
      <label>Id Coche</label>
      <input type="number" v-model="coche.idCoche" class="form form-control" />
      <label>Marca: </label>
      <input type="text" v-model="coche.marca" class="form form-control" />
      <label>Modelo: </label>
      <input type="text" v-model="coche.modelo" class="form form-control" />
      <label>Conductor: </label>
      <input type="text" v-model="coche.conductor" class="form form-control" />
      <label>Imagen: </label>
      <input type="text" v-model="coche.imagen" class="form form-control" />
      <button class="btn btn-success">Insertar</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from "./../services/ServiceCoches";
const service = new ServiceCoches();
export default {
  name: "CreateCoche",
  data() {
    return {
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
    };
  },
  methods: {
    InsertarCoche() {
      service.InsertCoche(this.coche).then((result) => {
        console.log("Coche insertado " + result);
        this.$router.push("/");
      });
    },
    
  },
};
</script>