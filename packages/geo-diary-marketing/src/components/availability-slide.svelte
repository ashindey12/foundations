<script lang="ts">
  import SignInModal from './sign-in-modal.svelte'

  $: modalVisible = false

  const setModalVisible = () => (modalVisible = !modalVisible)
</script>

<div class="container el-wscreen el-flex-container el-flex-column el-flex-justify-between">
  <div class="padded-container">
    <h2 class="el-title el-text-center">Available now!</h2>
    <h5 class="el-subtitle el-text-center">
      If you are an existing Reapit Customer, you can access all apps and integrations now from the AppMarket
    </h5>
    <button class="el-intent-critical el-button el-mr5 button" on:click|preventDefault={setModalVisible}
      >AppMarket</button
    >
  </div>
  <div class="image-footer-container">
    <div class="image-mobile-hero">
      <img src="./images/availability-mobile-hero.svg" alt="flow of data to various devices" />
    </div>
    <div class="image-tablet-hero">
      <img src="./images/availability-hero.svg" alt="flow of data to various devices" />
    </div>
    <div class="image-desktop-hero">
      <img src="./images/availability-desktop-hero.svg" alt="flow of data to various devices" />
    </div>
    <p class="el-body-text el-has-grey-text image-text">
      Reapit customers can now adopt and deploy powerful new apps and integrations from a continually evolving library
      developed by Reapit’s growing range of partnerships.
    </p>
    <div class="footer">
      <p>© Copyright Reapit. All rights reserved. 2021</p>
      <p>
        By submitting your email, you agree to Reapit processing your data in accordance with our
        <a href="https://www.reapit.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy.</a>
      </p>
    </div>
  </div>
  <SignInModal {modalVisible} {setModalVisible} />
</div>

<style>
  .container {
    background: #262f69;
  }

  .padded-container {
    padding: 2rem;
  }

  .footer {
    padding: 1.75rem;
    width: 100%;
    background: #fafafa;
    color: var(--color-grey-dark);
    margin-top: -2px;
    text-align: center;
    border-top: 1rem solid #fff;
  }

  .image-footer-container {
    line-height: 0;
    margin: 0 auto;
    width: 100%;
  }

  .image-mobile-hero,
  .image-tablet-hero,
  .image-desktop-hero {
    position: relative;
    line-height: 0;
    display: flex;
    justify-content: center;
  }

  .image-text {
    padding: 0 2rem 1rem 2rem;
    text-align: center;
    background: #fff;
    margin-bottom: 0;
    margin-top: -3rem;
    z-index: 1;
    position: relative;
  }

  .button {
    display: block;
    margin: 1.5rem auto;
  }

  img {
    max-height: 100%;
    min-height: 0;
    width: 100%;
  }

  h2 {
    margin-bottom: 0.5rem;
    color: #fff;
    font-size: 1.625rem;
    line-height: 1.75rem;
  }

  h5 {
    margin-bottom: 2.5rem;
    color: #fff;
    font-size: 1rem;
    line-height: 1.25rem;
  }

  p {
    font-size: 0.875rem;
  }

  a {
    color: var(--intent-primary);
  }

  @media screen and (max-width: 1440px) {
    .image-desktop-hero {
      display: none;
    }
  }

  @media screen and (min-width: 1439px) {
    .image-tablet-hero {
      display: none;
    }
  }

  @media screen and (max-width: 499px) {
    .image-tablet-hero {
      display: none;
    }
  }

  @media screen and (min-width: 500px) {
    .image-mobile-hero {
      display: none;
    }

    h5 {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    h2 {
      font-size: 2rem;
      line-height: 2.25rem;
    }

    p {
      font-size: 1rem;
    }
  }
</style>
