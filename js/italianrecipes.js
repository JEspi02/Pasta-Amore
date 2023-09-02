const italianMenu = [
{
    title: 'Margherita Pizza',
    ingredients: 'Pizza dough, San Marzano tomatoes, fresh mozzarella, basil leaves, and olive oil.',
    price: 12.99,
    summary: 'Indulge in the simplicity of our Margherita Pizza, a classic Italian favorite topped with San Marzano tomatoes, slices of creamy fresh mozzarella, and aromatic basil leaves drizzled with olive oil.',
    image: "img/margheritapizza.jpg" 
},
{
    title: 'Ravioli Carbonara',
    ingredients: 'Ravioli, pancetta, eggs, Parmesan cheese, heavy cream, and black pepper.',
    price: 14.99,
    summary: 'Experience the decadence of our Ravioli Carbonara, featuring delicate ravioli tossed in a rich and creamy carbonara sauce made with pancetta, eggs, Parmesan cheese, and a touch of black pepper.',
    image: "img/raviolicarbanara.jpg" 
},
{
    title: 'Osso Buco',
    ingredients: 'Veal shanks, mirepoix (onion, celery, carrots), tomatoes, white wine, broth, and gremolata.',
    price: 15.99,
    summary: 'Savor the Italian tradition with our Osso Buco, a tender veal shank braised to perfection in a flavorful mixture of mirepoix, tomatoes, white wine, and broth, garnished with a zesty gremolata.',
    image: "img/ossobuco.jpg" 
},
{
    title: 'Tiramisu',
    ingredients: 'Ladyfingers, mascarpone cheese, eggs, sugar, coffee, cocoa powder, and coffee liqueur.',
    price: 10.99,
    summary: 'End your meal on a sweet note with our classic Tiramisu, featuring layers of soft ladyfingers soaked in coffee and layered with creamy mascarpone cheese, dusted with cocoa powder and a hint of coffee liqueur.',
    image: "img/tiramisu.jpg" 
},
{
    title: 'Spaghetti Bolognese',
    ingredients: 'Spaghetti, ground beef, onions, garlic, tomatoes, tomato paste, red wine, herbs, and Parmesan cheese.',
    price: 13.99,
    summary: 'Delight in the richness of our Spaghetti Bolognese, a comforting Italian pasta dish served with a hearty meat sauce made from ground beef, onions, garlic, tomatoes, red wine, and a blend of aromatic herbs, topped with grated Parmesan cheese.',
    image: "img/spaghettibolognese.jpg" 
},
{
    title: 'Chicken Marsala',
    ingredients: 'Chicken breasts, flour, mushrooms, Marsala wine, chicken broth, butter, and fresh parsley.',
    price: 14.99,
    summary: 'Experience the savory delight of our Chicken Marsala, tender chicken breasts cooked in a luscious Marsala wine sauce with sautéed mushrooms and a touch of butter, garnished with fresh parsley.',
    image: "img/chickenmarsala.jpg" 
},
{
    title: 'Eggplant Parmesan',
    ingredients: 'Eggplant, breadcrumbs, marinara sauce, mozzarella cheese, Parmesan cheese, and fresh basil.',
    price: 11.99,
    summary: 'Enjoy the vegetarian goodness of our Eggplant Parmesan, featuring layers of breaded and fried eggplant slices smothered in marinara sauce, melted mozzarella, and Parmesan cheese, topped with fresh basil.',
    image: "img/eggplantparmesan.jpg" 
},
{
    title: 'Lasagna',
    ingredients: 'Lasagna noodles, ground beef, Italian sausage, ricotta cheese, marinara sauce, mozzarella cheese, and herbs.',
    price: 12.99,
    summary: 'Indulge in the richness of our classic Lasagna, made with layers of lasagna noodles, a hearty meat sauce made from ground beef and Italian sausage, creamy ricotta cheese, and melted mozzarella, seasoned with a blend of herbs.',
    image: "img/lasagna.jpg" 
},
{
    title: 'Minestrone Soup',
    ingredients: 'Vegetable broth, tomatoes, beans, carrots, celery, zucchini, pasta, and fresh herbs.',
    price: 10.99,
    summary: 'Warm your soul with our Minestrone Soup, a comforting vegetable broth-based soup filled with tomatoes, beans, carrots, celery, zucchini, pasta, and a medley of fresh herbs.',
    image: "img/minestronesoup.jpg" 
},
{
    title: 'Calzone',
    ingredients: 'Pizza dough, ricotta cheese, mozzarella cheese, Italian meats, and marinara sauce.',
    price: 13.99,
    summary: 'Treat yourself to our Calzone, a savory Italian turnover made with pizza dough and stuffed with a delectable combination of ricotta cheese, mozzarella, and a selection of Italian meats, served with a side of marinara sauce for dipping.',
    image: "img/calzone.jpg" 
},
{
    title: 'Seafood Risotto',
    ingredients: 'Arborio rice, shrimp, mussels, clams, white wine, fish broth, garlic, onions, and Parmesan cheese.',
    price: 15.99,
    summary: 'Delight in the flavors of the sea with our Seafood Risotto, creamy Arborio rice cooked with succulent shrimp, tender mussels, and flavorful clams in a white wine and fish broth, seasoned with garlic, onions, and grated Parmesan cheese.',
    image: "img/seafoodrisotto.jpg" 
},
{
    title: 'Chicken Parmesan',
    ingredients: 'Chicken breasts, breadcrumbs, marinara sauce, mozzarella cheese, Parmesan cheese, and fresh basil.',
    price: 13.99,
    summary: 'Indulge in the Italian classic, Chicken Parmesan, featuring tender breaded chicken breasts topped with marinara sauce, melted mozzarella, and Parmesan cheese, all garnished with fresh basil for a delightful burst of flavors.',
    image: "img/chickenparmesan.jpg" 
}
];

