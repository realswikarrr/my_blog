export function randomColor() {
  // Generate random values for red, green, and blue components
  var red = Math.floor(Math.random() * 256); // Random number between 0 and 255
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Convert decimal values to hexadecimal strings
  var redHex = red.toString(16).padStart(2, "0"); // Convert to hexadecimal and ensure two digits
  var greenHex = green.toString(16).padStart(2, "0");
  var blueHex = blue.toString(16).padStart(2, "0");

  // Concatenate the hexadecimal values
  var hexColor = "#" + redHex + greenHex + blueHex;

  return hexColor;
}
