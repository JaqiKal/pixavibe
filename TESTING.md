# Table of Contents

- [User Story Testing](#user-story-testing)
- [Validator Testing](#validator-testing)
  - [JSX](#jsx)
  - [HTML](#html)
  - [CSS](#css)
  - [Lighthouse](#lighthouse)
  - [Custom Automated Testing](#custom-automated-testing)
- [Manual Testing](#manual-testing)
  - [Site Navigation](#site-navigation)
  - [Home Page](#home-page)
  - [Post Detail](#post-detail)
    - [Comments](#comments)
  - [Post Form](#post-form)
  - [Profile Page](#profile-page)
  - [Popular Profiles Section](#popular-profiles-section)
  - [Sign In/Up Pages](#sign-inup-pages)
- [Issues](issues)
  - [Open issues](open-issues)
  - [Known and unsolved issues](known-and-unsolved-issues)

[Back to README](README.md)

## User Story Testing

**EPIC - Scope**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a product owner, I want to define the project scope and vision so that all stakeholders have a clear understanding of the project's goals and objectives | The project scope and vision are defined during initial phase and documented in a project charter | |
| As a product owner, I want to identify key features and functionalities required for the application so that it meets user needs effectively | Key features are identified through user research and requirements gathering sessions with stakeholder(s) | |

**EPIC - Development**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a developer, I want to set up a project repository for the front-end and back-end so that I can manage the codebase efficiently | Set up separate Git repositories for the front-end and back-end on GitHub and configure them with appropriate README files and branch protections | |
| As a developer, I want to configure the development environment so that I can ensure consistent setup across different machines | Use tools like Docker to create consistent development environments, and document setup instructions in the README.md file | |
| As a developer, I want to design a responsive user interface using React so that users have a seamless experience across devices | Implement responsive design principles using CSS frameworks like Bootstrap and test across different devices and screen sizes | |
| As a developer, I want to create reusable components in React so that the codebase is maintainable and scalable | Develop React components with a modular architecture and document them | |
| As a developer, I want to create a Django project and set up the Django Rest Framework so that I can build the API | Initialize a Django project, install Django Rest Framework, and configure settings including database connections | |
| As a developer, I want to design database models so that the data is structured logically | Create Django models to represent the data structure, ensuring relationships and constraints are appropriately defined | |
| As a developer, I want to implement CRUD operations in the API so that users can manage their content | Develop API views and serializers in Django Rest Framework to handle create, read, update, and delete operations for the main entities | |
| As a developer, I want to integrate the front-end with the back-end API so that data can be fetched and displayed dynamically | Use Axios or Fetch API in React to make requests to the Django REST API and update the UI based on the responses | |
| As a developer, I want to secure user data by storing passwords hashed and ensuring sensitive information is protected | Use Django's built-in password hashing mechanism and configure environment variables for sensitive settings using `env.py` and Heroku Config Vars | |
| As a developer, I want to write tests so that I can ensure the functionality of my React components | Write manual tests for React components | |
| As a developer, I want to write tests so that I can verify the correctness of the API endpoints | Use Django's test framework to write unit tests and integration tests for API endpoints, ensuring they return expected results | |

**EPIC - Navigation & Authentication**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view a navbar from every page so that I can navigate easily between pages | Implement a persistent navigation bar component in React that is included on all pages | |
| As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh | Use React Router to enable client-side routing, ensuring navigation does not trigger full page reloads | |
| As a user I can create a new account so that I can access all the features for signed up users | Develop a registration form that submits user data to the Django REST API to create new user accounts | |
| As a user I can sign in to the app so that I can access functionality for logged in users | Implement a login form that authenticates users via the Django REST API and stores the authentication token in local storage | |
| As a user I can tell if I am logged in or not so that I can log in if I need to | Display user authentication status in the navigation bar, showing different links based on login state | |
| As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised | Use token-based authentication with automatic token refresh to keep users logged in until they explicitly log out | |
| As a logged out user I can see sign in and sign up options so that I can sign in/sign up | Ensure the navigation bar shows links to the sign-in and sign-up pages for unauthenticated users | |
| As a user I can view user's avatars so that I can easily identify users of the application | Display user avatars in the navigation bar, user profiles, and next to user-generated content | |

**EPIC - Adding & Liking Posts**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a logged in user I can create posts so that I can share my images with the world! | Develop a post creation form in React that submits new posts to the Django REST API | |
| As a user I can view the details of a single post so that I can learn more about it | Implement a post detail page that fetches and displays a single post's data from the API | |
| As a logged in user I can like a post so that I can show my support for the posts that interest me | Add a like button to posts that sends a like request to the API and updates the like count on the UI | |

**EPIC - The Posts Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content | Fetch and display posts from the API in descending order of creation date | |
| As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in | Implement a search bar that filters posts based on keywords entered by the user | |
| As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most | Create a view that fetches and displays posts liked by the authenticated user | |
| As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about | Implement a feed that displays posts from users followed by the authenticated user |
| As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc | Implement infinite scroll functionality that fetches more posts as the user scrolls down | |
| As a user, I want to add hashtags to my posts so that they are easier to find | Add a hashtag feature to the post creation form and store tags in the database | Not fully implemented, see [Known and unsolved issues](known-and-unsolved-issues) |
| As a user, I want to search for posts by tags so that I can find related content | Implement a tag search feature that filters posts based on selected tags | |

**EPIC - The Post Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view the posts page so that I can read the comments about the post | Display the post's comments below the post content on the post detail page | |
| As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created | Add an edit button to the post detail page that opens a form for updating the post's title and description | |
| As a logged in user I can add comments to a post so that I can share my thoughts about the post | Implement a comment form on the post detail page that submits new comments to the API | |
| As a user I can see how long ago a comment was made so that I know how old a comment is | Display timestamps next to each comment showing how long ago they were posted | |
| As a user I can read comments on posts so that I can read what other users think about the posts | List comments below the post content on the post detail page | |
| As an owner of a comment I can delete my comment so that I can control removal of my comment from the application | Add a delete button to each comment that sends a delete request to the API and removes the comment from the UI | |
| As an owner of a comment I can edit my comment so that I can fix or update my existing comment | Add an edit button to each comment that opens a form for updating the comment's content | |
| As a user, I want to add category to my posts so that they are easier to find. | Develop category feature in the API and provide UI elements for adding and displaying category on posts | |

**EPIC - The Profile Page**
| Goals | How are they achieved? | Comment |
| --- | --- |--- |
| As a user I can view other users profiles so that I can see their posts and learn more about them | Implement user profile pages that display user information and their posts | |
| As a user I can see a list of the most followed profiles so that I can see which profiles are popular | Create a section on the site that lists the most followed profiles | |
| As a user I can view statistics about a specific user: number of posts, follows and users followed so that I can learn more about them | Display user statistics (number of posts, follows, and followed users) on profile pages | |
| As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed | Implement follow and unfollow buttons on user profiles that update the follow status via the API | |
| As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them | List all posts by the user on their profile page | |
| As a logged in user I can edit my profile so that I can change my profile picture and bio | Add an edit profile button that opens a form for updating the profile picture and bio | |
| As a logged in user I can update my username and password so that I can change my display name and keep my profile secure | Provide options for changing username and password in the user settings | |
| As a developer, I want to implement a blocking functionality so that users do not have to see posts from users they have blocked | Develop a blocking feature in the API and provide UI controls for blocking users | |
| As a user, I want to be able to block other users so that they cannot interact with my content | Add block buttons to user profiles that update the block status via the API | Moved to future feature backlog |
| As a developer, I want to create a contact form that stores user queries, complaints, or suggestions in the Contact model so that the platform can handle user feedback | Implement a contact form that submits user feedback to the API and stores it in the database | |
| As a user, I want to send feedback or queries to the platform administrators so that I can report issues or suggest improvements | Add a feedback form accessible from the user menu that submits feedback to the platform administrators | |

## Validator Testing

### JSX

I have used jsx-Prettier and ESLint throughout the development to check that my JSX and JavaScript meet the standards for clean code.

### HTML

I validated my HTML pages using the W3 Nu HTML Checker. They came back with no errors, only pointers about redundant trailing slashes left by React. You can check the results for each page below.

<details>
<summary>HTML validation results</summary>

[PostsPage](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2F)

[Post Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fposts%2F66)

[Profile](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fprofiles%2F4)

[Edit profile](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fprofiles%2F4%2Fedit)

[Sign Up](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fsignup)

[Sign In](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fsignin)

[PostCreateForm](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fposts%2Fcreate)

[PostEditForm](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpixavibe-frontend-e53fa907f215.herokuapp.com%2Fposts%2F1%2Fedit)

</details>

### CSS

Validation process was automated by using the css-validator npm package. All pages come back clean without any errors. </br>
Script used `validate-css.js`

<details>
<summary>CSS validation results</summary>

![CSS-01](/documentation/testing_image/validate_css_01.png)

![CSS-02](/documentation/testing_image/validate_css_02.png)

</details>

### Lighthouse

I used Lighthouse to test all pages. Performance results were quite low, but this is to be expected when loading multiple images from an API, and sending lots of requests to another API. All other scores are good.

#### Desktop

| Page         | Performance | Accessibility | Best Practices | SEO |
| ------------ | ----------- | ------------- | -------------- | --- |
| Home         | 64          | 95            | 78             | 100 |
| Post Detail  | 59          | 91            | 78             | 100 |
| Post Form    | 99          | 87            | 78             | 100 |
| Profile page | 84          | 91            | 96             | 91  |
| Login        | 97          | 86            | 96             | 91  |
| Register     | 97          | 86            | 96             | 91  |

#### Mobile

| Page         | Performance | Accessibility | Best Practices | SEO |
| ------------ | ----------- | ------------- | -------------- | --- |
| Home         | 63          | 96            | 78             | 100 |
| Post Detail  | 50          | 88            | 78             | 100 |
| Post Form    | 55          | 81            | 78             | 92  |
| Profile page | 75          | 89            | 78             | 92  |
| Login        | 85          | 95            | 74             | 100 |
| Register     | 88          | 95            | 74             | 100 |

### Custom Automated Testing

In addition to the various validators and automated tests above, I created some automated tests to test my code. Most of these tests check models, serializers, and validators used on the backend.

## Manual Testing

**Browser Testing**

I have tested this site on the following browsers:

- Google Chrome
- Android Internet

**Device Testing**

- Lenovo Thinkpad t480
- Samsung Galaxy S20

## Function Test

### Test case naming convention

'xxx-m/a-nn'

- xxx = Abbreviation for app
- m/a = manual or automatic script
- nn = test case IS no.

### App abbreviation

- BLK = blocks
- COM = comments
- CON = contacts
- FOL = followers
- HTG = hashtags
- LKS = likes
- PST = posts
- PRF = profiles

### Preparation and setup

**setUp Method**:

- This method is called before each individual test method to set up the necessary state.
- It creates a user with the username 'adam' and the password 'pass'.
- Logs in the created user.
- Creates a post associated with the logged-in user.
- Prepares the initial test environment.

**tearDown Method**:

- This method is called after each test method to clean up the test environment.
- Logs out the user.
- Deletes all User and Post instances to ensure a clean state for the next test.

#### Executed test cases

##### blocks

| ID       | Description                                                                                                                                                                                                | Expected Outcome                                                                                                                  | Result | Comment |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| BLK-A-01 | Test `def test_create_block(self):` checks if a block can be created successfully. It sends a POST request to the `/blocks/` endpoint.                                                                     | The block is created successfully with a status code of 201 Created.                                                              | PASS   |         |
| BLK-A-02 | Test `def test_create_block(self):` checks the creation of a block. It sends a POST request to the `/blocks/` endpoint.                                                                                    | The block is created successfully with a status code of 201 Created.                                                              | PASS   |         |
| BLK-A-01 | Test `def test_list_blocks(self):` checks if the list of blocks can be retrieved successfully. It sends a GET request to the `/blocks/` endpoint.                                                          | The list of blocks is retrieved successfully with a status code of 200 OK.                                                        | PASS   |         |
| BLK-A-01 | Test `def test_retrieve_block(self):` checks if a specific block can be retrieved successfully. It sends a GET request to the `/blocks/<int:pk>/` endpoint.                                                | The specific block is retrieved successfully with a status code of 200 OK.                                                        | PASS   |         |
| BLK-A-01 | Test `def test_delete_block(self):` checks if a block can be deleted successfully. It sends a DELETE request to the `/blocks/<int:pk>/` endpoint.                                                          | The block is deleted successfully with a status code of 204 No Content.                                                           | PASS   |         |
| BLK-A-02 | Test `def test_block_duplicate(self):` checks that a duplicate block cannot be created. It sends a POST request to the `/blocks/` endpoint.                                                                | An error is returned with a status code of 400 Bad Request, preventing the creation of a duplicate block.                         | PASS   |         |
| BLK-A-01 | Test `def test_cannot_block_without_authentication(self):` checks that a user cannot block another user without authentication. It sends a POST request to the `/blocks/` endpoint without authentication. | An error is returned with a status code of 401 Unauthorized, preventing the block from being created without user authentication. | PASS   |         |

##### Results in terminal

![BLK](/documentation/testing_image/blocks-tc-result.png)

##### comments

| ID       | Description                                                                                                                                                                                                                                                                                                                                                                                                | Expected Outcome                                                                              | Result | Comment |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------ | ------- |
| COM-A-01 | Test `def test_can_list_comments(self):` checks if the list of comments can be retrieved successfully. It creates a comment, sends a GET request to the `/comments/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`200 OK`).                                                                                           | The test will first fail with a status code assertion error, then pass with `200 OK`.         | PASS   |         |
| COM-A-02 | Test `def test_can_create_comment(self):` checks if an authenticated user can create a comment. It sends a POST request to the `/comments/` endpoint with the comment data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`201 Created`).                                                                                         | The test will first fail with a status code assertion error, then pass with `201 Created`.    | PASS   |         |
| COM-A-03 | Test `def test_can_retrieve_comment_using_valid_id(self):` checks if a comment can be retrieved using a valid ID. It creates a comment, sends a GET request to the `/comments/{comment_id}/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`200 OK`).                                                                   | The test will first fail with a status code assertion error, then pass with `200 OK`.         | PASS   |         |
| COM-A-04 | Test `def test_cant_retrieve_comment_using_invalid_id(self):`checks that retrieving a comment with an invalid ID returns a `404 Not Found` status. It sends a GET request to the `/comments/999/` endpoint (assuming ID 999 does not exist), asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`404 Not Found`).                      | The test will first fail with a status code assertion error, then pass with `404 Not Found`.  | PASS   |         |
| COM-A-05 | Test `def test_user_can_update_own_comment(self):`checks if a user can update their own comment. It creates a comment, sends a PUT request to the `/comments/{comment_id}/` endpoint with the updated data, asserts an incorrect status code first (intentional fail), reruns the test with the correct status code assertion (`200 OK`), and asserts that the comment content has been updated correctly. | The test will first fail with a status code assertion error, then pass with `200 OK`.         | PASS   |         |
| COM-A-06 | Test `def test_user_can_delete_own_comment(self):` checks if a user can delete their own comment. It creates a comment, sends a DELETE request to the `/comments/{comment_id}/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`204 No Content`).                                                                        | The test will first fail with a status code assertion error, then pass with `204 No Content`. | PASS   |         |
| COM-A-07 | Test `def test_user_cant_create_comment_without_authentication(self):` checks that a user cannot create a comment without being authenticated. It logs out the user, sends a POST request to the `/comments/` endpoint with the comment data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`403 Forbidden`).                     | The test will first fail with a status code assertion error, then pass with `403 Forbidden`.  | PASS   |         |

#### Result in Terminal

![COM]()

##### contacts

| ID  | Description | Expected Outcome | Result | Comment |
| --- | ----------- | ---------------- | ------ | ------- |

##### Result in Terminal

![CON]()

##### followers

| ID  | Description | Expected Outcome | Result | Comment |
| --- | ----------- | ---------------- | ------ | ------- |

##### Result in Terminal

![FLW]()

##### likes

| ID  | Description | Expected Outcome | Result | Comment |
| --- | ----------- | ---------------- | ------ | ------- |

##### Results in terminal

![LKS]()

##### posts

| ID        | Description                                                                                                                                                                                                                                                                                                                                                                   | Expected Outcome                                                                             | Result | Comment |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------ | ------- |
| POST-A-01 | Test `def test_can_list_posts(self):` checks if the list of posts can be retrieved successfully. It creates a post, sends a GET request to the `/posts/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`200 OK`).                                                                          | The test will first fail with a status code assertion error, then pass with `200 OK`.        | PASS   |
| POST-A-02 | Test `def test_logged_in_user_can_create_post(self):` checks if an authenticated user can create a post. It sends a POST request to the `/posts/` endpoint with the post data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`201 Created`).                                                         | The test will first fail with a status code assertion error, then pass with `201 Created`.   | PASS   |
| POST-A-03 | Test `def test_user_not_logged_in_cant_create_post(self):` checks that a user cannot create a post without being authenticated. It logs out the user, sends a POST request to the `/posts/` endpoint with the post data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`403 Forbidden`).             | The test will first fail with a status code assertion error, then pass with `403 Forbidden`. | PASS   |
| POST-A-04 | Test `def test_can_retrieve_post_using_valid_id(self):` checks if a post can be retrieved using a valid ID. It sends a GET request to the `/posts/{post_id}/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`200 OK`).                                                                     | The test will first fail with a status code assertion error, then pass with `200 OK`.        | PASS   |
| POST-A-05 | Test `def test_cant_retrieve_post_using_invalid_id(self):` checks that retrieving a post with an invalid ID returns a `404 Not Found` status. It sends a GET request to the `/posts/999/` endpoint (assuming ID 999 does not exist), asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`404 Not Found`). | The test will first fail with a status code assertion error, then pass with `404 Not Found`. | PASS   |
| POST-A-06 | Test `def test_user_can_update_own_post(self):` checks if a user can update their own post. It sends a PUT request to the `/posts/{post_id}/` endpoint with the updated data, asserts an incorrect status code first (intentional fail), reruns the test with the correct status code assertion (`200 OK`), and asserts that the post content has been updated correctly.     | The test will first fail with a status code assertion error, then pass with `200 OK`.        | PASS   |
| POST-A-07 | Test `def test_user_cant_update_another_users_post(self):` checks that a user cannot update another user's post. It sends a PUT request to the `/posts/{post_id}/` endpoint with the updated data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`403 Forbidden`).                                   | The test will first fail with a status code assertion error, then pass with `403 Forbidden`. | PASS   |

###### Result in Terminal

![PST]()

##### profiles

| ID  | Description | Expected Outcome | Result | Comment |
| --- | ----------- | ---------------- | ------ | ------- |

###### Results in terminal

![PRF]()

## Manual Test

### Site Navigation

| Feature        | Action      | Expected Outcome                                        | Pass/Fail |
| -------------- | ----------- | ------------------------------------------------------- | --------- |
| Navbar Logo    | Hover/Focus | Indicate focus                                          | Pass      |
| Navbar Logo    | Click       | Redirect to home                                        | Pass      |
| Navbar toggler | Display     | Visible on small screens only                           | Pass      |
| Navbar toggler | Click       | Opens dropdown with navigation links                    | Pass      |
| Following Link | Display     | Only display when user is signed in                     | Pass      |
| Following Link | Click       | Open following feed page                                | Pass      |
| Liked Link     | Display     | Only display when user is signed in                     | Pass      |
| Liked Link     | Click       | Open liked posts feed page                              | Pass      |
| Navbar Links   | Display     | Links display in header on screens above a certain size | Pass      |
| Profile Link   | Display     | Only display when user is signed in                     | Pass      |
| Profile Link   | Click       | Open profile page                                       | Pass      |
| Register Link  | Display     | Only display when user is not signed in                 | Pass      |
| Register Link  | Click       | Open signup page                                        | Pass      |
| Log-in Link    | Display     | Only display when user is not signed in                 | Pass      |
| Log-in Link    | Click       | Open login page                                         | Pass      |
| Log-out Link   | Display     | Only display when user is signed in                     | Pass      |
| Log-out Link   | Click       | Log the user out                                        | Pass      |

### Home Page

| Feature           | Action  | Expected Outcome                                                 | Pass/Fail |
| ----------------- | ------- | ---------------------------------------------------------------- | --------- |
| Post list         | Display | All posts appear in sorted order                                 | Pass      |
| Post              | Display | Post displays title, author, image, content, and time of posting | Pass      |
| Post              | Display | Post displays the number of likes and comments                   | Pass      |
| Avatar            | Display | Post owner's avatar is present on the post                       | Pass      |
| Avatar            | Click   | Clicking an avatar opens the associated profile page             | Pass      |
| Post Link         | Click   | Clicking the post opens the detail page                          | Pass      |
| Like Icon         | Click   | Like/Unlinke the post                                            | Pass      |
| Like Counter      | Display | Display the correct number of likes received by the post         | Pass      |
| Comment Icon      | Click   | Open the post's comment section                                  | Pass      |
| Comment Counter   | Display | Display the correct number of comments on the post               | Pass      |
| Search Bar        | Input   | Apply search term and filter posts automatically                 | Pass      |
| 'New Post' Button | Display | Only visible to signed-in users                                  | Pass      |
| 'New Post' Button | Click   | Open post form                                                   | Pass      |
| Post feed         | Display | All posts appear in an infinite scroll feed                      | Pass      |
| Post feed         | Display | Posts by blocked users are not displayed                         | Pass      |
| Post feed         | Display | "Following" feed only displays posts by followed users           | Pass      |
| Post feed         | Display | "Liked" feed only displays posts the current user has liked      | Pass      |
| Report button     | Display | Only displays on other users' posts                              | Pass      |
| Report button     | Click   | Open the report form                                             | Pass      |
| Report form       | Submit  | Sends a report to the admin page                                 | Pass      |

### Post Detail

| Feature         | Action  | Expected Outcome                                                 | Pass/Fail |
| --------------- | ------- | ---------------------------------------------------------------- | --------- |
| Post            | Display | Post displays title, author, image, content, and time of posting | Pass      |
| Post            | Display | Post displays the number of likes and comments                   | Pass      |
| Avatar          | Display | Post owner's avatar is present on the post                       | Pass      |
| Avatar          | Click   | Clicking an avatar opens the associated profile page             | Pass      |
| Edit Button     | Display | Display if logged in as the author of the post                   | Pass      |
| Edit Button     | Click   | Open the post editing page                                       | Pass      |
| Delete Button   | Display | Display if logged in as the author of the post                   | Pass      |
| Delete Button   | Click   | Delete the post                                                  | Pass      |
| Like Icon       | Click   | Like/Unlinke the post                                            | Pass      |
| Like Counter    | Display | Display the correct number of likes received by the post         | Pass      |
| Comment Icon    | Click   | Open the post's comment section                                  | Pass      |
| Comment Counter | Display | Display the correct number of comments on the post               | Pass      |
| Report button   | Display | Only displays on other users' posts                              | Pass      |
| Report button   | Click   | Open the report form                                             | Pass      |
| Report form     | Submit  | Sends a report to the admin page                                 | Pass      |

#### Comments

| Feature       | Action  | Expected Outcome                                                  | Pass/Fail |
| ------------- | ------- | ----------------------------------------------------------------- | --------- |
| Comment Form  | Display | Display when a user is signed in                                  | Pass      |
| Comment Form  | Submit  | Submit the form and add the comment to the post                   | Pass      |
| Comments      | Display | Commments appear in descending order in an infinite scroll format | Pass      |
| Comments      | Display | Comments display the owner's username and avatar                  | Pass      |
| Comments      | Display | Comments by blocked users are blocked                             | Pass      |
| Comments      | Click   | Clicking the avatar opens the associated profile                  | Pass      |
| Edit Button   | Display | Display if logged in as the author of the post                    | Pass      |
| Edit Button   | Click   | Open the comment form                                             | Pass      |
| Delete Button | Display | Display if logged in as the author of the post                    | Pass      |
| Delete Button | Click   | Delete the comment                                                | Pass      |

### Post Form

| Feature               | Action  | Expected Outcome                                       | Pass/Fail |
| --------------------- | ------- | ------------------------------------------------------ | --------- |
| Upload Button         | Display | The upload Button appears                              | Pass      |
| Upload Button         | Click   | Opens a file Belector window                           | Pass      |
| Title Input           | Display | The title inIut has a label making its purpose clear   | Pass      |
| Title Input           | Input   | The user can type in the Title field                   | Pass      |
| Content Input         | Display | The content input has a label making its purpose clear | Pass      |
| Contnet Input         | Input   | The user can type in the content field                 | Pass      |
| "Friends only" Toggle | Display | A checkbox with a label explaining its purpose appears | Pass      |
| "Friends only" Toggle | Click   | Clicking the checkbox toggles the state                | Pass      |
| Cancel Button         | Click   | Close the form without any changes                     | Pass      |
| Submit Button         | Click   | Submit the form and create/update the post             | Pass      |
| Submit Button         | Click   | Close the form and redirect the user to the post feed  | Pass      |

### Profile Page

| Feature                   | Action  | Expected Outcome                                                                                                      | Pass/Fail |
| ------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------- | --------- |
| Avatar                    | Display | The user's avatar appears on the top of the page                                                                      | Pass      |
| Username                  | Display | The user's username appears on the top of the page                                                                    | Pass      |
| User Stats                | Display | The number of posts, followers, and followed users are displayed                                                      | Pass      |
| "Follows you" Message     | Display | If the profile owner follows the signed-in user, a line about it appears                                              | Pass      |
| Options Button            | Display | The option button appears if signed-in as the profile owner                                                           | Pass      |
| Options Button            | Click   | Clicking opens the profile options menu                                                                               | Pass      |
| Options Menu              | Display | Display options for editing the profile, username, password, and deleting the account                                 | Pass      |
| "Edit profile" Button     | Click   | Open the profile editing form                                                                                         | Pass      |
| "Change username" Button  | Click   | Open the username editing form                                                                                        | Pass      |
| "Change password" Button  | Click   | Open the password editing form                                                                                        | Pass      |
| "Delete account" Button   | Click   | Opens a delete confirmation modal                                                                                     | Pass      |
| Delete Confirmation Modal | Display | Displays a message about permanent deletion and options to confirm or cancel                                          | Pass      |
| Delete Confirmation Modal | Effect  | Modal prevents interaction with the page until user responds to the modal                                             | Pass      |
| Cancel Button             | Click   | Closes the deltion modal without any action                                                                           | Pass      |
| Delete Button             | Click   | Deletes the profile and its associated user instance, along with any cookies and auth tokens, then redirects the user | Pass      |
| User Posts                | Display | The profile owner's posts are displayed under the profile                                                             | Pass      |
| User Posts                | Display | The profile post feed has an infinite scroll layout                                                                   | Pass      |

### Popular Profiles Section

| Feature                | Action  | Expected Outcome                                                                    | Pass/Fail |
| ---------------------- | ------- | ----------------------------------------------------------------------------------- | --------- |
| Popular Profiles       | Display | The "popular profiles" section displays across the site                             | Pass      |
| Popular Profiles       | Display | The list updates to reflect the number of followers for each profile                | Pass      |
| Popular Profiles       | Display | The list moves to the top and center on smaller screens                             | Pass      |
| Popular Profiles       | Display | No "popular profiles" section appears on profile pages on smaller screens           | Pass      |
| Username               | Display | User avatars appear for each profile                                                | Pass      |
| Username               | Click   | Open the associated profile page                                                    | Pass      |
| Avatar                 | Display | User avatars appear on larger screens                                               | Pass      |
| Avatar                 | Click   | Open the associated profile page                                                    | Pass      |
| Follow/Unfollow Button | Display | A follow/unfollow button appears next to each profile on large screens if signed in | Pass      |
| Follow/Unfollow Button | Click   | Clicking the button follows/unfollows the user                                      | Pass      |
| Follow/Unfollow Button | Click   | Clicking the button updates the button and its sibling buttons on other components  | Pass      |

### Sign In/Up Pages

| Feature                | Action  | Expected Outcome                                    | Pass/Fail |
| ---------------------- | ------- | --------------------------------------------------- | --------- |
| Username Input         | Display | A label and placeholder make the purpose clear      | Pass      |
| Username Input         | Input   | The user can input a username                       | Pass      |
| Password Input         | Display | A label and placeholder make the purpose clear      | Pass      |
| Password Input         | Input   | The user can input a username                       | Pass      |
| Confirm Password Input | Display | A label and placeholder make the purpose clear      | Pass      |
| Confirm Password Input | Input   | The user can input a password                       | Pass      |
| Sign Up Button         | Click   | Validate the form before submission                 | Pass      |
| Sign Up Button         | Click   | Notify the user about any invalid data              | Pass      |
| Sign Up Button         | Click   | Submit the form and create the new user and profile | Pass      |
| Sign In Button         | Click   | Validate the form before submission                 | Pass      |
| Sign In Button         | Click   | Notify the user about any invalid data              | Pass      |
| Sign In Button         | Click   | Submit the form and create the new user and profile | Pass      |

[Back to README](README.md)

## Issues

- Social Authentication Installation Error:

  - During the process of setting up our Django application in the pixavibe-api environment, we encountered a specific error related to package dependencies when attempting to install `dj-rest-auth[with_social]`. This issue was triggered by an incompatibility between the django-allauth package and the version of Python we were using (Python 3.12.2).
    - Downgraded to Python 3.11.9 to resolve this.
    - Added runtime.txt with python-3.9.11 to ensure consistent Python version across environments and prevent future issues.
      To execute the final migration required for enabling JSON Web Token authentication.
    - pip install django-allauth==0.54.0
    - In settings.py MIDDLEWARE remove 'allauth.account.middleware.AccountMiddleware' this is only required since django-allauth==0.56.0

  **Error message**:

  - ![x](/documentation/testing_image/error-all-auth-incomptible-python-3-12-2.webp)

## Known and unsolved issues

- Hashtag----
- When loading certain pages, 401/400 errors occur due to the absence or expiration of an authorization token, or when invalid form input is provided. These instances include:
  - Mounting when not logged in
  - Redirecting a logged-in user away from the sign-up/sign-in page
  - Submitting a sign-in form without entering a username. Expired access token that is refreshed in the background, leading to eventual success
    ![x](/documentation/testing_image/401-error.png)
- Interface elements that depend on the user's authorization state sometimes fail to load without a page refresh. This behavior is consistent with the course material.
- (posts/views.py): django rest framework bug, in the Filter set fields list the Field filters label shows 'Invalid Name'.
- **Disclaimer on npm Audit Issues**: </br>
  As students, we're not expected to fix the following npm audit errors identified in this project. The listed issues may involve breaking changes, which are beyond the scope of our current work. Here are the identified vulnerabilities:

  - **ansi-html** (<0.0.8): High severity - Uncontrolled Resource Consumption.
  - **axios** (0.8.1 - 0.27.2): Moderate severity - Cross-Site Request Forgery Vulnerability.
  - **braces** (<3.0.3): High severity - Uncontrolled Resource Consumption.
  - **browserslist** (4.0.0 - 4.16.4): Moderate severity - Regular Expression Denial of Service.
  - **ejs** (<=3.1.9): Critical severity - Template injection vulnerability.
  - **glob-parent** (<5.1.2): High severity - Regular Expression Denial of Service.
  - **immer** (7.0.0 - 9.0.5): Critical severity - Prototype Pollution.
  - **ip**: High severity - Server-Side Request Forgery.
  - **loader-utils** (2.0.0 - 2.0.3): Critical severity - Prototype Pollution.
  - **lodash.template**: High severity - Command Injection.
  - **minimatch** (<3.0.5): High severity - Regular Expression Denial of Service.
  - **node-forge** (<=1.2.1): High severity - Prototype Pollution.
  - **nth-check** (<2.0.1): High severity - Inefficient Regular Expression Complexity.
  - **postcss** (<8.4.31): Moderate severity - Line return parsing error.
  - **semver** (7.0.0 - 7.5.1): Moderate severity - Regular Expression Denial of Service.
  - **shell-quote** (<=1.7.2): Critical severity - Improper Neutralization of Special Elements.
  - **webpack-dev-middleware** (<=5.3.3): High severity - Path traversal.

There are a total of 138 vulnerabilities (1 low, 80 moderate, 49 high, 8 critical).
