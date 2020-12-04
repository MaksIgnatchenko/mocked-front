fetch('./store-data.json')
    .then(
        function(response) {
            if (response.status !== 200) {
                show({result: "Default layout"});
            }

            // Examine the text in the response
            response.json().then(function(data) {
                console.log(data);
                show(data);
            });
        }
    )
    .catch(function(err) {
        show({result: "Default layout"});
    });

function show(data) {
    const divStoreData = document.getElementById('store-data');
    divStoreData.innerHTML = JSON.stringify(data);
}
