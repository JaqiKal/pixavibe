## Function Test - Posts (POS)

### Manual

No manual test executed.

### Script

#### Preparation and setup

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

**print_existing_users Method**:
- Prints the usernames of all existing users in the database.
- Useful for debugging purposes to see which users are present in the test database.

#### Executed test cases

- All: `python manage.py test posts.test`
- PostListView: `python manage.py test posts.tests.PostListViewTests`

| ID        | Description                                                                                                            | Expected Outcome                                                                          | Result  |
|-----------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|---------|
| POST-S-01 | Test `def test_can_list_posts(self):` checks if the list of posts can be retrieved successfully. It creates a post, sends a GET request to the `/posts/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`200 OK`). | The test will first fail with a status code assertion error, then pass with `200 OK`.      | PASS    |
| POST-S-02 | Test `def test_logged_in_user_can_create_post(self):` checks if an authenticated user can create a post. It sends a POST request to the `/posts/` endpoint with the post data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`201 Created`). | The test will first fail with a status code assertion error, then pass with `201 Created`. | PASS    |
| POST-S-03 | Test `def test_user_not_logged_in_cant_create_post(self):` checks that a user cannot create a post without being authenticated. It logs out the user, sends a POST request to the `/posts/` endpoint with the post data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`403 Forbidden`). | The test will first fail with a status code assertion error, then pass with `403 Forbidden`. | PASS    |

- PostDetailList: `python manage.py test posts.tests.PostDetailViewTests`

| ID        | Description                                                                                                            | Expected Outcome                                                                          | Result  |
|-----------|------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|---------|
| POST-D-01 | Test `def test_can_retrieve_post_using_valid_id(self):` checks if a post can be retrieved using a valid ID. It sends a GET request to the `/posts/{post_id}/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`200 OK`). | The test will first fail with a status code assertion error, then pass with `200 OK`.      | PASS    |
| POST-D-02 | Test `def test_cant_retrieve_post_using_invalid_id(self):` checks that retrieving a post with an invalid ID returns a `404 Not Found` status. It sends a GET request to the `/posts/999/` endpoint (assuming ID 999 does not exist), asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`404 Not Found`). | The test will first fail with a status code assertion error, then pass with `404 Not Found`. | PASS    |
| POST-D-03 | Test `def test_user_can_update_own_post(self):` checks if a user can update their own post. It sends a PUT request to the `/posts/{post_id}/` endpoint with the updated data, asserts an incorrect status code first (intentional fail), reruns the test with the correct status code assertion (`200 OK`), and asserts that the post content has been updated correctly. | The test will first fail with a status code assertion error, then pass with `200 OK`.      | PASS    |
| POST-D-04 | Test `def test_user_cant_update_another_users_post(self):` checks that a user cannot update another user's post. It sends a PUT request to the `/posts/{post_id}/` endpoint with the updated data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`403 Forbidden`). | The test will first fail with a status code assertion error, then pass with `403 Forbidden`. | PASS    |


#### Result in Terminal

```py
gitpod /workspace/pixavibe-api (main) $ python manage.py test posts
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
Intentional fail: 200 != 201
.Intentional fail: 404 != 200
.Intentional fail: 200 != 201
.Intentional fail: 403 != 201
.Intentional fail: 200 != 201
.Intentional fail: 201 != 200
.Intentional fail: 403 != 200
.
----------------------------------------------------------------------
Ran 7 tests in 2.378s

OK
Destroying test database for alias 'default'...
```


## Function Test - Comments (COM)

### Manual

#### Executed test cases

| ID  | Description                                                                                                                   | Expected Outcome                                                                                      | Result  |
|-----|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|---------|
| COM-M-01   | Test  checks that a user cannot update another user's comment. It creates another user and a comment by that user, logs in the original user, sends a PUT request to the `/comments/{comment_id}/` endpoint with the updated data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`403 Forbidden`). | The test will first fail with a status code assertion error, then pass with `403 Forbidden`.           |     |

