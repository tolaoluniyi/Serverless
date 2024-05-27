updateVisitCount();
function updateVisitCount() {
    fetch('https://9n5766tpz8.execute-api.us-east-1.amazonaws.com/production')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data;
        })
    }
