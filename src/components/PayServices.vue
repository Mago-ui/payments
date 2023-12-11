<template>
  <div>
    <header class="header">
      <div class="headerPayment">
        <div class="headerPayment-arrow">
          <img class="arrow" width="23px" src="../assets/arrow.png" />
        </div>
        <h1 class="header-style">Recargas y Pagos</h1>
      </div>
    </header>
    <section>
      <div class="sectionPayment">
        <div class="sectionPayment-virtual">
          <p class="sectionPayment-text">Saldo Virtual</p>
          <img
            style="margin-left: 10px"
            width="18px"
            src="../assets/advertencia.png"
          />
        </div>

        <div class="center">
          <p class="sectionPayment-saldo">S/ {{ this.balance }}</p>
          <img width="25px;" src="../assets/cargando.png" />
        </div>
        <div class="sectionPayment-reacharge">
          <div class="center">♡</div>
          <p>¿Cómo cargar mi saldo virtual?</p>
        </div>
        <div class="sectionPayment-cod">
          <p>
            Código para cargar tu saldo:
            <span style="color: #fea4b2">{123456789}</span>
          </p>
        </div>
      </div>
    </section>

    <section class="separation">
      <hr style="border-top: 1px solid #fdfdfd" />
      <div class="content">
        <div class="item">
          <img
            width="32px;"
            style="padding-right: 12px"
            src="../assets/cargando2.png"
          />
          <router-link to="/recargas" style="text-decoration: none">
            <p style="font-weight: 600">Recargas</p></router-link
          >
        </div>
        <div class="item">
          <img
            width="32px;"
            style="padding-right: 12px"
            src="../assets/cargando2.png"
          />
          <p style="font-weight: 600">Pagos y Servicios</p>
        </div>
        <div class="item">
          <img
            width="32px;"
            style="padding-right: 12px"
            src="../assets/cargando2.png"
          />
          <p style="font-weight: 600">Historial de Ganancias y Operaciones</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import balance from "../utils/balance.json";
export default {
  data() {
    return {
      balance: balance.data.balanceCommerce,
    };
  },
  mounted() {
    //*------- Llamada Axios del servicio getActualBalance con autenticación-----*//
    // axios
    //   .get(
    //     "http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com/getActualBalance",
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
.item {
  background: #f0f0f0;
  display: flex;
  align-items: center;
  padding-left: 19px;
  border-radius: 5px;
  cursor: pointer;
}
.item:hover {
  padding: 40px;
  background: #fff2fc;
  margin-top: -2px;
}
.content {
  display: grid;
  padding-top: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 69px 69px 69px;
  grid-gap: 20px;
}
.separation {
  padding-left: 21px;
  padding-right: 21px;
}
.center {
  display: flex;
  align-items: center;
}
.header {
  background: black;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.headerPayment {
  display: flex;
  align-items: center;
  height: 81px;
}

.headerPayment-arrow {
  color: white;
  font-size: 25px;
  padding-left: 19px;
}

.header-style {
  width: 87%;
  text-align: center;
  color: white;
  font-size: 21px;
  font-family: sans-serif;
}

.sectionPayment {
  padding-left: 37px;
  padding-right: 37px;
  padding-top: 26px;
}

.sectionPayment-text {
  font-size: 16px;
  font-weight: 500;
  font-family: sans-serif;
}

.sectionPayment-virtual {
  display: flex;
  align-items: center;
}

.sectionPayment-saldo {
  font-size: 2rem;
  font-weight: 600;
}

.sectionPayment-reacharge {
  display: flex;
  border: 1px solid #d0d0d0;
  border-radius: 23px;
  width: max-content;
  padding-left: 12px;
  padding-right: 12px;
}

.sectionPayment-cod {
  padding-top: 21px;
  display: flex;
  align-items: center;
  padding-bottom: 21px;
}

.arrow {
  width: 34px;
  position: absolute;
  top: 20px;
  height: 43px;
}
</style>
