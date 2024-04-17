
        $(document).ready(function() {
            // Fetch food data from the API
            $.get("/food/data", function(data) {
                // Iterate over each food item and append it to the food menu
                data.forEach(function(item) {
                    $("#food-menu").append(`
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
