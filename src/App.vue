<template>
  <div id="app">
    <section class="page-header">
      <h1 class="project-name">Gitlab Artifact Remover</h1>
      <h2 class="project-tagline">A hack to remove gitlab artifacts</h2>
      <RemoveForm/>
    </section>
    <section class="main-content">
      <p><a href="https://docs.gitlab.com/ce/api/jobs.html#erase-a-job" target="_blank">Gitlab REST API</a> allows an individual artifact to be deleted. However, it is tedious to delete many artifacts one by one. So I created this application to delete a range of gitlab artifacts.</p>
      <hr>
      <p>This page is inspired by <a href="https://blog.fgribreau.com/2018/01/remove-gitlab-ci-artifacts-in-batch.html" target="_blank">this post from Francois-Guillaume Ribreau.</a> </p>
      <p><a href="https://github.com/Harmannz/gitlab-artifact-remover" target="_blank"><strong>The code can be found here.</strong></a></p>

      <footer class="site-footer">
        <span class="site-footer-owner"><a href="https://github.com/harmannz">Harman Singh</a>.</span>
        <span class="site-footer-credits">This page uses <a href="https://github.com/jasonlong/cayman-theme">Cayman</a> theme.</span>
      </footer>
    </section>
  </div>
</template>

<script>
import RemoveForm from './components/RemoveForm.vue';

export default {
  name: 'app',
  components: {
    RemoveForm,
  },
};
</script>

<style lang="scss">
#app {
  $header-bg-color: #1D2B64 !default;
  $header-bg-color-secondary: #F8CDDA !default;
  @import "styles/external/cayman.scss";
}
</style>
