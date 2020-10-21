<!-- Ce Component est affiché en haut de la page -->

<template>
  <v-app-bar px-0 py-0 app style="background-color: rgb(44, 139, 205); position: static !important;">
    <v-row class="fill-height">
      <v-col @click="gotoHome()" md="2" id="hd-lt" class="ma-0 py-2 px-0">
        <v-img
          class="d-inline-block"
          max-width="150"
          src="../assets/images/affixe20.svg"
        >
        </v-img>
      </v-col>
      <v-col md="9" id="hd-ct" class="py-2">
        <div class="float-right">
          <v-row>
            <v-col class="px-5 py-2">
              <v-avatar
                @click="gotoHome()"
                id="avt1"
                class="mr-0"
                color="primary"
                size="26"
              >
                <v-img
                  src="https://firebasestorage.googleapis.com/v0/b/quadra-testsuite.appspot.com/o/quadra.jpeg?alt=media&token=9001ecfa-df1d-495c-bc99-a578d326ae40"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col class="pa-0">
              <v-row>
                <v-col class="pa-0">
                  <div class="d-inline text-truncate white--text">
                    Quadra Diffusion <v-icon color="white" size=15>mdi-chevron-down</v-icon>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="pa-0 text-left caption font-weight-thin white--text"
                  >Nord</v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col md="1" id="hd-rt" class="pa-0">
        <v-row class="mx-0 fill-height">
          <v-col class="py-2"
            ><v-divider
              class="mx-0"
              style="background-color: white"
              vertical
            ></v-divider>
          </v-col>
          <v-col class="py-4 px-0"> <v-icon color="white" size="15">mdi-help-circle</v-icon> </v-col>

          <v-col class="py-4 px-1"
            ><v-avatar
              @click="gotoHome()"
              id="avt1"
              class="mr-0 my-auto"
              color="primary"
              size="26"
            >
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/quadra-testsuite.appspot.com/o/quadra.jpeg?alt=media&token=9001ecfa-df1d-495c-bc99-a578d326ae40"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </v-col>
    </v-row>    
    <!-- <v-row>
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
    </v-row> -->
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
.v-toolbar__content {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
#hd-ct, #hd-lt {
    background-image: linear-gradient(to right, #2079B7, #3598DC);
}

#hd-rt {
  background-color: #3598DC !important;
}
// .content-bar {
//   display: block;
//   position: absolute;
//   top: 30%;
//   color: whitesmoke;
// }
// #avt1 {
//   display: inline-block;
//   position: absolute;
//   right: 55%;
// }
// .content-center {
//   position: absolute;
//   top: 0px !important;
//   right: 15%;
// }

// @media (max-width: 960px) {
//   .to-hide {
//     display: none;
//   }
// }
</style>