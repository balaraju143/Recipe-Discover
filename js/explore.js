
/* =====================================
   STACKLY EXPLORE RECIPES JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ALL 10 RECIPES
    const recipes = [
        {
            id: 1,
            name: "Avocado Green Bowl",
            category: "Breakfast",
            time: 15,
            image: "assets/avacado.webp"
        },
        {
            id: 2,
            name: "Berry Pancakes",
            category: "Breakfast",
            time: 25,
            image: "assets/pancakes.webp"
        },
        {
            id: 3,
            name: "Creamy Italian Pasta",
            category: "Lunch",
            time: 30,
            image: "assets/pasta (1).webp"
        },
        {
            id: 4,
            name: "Grilled Chicken Salad",
            category: "Dinner",
            time: 35,
            image: "assets/chicken.webp"
        },
        {
            id: 5,
            name: "Vegetable Biryani",
            category: "Lunch",
            time: 45,
            image: "assets/biryani.webp"
        },
        {
            id: 6,
            name: "Homemade Vegetable Pizza",
            category: "Dinner",
            time: 40,
            image: "assets/pizza-homemade.webp"
        },
        {
            id: 7,
            name: "Chocolate Lava Cake",
            category: "Desserts",
            time: 30,
            image: "assets/chocolate-cake.webp"
        },
        {
            id: 8,
            name: "Fresh Berry Smoothie",
            category: "Breakfast",
            time: 10,
            image: "assets/berry.webp"
        },
        {
            id: 9,
            name: "Herb Grilled Fish",
            category: "Dinner",
            time: 35,
            image: "assets/fish.webp"
        },
        {
            id: 10,
            name: "Fresh Fruit Dessert",
            category: "Desserts",
            time: 15,
            image: "assets/fresh-fruit.webp"
        }
    ];


    // HTML ELEMENTS
    const recipeGrid = document.getElementById("exploreRecipeGrid");
    const searchInput = document.getElementById("recipeSearch");
    const sortSelect = document.getElementById("sortRecipes");
    const recipeCount = document.getElementById("recipeCount");
    const noRecipes = document.getElementById("noRecipes");
    const resetButton = document.getElementById("resetFilters");
    const filterButtons = document.querySelectorAll(".filter-btn");


    // CHECK REQUIRED ELEMENTS
    if (!recipeGrid || !sortSelect || !recipeCount || !noRecipes) {
        console.error("Explore page: Check recipeGrid, sortRecipes, recipeCount and noRecipes IDs in HTML.");
        return;
    }


    // FILTER STATES
    let selectedCategory = "All";
    let searchText = "";
    let sortType = "default";


    // DISPLAY RECIPE CARDS
    function displayRecipes(recipeList) {

        recipeGrid.innerHTML = "";

        recipeList.forEach((recipe, index) => {

            const card = document.createElement("article");
            card.className = "explore-recipe-card";
            card.setAttribute("data-aos", "fade-up");
            card.setAttribute("data-aos-delay", String((index % 3) * 100));

            card.innerHTML = `
                <div class="recipe-card-image">
                    <img
                        src="${recipe.image}"
                        alt="${recipe.name}"
                        loading="lazy"
                    >

                    <span class="recipe-category-tag">
                        ${recipe.category}
                    </span>
                </div>

                <div class="recipe-card-content">

                    <h3>${recipe.name}</h3>

                    <div class="recipe-card-meta">
                        <span class="material-symbols-outlined">
                            schedule
                        </span>
                        <span>${recipe.time} Minutes</span>
                    </div>

                    <div class="recipe-card-bottom">
                        <span>Easy to prepare</span>

                        <a
                            href="recipe-details.html?id=${recipe.id}"
                            class="recipe-view-btn"
                        >
                            View Recipe
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </a>
                    </div>

                </div>
            `;

            recipeGrid.appendChild(card);
        });

        // Refresh AOS for newly created cards
        if (window.AOS) {
            AOS.refresh();
        }
    }


    // FILTER AND SORT RECIPES
    function filterRecipes() {

        let filteredRecipes = recipes.filter(recipe => {

            const matchesCategory =
                selectedCategory === "All" ||
                recipe.category === selectedCategory;

            const matchesSearch =
                recipe.name.toLowerCase().includes(searchText.toLowerCase());

            return matchesCategory && matchesSearch;
        });


        // SORT BY COOKING TIME
        if (sortType === "low") {
            filteredRecipes.sort((a, b) => a.time - b.time);
        }

        if (sortType === "high") {
            filteredRecipes.sort((a, b) => b.time - a.time);
        }


        // UPDATE RESULT COUNT
        recipeCount.textContent =
            `Showing ${filteredRecipes.length} of ${recipes.length} recipes`;


        // SHOW OR HIDE NO RESULTS
        if (filteredRecipes.length === 0) {
            noRecipes.hidden = false;
            recipeGrid.style.display = "none";
        } else {
            noRecipes.hidden = true;
            recipeGrid.style.display = "grid";
        }


        // RENDER CARDS
        displayRecipes(filteredRecipes);
    }


    // CATEGORY FILTER BUTTONS
    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            selectedCategory = button.dataset.category;

            filterRecipes();
        });

    });


    // SEARCH BY RECIPE NAME
    if (searchInput) {

        searchInput.addEventListener("input", () => {

            searchText = searchInput.value.trim();

            filterRecipes();
        });

    }


    // SORT RECIPES
    sortSelect.addEventListener("change", () => {

        sortType = sortSelect.value;

        filterRecipes();
    });


    // RESET ALL FILTERS
    if (resetButton) {

        resetButton.addEventListener("click", () => {

            selectedCategory = "All";
            searchText = "";
            sortType = "default";

            if (searchInput) {
                searchInput.value = "";
            }

            sortSelect.value = "default";

            filterButtons.forEach(button => {
                button.classList.remove("active");

                if (button.dataset.category === "All") {
                    button.classList.add("active");
                }
            });

            filterRecipes();
        });

    }


    // READ CATEGORY FROM URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromURL = urlParams.get("category");

    if (
        categoryFromURL &&
        ["Breakfast", "Lunch", "Dinner", "Desserts"].includes(categoryFromURL)
    ) {
        selectedCategory = categoryFromURL;

        filterButtons.forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.category === categoryFromURL
            );
        });
    }


    // INITIAL RENDER: SHOW RECIPES
    filterRecipes();


    // AOS ANIMATION
    if (window.AOS) {
        AOS.init({
            duration: 700,
            once: true,
            offset: 60
        });
    }


    // GSAP HERO ANIMATION
    if (window.gsap) {

        gsap.from(".explore-hero-content > *", {
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });

    }

});
