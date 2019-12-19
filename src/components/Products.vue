<template>
  <v-container grid-list-xs grid-list-md fluid>
    <v-layout
      row
      wrap
      justify-space-around
      :class="{
        ' ': $vuetify.breakpoint.smAndDown,
        'px-5': $vuetify.breakpoint.mdAndUp
      }"
    >
      <v-flex xs12 pa-5 class="npm3">
        <span class="section-title">הדגמים שלנו</span>
      </v-flex>

      <v-flex xs12 pa-5 class="npm">
        <v-layout row wrap>
          <v-flex xs12 xl3 md4 @click="dialog2 = true">
            <div class="img-box">
              <img
                :src="require('@/assets/H1/h1-0.jpg')"
                alt="home-1-idanim"
                class="article-img"
              />
            </div>
          </v-flex>
          <v-flex xs12 xl8 md8 class="article-text npm" pl-3>
            <div class="fade-prod-bg">
              <span class="product-title"
                >דגם H1 תוצרת טיסאן
                <br />
              </span>
            </div>
            <v-layout column wrap justify-space-between>
              <v-flex>
                <p class="caption-text" @click="dialog2 = true">
                  מכונת טיאוט מדרכות וכבישים קטנה במיוחד.
                </p>
              </v-flex>
              <v-flex>
                <p @click="dialog2 = true" class="details-link">
                  לפרטים נוספים..
                </p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-dialog @keydown.esc="dialog2 = false" v-model="dialog2" hide-overlay>
        <v-toolbar fixed>
          <v-toolbar-title>
            <span class="black--text">דגם H1 מתוצרת טיסאן</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-icon @click="dialog2 = false">close</v-icon>
          </v-toolbar-items>
        </v-toolbar>
        <v-card>
          <v-card-text>
            <v-container>
              <v-flex xs12 xl8 ma-auto>
                <v-img
                  :src="require('@/assets/H1/h1-0.jpg')"
                  aspect-ratio="1"
                ></v-img>
              </v-flex>
              <v-flex xs12 xl8 ma-auto>
                <span class="display-1">דגם H1 תוצרת "טיסאן"</span>
                <div class="stats-text-dialog">
                  <table dir="rtl">
                    <tr>
                      <td>הכלי</td>
                      <td>מטאטא כבישים ומדרכות</td>
                    </tr>
                    <tr>
                      <td>דגם</td>
                      <td>H1 טיסאן</td>
                    </tr>
                    <tr>
                      <td>מהירות נסיעה</td>
                      <td>0-24 קמ"ש</td>
                    </tr>
                    <tr>
                      <td>קיבולת מיכל האשפה</td>
                      <td>0.55 מ"ק</td>
                    </tr>
                    <tr>
                      <td>מנוע</td>
                      <td>דיזל</td>
                    </tr>
                    <tr>
                      <td>יכולת טיפוס</td>
                      <td>22 מעלות</td>
                    </tr>
                    <tr>
                      <td>2 מברשות צדדיות</td>
                    </tr>
                    <tr>
                      אופציה למברשת קדמית נוספת מתכווננת
                    </tr>
                    <tr>
                      מערכת מתזים למניעת אבק במהלך הטיאוט
                    </tr>
                  </table>
                </div>
                <v-img
                  :src="require('@/assets/H1/h1-1.jpg')"
                  alt="home-1-idanim"
                ></v-img>
                <v-img
                  :src="require('@/assets/H1/h1-2.jpg')"
                  alt="home-1-idanim"
                ></v-img>
              </v-flex>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-flex xs12 pa-5 class="npm">
        <v-layout row wrap>
          <v-flex xs12 xl3 md4 @click="dialog1 = true" class="r-product">
            <div class="img-box">
              <img
                :src="require('@/assets/main.jpg')"
                alt="home-1-model"
                class="article-img"
              />
            </div>
          </v-flex>
          <v-flex xs12 xl8 md8 class="article-text npm" pr-3>
            <div class="fade-prod-bg-l text-xs-left">
              <span class="product-title">דגם H3 תוצרת טיסאן</span>
            </div>
            <v-layout column wrap justify-space-between>
              <v-flex>
                <p class="caption-text" @click="dialog1 = true">
                  מטאטא כבישים הידרוסטטי , הכלי מיוצר בנפחים שונים, 3.2 – 3.5 –
                  4 מ"ק מנוע פרקינס, משאבות הידראוליות מתוצרת BOSCH הכלי צר
                  ומתאים במיוחד לרחובות צרים ואזורים צפופים. כולל 4 מברשות הנעות
                  לכל הכיוונים ופיית יניקה בעלת כושר יניקה גבוה במיוחד
                </p>
              </v-flex>
              <v-flex>
                <p @click="dialog1 = true" class="details-link">
                  לפרטים נוספים..
                </p>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 xl3 md4 @click="dialog1 = true" class="l-product">
            <div class="img-box">
              <img
                :src="require('@/assets/H3/h3-0.jpg')"
                alt="home-1-idanim"
                class="article-img"
              />
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-dialog @keydown.esc="dialog1 = false" v-model="dialog1" hide-overlay>
        <v-card>
          <v-toolbar fixed>
            <v-toolbar-title>
              <span class="black--text">H3 - מפרט טכני</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-icon @click="dialog1 = false">close</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-flex xs12 xl8 ma-auto>
                <v-img :src="require('@/assets/H3/h3-0.jpg')"></v-img>
              </v-flex>
              <v-flex xs12 xl8 ma-auto>
                <span class="display-1">דגם H3 מתוצרת "טיסאן"</span>
                <p style="font-size:1.8em;">
                  מטאטא כבישים הידרוסטטי , הכלי מיוצר בנפחים שונים, 3.2 – 3.5 –
                  4 מ"קמ מנוע פרקינס, משאבות הידראוליות מתוצרת BOSCH הכלי צר
                  ומתאים במיוחד לרחובות צרים ואזורים צפופים. כולל 4 מברשות הנעות
                  לכל הכיוונים ופיית יניקה בעלת כושר יניקה גבוה במיוחד, מתזי
                  מיים הממוקמים בחזית הכלי מפזרים רסס מיים כדי לספוג את האבק
                  בזמן פעולת הטיאוט. הH3 כולל מערכת נוספת לשטיפה בלחץ עם צינור
                  באורך של 15 מטר ואקדח שטיפה בלחץ גבוה. המערכת מורכבת על גג
                  הכלי ומאפשרת שטיפה בכל הכיוונים. תא נהג פנורמי, מבודד מפגעי
                  מזג אויר, רעשים, אבק וגזי פליטה. תא הנהג כולל מערכת מיזוג
                  אויר, כיסא נהג קפיצי, מתכוונן ונוח במיוחד, רדיו ומצלמה אחורית
                  עם מסך צבעוני. וכן מערכת שליטה ותפעול של המברשות, השטיפה
                  וריקון מיכל האשפה.
                </p>

                <h2>נתונים כללים של הכלי</h2>
                <div class="stats-text-dialog">
                  <table dir="rtl">
                    <tr>
                      <td>הכלי</td>
                      <td>טיסאן מטאטא כבישים הידרוסטטי</td>
                    </tr>
                    <tr>
                      <td>דגם</td>
                      <td>H3 טיסאן</td>
                    </tr>
                    <tr>
                      <td>אורך הכלי</td>
                      <td>5200 מ"מ</td>
                    </tr>
                    <tr>
                      <td>רוחב הכלי</td>
                      <td>1300 מ"מ כולל המברשות 1600 מ"מ</td>
                    </tr>
                    <tr>
                      <td>נפח תא אשפה</td>
                      <td>3.2 – 3.5 – 4 מ"ק</td>
                    </tr>
                    <tr>
                      <td>נפח מיכל מיים</td>
                      <td>400 ליטר</td>
                    </tr>
                    <tr>
                      <td>קוטר מברשות</td>
                      <td>600 מ"מ</td>
                    </tr>
                    <tr>
                      <td>מהירות סיבוב מברשות</td>
                      <td>30-150 סל"ד</td>
                    </tr>
                  </table>

                  <h2>נתוני מנוע</h2>

                  <table>
                    <tr>
                      <td>מנוע</td>
                      <td>פרקינס</td>
                    </tr>
                    <tr>
                      <td>עוצמה</td>
                      <td>101 כ"ס</td>
                    </tr>
                    <tr>
                      <td>מס' צילינדרים</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>נפח כללי</td>
                      <td>4.4 ליטר</td>
                    </tr>
                    <tr>
                      <td>יחס קומפרסיה</td>
                      <td>16.2:1</td>
                    </tr>
                    <tr>
                      <td>קירור מים</td>
                    </tr>
                    <tr>
                      <td>צריכת דלק</td>
                      <td>173 גרם/קילוואט</td>
                    </tr>
                  </table>
                </div>
                <v-flex>
                  <h3>סרטונים</h3>
                  <a href="https://www.youtube.com/watch?v=ZDpFsBsEEiE"
                    >סרטון 1</a
                  >
                  <a href="https://www.youtube.com/watch?v=q3j2xfzalU4"
                    >סרטון 2</a
                  >
                  <a href="https://www.youtube.com/watch?v=Lrcw8R13Als"
                    >סרטון 3</a
                  >
                </v-flex>
                <v-img :src="require('@/assets/H3/stats.png')"></v-img>
                <v-img :src="require('@/assets/H3/h3-1.jpg')"></v-img>
                <v-img :src="require('@/assets/H3/h3-2.jpg')"></v-img>
              </v-flex>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-flex xs12 pa-5 class="npm">
        <v-layout row wrap>
          <v-flex xs12 xl3 md4 @click="dialogH45 = true">
            <div class="img-box">
              <img
                :src="require('@/assets/H3c/1.jpg')"
                alt="home-1-H5"
                class="article-img"
              />
            </div>
          </v-flex>
          <v-flex xs12 xl8 md8 class="article-text npm" pr-3>
            <div class="fade-prod-bg">
              <span class="product-title">דגם H3 מכונת קירצוף ושטיפה</span>
            </div>
            <v-layout column wrap justify-space-between>
              <v-flex>
                <p class="caption-text" @click="dialogH45 = true">
                  מכונת קירצוף ושטיפה בלחץ הידרוסטטית , מנוע פרקינס או איווקו,
                  משאבות הידראוליות מתוצרת .BOSCH הנעה אחורית.
                </p>
              </v-flex>

              <v-flex>
                <p @click="dialogH45 = true" class="details-link">
                  לפרטים נוספים..
                </p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-dialog
        @keydown.esc="dialogH45 = false"
        v-model="dialogH45"
        hide-overlay
      >
        <!-- H4 -->
        <v-card>
          <v-card-title>
            <v-toolbar fixed>
              <v-toolbar-title>
                <span class="black--text">H3 מכונת קירצוף ושטיפה</span>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-icon @click="dialogH45 = false">close</v-icon>
              </v-toolbar-items>
            </v-toolbar>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-flex xs12 xl8 ma-auto>
                <v-img
                  :src="require('@/assets/H3c/1.jpg')"
                  aspect-ratio="2"
                ></v-img>
              </v-flex>
              <v-flex xs12 xl8 ma-auto>
                <span class="display-2">H3 מכונת קירצוף ושטיפה</span>

                <ul style="font-size:1.8em;">
                  <li>4X4.</li>
                  <li>היגוי אחורי.</li>
                  <li>הגה שמאלי.</li>
                  <li>
                    הליקופטר לקירצוף ידני בקוטר של 75 ס"מ שיותקן על מנשא אחורי.
                  </li>
                  <li>מוט שטיפה קדמי לרוחב המכונה.</li>
                  <li>
                    תא נהג עם חלונות פנורמיים, שני מושבים, כסא הנהג הידראולי
                    מתכוונן נוח במיוחד.
                  </li>
                  <li>
                    מצלמה קידמית ומצלמה אחורית עם שני מסכים צבעוניים בתא הנהג.
                  </li>
                  <li>רוחב שטיפה &ndash; 130 ס"מ.</li>
                  <li>
                    זרוע קירצוף ושטיפה קדמית הכוללת שני משטחי קירצוף עגולים עם
                    תנועה ימינה ושמאלה של זרוע הקירצוף והשטיפה.
                  </li>
                  <li>
                    מערכת שטיפה בלחץ נוספת עם צינור באורך של 50 מטר ממוקמת כך
                    שתוכל להגיע לכל הצדדים, כוללת שני אקדחי מיים בלחץ, כך שאפשר
                    לעבוד בשני הצדדים במקביל.
                  </li>
                  <li>שני מיכלי מיים עשויים נירוסטה CC</li>
                  <li>משאבת המיים בלחץ של 300 בר, ספיקה של 40 ליטר לדקה.</li>
                  <li>
                    מערכת לחימום המיים בהתאם לתקנות המחמירות ביותר לחימום המיים
                    עד לטמפ' של 80 מעלות.
                  </li>
                  <li>שני גשרי תאורה עם שני פנסים מהבהבים בכל אחד.</li>
                </ul>

                <div class="stats-text-dialog">
                  <h2>נתוני מנוע</h2>
                  <table dir="rtl">
                    <tr>
                      <td>עוצמה</td>
                      <td>126 כ"ס (93 KW )</td>
                    </tr>
                    <tr>
                      <td>מחזור</td>
                      <td>4 פעימות דיזל</td>
                    </tr>
                    <tr>
                      <td>מנוע</td>
                      <td>פרקינס טורבו דיזל</td>
                    </tr>
                    <tr>
                      <td>קוטר בוכנות</td>
                      <td>104x 132</td>
                    </tr>
                    <tr>
                      <td>נפח כללי</td>
                      <td>4.5 ליטר</td>
                    </tr>
                    <tr>
                      <td>יחס דחיסה</td>
                      <td>17.5:1</td>
                    </tr>
                    <tr>
                      <td>קירור מים</td>
                    </tr>
                    <tr>
                      <td>צריכת דלק</td>
                      <td>173 גרם ל KWH</td>
                    </tr>
                    <tr>
                      <td>מיכל מים נקיים</td>
                      <td>1,250 ליטר</td>
                    </tr>
                    <tr>
                      <td>מיכל מים מלוכלכים</td>
                      <td>1,000</td>
                    </tr>
                    <tr>
                      <td>מהירות נסיעה מקסימלית</td>
                      <td>30 קמ"ש</td>
                    </tr>
                    <tr>
                      <td>מהירות נסיעה בזמן עבודה</td>
                      <td>12 קמ"ש</td>
                    </tr>
                    <tr>
                      <td>משקל כולל</td>
                      <td>6,000 ק"ג</td>
                    </tr>
                  </table>
                </div>
                <v-img
                  :src="require('@/assets/H3c/2.jpg')"
                  alt="idanim-h3c"
                ></v-img>
              </v-flex>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- H4 -->
      <v-flex xs12 pa-5 class="npm">
        <v-layout row wrap>
          <v-flex xs12 xl3 md4 @click="dialogH4 = true" class="r-product">
            <div class="img-box">
              <img
                :src="require('@/assets/H4/h4-1.jpg')"
                alt="home-idanim-1-H4"
                class="article-img"
              />
            </div>
          </v-flex>
          <v-flex xs12 xl8 md8 class="article-text npm" pr-3>
            <div class="fade-prod-bg-l text-xs-left">
              <span class="product-title">דגם H4 תוצרת טיסאן</span>
            </div>
            <v-layout column wrap justify-space-between>
              <v-flex>
                <p class="caption-text" @click="dialogH4 = true">
                  מטאטא כבישים הידרוסטטי , הכלי רחב יותר מדגם H3 וכולל מנוע גדול
                  יותר מנוע פרקינס או איווקו, משאבות הידראוליות מתוצרת .BOSCH
                </p>
              </v-flex>

              <v-flex>
                <p @click="dialogH4 = true" class="details-link">
                  לפרטים נוספים..
                </p>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 xl3 md4 @click="dialogH4 = true" class="l-product">
            <div class="img-box">
              <img
                :src="require('@/assets/H4/h4-0.jpg')"
                alt="home-1-H5"
                class="article-img"
              />
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-dialog @keydown.esc="dialogH4 = false" v-model="dialogH4" hide-overlay>
        <v-card>
          <v-toolbar fixed>
            <v-toolbar-title>
              <span class="black--text">H4 - מפרט טכני</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-icon @click="dialogH4 = false">close</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-flex xs12 xl8 ma-auto>
                <v-img
                  :src="require('@/assets/H4/h4-0.jpg')"
                  aspect-ratio="2"
                ></v-img>
              </v-flex>
              <v-flex xs12 xl8 ma-auto>
                <span class="display-2">H4</span>
                <p style="font-size:1.8em;">
                  מטאטא כבישים הידרוסטטי , המיכל בנפח של 4 מ"ק. מנוע פרקינס או
                  איווקו, משאבות הידראוליות מתוצרת .BOSCH הכלי רחב יותר מדגם H3
                  וכולל מנוע גדול יותר. כולל 4 מברשות הנעות לכל הכיוונים ופיית
                  יניקה בעלת כושר יניקה גבוה במיוחד, מתזי מיים הממוקמים בחזית
                  הכלי מפזרים רסס מיים כדי לספוג את האבק בזמן פעולת הטיאטוא. ה
                  H4 כולל מערכת נוספת לשטיפה בלחץ עם צינור באורך של 15 מטר ואקדח
                  שטיפה בלחץ גבוה. המערכת מורכבת על גג הכלי ומאפשרת שטיפה בכל
                  הכיוונים. תא נהג פנורמי, מבודד מפגעי מזג אויר, רעשים, אבק וגזי
                  פליטה. תא הנהג כולל מערכת מיזוג אויר, כיסא נהג קפיצי, מתכוונן
                  ונוח במיוחד. וכן כיסא נוסף לאיש צוות שני. רדיו ומצלמה אחורית
                  עם מסך צבעוני. וכן מערכת שליטה ותפעול של המברשות, השטיפה
                  וריקון מיכל האשפה.
                </p>

                <h2>נתונים כללים של הכלי</h2>
                <div class="stats-text-dialog">
                  <table dir="rtl">
                    <tr>
                      <td>הכלי</td>
                      <td>טיסאן מטאטא כבישים הידרוסטטי</td>
                    </tr>
                    <tr>
                      <td>דגם</td>
                      <td>H4 טיסאן</td>
                    </tr>
                    <tr>
                      <td>אורך הכלי</td>
                      <td>5200 מ"מ</td>
                    </tr>
                    <tr>
                      <td>רוחב הכלי</td>
                      <td>1700 מ"מ - 2950 מ"מ כולל מברשות</td>
                    </tr>
                    <tr>
                      <td>גובה הכלי</td>
                      <td>2740 מ"מ</td>
                    </tr>
                    <tr>
                      <td>נפח תא אשפה</td>
                      <td>4 מטר מעוקב</td>
                    </tr>
                    <tr>
                      <td>נפח מיכל מיים</td>
                      <td>625 ליטר</td>
                    </tr>
                    <tr>
                      <td>קוטר מברשות</td>
                      <td>800 מ"מ</td>
                    </tr>
                    <tr>
                      <td>מהירות סיבוב מברשות</td>
                      <td>30-150 סל"ד</td>
                    </tr>
                    <tr>
                      <td>מקסימום גובה שפיכת פסולת</td>
                      <td>1650 מ"מ</td>
                    </tr>
                  </table>

                  <h2>נתוני מנוע</h2>
                  <table dir="rtl">
                    <tr>
                      <td>עוצמה</td>
                      <td>126 כ"ס (93 KW )</td>
                    </tr>
                    <tr>
                      <td>מחזור</td>
                      <td>4 פעימות דיזל</td>
                    </tr>
                    <tr>
                      <td>קוטר בוכנות</td>
                      <td>104x 132</td>
                    </tr>
                    <tr>
                      <td>נפח כללי</td>
                      <td>4.5 ליטר</td>
                    </tr>
                    <tr>
                      <td>יחס דחיסה</td>
                      <td>17.5:1</td>
                    </tr>
                    <tr>
                      <td>קירור מים</td>
                    </tr>
                    <tr>
                      <td>צריכת דלק</td>
                      <td>173 גרם ל KWH</td>
                    </tr>
                  </table>
                </div>
                <v-img
                  :src="require('@/assets/H4/stats.jpg')"
                  alt="idanim-h4"
                ></v-img>
                <v-img
                  :src="require('@/assets/H4/h4-1.jpg')"
                  alt="idanim-h4"
                ></v-img>
                <v-img
                  :src="require('@/assets/H4/h4-2.jpg')"
                  alt="idanim-h4"
                ></v-img>
              </v-flex>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- H5 -->
      <v-flex xs12 pa-5 class="npm">
        <v-layout row wrap>
          <v-flex xs12 xl3 md4 @click="dialog3 = true">
            <div class="img-box">
              <img
                :src="require('@/assets/H5/h5-0.jpg')"
                alt="home-1-H5"
                class="article-img"
              />
            </div>
          </v-flex>

          <v-flex xs12 xl8 md8 class="article-text npm" pl-3>
            <div class="fade-prod-bg">
              <span class="product-title">דגם H5 מתוצרת טיסאן</span>
            </div>
            <v-layout column wrap justify-space-between>
              <v-flex>
                <p class="caption-text" @click="dialog1 = true">
                  ספינת הדגל של המפעל, מטאטא כבישים הידרוסטטי עם מנוע חזק
                  במיוחד, המיכל בנפח של 5 מ"ק. מנוע פרקינס או איווקו, משאבות
                  הידראוליות מתוצרת .BOSCH
                </p>
              </v-flex>
              <v-flex>
                <p @click="dialog3 = true" class="details-link">
                  לפרטים נוספים..
                </p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-dialog @keydown.esc="dialog3 = false" v-model="dialog3" hide-overlay>
        <v-card>
          <v-toolbar fixed>
            <v-toolbar-title>
              <span class="black--text">H5 - מפרט טכני</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-icon @click="dialog3 = false">close</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-flex xs12 xl8 ma-auto>
                <v-img :src="require('@/assets/H5/h5-0.jpg')"></v-img>
              </v-flex>
              <v-flex xs12 xl8 ma-auto>
                <span class="display-1">H5 - מפרט טכני</span>
                <p style="font-size:1.8em;">
                  ספינת הדגל של המפעל, מטאטא כבישים הידרוסטטי עם מנוע חזק
                  במיוחד, המיכל בנפח של 5 מ"ק. מנוע פרקינס או איווקו, משאבות
                  הידראוליות מתוצרת .BOSCH הכלי רחב יותר מדגם H4 וכולל מנוע גדול
                  יותר. כולל מערכת יחודית של 2 מברשות הנעות ימינה ושמאלה להגדלת
                  רוחב הטיאוט ופיית יניקה בעלת כושר יניקה גבוה במיוחד, מתזי מיים
                  הממוקמים בחזית הכלי מפזרים רסס מיים כדי לספוג את האבק בזמן
                  פעולת הטיאוט. מיכל המיים גדול במיוחד ונותן אפשרות לעבודת שטיפה
                  רציפה לאורך זמן. ה H5 כולל מערכת נוספת לשטיפה בלחץ עם צינור
                  באורך של 15 מטר ואקדח שטיפה בלחץ גבוה. המערכת מורכבת על גג
                  הכלי ומאפשרת שטיפה בכל הכיוונים. תא נהג פנורמי, מבודד מפגעי
                  מזג אויר, רעשים, אבק וגזי פליטה. תא הנהג כולל מערכת מיזוג
                  אויר, כיסא נהג קפיצי, מתכוונן ונוח במיוחד. וכן כיסא נוסף לאיש
                  צוות שני. רדיו ומצלמה אחורית עם מסך צבעוני. וכן מערכת שליטה
                  ותפעול של המברשות, השטיפה וריקון מיכל האשפה.
                </p>
                <h2>נתונים כללים של הכלי</h2>
                <div class="stats-text-dialog">
                  <table dir="rtl">
                    <tr>
                      <td>הכלי</td>
                      <td>טיסאן H5 מטאטא כבישים הידרוסטטי</td>
                    </tr>
                    <tr>
                      <td>דגם</td>
                      <td>טיסאן H5</td>
                    </tr>
                    <tr>
                      <td>אורך הכלי</td>
                      <td>5000 מ"מ</td>
                    </tr>
                    <tr>
                      <td>רוחב הכלי</td>
                      <td>1800 מ"מ</td>
                    </tr>
                    <tr>
                      <td>גובה הכלי</td>
                      <td>2850 מ"מ</td>
                    </tr>
                    <tr>
                      <td>משקל הכלי</td>
                      <td>5120 ק"ג</td>
                    </tr>
                    <tr>
                      <td>משקל מקסימלי</td>
                      <td>11500 ק"ג</td>
                    </tr>
                    <tr>
                      <td>נפח מיכל אשפה</td>
                      <td>5 מ"ק</td>
                    </tr>
                    <tr>
                      <td>קוטר מברשות שטוחות</td>
                      <td>630 מ"מ</td>
                    </tr>
                    <tr>
                      <td>מהירות סיבובי מברשות</td>
                      <td>150 סל"ד</td>
                    </tr>
                    <tr>
                      <td>נפח מיכל מים</td>
                      <td>670 ליטר</td>
                    </tr>
                    <tr>
                      <td>גובה מקסימלי בריקון אשפה</td>
                      <td>1700 מ"מ</td>
                    </tr>
                  </table>
                </div>
                <h2>נתוני מנוע</h2>
                <div class="stats-text-dialog">
                  <table dir="rtl">
                    <tr>
                      <td>כח</td>
                      <td>141 כ"ס (104 KW)</td>
                    </tr>
                    <tr>
                      <td>פעימות מנוע</td>
                      <td>4 פעימות דיזל</td>
                    </tr>
                    <tr>
                      <td>נפח מנוע</td>
                      <td>4.5 ליטר</td>
                    </tr>
                    <tr>
                      <td>קירור מיים</td>
                      <td>צריכת דלק במכסימום כח וסיבובי מנוע 173 גרם / KWH</td>
                    </tr>
                    <tr>
                      <td>יחס דחיסה</td>
                      <td>17.5:1</td>
                    </tr>
                  </table>
                </div>
                <v-img :src="require('@/assets/H5/stats.png')"></v-img>
                <v-img :src="require('@/assets/H5/h5-1.jpg')"></v-img>
                <v-img :src="require('@/assets/H5/h5-2.jpg')"></v-img>
                <v-img :src="require('@/assets/H5/H5-H4.jpg')"></v-img>
              </v-flex>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-flex xs12 pa-5 class="npm">
        <v-layout row wrap>
          <v-flex xs12 xl3 md4 @click="dialogD4000 = true" class="r-product"
            >>
            <div class="img-box">
              <img
                :src="require('@/assets/d4000/d4000-0.jpg')"
                alt="home-1-H5"
                class="article-img"
              />
            </div>
          </v-flex>
          <v-flex xs12 xl8 md8 class="article-text npm" pr-3>
            <div class="fade-prod-bg-l text-xs-left">
              <span class="product-title">דגם D4000 מתוצרת טיסאן</span>
            </div>
            <v-layout column wrap justify-space-between>
              <v-flex>
                <p class="caption-text" @click="dialogD4000 = true">
                  משאית לטיאוט כבישים בנפח של 4.0 מ"ק. מתקן הטיאוט מורכב על גבי
                  שילדה מתוצרת "הינו טויוטה" כולל 2 מברשות צדדיות הנעות לכל
                  הכיוונים, מברשת גלילית מרכזית ופיית יניקה בעלת כושר יניקה גבוה
                  במיוחד,
                </p>
              </v-flex>
              <v-flex>
                <p @click="dialogD4000 = true" class="details-link">
                  לפרטים נוספים..
                </p>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 xl3 md4 @click="dialogD4000 = true" class="l-product">
            <div class="img-box">
              <img
                :src="require('@/assets/d4000/d4000-0.jpg')"
                alt="home-1-H5"
                class="article-img"
              />
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-dialog
        @keydown.esc="dialogD4000 = false"
        v-model="dialogD4000"
        hide-overlay
      >
        <v-card>
          <v-toolbar fixed>
            <v-toolbar-title>
              <span class="black--text">דגם D4000 מתוצרת טיסאן</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-icon @click="dialogD4000 = false">close</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-flex xs12 xl8 ma-auto>
                <v-img
                  :src="require('@/assets/d4000/d4000-0.jpg')"
                  aspect-ratio="2"
                ></v-img>
              </v-flex>
              <v-flex xs12 xl8 ma-auto>
                <span class="display-2">D4000 - דגם מתוצרת טיסאן</span>
                <p style="font-size:1.8em;">
                  משאית לטיאוט כבישים בנפח של 4.0 מ"ק. מתקן הטיאוט מורכב על גבי
                  שילדה מתוצרת "הינו טויוטה" כולל 2 מברשות צדדיות הנעות לכל
                  הכיוונים, מברשת גלילית מרכזית ופיית יניקה בעלת כושר יניקה גבוה
                  במיוחד, מתזי מיים הממוקמים בחזית ובמרכז הכלי מפזרים רסס מיים
                  כדי לספוג את האבק בזמן פעולת הטיאוט. מיכל המיים גדול במיוחד
                  ונותן אפשרות לעבודת שטיפה רציפה לאורך זמן. ה D4000 כולל מערכת
                  נוספת לשטיפה בלחץ עם צינור באורך של 15 מטר ואקדח שטיפה בלחץ
                  גבוה. המערכת מורכבת על גג הכלי ומאפשרת שטיפה בכל הכיוונים. וכן
                  צינור שאיבה גדול המותקן באחורי המשאית. תא הנהג מבודד מפגעי מזג
                  אויר, רעשים, אבק וגזי פליטה. תא הנהג כולל מערכת מיזוג אויר,
                  כיסא נהג קפיצי, מתכוונן ונוח במיוחד. וכן כיסא נוסף לאיש צוות
                  שני. רדיו ומצלמה אחורית עם מסך צבעוני. וכן מערכת שליטה ותפעול
                  של המברשות, השטיפה וריקון מיכל האשפה.
                </p>
                <div class="stats-text-dialog">
                  <table dir="rtl">
                    <tr>
                      <td>הכלי</td>
                      <td>משאית לטיאוט D4000 תוצרת טיסאן</td>
                    </tr>
                    <tr>
                      <td>דגם</td>
                      <td>D4000</td>
                    </tr>
                    <tr>
                      <td>אורך</td>
                      <td>6150 מ"מ</td>
                    </tr>
                    <tr>
                      <td>רוחב כולל מברשות</td>
                      <td>2200 מ"מ</td>
                    </tr>
                    <tr>
                      <td>גובה</td>
                      <td>2840 מ"מ</td>
                    </tr>
                    <tr>
                      <td>נפח מיכל אשפה</td>
                      <td>4 מטר מעוקב</td>
                    </tr>
                    <tr>
                      <td>קוטר מברשות צדדיות</td>
                      <td>315 מ"מ</td>
                    </tr>
                    <tr>
                      <td>מהירות מקסימלית בזמן טיאוט</td>
                      <td>15 קמ"ש</td>
                    </tr>
                    <tr>
                      <td>רוחב שטח טיאוט בהפעלת מברשות בצד אחד</td>
                      <td>2200 מ"מ</td>
                    </tr>
                    <tr>
                      <td>נפח מיכל מים</td>
                      <td>750 ליטר</td>
                    </tr>
                  </table>
                </div>
                <v-flex
                  :class="{
                    title: $vuetify.breakpoint.smAndDown,
                    'display-1': $vuetify.breakpoint.mdAndUp
                  }"
                >
                </v-flex>
                <v-img
                  :src="require('@/assets/d4000/d4000-1.jpg')"
                  alt="idanim-h4"
                ></v-img>
                <v-img
                  :src="require('@/assets/d4000/d4000-2.jpg')"
                  alt="idanim-h4"
                ></v-img>
              </v-flex>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-flex xs12 pa-5 class="npm">
        <v-layout row wrap>
          <v-flex xs12 xl3 md4 @click="dialogD4000b = true" class="l-product">
            <div class="img-box">
              <img
                :src="require('@/assets/d4000b/d4000-0.jpg')"
                alt="home-1-H5"
                class="article-img"
              />
            </div>
          </v-flex>
          <v-flex xs12 xl8 md8 class="article-text npm" pr-3>
            <div class="fade-prod-bg ">
              <span class="product-title">דגם D4500 מתוצרת קדמה</span>
            </div>
            <v-layout column wrap justify-space-between>
              <v-flex>
                <p class="caption-text" @click="dialogD4000b = true">
                  משאית לטיאוט כבישים בנפח מיכל של 4.5 מ"ק ועד 8 מ"ק. מתקן
                  הטיאוט מורכב על גבי שילדה מתוצרת "הינו טויוטה" או "דאף", תלוי
                  בגודל המיכל. כולל 2 מברשות צדדיות הנעות לכל הכיוונים, מברשת
                  גלילית מרכזית ופיית יניקה בעלת כושר יניקה גבוה במיוחד,
                </p>
              </v-flex>
              <v-flex>
                <p @click="dialogD4000b = true" class="details-link">
                  לפרטים נוספים..
                </p>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 xl3 md4 @click="dialogD4000b = true" class="r-product">
            <div class="img-box">
              <img
                :src="require('@/assets/d4000b/d4000-0.jpg')"
                alt="home-1-idanim"
                class="article-img"
              />
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-dialog
        @keydown.esc="dialogD4000b = false"
        v-model="dialogD4000b"
        hide-overlay
      >
        <v-card>
          <v-toolbar fixed>
            <v-toolbar-title>
              <span class="black--text">דגם D4500 מתוצרת "קדמה"</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-icon @click="dialogD4000b = false">close</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-flex xs12 xl8 ma-auto>
                <v-img
                  :src="require('@/assets/d4000b/d4000-0.jpg')"
                  aspect-ratio="2"
                ></v-img>
              </v-flex>
              <v-flex xs12 xl8 ma-auto>
                <span class="display-2">דגם D4500 מתוצרת "קדמה"</span>
                <p style="font-size:1.8em;">
                  משאית לטיאוט כבישים בנפח מיכל של 4.5 מ"ק ועד 8 מ"ק. מתקן
                  הטיאוט מורכב על גבי שילדה מתוצרת "הינו טויוטה" או "דאף", תלוי
                  בגודל המיכל. כולל 2 מברשות צדדיות הנעות לכל הכיוונים, מברשת
                  גלילית מרכזית ופיית יניקה בעלת כושר יניקה גבוה במיוחד, מתזי
                  מיים הממוקמים בחזית ובמרכז הכלי מפזרים רסס מיים כדי לספוג את
                  האבק בזמן פעולת הטיאוט. מיכל המיים גדול במיוחד 1,200 ליטר
                  ונותן אפשרות לעבודת שטיפה רציפה לאורך זמן. ה D4500 כולל מערכת
                  נוספת לשטיפה בלחץ עם צינור באורך של 15 מטר ואקדח שטיפה בלחץ
                  גבוה. המערכת מורכבת על גג הכלי ומאפשרת שטיפה בכל הכיוונים. וכן
                  צינור שאיבה גדול המותקן באחורי המשאית. תא הנהג מבודד מפגעי מזג
                  אויר, רעשים, אבק וגזי פליטה. תא הנהג כולל מערכת מיזוג אויר,
                  כיסא נהג קפיצי, מתכוונן ונוח במיוחד. וכן כיסא נוסף לאיש צוות
                  שני. רדיו ומצלמה אחורית עם מסך צבעוני. וכן מערכת שליטה ותפעול
                  של המברשות, השטיפה וריקון מיכל האשפה.
                </p>
                <h2>נתונים כללים של הכלי</h2>
                <div class="stats-text-dialog">
                  <table dir="rtl">
                    <tr>
                      <td>הכלי</td>
                      <td>מכונה טיאוט כבישים D4500</td>
                    </tr>
                    <tr>
                      <td>דגם</td>
                      <td>קדמה D4500</td>
                    </tr>
                    <tr>
                      <td>אורך</td>
                      <td>6150 מ"מ</td>
                    </tr>
                    <tr>
                      <td>רוחב כולל מברשות</td>
                      <td>2200 מ"מ</td>
                    </tr>
                    <tr>
                      <td>גובה</td>
                      <td>2840 מ"מ</td>
                    </tr>
                    <tr>
                      <td>נפח מיכל אשפה</td>
                      <td>4.5 ועד 8.0 מ"ק</td>
                    </tr>
                    <tr>
                      <td>קוטר מברשות צדדיות</td>
                      <td>315 מ"מ</td>
                    </tr>
                    <tr>
                      <td>מהירות מקסימלית בזמן טיאוט</td>
                      <td>15 קמ"ש</td>
                    </tr>
                    <tr>
                      <td>רוחב שטח טיאוט בהפעלת מברשות בצד אחד</td>
                      <td>2200 מ"מ</td>
                    </tr>
                    <tr>
                      <td>נפח מיכל מים</td>
                      <td>1,200 ליטר</td>
                    </tr>
                  </table>
                </div>
                <v-img
                  :src="require('@/assets/d4000b/stats1.jpg')"
                  alt="idanim-h4"
                ></v-img>
                <v-img
                  :src="require('@/assets/d4000b/stats.png')"
                  alt="idanim-h4"
                ></v-img>
              </v-flex>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-flex xs12 pa-5 class="npm">
        <v-layout row wrap>
          <v-flex xs12 xl3 md4 @click="dialog4 = true" class="r-product">
            <div class="img-box">
              <img
                :src="require('@/assets/cart/1.jpg')"
                alt="home-1-H5"
                class="article-img"
              />
            </div>
          </v-flex>
          <v-flex xs12 xl8 md8 class="article-text npm" pr-3>
            <div class="fade-prod-bg-l text-xs-left">
              <span class="product-title">עגלות לטיאטוא מדרכות</span>
            </div>
            <v-layout column wrap justify-space-between>
              <v-flex>
                <p class="caption-text" @click="dialog1 = true">
                  מגוון רחב של עגלות לשימוש ממושך עמידות לכל פגעי מזג אויר
                  העגלות כוללות מתקן מיוחד למטאטא וליעה. ניתן לקבלן בגדלים
                  ובצבעים שונים.
                </p>
              </v-flex>
              <v-flex>
                <p @click="dialog4 = true" class="details-link">
                  לפרטים נוספים..
                </p>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 xl3 md4 @click="dialog4 = true" class="l-product">
            <div class="img-box">
              <img
                :src="require('@/assets/cart/1.jpg')"
                alt="home-1-idanim"
                class="article-img"
              />
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-dialog @keydown.esc="dialog4 = false" v-model="dialog4" hide-overlay>
        <v-card>
          <v-toolbar fixed>
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
                <v-img :src="require('@/assets/cart/1.jpg')"></v-img>
              </v-flex>
              <v-flex xs12 xl8 ma-auto>
                <span class="display-1">עגלות לטיאטוא מדרכות</span>
                <p style="font-size:1.8em;">
                  מגוון רחב של עגלות לשימוש ממושך עמידות לכל פגעי מזג אויר
                  העגלות כוללות מתקן מיוחד למטאטא וליעה. ניתן לקבלן בגדלים
                  ובצבעים שונים.
                </p>
                <h2>נתונים כללים של העגלה</h2>
                <div class="stats-text-dialog">
                  <table dir="rtl">
                    <tr>
                      <td>נפח מיכל אשפה</td>
                      <td>100 ליטר</td>
                    </tr>
                    <tr>
                      <td>נפח מיכל אחורי</td>
                      <td>30 ליטר</td>
                    </tr>
                    <tr>
                      <td>מתקן מיוחד לאכסון המטאטא והיעה</td>
                    </tr>
                    <tr>
                      <td>
                        מסגרת ברזל קל בקוטר של 25 מ"מ מצופה בצבע מיוחד נגד חלודה
                      </td>
                    </tr>
                    <tr>
                      <td>גודל גלגלים קדמיים</td>
                      <td>300 מ"מ גומי</td>
                    </tr>
                    <tr>
                      <td>2 ידיות מפלסטיק מוקשה</td>
                    </tr>
                    <tr>
                      <td>
                        ניתן לקבל את המכסים ואת מיכלי האיכסון בצבעים שונים
                      </td>
                    </tr>
                  </table>
                </div>
              </v-flex>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-flex xs12>
        <v-divider class="sec-divider"></v-divider>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialogH4: false,
      dialogH45: false,
      dialogD4000: false,
      dialogD4000b: false
    };
  }
};
</script>

<style scoped>
.v-toolbar {
  border: none !important;
  background: #a3d855 !important;
}

.card-title {
  background: #a3d855 !important;
}

.sec-divider {
  border-color: #86bf39;
}

.aurtor {
  color: #78b821;
}

.aurtor:hover {
  color: #78b821;
}
>>> .v-toolbar {
  margin-top: 2.2rem !important;
  padding-left: 45px !important;
  padding-right: 23px !important;
}
.article-img {
  width: 100%;
  height: 270px;
  transition: all 0.2s ease-out;
  object-fit: cover;
}

.article-img:hover {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  transition: all 0.2s ease;
  cursor: pointer;
}

.article-main-title {
  border-left: 3px solid #78b821;
  padding-left: 15px;
}

a {
  color: none !important;
}

.img-box {
  overflow: hidden;
  transition: all 0.2s ease-out;
  box-shadow: -15px 10px 30px -10px #00000099;
  height: 95%;
}
</style>
