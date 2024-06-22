// This validate file is created with the help of GPT

const validator = require("css-validator"); // Import the css-validator package which will be used to validate CSS files.
const fs = require("fs"); // Import the fs (file system) module to enable reading files from the system.

// Define an array of file paths to all the CSS files to validate.
const cssFiles = [
  "./src/styles/Asset.module.css",
  "./src/styles/Avatar.module.css",
  "./src/styles/Button.module.css",
  "./src/styles/CharacterCounter.module.css",
  "./src/styles/Comment.module.css",
  "./src/styles/CommentCreateEditForm.module.css",
  "./src/styles/ContactForm.module.css",
  "./src/styles/CustomModal.module.css",
  "./src/styles/MoreDropdown.module.css",
  "./src/styles/NavBar.module.css",
  "./src/styles/NotFound.module.css",
  "./src/styles/Post.module.css",
  "./src/styles/PostCreateEditForm.module.css",
  "./src/styles/PostsPage.module.css",
  "./src/styles/Profile.module.css",
  "./src/styles/ProfilePage.module.css",
  "./src/styles/SignInUpForm.module.css",
  "./src/App.module.css",
  "./src/index.css",
];

// Iterate over each file path in the cssFiles array.
cssFiles.forEach((file) => {
  try {
    // Read the content of the CSS file synchronously.
    // The 'utf-8' encoding ensures the file is read as a string.
    const css = fs.readFileSync(file, "utf-8");
    console.log(`Validating file: ${file}`);

    // Validate CSS
    validator({ text: css }, (error, data) => {
      if (error) {
        // console.error(`Validation error in ${file}:`, error);
      } else {
        // If no validation error, check for specific CSS errors and warnings.
        if (data.errors.length === 0) {
         // console.log(`No errors found in ${file}.`);
        } else {
        // console.log(`Errors in ${file}:`);
          data.errors.forEach((err) => console.log(err.message)); // Iterate over each error and log the error message.
        }

        if (data.warnings.length === 0) {
        // console.log(`No warnings found in ${file}.`);
        } else {
         // console.log(`Warnings in ${file}:`);
          data.warnings.forEach((warn) => console.log(warn.message)); // Iterate over each warning and log the warning message.
        }
      }
    });
  } catch (err) {
    // console.error(`Error reading file ${file}:`, err); // Catch any errors that occur while reading the file and log them.
  }
});