// Function to generate the featured items carousel
function generateFeaturedCarousel() {
    const carouselContainer = document.getElementById("featured-carousel");

    for (let i = 0; i < 3; i++) {
        const item = italianMenu[i];

        const carouselCard = document.createElement("div");
        carouselCard.classList.add("carousel-card");

        // Image
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        img.classList.add("carousel-image"); // Add the carousel-image class to the image
        carouselCard.appendChild(img);

        // Summary
        const summary = document.createElement("p");
        summary.textContent = item.summary;
        summary.classList.add("carousel-summary"); // Add the carousel-summary class to the summary
        carouselCard.appendChild(summary);

        // Price
        const price = document.createElement("p");
        price.textContent = `$${item.price.toFixed(2)}`;
        price.classList.add("carousel-price"); // Add the carousel-price class to the price
        carouselCard.appendChild(price);

        // Call to Action button
        const ctaButton = document.createElement("a");
        ctaButton.classList.add("action-button");
        ctaButton.href = "#"; // Replace with the link to the ordering page
        ctaButton.textContent = "Order Now";
        carouselCard.appendChild(ctaButton);

        carouselContainer.appendChild(carouselCard);
    }
}
// Call the function to generate the featured items carousel
generateFeaturedCarousel();

// Function to update the dominant item section
function updateDominantItemSection(item) {
    const dominantItemImg = document.querySelector(".dominant-item-img");
    dominantItemImg.src = item.image;
    dominantItemImg.alt = item.title;

    const dominantItemTitle = document.querySelector(".dominant-item-title");
    dominantItemTitle.textContent = item.title;

    const dominantItemSummary = document.querySelector(".dominant-item-summary");
    dominantItemSummary.textContent = item.summary;

    const dominantItemPrice = document.querySelector(".dominant-item-price");
    dominantItemPrice.textContent = `$${item.price.toFixed(2)}`;

    const dominantItemActionButton = document.querySelector(".dominant-item-action-button");
    // Replace "#" with the link to the ordering page
    dominantItemActionButton.href = "#";
}

// Event listener for the "View" buttons on menu cards
const viewButtons = document.querySelectorAll(".view-button");
viewButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        updateDominantItemSection(italianMenu[index]);
    });
});

// Function to generate the menu items
function generateMenuItems() {
    const menuContainer = document.querySelector(".menu-items");

    for (let i = 0; i < italianMenu.length; i++) {
        const item = italianMenu[i];

        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        // Image
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        img.classList.add("carousel-image"); // Use the same carousel-image class for styling
        menuCard.appendChild(img);

        // Menu item number
        const itemNumber = document.createElement("span");
        itemNumber.textContent = `${i + 1}. `;
        itemNumber.classList.add("menu-item-number");
        menuCard.appendChild(itemNumber);

        // Menu item title
        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.title;
        itemTitle.classList.add("menu-item-title");
        menuCard.appendChild(itemTitle);

        // Menu item summary
        const itemSummary = document.createElement("p");
        itemSummary.textContent = item.summary;
        itemSummary.classList.add("carousel-summary"); // Use the same carousel-summary class for styling
        menuCard.appendChild(itemSummary);

        // Menu item price
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        itemPrice.classList.add("carousel-price"); // Use the same carousel-price class for styling
        menuCard.appendChild(itemPrice);

        // View button
        const viewButton = document.createElement("button");
        viewButton.classList.add("view-button");
        viewButton.textContent = "View";
        viewButton.addEventListener("click", function () {
            updateDominantItemSection(item); // Update the dominant item section with the selected menu item
        });
        menuCard.appendChild(viewButton);

        // Order button
        const orderButton = document.createElement("a");
        orderButton.classList.add("order-button");
        orderButton.href = "#"; // Replace with the link to the ordering page
        orderButton.textContent = "Order";
        menuCard.appendChild(orderButton);

        menuContainer.appendChild(menuCard);
    }
}

// Call the function to generate the menu items
generateMenuItems();
