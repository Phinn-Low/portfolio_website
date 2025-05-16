<!-- src/lib/components/HeroSection.svelte -->
<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  const title = "Hi, I'm {Phinn}";
  let display = "";
  let idx = 0;

  // simple typewriter effect
  const type = () => {
    const interval = setInterval(() => {
      display += title[idx++];
      if (idx === title.length) clearInterval(interval);
    }, 75);
  };
  
  // kick off typing when component mounts
  $: if (idx === 0) type();
</script>

<section class="relative flex items-center justify-center h-screen overflow-hidden text-center">
  <!-- animated gradient background -->
  <div class="absolute inset-0 animate-gradient"></div>

  <!-- content -->
  <div class="relative z-10 px-6">
    <h1
      in:fly={{ y: -100, duration: 800 }}
      class="text-6xl font-extrabold text-white mb-6 sm:text-7xl"
    >
      {display}
    </h1>

    <p
      in:fade={{ delay: 600, duration: 800 }}
      class="text-xl sm:text-2xl text-white mb-8 max-w-xl mx-auto"
    >
      I turn ideas into reality.
    </p>

    <a
      in:fly={{ y: 100, duration: 800, delay: 1200 }}
      href="/projects"
      class="inline-block bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition"
    >
      View Projects
    </a>
  </div>
</section>

