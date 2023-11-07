document.addEventListener('DOMContentLoaded', function(e) {
    const text = document.getElementById('text')
    text.textContent = "This is really cool!"
})

console.log("This fires when index.js loads - before DOMContentLoaded is triggered");