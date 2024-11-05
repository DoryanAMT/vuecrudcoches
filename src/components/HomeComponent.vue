<template>
  <div id="cartas">
    <h1>Home Component</h1>
    <div class="card" style="width: 18rem; heigth:18rem" v-for="coche in coches" :key="coche">
      <img :src="coche.imagen" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Marca: {{ coche.marca }}</h5>
        <h5 class="card-title">Modelo: {{ coche.modelo }}</h5>
        <h5 class="card-title">Conductor: {{ coche.conductor }}</h5>

        <router-link
          :to="'/detailscoche/' + coche.idCoche"
          class="btn btn-info"
          >detalle</router-link
        >
        
        <router-link
          :to="'/updatecoche/' + coche.idCoche"
          class="btn btn-warning"
          >Editar</router-link
        >
        <button @click="deleteCoche(coche.idCoche)" class="btn btn-danger">
        Eliminar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCoches from "./../services/ServiceCoches";
const service = new ServiceCoches();

import Swal from 'sweetalert2'

export default {
  name: "HomeComponent",
  data() {
    return {
      coches: [],
    };
  },
  methods: {
    deleteCoche(idCoche) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
            service.deleteCoche(idCoche).then((result) => {
                console.log("coche borrado: "+result);
                this.$router.push("/")
            } )

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    },
  },
  mounted() {
    service.getCoches().then((result) => {
      this.coches = result;
    });
  },
};
</script>

<style >
.card {
  display: inline-flex;
}
</style>