<script lang="ts">
	import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />

<main class="bg-white dark:bg-gray-900 min-h-screen transition-colors">
  {@render children()}
</main>