### Script

#### Preparation and setup

**setUp Method**:
- This method is called before each individual test method to set up the necessary state.
- It creates a user with the username 'testuser' and the password 'testpassword'.
- Logs in the created user.
- Creates a post associated with the logged-in user.
- Prepares sample comment data for use in the tests.

**tearDown Method**:
- This method is called after each test method to clean up the test environment.
- Logs out the user.
- Deletes all User, Post, and Comment instances to ensure a clean state for the next test.

**print_existing_users Method**:
- Prints the usernames of all existing users in the database.
- Useful for debugging purposes to see which users are present in the test database.

#### Executed test cases

- All: `python manage.py test comments.tests.CommentTests`

| ID  | Description                                                                                                                   | Expected Outcome                                                                                      | Result  |
|-----|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|---------|
| COM-S-01   | Test `def test_can_list_comments(self):` checks if the list of comments can be retrieved successfully. It creates a comment, sends a GET request to the `/comments/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`200 OK`). | The test will first fail with a status code assertion error, then pass with `200 OK`.                  | PASS    |
| COM-S-02   | Test `def test_can_create_comment(self):` checks if an authenticated user can create a comment. It sends a POST request to the `/comments/` endpoint with the comment data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`201 Created`). | The test will first fail with a status code assertion error, then pass with `201 Created`.             | PASS    |
| COM-S-03   | Test `def test_can_retrieve_comment_using_valid_id(self):` checks if a comment can be retrieved using a valid ID. It creates a comment, sends a GET request to the `/comments/{comment_id}/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`200 OK`). | The test will first fail with a status code assertion error, then pass with `200 OK`.                  | PASS    |
| COM-S-04   | Test `def test_cant_retrieve_comment_using_invalid_id(self):`checks that retrieving a comment with an invalid ID returns a `404 Not Found` status. It sends a GET request to the `/comments/999/` endpoint (assuming ID 999 does not exist), asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`404 Not Found`). | The test will first fail with a status code assertion error, then pass with `404 Not Found`.           | PASS    |
| COM-S-05   | Test `def test_user_can_update_own_comment(self):`checks if a user can update their own comment. It creates a comment, sends a PUT request to the `/comments/{comment_id}/` endpoint with the updated data, asserts an incorrect status code first (intentional fail), reruns the test with the correct status code assertion (`200 OK`), and asserts that the comment content has been updated correctly. | The test will first fail with a status code assertion error, then pass with `200 OK`.                  | PASS    |
| COM-S-06   | Test `def test_user_can_delete_own_comment(self):` checks if a user can delete their own comment. It creates a comment, sends a DELETE request to the `/comments/{comment_id}/` endpoint, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`204 No Content`). | The test will first fail with a status code assertion error, then pass with `204 No Content`.           | PASS    |
| COM-S-07   | Test `def test_user_cant_create_comment_without_authentication(self):` checks that a user cannot create a comment without being authenticated. It logs out the user, sends a POST request to the `/comments/` endpoint with the comment data, asserts an incorrect status code first (intentional fail), and reruns the test with the correct status code assertion (`403 Forbidden`). | The test will first fail with a status code assertion error, then pass with `403 Forbidden`.           | PASS    |

