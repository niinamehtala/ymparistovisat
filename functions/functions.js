const buttons = document.querySelectorAll('.grow-button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        console.log("Button is hovered over!");
    });
});
