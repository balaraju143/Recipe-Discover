
/* =====================================
   STACKLY RECIPE DETAILS JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const recipes = [
        {
            id: 1,
            name: "Avocado Green Bowl",
            category: "Breakfast",
            time: 15,
            image: "assets/avacado.webp",
            description: "A fresh and healthy avocado bowl packed with nutritious ingredients. Perfect for starting your morning.",
            ingredients: [
                "1 ripe avocado",
                "1 cup fresh spinach",
                "1/2 cup cucumber",
                "1/2 cup cherry tomatoes",
                "1 tablespoon olive oil",
                "Salt and black pepper"
            ],
            instructions: [
                "Wash and prepare all the fresh vegetables.",
                "Cut the avocado, cucumber and tomatoes into small pieces.",
                "Add spinach and vegetables to a serving bowl.",
                "Drizzle with olive oil and season with salt and pepper.",
                "Mix gently and serve fresh."
            ]
        },
        {
            id: 2,
            name: "Berry Pancakes",
            category: "Breakfast",
            time: 25,
            image: "assets/pancakes.webp",
            description: "Soft homemade pancakes topped with fresh berries for a sweet and delicious breakfast.",
            ingredients: [
                "1 cup all-purpose flour",
                "1 cup milk",
                "1 egg",
                "2 tablespoons sugar",
                "1 teaspoon baking powder",
                "1/2 cup mixed berries",
                "Butter for cooking"
            ],
            instructions: [
                "Combine flour, sugar and baking powder in a bowl.",
                "Add milk and egg, then whisk until smooth.",
                "Heat a pan and lightly grease it with butter.",
                "Pour batter into the pan and cook until bubbles appear.",
                "Flip and cook the other side.",
                "Serve with fresh berries."
            ]
        },
        {
            id: 3,
            name: "Creamy Italian Pasta",
            category: "Lunch",
            time: 30,
            image: "assets/pasta (1).webp",
            description: "A comforting Italian-style pasta coated in a creamy sauce with herbs and vegetables.",
            ingredients: [
                "200g pasta",
                "1 cup fresh cream",
                "2 garlic cloves",
                "1/2 cup chopped vegetables",
                "2 tablespoons butter",
                "1/4 cup grated cheese",
                "Salt and mixed herbs"
            ],
            instructions: [
                "Boil pasta in salted water until tender.",
                "Drain the pasta and keep it aside.",
                "Heat butter in a pan and sauté chopped garlic.",
                "Add vegetables and cook for a few minutes.",
                "Pour in cream and add herbs and cheese.",
                "Add cooked pasta, mix well and serve."
            ]
        },
        {
            id: 4,
            name: "Grilled Chicken Salad",
            category: "Dinner",
            time: 35,
            image: "assets/chicken.webp",
            description: "Juicy grilled chicken served with crisp vegetables and a refreshing homemade dressing.",
            ingredients: [
                "200g boneless chicken",
                "2 cups lettuce",
                "1 cucumber",
                "1 tomato",
                "1 tablespoon olive oil",
                "1 teaspoon lemon juice",
                "Salt and pepper"
            ],
            instructions: [
                "Season chicken with salt, pepper and lemon juice.",
                "Heat a grill pan and brush with olive oil.",
                "Cook chicken on both sides until fully cooked.",
                "Wash and chop the salad vegetables.",
                "Arrange vegetables in a bowl.",
                "Slice the chicken and place over the salad."
            ]
        },
        {
            id: 5,
            name: "Vegetable Biryani",
            category: "Lunch",
            time: 45,
            image: "assets/biryani.webp",
            description: "Aromatic vegetable biryani prepared with fragrant rice, fresh vegetables and traditional spices.",
            ingredients: [
                "1 cup basmati rice",
                "1 cup mixed vegetables",
                "1 onion",
                "1 tomato",
                "1 tablespoon ginger-garlic paste",
                "Biryani masala",
                "Mint and coriander leaves",
                "Salt and oil"
            ],
            instructions: [
                "Wash and soak basmati rice for 20 minutes.",
                "Heat oil and sauté sliced onions.",
                "Add ginger-garlic paste and chopped tomatoes.",
                "Add vegetables, biryani masala and salt.",
                "Add soaked rice and the required water.",
                "Cover and cook until the rice is tender.",
                "Garnish with mint and coriander before serving."
            ]
        },
        {
            id: 6,
            name: "Homemade Vegetable Pizza",
            category: "Dinner",
            time: 40,
            image: "assets/pizza-homemade.webp",
            description: "A homemade pizza topped with colourful vegetables, tomato sauce and melted cheese.",
            ingredients: [
                "1 pizza base",
                "1/2 cup pizza sauce",
                "1/2 cup mozzarella cheese",
                "1/4 cup capsicum",
                "1/4 cup onion",
                "1/4 cup tomato",
                "Mixed herbs"
            ],
            instructions: [
                "Preheat the oven to 200°C.",
                "Place the pizza base on a baking tray.",
                "Spread pizza sauce evenly over the base.",
                "Add chopped vegetables and mozzarella cheese.",
                "Sprinkle mixed herbs on top.",
                "Bake until the cheese melts and the crust is golden.",
                "Slice and serve warm."
            ]
        },
        {
            id: 7,
            name: "Chocolate Lava Cake",
            category: "Desserts",
            time: 30,
            image: "assets/chocolate-cake.webp",
            description: "A rich chocolate dessert with a soft cake outside and a delicious melted chocolate centre.",
            ingredients: [
                "100g dark chocolate",
                "50g butter",
                "2 eggs",
                "1/4 cup sugar",
                "2 tablespoons flour",
                "1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat the oven to 200°C.",
                "Melt chocolate and butter together.",
                "Whisk eggs and sugar until light.",
                "Fold the melted chocolate into the egg mixture.",
                "Add flour and vanilla, then mix gently.",
                "Pour into greased ramekins.",
                "Bake for about 10 to 12 minutes and serve warm."
            ]
        },
        {
            id: 8,
            name: "Fresh Berry Smoothie",
            category: "Breakfast",
            time: 10,
            image: "assets/berry.webp",
            description: "A refreshing smoothie blended with fresh berries and creamy yogurt.",
            ingredients: [
                "1 cup mixed berries",
                "1/2 cup yogurt",
                "1/2 cup milk",
                "1 tablespoon honey",
                "Ice cubes"
            ],
            instructions: [
                "Wash the berries thoroughly.",
                "Add berries, yogurt and milk to a blender.",
                "Add honey and a few ice cubes.",
                "Blend until smooth and creamy.",
                "Pour into a glass and serve chilled."
            ]
        },
        {
            id: 9,
            name: "Herb Grilled Fish",
            category: "Dinner",
            time: 35,
            image: "assets/fish.webp",
            description: "Tender grilled fish seasoned with fresh herbs, lemon and simple spices.",
            ingredients: [
                "2 fish fillets",
                "1 tablespoon olive oil",
                "1 tablespoon lemon juice",
                "1 teaspoon mixed herbs",
                "2 garlic cloves",
                "Salt and pepper"
            ],
            instructions: [
                "Clean and pat the fish fillets dry.",
                "Mix olive oil, lemon juice, garlic and herbs.",
                "Coat the fish with the seasoning.",
                "Allow it to rest for 10 minutes.",
                "Grill until the fish is fully cooked and flakes easily.",
                "Serve with fresh lemon."
            ]
        },
        {
            id: 10,
            name: "Fresh Fruit Dessert",
            category: "Desserts",
            time: 15,
            image: "assets/fresh-fruit.webp",
            description: "A colourful and refreshing dessert made with seasonal fruits and creamy yogurt.",
            ingredients: [
                "1 apple",
                "1 banana",
                "1/2 cup grapes",
                "1/2 cup chopped mango",
                "1/2 cup yogurt",
                "1 tablespoon honey"
            ],
            instructions: [
                "Wash and prepare all the fruits.",
                "Cut the fruits into bite-sized pieces.",
                "Add the fruits to a serving bowl.",
                "Mix yogurt and honey separately.",
                "Pour the yogurt mixture over the fruits.",
                "Chill briefly and serve fresh."
            ]
        }
    ];


    // GET RECIPE ID FROM URL
    const params = new URLSearchParams(window.location.search);
    const recipeId = Number(params.get("id"));

    const recipe = recipes.find(item => item.id === recipeId);

    const detailsContainer = document.getElementById("recipeDetails");
    const invalidMessage = document.getElementById("invalidRecipe");


    // CHECK RECIPE
    if (!recipe) {
        detailsContainer.hidden = true;
        invalidMessage.hidden = false;
        return;
    }


    // DISPLAY RECIPE DETAILS
    detailsContainer.innerHTML = `

        <div class="recipe-details-hero">

            <div class="details-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>

            <div class="details-information">

                <span class="details-category">
                    ${recipe.category}
                </span>

                <h1>${recipe.name}</h1>

                <p class="details-description">
                    ${recipe.description}
                </p>

                <div class="details-meta">

                    <div class="details-meta-item">
                        <span class="material-symbols-outlined">
                            schedule
                        </span>
                        ${recipe.time} Minutes
                    </div>

                    <div class="details-meta-item">
                        <span class="material-symbols-outlined">
                            restaurant
                        </span>
                        ${recipe.category}
                    </div>

                </div>

                <button type="button" class="add-meal-btn" id="addMealBtn">
                    <span class="material-symbols-outlined">
                        add
                    </span>
                    Add to Meal Plan
                </button>

            </div>

        </div>


        <div class="details-content-grid">

            <div class="details-content-card">

                <h2>Ingredients <em>Needed.</em></h2>

                <ul class="ingredient-list">
                    ${recipe.ingredients.map(item => `
                        <li>${item}</li>
                    `).join("")}
                </ul>

            </div>


            <div class="details-content-card">

                <h2>Preparation <em>Steps.</em></h2>

                <ol class="instruction-list">
                    ${recipe.instructions.map(item => `
                        <li>${item}</li>
                    `).join("")}
                </ol>

            </div>

        </div>

    `;


    // ADD RECIPE TO MEAL PLAN
    const addMealBtn = document.getElementById("addMealBtn");

    addMealBtn.addEventListener("click", () => {

        let mealPlan = [];

        try {
            mealPlan = JSON.parse(
                localStorage.getItem("stacklyMealPlan")
            ) || [];
        } catch (error) {
            mealPlan = [];
        }

        const alreadyAdded = mealPlan.some(
            item => Number(item.id) === recipe.id
        );

        if (alreadyAdded) {
            alert("This recipe is already in your meal plan!");
            return;
        }

        mealPlan.push({
            id: recipe.id,
            name: recipe.name,
            category: recipe.category,
            time: recipe.time,
            image: recipe.image
        });

        localStorage.setItem(
            "stacklyMealPlan",
            JSON.stringify(mealPlan)
        );

        addMealBtn.innerHTML = `
            <span class="material-symbols-outlined">check</span>
            Added to Meal Plan
        `;

        alert("Recipe added to your meal plan!");

    });

});
