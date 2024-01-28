myApp.controller('blobioController', function ($scope, $timeout) {
    // Function to handle button click
    $scope.handleButtonClick = function (button) {
        // Position the clicked button in the middle
        $scope.toggleButton(button);

        // Show and animate the blurry tab
        $scope.showBlurryTab();

        // Create a new particle at the button's position
        const buttonElement = document.getElementById(button);
        const rect = buttonElement.getBoundingClientRect();
        const particle = createParticle(rect.left + rect.width / 2, rect.top + rect.height / 2);

        // Add the particle to the array
        $scope.particles.push(particle);
    };

    // Function to show and animate the blurry tab
    $scope.showBlurryTab = function () {
        // Adjust the blur tab container visibility and opacity
        $scope.tabVisible = true;
        $scope.tabOpacity = 1;

        // Set a timeout to make the tab content visible after the button animation
        $timeout(function () {
            $scope.tabContentVisible = true;
        }, 500); // Adjust timing based on your animation duration
    };

    // Information about Blobio
    $scope.gameTitle = 'Blobio';
    $scope.description = 'A fantastic game where blobs roam free';

    // List of features
    $scope.features = [
        'Use customizable skins, each one created with much care.',
        'Adjust your game theme to your liking.',
        'Choose between awesome game modes, each one packed with fun.',
        'Make friends and chat with your fellow blobbers.',
        'Compete with other players and set new records or be the first in the top week.',
        'Be a beta tester and test our upcoming versions!',
        'Collect coins and boosters in game modes.',
        'Record your awesome gameplay and show it to your friends!',
        'Upload your content to YouTube to showcase your skills and possibly earn YT-Status.'
    ];

    // Add a line break after each period in feature sentences
    $scope.featuresText = $scope.features.join('.\n');
// Variables to store mouse position
let mouseX = 0;
let mouseY = 0;

// Update mouse position on movement
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX / window.innerWidth;
    mouseY = event.clientY / window.innerHeight;
});

// Set uniform variables for mouse position
const mouseUniform = gl.getUniformLocation(shaderProgram, 'mouse');