#### Result in Terminal
```py
gitpod /workspace/pixavibe-api (main) $ python manage.py test comments.tests.CommentTests
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
201
{'id': 1, 'owner': 'testuser', 'is_owner': True, 'profile_id': 1, 'profile_image': 'https://res.cloudinary.com/dsbcjtatz/image/upload/v1/media/../pixavibe/default_profile_pbhpua.jpg', 'post': 1, 'created_at': '2024-05-25T07:04:08.836142Z', 'updated_at': '2024-05-25T07:04:08.836164Z', 'content': 'Test Comment'}
Intentional fail: 201 != 200
201
{'id': 2, 'owner': 'testuser', 'is_owner': True, 'profile_id': 1, 'profile_image': 'https://res.cloudinary.com/dsbcjtatz/image/upload/v1/media/../pixavibe/default_profile_pbhpua.jpg', 'post': 1, 'created_at': '2024-05-25T07:04:08.844488Z', 'updated_at': '2024-05-25T07:04:08.844510Z', 'content': 'Test Comment'}
.200
[{'id': 1, 'owner': 'testuser', 'is_owner': True, 'profile_id': 1, 'profile_image': 'https://res.cloudinary.com/dsbcjtatz/image/upload/v1/media/../pixavibe/default_profile_pbhpua.jpg', 'post': 1, 'created_at': '2024-05-25T07:04:09.022299Z', 'updated_at': '2024-05-25T07:04:09.022316Z', 'content': 'Test Comment'}]
Intentional fail: 200 != 201
200
[{'id': 2, 'owner': 'testuser', 'is_owner': True, 'profile_id': 1, 'profile_image': 'https://res.cloudinary.com/dsbcjtatz/image/upload/v1/media/../pixavibe/default_profile_pbhpua.jpg', 'post': 1, 'created_at': '2024-05-25T07:04:09.028407Z', 'updated_at': '2024-05-25T07:04:09.028432Z', 'content': 'Test Comment'}, {'id': 1, 'owner': 'testuser', 'is_owner': True, 'profile_id': 1, 'profile_image': 'https://res.cloudinary.com/dsbcjtatz/image/upload/v1/media/../pixavibe/default_profile_pbhpua.jpg', 'post': 1, 'created_at': '2024-05-25T07:04:09.022299Z', 'updated_at': '2024-05-25T07:04:09.022316Z', 'content': 'Test Comment'}]
.200
{'id': 1, 'owner': 'testuser', 'is_owner': True, 'profile_id': 1, 'profile_image': 'https://res.cloudinary.com/dsbcjtatz/image/upload/v1/media/../pixavibe/default_profile_pbhpua.jpg', 'post': 1, 'created_at': '2024-05-25T07:04:09.216463Z', 'updated_at': '2024-05-25T07:04:09.216480Z', 'content': 'Test Comment'}
Intentional fail: 200 != 201
200
{'id': 2, 'owner': 'testuser', 'is_owner': True, 'profile_id': 1, 'profile_image': 'https://res.cloudinary.com/dsbcjtatz/image/upload/v1/media/../pixavibe/default_profile_pbhpua.jpg', 'post': 1, 'created_at': '2024-05-25T07:04:09.222481Z', 'updated_at': '2024-05-25T07:04:09.222504Z', 'content': 'Test Comment'}
.Intentional fail: 404 != 200
.204
None
Intentional fail: 204 != 200
204
None
.200
{'id': 1, 'owner': 'testuser', 'is_owner': True, 'profile_id': 1, 'profile_image': 'https://res.cloudinary.com/dsbcjtatz/image/upload/v1/media/../pixavibe/default_profile_pbhpua.jpg', 'post': 1, 'created_at': '2024-05-25T07:04:09.769923Z', 'updated_at': '2024-05-25T07:04:09.774844Z', 'content': 'Updated Comment'}
Intentional fail: 200 != 201
200
{'id': 2, 'owner': 'testuser', 'is_owner': True, 'profile_id': 1, 'profile_image': 'https://res.cloudinary.com/dsbcjtatz/image/upload/v1/media/../pixavibe/default_profile_pbhpua.jpg', 'post': 1, 'created_at': '2024-05-25T07:04:09.777269Z', 'updated_at': '2024-05-25T07:04:09.781608Z', 'content': 'Updated Comment'}
.403
{'detail': ErrorDetail(string='Authentication credentials were not provided.', code='not_authenticated')}
Intentional fail: 403 != 201
403
{'detail': ErrorDetail(string='Authentication credentials were not provided.', code='not_authenticated')}
.
----------------------------------------------------------------------
Ran 7 tests in 1.310s

OK
Destroying test database for alias 'default'...
```

