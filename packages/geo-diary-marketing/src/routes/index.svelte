<script lang="ts">
  import IntroSlide from '../components/intro-slide.svelte'
  import CrmSlide from '../components/crm-slide.svelte'
  import FeaturesSlide from '../components/features-slide.svelte'
  import CompatibilitySlide from '../components/compatibility-slide.svelte'
  import TestimonialSlide from '../components/testimonial-slide.svelte'
  import AvailabilitySlide from '../components/availability-slide.svelte'
</script>

<svelte:head>
  <title>Geo Diary</title>
  <style>
    :root {
      --max-screen-width-desktop: 1440px;
    }
  
    body {
      overflow-x: hidden;
    }
  </style>
</svelte:head>

<main>
  <IntroSlide />
  <CrmSlide />
  <FeaturesSlide />
  <CompatibilitySlide />
  <TestimonialSlide />
  <AvailabilitySlide />
</main>

<style>
  @import '../../node_modules/@reapit/elements/dist/index.css';
</style>
