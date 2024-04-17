
$(document).ready(function() {
    // Fetch desserts data from the API
    $.get("/desserts/data", function(data) {
        // Iterate over each food item and append it to the food menu
        data.forEach(function(item) {
            $("#desserts-menu").append(`
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.description}</p>
                            <p class="card-text">Price: ${item.price}</p>
                        </div>
                    </div>
                </div>
            `);
        });
    });
});
