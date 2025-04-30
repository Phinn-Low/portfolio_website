<script lang="ts">
  export let title: string;
  export let description: string;
  export let link: string | undefined;
  export let tags: string[] | undefined;
</script>

<article class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 hover:shadow-lg transition">
  <h3 class="text-2xl text-black dark:text-white font-semibold mb-2">{title}</h3>
  <p class="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

  {#if tags?.length}
    <div class="mb-4 flex flex-wrap gap-2">
      {#each tags as tag}
        <span class="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded">
          {tag}
        </span>
      {/each}
    </div>
  {/if}

  {#if link}
    <a
      href={link}
      target="_blank"
      rel="noopener"
      class="inline-block text-blue-500 hover:underline font-medium"
    >
      View project →
    </a>
  {/if}
</article>
