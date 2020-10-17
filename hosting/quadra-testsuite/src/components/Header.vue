<!-- Ce Component est affiché en haut de la page -->

<template>
  <v-app-bar app style="background-color: rgb(44, 139, 205)">
    <v-row>
      <v-col md="2" class="to-hide" @click="gotoHome()">
        <span class="content-bar">
          <v-img
            src="https://firebasestorage.googleapis.com/v0/b/quadra-testsuite.appspot.com/o/affixe.png?alt=media&token=a5a9aef3-389e-4bc2-9f03-dd817b5f3dbc"
            max-width="150"
            max-height="40"
          >
          </v-img>
        </span>
        <v-divider
          class="mx-4"
          style="margin-left: 170px !important; background-color: white"
          vertical
        ></v-divider>
      </v-col>
      <v-col md="4"></v-col>
      <v-col md="5">
        <div class="content-bar content-center" style="top: 0px !important">
          <v-row style="width: 300px; flex: 0 0 30%">
            <v-col md="6">
              <v-avatar
                @click="gotoHome()"
                id="avt1"
                class="mr-0"
                color="primary"
                size="36"
              >
                <v-img
                  src="https://firebasestorage.googleapis.com/v0/b/quadra-testsuite.appspot.com/o/quadra.jpeg?alt=media&token=9001ecfa-df1d-495c-bc99-a578d326ae40"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col md="6" @click="gotoHome()">
              <v-row md="12" style="white-space: nowrap"
                ><span style="overflow: hidden">Quadra Diffusion</span>
                <v-icon style="color: white">mdi-chevron-down</v-icon></v-row
              >
              <v-row md="12" style="white-space: nowrap">Nord</v-row>
            </v-col>
          </v-row>
        </div>
        <v-divider
          style="
            display: block;
            position: relative;
            margin-left: 100% !important;
            background-color: white !important;
          "
          class="mx-4 mr-0"
          vertical
        ></v-divider>
      </v-col>
      <v-col md="1" class="to-hide">
        <v-avatar @click="gotoHome()" class="mr-0" color="primary" size="46">
          <v-img
            src="https://firebasestorage.googleapis.com/v0/b/quadra-testsuite.appspot.com/o/category%2F%20%20OqCoB4G5bPHXgVMLDy3L%2Fphoto.jpg?alt=media&token=da0d00b5-a8f0-4362-88df-ebc2264a5f64"
          ></v-img>
        </v-avatar>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      display: false,
    };
  },
  methods: {
    toggleDisplay() {
      console.log("Yes");
      this.display = !this.display;
    },
    gotoHome() {
      try {
        this.$router.replace({
          path: "/",
        });
      } catch (err) {
        console.log("Err => ", err);
      }
    },
  },
};
</script>

<style lang="scss">
.content-bar {
  display: block;
  position: absolute;
  top: 30%;
  color: whitesmoke;
}
#avt1 {
  display: inline-block;
  position: absolute;
  right: 55%;
}
.content-center {
  position: absolute;
  top: 0px !important;
  right: 15%;
}

@media (max-width: 960px) {
  .to-hide {
    display: none;
  }
}
</style>