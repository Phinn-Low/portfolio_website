<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="w-full bg-white dark:bg-gray-900 shadow-md">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <div class="text-2xl font-bold">
      <a href="/">MyPortfolio</a>
    </div>
    <div class="space-x-6 text-lg">
      <a href="/" class="hover:underline">Home</a>
      <a href="/about" class="hover:underline">About</a>
      <a href="/projects" class="hover:underline">Projects</a>
      <a href="/contact" class="hover:underline">Contact</a>
    </div>
  </div>
</nav>
