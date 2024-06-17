// This validate file is created with the help of GPT

const validator = require("css-validator");
const fs = require("fs");

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

cssFiles.forEach((file) => {
  try {
    const css = fs.readFileSync(file, "utf-8");
    console.log(`Validating file: ${file}`);

    // Validate CSS
    validator({ text: css }, (error, data) => {
      if (error) {
        console.error(`Validation error in ${file}:`, error);
      } else {
        if (data.errors.length === 0) {
          console.log(`No errors found in ${file}.`);
        } else {
          console.log(`Errors in ${file}:`);
          data.errors.forEach((err) => console.log(err.message));
        }

        if (data.warnings.length === 0) {
          console.log(`No warnings found in ${file}.`);
        } else {
          console.log(`Warnings in ${file}:`);
          data.warnings.forEach((warn) => console.log(warn.message));
        }
      }
    });
  } catch (err) {
    console.error(`Error reading file ${file}:`, err);
  }
});
