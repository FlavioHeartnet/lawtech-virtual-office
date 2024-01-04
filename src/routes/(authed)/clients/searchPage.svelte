<script>
  import { onMount } from "svelte";

  let items = [];
  let currentPage = 1;
  let itemsPerPage = 1;
  let searchTerm = "";

  const filteredItems = () => {
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const paginatedItems = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredItems().slice(start, end);
  };

  onMount(async () => {
    // Fetch your list of objects or set it here
    items = await fetchYourList();
  });

  const fetchYourList = async () => {
    // Simulate fetching data
    return [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
      // Add more items as needed
    ];
  };
</script>

<style>
  /* Add your styles here */
</style>

<main>
  <input bind:value={searchTerm} placeholder="Search...">
  {#each paginatedItems() as item (item.id)}
    <div><p class="text-blue-modernize">{item.name}<p></div>
  {/each}
  <div>
    <button on:click={() => currentPage -= 1} disabled={currentPage === 1}>Previous</button>
    <span>{currentPage}</span>
    <button on:click={() => currentPage += 1} disabled={currentPage === Math.ceil(filteredItems().length / itemsPerPage)}>Next</button>
  </div>
</main>

