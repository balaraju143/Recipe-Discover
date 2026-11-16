
/* =====================================
   STACKLY MY MEAL PLAN JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // HTML ELEMENTS
    const mealPlanGrid = document.getElementById("mealPlanGrid");
    const emptyMealPlan = document.getElementById("emptyMealPlan");

    const totalRecipes = document.getElementById("totalRecipes");
    const totalCookingTime = document.getElementById("totalCookingTime");
    const totalCategories = document.getElementById("totalCategories");

    const savedRecipeCount = document.getElementById("savedRecipeCount");
    const clearMealPlanBtn = document.getElementById("clearMealPlan");

    // SAME LOCAL STORAGE KEY AS DETAILS PAGE
    const STORAGE_KEY = "stacklyMealPlan";


    // GET SAVED RECIPES
    function getMealPlan() {

        try {
            const savedData = JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            );

            return Array.isArray(savedData) ? savedData : [];

        } catch (error) {
            console.error("Unable to read meal plan:", error);
            return [];
        }

    }


    // SAVE RECIPES
    function saveMealPlan(mealPlan) {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(mealPlan)
        );

    }


    // DISPLAY MEAL PLAN
    function displayMealPlan() {

        const mealPlan = getMealPlan();

        mealPlanGrid.innerHTML = "";


        // EMPTY MEAL PLAN
        if (mealPlan.length === 0) {

            emptyMealPlan.hidden = false;
            mealPlanGrid.style.display = "none";

        } else {

            emptyMealPlan.hidden = true;
            mealPlanGrid.style.display = "grid";

        }


        // SUMMARY INFORMATION
        const totalTime = mealPlan.reduce(
            (total, recipe) => total + (Number(recipe.time) || 0),
            0
        );

        const categories = [
            ...new Set(mealPlan.map(recipe => recipe.category))
        ];

        totalRecipes.textContent = mealPlan.length;
        totalCookingTime.textContent = `${totalTime} min`;
        totalCategories.textContent = categories.length;

        savedRecipeCount.textContent =
            `${mealPlan.length} ${mealPlan.length === 1 ? "Recipe" : "Recipes"}`;


        // CREATE RECIPE CARDS USING MAP()
        const cardsHTML = mealPlan.map(recipe => {

            const recipeId = Number(recipe.id);
            const safeName = String(recipe.name || "Untitled Recipe");
            const safeCategory = String(recipe.category || "Recipe");
            const safeImage = String(recipe.image || "");
            const safeTime = Number(recipe.time) || 0;

            return `

                <article class="meal-recipe-card">

                    <div class="meal-recipe-image">

                        <img
                            src="${safeImage}"
                            alt="${safeName.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")}"
                            loading="lazy"
                        >

                        <span class="meal-recipe-category">
                            ${safeCategory}
                        </span>

                    </div>


                    <div class="meal-recipe-content">

                        <h3>${safeName.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</h3>

                        <div class="meal-recipe-time">

                            <span class="material-symbols-outlined">
                                schedule
                            </span>

                            ${safeTime} Minutes

                        </div>


                        <div class="meal-recipe-actions">

                            <a
                                href="recipe-details.html?id=${recipeId}"
                                class="meal-view-btn"
                            >
                                View Recipe

                                <span class="material-symbols-outlined">
                                    arrow_forward
                                </span>

                            </a>


                            <button
                                type="button"
                                class="meal-remove-btn"
                                data-id="${recipeId}"
                            >

                                <span class="material-symbols-outlined">
                                    delete
                                </span>

                                Remove

                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");


        mealPlanGrid.innerHTML = cardsHTML;

    }


    // REMOVE INDIVIDUAL RECIPE
    mealPlanGrid.addEventListener("click", (event) => {

        const removeButton = event.target.closest(".meal-remove-btn");

        if (!removeButton) return;

        const recipeId = Number(removeButton.dataset.id);

        const updatedMealPlan = getMealPlan().filter(
            recipe => Number(recipe.id) !== recipeId
        );

        saveMealPlan(updatedMealPlan);

        displayMealPlan();

    });


    // CLEAR ALL RECIPES
    clearMealPlanBtn.addEventListener("click", () => {

        const mealPlan = getMealPlan();

        if (mealPlan.length === 0) {
            alert("Your meal plan is already empty!");
            return;
        }

        const confirmClear = confirm(
            "Are you sure you want to remove all recipes from your meal plan?"
        );

        if (confirmClear) {

            saveMealPlan([]);

            displayMealPlan();

            alert("Your meal plan has been cleared!");

        }

    });


    // UPDATE WHEN ANOTHER TAB CHANGES LOCAL STORAGE
    window.addEventListener("storage", (event) => {

        if (event.key === STORAGE_KEY) {
            displayMealPlan();
        }

    });


    // INITIAL DISPLAY
    displayMealPlan();

});
