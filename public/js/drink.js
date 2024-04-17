
$(document).ready(function() {
    // Fetch drink data from the API
    $.get("/drink/data", function(data) {
        // Iterate over each drink item and append it to the drink menu
        data.forEach(function(item) {
            $("#drink-menu").append(`
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
