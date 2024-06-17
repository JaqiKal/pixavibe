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

##### hashtags

| ID  | Description | Expected Outcome | Result | Comment |
| --- | ----------- | ---------------- | ------ | ------- |

##### Result in Terminal

![HTG]()

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

## KNOWN UNSOLVED ISSUES

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
