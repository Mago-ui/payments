<template>
  <div>
    <header class="header">
      <div class="headerPayment">
        <router-link to="/" style="text-decoration: none">
          <div class="headerPayment-arrow">
            <img class="arrow" width="23px" src="../assets/arrow.png" />
          </div>
        </router-link>
        <h1 class="header-style">Recargas</h1>
      </div>
    </header>

    <div class="margen">
      <p>Buscar Empresa</p>
      <div class="search">
        <input class="input" type="text" placeholder="ej. Culqui" />
        <img class="search-img" src="../assets/buscar.png" />
      </div>
    </div>

    <div class="margen">
      <div class="option-recharge">
        <div class="option">
          <div class="center">♡</div>
          <p>Todas</p>
        </div>
        <div class="option">
          <div class="center">♡</div>
          <p>Favoritas</p>
        </div>
        <div class="option">
          <div class="center">♡</div>
          <p>Telefonía</p>
        </div>
        <div class="option">
          <div class="center">♡</div>
          <p>otras</p>
        </div>
      </div>
    </div>

    <section class="margen">
      <div v-for="item in providers">
        <div class="company">
          <div class="company-product">
            <img width="23px" :src="item.image" />
            <p>{{ item.company }}</p>
          </div>
          <div>
            <img width="26px" src="../assets/estrella.png" />
          </div>
        </div>
        <hr style="border-top: 1px solid #fdfdfd" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import providers from "../utils/providers.json";
export default {
  data() {
    return {
      providers: providers.data.companies,
    };
  },
  mounted() {
    //*------- Llamada Axios del servicio getProviders con autenticación-----*//
    // axios
    //   .get(
    //     "http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com/getProviders",
    //     {
    //       headers: {
    //         Authorization:
    //           "Bearer " +
    //           "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI",
    //         "Access-Control-Allow-Origin": "*",
    //         origin: "x-requested-with",
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
};
</script>

<style>
.margen {
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 16px;
}

.margen p {
  font-size: 13px;
  font-weight: 600;
}
.option p {
  font-size: 16px;
  font-weight: 500;
}
.input {
  height: 43px;
  background: #f7f7f7;
  border: 1px solid #fdfdfd;
  border-radius: 3px;
  width: 100%;
  padding-left: 13px;
  outline: none;
}
.search {
  display: flex;
  align-items: center;
}

.search-img {
  background: #f7f7f7;
  padding: 14.1px;
  margin-left: -1px;
  width: 22px;
}
.option-recharge {
  display: flex;
  grid-gap: 12px;
  overflow-x: auto;
}

.option {
  display: flex;
  border: 1px solid #d0d0d0;
  border-radius: 23px;
  width: max-content;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
  padding-bottom: 2px;
}
.company {
  display: flex;
  justify-content: space-between;
  height: 34px;
  align-items: center;
}
.company-product {
  display: flex;
  align-items: center;
}

.arrow {
  width: 34px;
  position: absolute;
  top: 20px;
  height: 43px;
}

::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  background: #ffff;
}

::-webkit-scrollbar-thumb {
  background-color: #ffff;
  border-radius: 20px;
  border: 0px solid #ffff;
}
</style>
