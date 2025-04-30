<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
</script>

<section class="max-w-6xl mx-auto px-6 py-16">
  <h2 class="text-4xl font-bold text-black dark:text-white mb-8 text-center">
    My Projects
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each projects as project (project.title)}
      <ProjectCard
        title={project.title}
        description={project.description}
        link={project.link}
        tags={project.tags}
      />
    {/each}
  </div>
</section>
