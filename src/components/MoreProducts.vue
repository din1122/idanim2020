<template>
  <div>
    <v-container grid-list-xs grid-list-md>
      <v-layout justify-space-around row wrap>
        <v-flex xs12 xl4 md5>
          <v-card class="green-bg">
            <div class="img-box">
              <v-img
                @click="dialog4 = true"
                :src="require('@/assets/cart/1.jpg')"
                aspect-ratio="1.5"
                class="article-img"
              ></v-img>
            </div>
            <v-card-title>
              <span class="product-title">עגלות לטיאטוא מדרכות</span>
            </v-card-title>
            <v-card-text pa-0>
              <v-flex white--text xs12 pa-2 class="npm">
                <span>
                  מגוון רחב של עגלות לשימוש ממושך עמידות לכל פגעי מזג אויר
                  העגלות כוללות מתקן מיוחד למטאטא וליעה. ניתן לקבלן בגדלים
                  ובצבעים שונים.
                </span>
                <v-flex xs12 text-xs-left>
                  <a @click="dialog4 = true">
                    <p class="pa-2">קרא עוד</p>
                  </a>
                </v-flex>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-dialog v-model="dialog4" hide-overlay>
          <v-card>
            <v-toolbar>
              <v-toolbar-title>
                <span class="black--text">עגלות לטיאטוא מדרכות</span>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-icon @click="dialog4 = false">close</v-icon>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
              <v-container>
                <v-flex xs12 xl8 ma-auto>
                  <v-img
                    :src="require('@/assets/cart/1.jpg')"
                    aspect-ratio="2"
                  ></v-img>
                </v-flex>
                <v-flex xs12 xl8 ma-auto>
                  <span class="display-2">עגלות לטיאטוא מדרכות</span>
                  <p>
                    מגוון רחב של עגלות לשימוש ממושך עמידות לכל פגעי מזג אויר
                    העגלות כוללות מתקן מיוחד למטאטא וליעה. ניתן לקבלן בגדלים
                    ובצבעים שונים.
                  </p>
                  <v-flex
                    :class="{
                      title: $vuetify.breakpoint.smAndDown,
                      'display-1': $vuetify.breakpoint.mdAndUp
                    }"
                  >
                    <ul>
                      <li>
                        <strong>מיכל עם מכסה בנפח של 100 ליטר.</strong>
                      </li>
                      <li>
                        <strong
                          >מיכל אחורי נוסף עם מכסה בנפח של 30 ליטר.</strong
                        >
                      </li>
                      <li>
                        <strong
                          >מיכל מעוצב לאיכסון המטאטא והיעה מפלסטיק.</strong
                        >
                      </li>
                      <li>
                        <strong
                          >מסגרת ברזל קל בקוטר של 25 מ"מ מצופה בצבע אלקטרוסטטי
                          מיוחד נגד חלודה.</strong
                        >
                      </li>
                      <li>
                        <strong
                          >גלגלים קדמיים בקוטר 300 מ"מ מפלדה מגולוונת מצופים
                          בגומי שחור גמיש.</strong
                        >
                      </li>
                      <li>
                        <strong
                          >גלגלים אחוריים בקוטר 100 מ"מ מפלדה מגולוונת מצופים
                          בגומי שחור גמיש.</strong
                        >
                      </li>
                      <li>
                        <strong>2 ידיות מפלסטיק מוקשה.</strong>
                      </li>
                      <li>
                        <strong
                          >ניתן לקבל את המכסים ואת מיכל האיכסון למטאטא וליעה
                          בצבעים שונים.</strong
                        >
                      </li>
                    </ul>
                  </v-flex>
                  <v-img
                    :src="require('@/assets/cart/2.jpg')"
                    alt="idanim-h4"
                  ></v-img>
                  <v-img
                    :src="require('@/assets/cart/3.jpg')"
                    alt="idanim-h4"
                  ></v-img>
                  <v-img
                    :src="require('@/assets/cart/size.jpg')"
                    alt="idanim-h4"
                  ></v-img>
                </v-flex>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false
    };
  }
};
</script>
<style scoped>
.green-bg {
  background: #a3d855 !important;
}
.article-img {
  width: 100%;
  height: 270px;
  transition: all 0.2s ease-out;
  object-fit: cover;
  cursor: pointer;
}

.article-img:hover {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  transition: all 0.2s ease;
  cursor: pointer;
}
.img-box {
  overflow: hidden;
  transition: all 0.2s ease-out;
  box-shadow: -15px 10px 30px -10px #00000099;
  height: 95%;
}
</style>
