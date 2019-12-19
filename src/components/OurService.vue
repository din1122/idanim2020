<template>
  <div>
    <v-container grid-list-xs grid-list-md fluid pa-0>
      <v-layout row wrap>
        <v-flex
          xs12
          xl6
          md6
          :class="{
            '': $vuetify.breakpoint.smAndDown,
            '': $vuetify.breakpoint.mdAndUp
          }"
          class="right-box pa-3"
        >
          <h2 class="right-box-title">שירות ומוצרים</h2>

          <ul v-for="(item, index) in items" :key="index">
            <v-flex ma-1 d-inline-flex>
              <v-icon large class="icon">check</v-icon>
              <li>{{ item.title }}</li>
            </v-flex>
          </ul>
        </v-flex>
        <v-flex pa-0 xs12 md6 xl6>
          <v-img
            :src="require('@/assets/service.jpg')"
            aspect-ratio="1.5"
          ></v-img>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex pa-0 xs12 md6 xl6>
          <v-img
            :src="require('@/assets/H5/h5-2.jpg')"
            cover
            aspect-ratio="1.5"
          ></v-img>
        </v-flex>
        <v-flex xs12 xl6 md6 class="right-box pa-3">
          <h2 class="right-box-title">אמנת השירות</h2>
          <p class="about-text">
            קבוצת עידנים רואה את נושא השירות ואיכות העבודה כיעד ראשון. החברות
            השונות מעסיקות מנהלי עבודה שכל מטרתם היא לפקח ולייעל את איכות העבודה
            והשרות שהקבוצה מעניקה ללקוחות השונים. עידנים עבודות ציבוריות בע"מ
            מפעילה רכבי טיאוט חדישים בגדלים שונים, מעסיקה מכונאים, מנהלים
            ועובדים מיומנים והכל בכדי לוודא שהעבודה תתנהל ברמה הגבוהה ביותר.
            עידנים תשתיות בע"מ המשווקת מטאטאי כביש וציוד ניקיון נוסף, מפעילה
            מערך שירות של מכונאים בעלי נסיון של שנים רבות. לרשות החברה עומד מוסך
            מצוייד היטב, המאוייש במכונאים ואנשי שירות ותיקים ומנוסים. בנוסף,
            מפעילה החברה ניידת שירות המאובזרת בציוד וכלים הטובים ביותר ומשמשת
            מעין מוסך נייד, כמו כן יש בניידת השירות מגוון עצום של חלקים המאפשר
            לבצע את הטיפולים והתיקונים הנדרשים במקום הימצאו של הכלי ובזמן הקצר
            ביותר. החברה מתחייבת להעניק שירות וטיפול ללא הגבלה לשביעות רצון
            הלקוח.
          </p>
          <v-flex text-xs-center>
            <span class="slogen display-1">"אנחנו תמיד משתדלים יותר"</span>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: " ייבוא ושיווק מכונות טיאוט בגדלים שונים" },
        { title: "אספקת כלים" },
        { title: "טיאוט כבישים , חניונים ומדרכות" },
        { title: "תחזוקה וטיפול במכונות טיאוט" }
      ]
    };
  }
};
</script>

<style scoped>
.right-box {
  background: #8bcc44;
}
.right-box-title {
  border-right: 7px solid #c8f18d;
  padding-right: 5px;
  font-size: 3em;
  line-height: 1.35;
  font-weight: 600;
  color: black;
  margin: 3%;
  width: 280px;
}
.slogen {
  text-align: center;
  font-weight: 700;
  color: #1b1afe;
}
.about-text {
  margin: 3%;
  color: black;
  font-size: 1.2em;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  color: black;
  font-size: 2em;
}
.icon {
  color: #c8f18d;
  float: right;
}
</style>
