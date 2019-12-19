<template>
  <div>
    <section id="one">
      <Home />
    </section>
    <section>
      <OurService />
    </section>
    <section id="two">
      <Products />
    </section>
    <section>
      <Gallery />
    </section>
    <section id="four">
      <About />
    </section>
    <section id="fiv">
      <Video />
    </section>
    <section id="six">
      <Contact />
    </section>
  </div>
</template>
<script>
import OurService from "@/components/OurService";
import Products from "@/components/Products";
import Home from "@/components/Home";
import Video from "@/components/Video";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
export default {
  data() {
    return {};
  },
  components: {
    Home,
    Products,
    Video,
    About,
    Contact,
    Gallery,
    OurService
  }
};
</script>
