# Pixavibe

![x](/documentation/readme-image/amiresponsive.webp)

Pixavibe is a Full-Stack web application designed to facilitate content sharing among users, akin to a simplified version of Instagram. Utilizing Django Rest Framework for the back-end and React for the front-end, the application provides a seamless user experience for browsing, posting, and interacting with content.
<br>
<br>
The website: [Pixavibe](https://pixavibe-frontend-e53fa907f215.herokuapp.com/)
<br>

<hr>

## Table of Contents

- [Pixavibe](#Pixavibe)
  - [Live Site](#live-site)
  - [API Backend](#api-backend)
  - [The Strategy Plane](#the-strategy-plane)
    - [Development Goals mapped with User Stories](#development-goals-mapped-with-user-stories)
    - [Learning Outcomes and Skill Development](#learning-outcomes-and-skill-development)
    - [Agile Planning and Development](#agile-planning-and-development)
      - [Project Tracking (GitHub Projects)](#project-tracking-github-projects)
      - [Epics](#epics)
      - [User Stories](#user-stories)
      - [MoSCoW Prioritization](#moscow-prioritization)
  - [The Structure Plane](#the-structure-plane)
    - [Wireframes](#wireframes)
  - [The Skeleton Plane](#the-skeleton-plane)
    - [Implemented Features](#implemented-features)
    - [Future Features](#future-features)
  - [The Surface Plane](#the-surface-plane)
    - [Design](#design)
      - [Colour-Scheme](#colour-scheme)
      - [Typography](#typography)
      - [Imagery](#imagery)
      - [Reusable Component Design](#reusable-component-design)

    - [Technologies](#technologies)
    - [Testing](#testing)
    - [Deployment](#deployment)
    - [Version Control](#version-control)
      - [Heroku](#heroku-deployment)
      - [Local Deployment](#local-deployment) -[How to Fork](#how-to-fork) -[How to Clone](#how-to-clone)
    - [Credits](#credits)
      - [Content](#content)
      - [Acknowledgements](#acknowledgements)

## Live Site

[Pixavibe site](https://pixavibe-frontend-e53fa907f215.herokuapp.com/)

## API Backend

[Pixavibe API README](https://github.com/JaqiKal/pixavibe-api/blob/main/README.mdi)

## The Strategy Plane

### Development Goals and Corresponding User Stories

#### Primary Objective:

To create a user-friendly, responsive platform that enables users to share and interact with various content types (photos, text).

**User Stories:**

- **US-22:** Create New Posts
- **US-23:** View Post Details
- **US-24:** Like Posts
- **US-25:** View Most Recent Posts

#### Secondary Objectives:

<details>
<summary>List of secondary objectives</summary>
<br>

1. **Implement essential social media features such as liking, commenting, and following.**

   **User Stories:**

   - **US-34:** Add Comments to Posts
   - **US-42:** Follow/Unfollow Users
   - **US-27:** View Liked Posts
   - **US-28:** View Followed Users' Posts
   - **US-30:** Add Tags to Posts
   - **US-47:** Block/(hide) Users
   - **US-70:** Blocked Users Cannot See or Interact with the User's Posts

2. **Ensure smooth and intuitive navigation for users.**

   **User Stories:**

   - **US-14:** Navbar View on Every Page
   - **US-15:** Seamless Page Navigation
   - **US-29:** Infinite Scroll
   - **US-32:** View Post Page

3. **Maintain high performance and scalability of the application.**

   **User Stories:**

   - **US-10:** Integrate Front-End and API
   </details>

#### Developer Goals:

<details>
<summary>List of developer goals</summary>
<br>

1. **Build a robust, scalable back-end using Django Rest Framework.**

   **User Stories:**

   - **US-7:** DRF - Set Up Django Project
   - **US-8:** DRF - Design Database Models
   - **US-9:** DRF - Implement API CRUD Operations

2. **Develop a dynamic, responsive front-end with React.js.**

   **User Stories:**

   - **US-5:** Design Responsive UI
   - **US-6:** Create Reusable Components

3. **Emphasize clean, maintainable code and efficient database usage.**

   **User Stories:**

   - **US-3:** SP - Set Up Project Repositories

4. **Ensure secure user authentication and authorization mechanisms.**

   **User Stories:**

   - **US-11:** DRF - Secure User Data
   - **US-16:** Sign Up for New Account
   - **US-17:** Sign In to Access Features
   - **US-18:** Logged In Status Check
   - **US-19:** Maintain Logged-In Status
   - **US-20:** Conditional Sign In/Up Options
   - **US-70:** Blocked Users Cannot See or Interact with the User's Posts

5. **Document the development process and deployment steps clearly in README files for both front-end and back-end repositories.**

   **User Stories:**

   - **US-4:** SP - Configure Dev Environment
   - **US-12:** Write React Component Tests
   - **US-13:** DRF - Write API Endpoint Tests
   </details>

#### User-Centric Goals:

<details>
<summary>List of user goals</summary>
<br>

1. **Provide an intuitive interface for users to easily post, edit, and delete content.**

   **User Stories:**

   - **US-22:** Create New Posts
   - **US-33:** Edit My Post Details
   - **US-37:** Delete My Comments
   - **US-38:** Edit My Comment
   - **US-44:** Edit My Profile
   - **US-45:** Update Username and Password

2. **Enable social interactions through commenting, liking, and following other users.**

   **User Stories:**

   - **US-34:** Add Comments to Posts
   - **US-24:** Like Posts
   - **US-42:** Follow/Unfollow Users
   - **US-21:** View User Avatars
   - **US-36:** Read Comments on Posts
   - **US-35:** View Comment Dates

3. **Ensure easy navigation and content discovery through effective search and filter functionalities.**

   **User Stories:**

   - **US-26:** Search Posts by Keywords
   - **US-31:** Search Posts by Tags
   - **US-43:** View All Posts by Specific User
   - **US-40:** View Most Followed Profiles
   - **US-41:** View User Stats
   - **US-61:** Add category to posts
   - **US-67:** Add category filter

4. **Deliver a responsive design for optimal user experience across devices.**

   **User Stories:**

   - **US-5:** Design Responsive UI
   </details>

#### Learning Outcomes and Skill Development:

<details>
<summary>List LO & Skills</summary>
<br>

1. **To master Full-Stack development by building a comprehensive web application from scratch.**

   **User Stories:**

   - **US-7:** DRF - Set Up Django Project
   - **US-10:** Integrate Front-End and API

2. **To improve front-end skills with React.js, focusing on component-based architecture, state management, and responsive design.**

   **User Stories:**

   - **US-6:** Create Reusable Components
   - **US-5:** Design Responsive UI

3. **To refine back-end development abilities using Django Rest Framework, emphasizing API development, database design, and secure authentication.**

   **User Stories:**

   - **US-8:** DRF - Design Database Models
   - **US-11:** DRF - Secure User Data
   - **US-46:** DRF - Implement Blocking Functionality
   - **US-48:** DRF - Create Contact Form
   - **US-50:** DRF - Implement Post Tagging

4. **To apply Agile methodologies for efficient project management, incorporating user feedback and adapting to changing requirements.**

   **User Stories:**

   - **US-3:** SP - Set Up Project Repositories
   - **US-2:** SP - Identify Key Features

</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Agile Planning and Development

Agile methodologies and principles guide the planning and creation of Pixavibe. While not adhering strictly to traditional Agile methodologies, such as scheduled sprints or scrums. The development process is inspired by Agile principles, focusing on flexibility, continuous improvement, and rapid adaptation to change. Sprints are not used as the project benefits more from focusing directly on developing an epic corresponding to an app in the backend and following the priority level on the User Stories within the Epic. High level approach is to divide the project into phases: plan, development incl unit test, function test, continuous deployment. The documentation is created, continuously reviewed and updated along the way. The approach is straightforward, development of features in a logical sequence, addressing core functionalities first before expanding to more complex features.

When encountering bugs or issues, rather than halting development, these are recorded as bug issues and added to the backlog. This allows to continue progressing in other areas while periodically revisiting and prioritizing the backlog based on severity and impact. This method ensures that development momentum is maintained while systematically addressing and resolving issues.

Feedback from users are actively sought and analyzed to identify areas for improvement, ensuring that the product continuously evolves to meet the needs and expectations of its users effectively

A project kanban board was used to track progress, with user stories moved between 'Todo', 'In Progress', 'Bug', and 'Done' columns as appropriate.

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Project Tracking (GitHub Projects)

#### Epics

<details>
<summary>Epic list</summary>

<br>

- [EPIC#51: Define Set Up and Project Scope](https://github.com/JaqiKal/pixavibe-frontend/issues/51) This epic defines the project's scope and vision, identify key features, and set up the project repositories and development environment to ensure all stakeholders have a clear understanding of the project's goals and objectives and to manage the codebase efficiently.
- [EPIC#52: Design and Implement User Interface](https://github.com/JaqiKal/pixavibe-frontend/issues/52) This epic design a responsive and user-friendly interface using React to provide a seamless experience across devices.
- [EPIC#53: Set Up and Secure Django Rest Framework](https://github.com/JaqiKal/pixavibe-frontend/issues/53) This epic set up the Django Rest Framework and secure user data for building and maintaining the API.
- [EPIC#54: Integrate Front-End and Back-End](https://github.com/JaqiKal/pixavibe-frontend/issues/54) This epic ensure dynamic data fetching and display by integrating the front-end with the back-end API.
- [EPIC#55: Testing](https://github.com/JaqiKal/pixavibe-frontend/issues/55) This epic is about writing tests to ensure the functionality and reliability of the application.
- [EPIC#56: Navigation & Authentication](https://github.com/JaqiKal/pixavibe-frontend/issues/56) This epic implement navigation and authentication features to enhance user experience and security.
- [EPIC#57: Adding & Liking Posts](https://github.com/JaqiKal/pixavibe-frontend/issues/57) This epic enable users to create, view, and like posts to engage with the content.
- [EPIC#58: The Posts Page](https://github.com/JaqiKal/pixavibe-frontend/issues/58) This epic provide features to view and interact with posts, including searching and infinite scroll.
- [EPIC#59: The Post Page](https://github.com/JaqiKal/pixavibe-frontend/issues/59) This epic
- [EPIC#60: The Profile Page](https://github.com/JaqiKal/pixavibe-frontend/issues/60) This epic enable users to manage their profiles and interact with other user profiles.
- [EPIC#62: A blocking functionality so that users can manage their privacy](https://github.com/JaqiKal/pixavibe-frontend/issues/62) This epic strengthen user privacy by implementing effective blocking capabilities
- [EPIC#63: Streamlining User Engagement and Feedback Processes](https://github.com/JaqiKal/pixavibe-frontend/issues/63) This epic facilitate Efficient User Communication and Feedback Management.
- [EPIC#64: Enhance content organization through hashtags](https://github.com/JaqiKal/pixavibe-frontend/issues/64) This epic improve Content Accessibility and Organization via Advanced Tagging.

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### User Stories

<details>
<summary>User Story list</summary>

<br>

SP = Set up phase, aka inception /sprint zero, foundational tasks necessary before main development begins.<br>
DRF = developing functionalities that are typically part of the Django REST Framework (DRF) phase.<br>

The unmarked are part of the development during Frontend phase.<br>

| US-ID                                                        | Area                        | User story Title                                           | Statement                                                                                                                                                               |
| ------------------------------------------------------------ | --------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [1](https://github.com/JaqiKal/pixavibe-frontend/issues/1)   | Scope                       | SP - Define Project Scope                                  | As a product owner, I want to define the project scope and vision so that all stakeholders have a clear understanding of the project's goals and objectives             |
| [2](https://github.com/JaqiKal/pixavibe-frontend/issues/2)   | Scope                       | SP - Identify Key Features                                 | As a product owner, I want to identify key features and functionalities required for the application so that it meets user needs effectively                            |
| [3](https://github.com/JaqiKal/pixavibe-frontend/issues/3)   | Development                 | SP - Set Up Project Repositories                           | As a developer, I want to set up a project repository for the front-end and back-end so that I can manage the codebase efficiently                                      |
| [4](https://github.com/JaqiKal/pixavibe-frontend/issues/4)   | Development                 | SP - Configure Dev Environment                             | As a developer, I want to configure the development environment so that I can ensure consistent setup across different machines                                         |
| [5](https://github.com/JaqiKal/pixavibe-frontend/issues/5)   | Development                 | Design Responsive UI                                       | As a developer, I want to design a responsive user interface using React so that users have a seamless experience across devices                                        |
| [6](https://github.com/JaqiKal/pixavibe-frontend/issues/6)   | Development                 | Create Reusable Components                                 | As a developer, I want to create reusable components in React so that the codebase is maintainable and scalable                                                         |
| [7](https://github.com/JaqiKal/pixavibe-frontend/issues/7)   | Development                 | DRF - Set Up Django Project                                | As a developer, I want to create a Django project and set up the Django Rest Framework so that I can build the API                                                      |
| [8](https://github.com/JaqiKal/pixavibe-frontend/issues/5)   | Development                 | DRF - Design Database Models                               | As a developer, I want to design database models so that the data is structured logically                                                                               |
| [9](https://github.com/JaqiKal/pixavibe-frontend/issues/9)   | Development                 | DRF - Implement API CRUD Operations                        | As a developer, I want to implement CRUD operations in the API so that users can manage their content                                                                   |
| [10](https://github.com/JaqiKal/pixavibe-frontend/issues/10) | Development                 | Integrate Front-End and API                                | As a developer, I want to integrate the front-end with the back-end API so that data can be fetched and displayed dynamically                                           |
| [11](https://github.com/JaqiKal/pixavibe-frontend/issues/11) | Development                 | DRF - Secure User Data                                     | As a developer, I want to secure user data by storing passwords hashed and ensuring sensitive information is protected                                                  |
| [12](https://github.com/JaqiKal/pixavibe-frontend/issues/12) | Development                 | Write React Component Tests                                | As a developer, I want to write tests so that I can ensure the functionality of my React components                                                                     |
| [13](https://github.com/JaqiKal/pixavibe-frontend/issues/13) | Development                 | DRF - Write API Endpoint Tests                             | As a developer, I want to write tests so that I can verify the correctness of the API endpoints                                                                         |
| [14](https://github.com/JaqiKal/pixavibe-frontend/issues/14) | Navigation & Authentication | Navbar View on Every Page                                  | As a user I can view a navbar from every page so that I can navigate easily between pages                                                                               |
| [15](https://github.com/JaqiKal/pixavibe-frontend/issues/15) | Navigation & Authentication | Seamless Page Navigation                                   | As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh                                                               |
| [16](https://github.com/JaqiKal/pixavibe-frontend/issues/16) | Navigation & Authentication | Sign Up for New Account                                    | As a user I can create a new account so that I can access all the features for signed up users                                                                          |
| [17](https://github.com/JaqiKal/pixavibe-frontend/issues/17) | Navigation & Authentication | Sign In to Access Features                                 | As a user I can sign in to the app so that I can access functionality for logged in users                                                                               |
| [18](https://github.com/JaqiKal/pixavibe-frontend/issues/18) | Navigation & Authentication | Logged In Status Check                                     | As a user I can tell if I am logged in or not so that I can log in if I need to                                                                                         |
| [19](https://github.com/JaqiKal/pixavibe-frontend/issues/19) | Navigation & Authentication | Maintain Logged-In Status                                  | As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised                                                    |
| [20](https://github.com/JaqiKal/pixavibe-frontend/issues/20) | Navigation & Authentication | Conditional Sign In/Up Options                             | Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up                                                        |
| [21](https://github.com/JaqiKal/pixavibe-frontend/issues/21) | Navigation & Authentication | View User Avatars                                          | As a user I can view user's avatars so that I can easily identify users of the application                                                                              |
| [22](https://github.com/JaqiKal/pixavibe-frontend/issues/22) | Adding & Liking Posts       | Create New Posts                                           | As a logged in user I can create posts so that I can share my images with the world!                                                                                    |
| [23](https://github.com/JaqiKal/pixavibe-frontend/issues/23) | Adding & Liking Posts       | View Post Details                                          | As a user I can view the details of a single post so that I can learn more about it                                                                                     |
| [24](https://github.com/JaqiKal/pixavibe-frontend/issues/24) | Adding & Liking Posts       | Like Posts                                                 | As a logged in user I can like a post so that I can show my support for the posts that interest me                                                                      |
| [25](https://github.com/JaqiKal/pixavibe-frontend/issues/25) | The Posts Page              | View Most Recent Posts                                     | As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content                                  |
| [26](https://github.com/JaqiKal/pixavibe-frontend/issues/26) | The Posts Page              | Search Posts by Keywords                                   | As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in                                                 |
| [27](https://github.com/JaqiKal/pixavibe-frontend/issues/27) | The Posts Page              | View Liked Posts                                           | As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most                                                                          |
| [28](https://github.com/JaqiKal/pixavibe-frontend/issues/28) | The Posts Page              | View Followed Users' Posts                                 | As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about                                        |
| [29](https://github.com/JaqiKal/pixavibe-frontend/issues/29) | The Posts Page              | Infinite scroll                                            | As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc                    |
| [30](https://github.com/JaqiKal/pixavibe-frontend/issues/30) | The Posts Page              | Add hashtags to Posts                                      | As a user, I want to add hashtags to my posts so that they are easier to find                                                                                           |
| [31](https://github.com/JaqiKal/pixavibe-frontend/issues/31) | The Posts Page              | Search Posts by hashtag                                    | As a user, I want to search for posts by hashtags so that I can find related content                                                                                    |
| [67](https://github.com/JaqiKal/pixavibe-frontend/issues/67) | The Posts Page              | Add category to posts                                      | As a user, I want to add category to my posts so that they are easier to find                                                                                           |
| [71](https://github.com/JaqiKal/pixavibe-frontend/issues/71) | The Posts Page              | Add category filter                                        | As a user, I want to be able to filter category so that posts are easier to find                                                                                        |
| [32](https://github.com/JaqiKal/pixavibe-frontend/issues/32) | The Post Page               | View Post Page                                             | As a user I can view the posts page so that I can read the comments about the post                                                                                      |
| [33](https://github.com/JaqiKal/pixavibe-frontend/issues/33) | The Post Page               | Edit My Post Details                                       | As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created                                          |
| [34](https://github.com/JaqiKal/pixavibe-frontend/issues/34) | The Post Page               | Add Comments to Posts                                      | As a logged in user I can add comments to a post so that I can share my thoughts about the post                                                                         |
| [35](https://github.com/JaqiKal/pixavibe-frontend/issues/35) | The Post Page               | View Comment Dates                                         | As a user I can see how long ago a comment was made so that I know how old a comment is                                                                                 |
| [36](https://github.com/JaqiKal/pixavibe-frontend/issues/36) | The Post Page               | Read Comments on Posts                                     | As a user I can read comments on posts so that I can read what other users think about the posts                                                                        |
| [37](https://github.com/JaqiKal/pixavibe-frontend/issues/37) | The Post Page               | Delete My Comments                                         | As an owner of a comment I can delete my comment so that I can control removal of my comment from the application                                                       |
| [38](https://github.com/JaqiKal/pixavibe-frontend/issues/38) | The Post Page               | Edit My comment                                            | As an owner of a comment I can edit my comment so that I can fix or update my existing comment                                                                          |
| [39](https://github.com/JaqiKal/pixavibe-frontend/issues/39) | The Profile Page            | View User Profiles                                         | As a user I can view other users profiles so that I can see their posts and learn more about them                                                                       |
| [40](https://github.com/JaqiKal/pixavibe-frontend/issues/40) | The Profile Page            | View Most Followed Profiles                                | As a user I can see a list of the most followed profiles so that I can see which profiles are popular                                                                   |
| [41](https://github.com/JaqiKal/pixavibe-frontend/issues/41) | The Profile Page            | View User Stats                                            | As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them                             |
| [42](https://github.com/JaqiKal/pixavibe-frontend/issues/42) | The Profile Page            | Follow/Unfollow Users                                      | Follow/Unfollow a user: As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed                 |
| [43](https://github.com/JaqiKal/pixavibe-frontend/issues/43) | The Profile Page            | View All Posts by specific User                            | As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them                                     |
| [44](https://github.com/JaqiKal/pixavibe-frontend/issues/44) | The Profile Page            | Edit My Profile                                            | As a logged in user I can edit my profile so that I can change my profile picture and bio                                                                               |
| [45](https://github.com/JaqiKal/pixavibe-frontend/issues/45) | The Profile Page            | Update username and password                               | As a logged in user I can update my username and password so that I can change my display name and keep my profile secure                                               |
| [46](https://github.com/JaqiKal/pixavibe-frontend/issues/46) | The Profile Page            | DRF - Implement Blocking Functionality                     | As a developer, I want to implement a blocking functionality so that users can manage their privacy effectively                                                         |
| [47](https://github.com/JaqiKal/pixavibe-frontend/issues/47) | The Profile Page            | Block/(Hide) Users                                         | As a user, I want to be able to block other users so that they cannot interact with my content                                                                          |
| [48](https://github.com/JaqiKal/pixavibe-frontend/issues/48) | The Profile Page            | DRF - Create Contact Form                                  | As a developer, I want to create a contact form that stores user queries, complaints, or suggestions in the Contact model so that the platform can handle user feedback |
| [49](https://github.com/JaqiKal/pixavibe-frontend/issues/49) | The Profile Page            | Send Feedback to Admins                                    | As a user, I want to send feedback or queries to the platform administrators so that I can report issues or suggest improvements                                        |
| [50](https://github.com/JaqiKal/pixavibe-frontend/issues/50) | The Profile Page            | DRF - Implement Post Tagging                               | As a developer, I want to implement tagging functionality for posts so that users can categorize their content                                                          |
| [70](https://github.com/JaqiKal/pixavibe-frontend/issues/70) | The Profile Page            | Blocked users cannot see or interact with the user's posts | As a user, I want to block other users so that they cannot see or interact with my posts                                                                                |

</details> <br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### MoSCoW Prioritization

By focusing on the Must Have features, the project ensures the highest priority tasks are completed first, delivering a functional and valuable product to users. The Should Have and Could Have features provide room for enhancements and future iterations, aligning with both the MoSCoW method and the Pareto principle for effective project management.

- Must Have: <br>
  Includes tasks that set up the project foundation and core functionalities necessary for the project to operate (setting up the environment, repositories, core CRUD operations, and essential user features).

- Should Have: <br>
  Enhances usability, maintainability, and user experience, but are not critical for the initial launch (responsive design, navigation improvements, additional user profile features).

- Could Have: <br>
  Adds value but can be deferred without impacting the core functionality (tagging, advanced user interactions, and feedback mechanisms).

- Won't Have: <br>
  Deferred features that are not essential for the initial launch but could be considered for future phases (infinite scroll).
  <br>
  <br>

<details>
<summary>Prioritized User stories </summary>
<br>

| Phase    | US-ID | Must Have                     | Should Have                     | Could Have                       |
| -------- | ----- | ----------------------------- | ------------------------------- | -------------------------------- |
| SP       | 1     | Define Project Scope          |                                 |                                  |
| SP       | 2     | Identify Key Features         |                                 |                                  |
| SP       | 3     | Set Up Project Repositories   |                                 |                                  |
| SP       | 4     | Configure Dev Environment     |                                 |                                  |
| DRF      | 7     | Set Up Django Project         |                                 |                                  |
| DRF      | 8     | Design Database Models        |                                 |                                  |
| DRF      | 9     | Implement API CRUD Operations |                                 |                                  |
| DRF      | 10    | Integrate Front-End and API   |                                 |                                  |
| DRF      | 11    | Secure User Data              |                                 |                                  |
| Frontend | 16    | Sign Up for New Account       |                                 |                                  |
| Frontend | 17    | Sign In to Access Features    |                                 |                                  |
| Frontend | 22    | Create New Posts              |                                 |                                  |
| Frontend | 23    | View Post Details             |                                 |                                  |
| Frontend | 24    | Like Posts                    |                                 |                                  |
| Frontend | 25    | View Most Recent Posts        |                                 |                                  |
| Frontend | 39    | View User Profiles            |                                 |                                  |
| Frontend | 42    | Follow/Unfollow Users         |                                 |                                  |
| Frontend | 44    | Edit My Profile               |                                 |                                  |
| Frontend | 67    | Add category to posts         |                                 |                                  |
| Frontend | 71    | Add category filter           |                                 |                                  |
| Frontend | 5     |                               | Design Responsive UI            |                                  |
| Frontend | 6     |                               | Create Reusable Components      |                                  |
| Frontend | 12    |                               | Write React Component Tests     |                                  |
| Frontend | 13    |                               | Write API Endpoint Tests        |                                  |
| Frontend | 14    |                               | Navbar View on Every Page       |                                  |
| Frontend | 15    |                               | Seamless Page Navigation        |                                  |
| Frontend | 18    |                               | Logged In Status Check          |                                  |
| Frontend | 19    |                               | Maintain Logged-In Status       |                                  |
| Frontend | 20    |                               | Conditional Sign In/Up Options  |                                  |
| Frontend | 21    |                               | View User Avatars               |                                  |
| Frontend | 27    |                               | View Liked Posts                |                                  |
| Frontend | 28    |                               | View Followed Users' Posts      |                                  |
| Frontend | 32    |                               | View Post Page                  |                                  |
| Frontend | 33    |                               | Edit My Post Details            |                                  |
| Frontend | 34    |                               | Add Comments to Posts           |                                  |
| Frontend | 36    |                               | Read Comments on Posts          |                                  |
| Frontend | 37    |                               | Delete My Comments              |                                  |
| Frontend | 38    |                               | Edit My comment                 |                                  |
| Frontend | 43    |                               | View All Posts by specific User |                                  |
| Frontend | 45    |                               | Update username and password    |                                  |
| Frontend | 30    |                               |                                 | Add Tags to Posts                |
| Frontend | 31    |                               |                                 | Search Posts by Tags             |
| Frontend | 35    |                               |                                 | View Comment Dates               |
| Frontend | 40    |                               |                                 | View Most Followed Profiles      |
| Frontend | 41    |                               |                                 | View User Stats                  |
| DRF      | 46    |                               |                                 | Implement Blocking Functionality |
| Frontend | 47    |                               |                                 | Block Users                      |
| DRF      | 48    |                               |                                 | Create Contact Form              |
| Frontend | 49    |                               |                                 | Send Feedback to Admins          |
| DRF      | 50    |                               |                                 | Implement Post Tagging           |
| Frontend | 29    |                               |                                 | Infinite scroll                  |

</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## The Structured Plane

### Wireframes

<details>
<summary>All Wireframe Images</summary>

![X](#) §§§§§§§§§

</details>
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## The Skeleton

### Implemented Features:

A list of the implemented and planned features in the project.

EPIC name

Users Story:
`xx`

Implementation:
example: A site favicon was implemented with the sites logo. This will allow users to easily identify Pixavibe when they have multiple tabs open.

![favicon](#)

### Future Features

The following will be added in future iterations of this project:

- A
- B
- C

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## The Surface Plane

### Design

#### Colour-Scheme

We were reminiscing about our childhood and the simple joys that filled those days. One such joy was an enterprise that delivered ice cream directly from the factory to our doorstep. Even now, it brings a smile to our faces. The colors in our palette are inspired by our favorite ice cream flavors from those cherished memories. A joyous recollection forms the foundation of our color scheme.

- Page background colour is a light shade of lilac (#e7d5e6;).
- Navbar are light green (#e8f7ef)
- Main text is Lilac (#6d398a)
- Links and Icons are lilac (#6d398a)
- Container text is lilac (#6d398a)
- Icon and Link hover is green (#0ctb04)
- Border line and shadow is light lilac (#f0d2ee)
- Follow/unfollow button shift between (#2142b2/#f0f8ff)
- Block/unblock button shift between (#7d726c/#e7d5e6)
- SignIn button shift between (#bc9bbb/#6d398a)
- SignUp button shift between (#6d398a/#bc9bbb)
- Contact form button shift between (#0c7b04/#bc9bbb)

![palette](/documentation/readme-image/pixawibe_palette.webp)
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Typography

The main font used on the website is "DM Sans".

![font](/documentation/readme-image/font_dm-sans.webp)

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Imagery

The images on this website are made by DALL-E or if in post feed, private origin.
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Reusable Component Design



### Technologies

#### Language

- [HTML](https://en.wikipedia.org/wiki/HTML) is used to structure the content of the application.
- [CSS](https://en.wikipedia.org/wiki/CSS) is applied to style the application, enhancing the user interface..
- [JavaScript](https://sv.wikipedia.org/wiki/Javascript) adds interactivity to web pages, improving the user experience.
- [JSX](https://legacy.reactjs.org/docs/faq-build.html#gatsby-focus-wrapper) & [Intro JSX](https://legacy.reactjs.org/docs/introducing-jsx.html)

#### Frameworks, libraries and dependencies

- [Axios](https://axios-http.com/) - A promise-based HTTP client for both the browser and Node.js, Axios has been crucial for ensuring smooth communication between the frontend and backend.
- [CSS Validator 0.11.0]() - A tool used to validate CSS code. It ensures that all CSS written for the project adheres to standard syntax rules and best practices. Using this validator helps in maintaining clean and error-free stylesheets, which is essential for consistent and predictable rendering across different browsers.
- [jwt-decode 3.1.2](https://www.npmjs.com/package/jwt-decode) - Used for decoding JSON web tokens, this tool has been essential for maintaining secure user authentication between the frontend and backend.
- [Multiselect React Dropdown 2.0.25]() - This component is used to provide a multi-select dropdown functionality in React applications. It allows users to select multiple options from a dropdown menu, enhancing the user interface by making it more interactive and user-friendly. This component is particularly useful for forms and filtering data where multiple selections are needed. It was chosen mostly because it is fun to try out. The functionality was proven, and very handy but unfortunately a bug in our code base is stopping us from showcasing it to users. It is going to be used for the Hashtag feature.
- [React 17.0.2](https://legacy.reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces. An older version was chosen to stay inline with all other dependencies used as part of the Moments walkthrough which provided a base that this project was then modelled on.
- [React bootstrap 1.6.6](https://react-bootstrap.github.io/) - A frontend framework built for react that provides common components. React bootstrap was chosen to help speed up the development of this project and allow time to focused elsewhere.
- [React Router 5.3.4](https://github.com/remix-run/react-router) - This fully-featured routing library for React allowed for seamless site navigation, greatly enhancing the user experience.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - Implemented to enable the loading of additional data sets upon scrolling, especially when data surpasses pagination limits.

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Tools and Services

- [Am I Responsive?](http://ami.responsivedesign.is/) is used to show the website image on a range of devices.
- [ASPOSE](https://products.aspose.app/pdf/sv/conversion/jpg-to-webp#) is used to convert image to WEBP.
- [Balsamiq](https://balsamiq.com/) is used to create wireframes.
- [Coolors](https://coolors.co/) is used to create the colour scheme palette.
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) is used to check code ensuring that my CSS is error-free and adheres to the latest web standards.
- [DevTools](https://developer.chrome.com/docs/devtools) to help in edit pages on-the-fly and diagnose problems quickly.
- [Diffchecker - text](https://www.diffchecker.com/text-compare/) is used to check code snippets
- [Favicon.io](https://favicon.io/) is used to create favicon.
- [Font Awesome](https://fontawesome.com/) is used for the iconography on the website.
- [Git](https://git-scm.com/) is used for version control.
- [Gitpod](https://gitpod.io) streamlines your development process by providing a pre-configured, cloud-based development environment that's instantly ready for coding.
- [Github](https://github.com/) is essential for version control, allowing you to track changes, collaborate with others (if applicable), and secure online code storage.
- [Google Dev Tools](https://developers.google.com/web/tools) is used during testing, debugging and styling.
- [Google Fonts](https://fonts.google.com/) is a catalog of free, open-source fonts. Used for typography.
- [Heroku](https://www.heroku.com) ia a platform for deploying and hosting web applications.
- [Look](https:www.looka.com) ia used for the logo and symbol
- [Markup Validation Service](https://validator.w3.org/) is used to check code ensuring that my HTML is error-free and adheres to the latest web standards.
- [NVDA](https://www.nvaccess.org/download/), NonVisual Desktop Access is a free and open-source, portable screen reader for Microsoft Windows.
- [Tiny PNG](https://tinypng.com/) is used to compress images.
- [UXwing](https://uxwing.com/) is a provider of free icons free for commercial use.
- [Wave](https://wave.webaim.org) is a suite of evaluation tools that helps authors make their web content more accessible to individuals with disabilities.
- [Web Disability Sim](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) is a google chrome extension that allows you to view your site as people with accessibility needs would see it.

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Testing

For thest results we refer to the [TESTING.md file](https://github.com/JaqiKal/pixavibe-frontend/blob/main/TESTING.md).

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Deployment

#### Version Control

The site was created using the Gitpod editor and pushed to github to the remote repository ‘pixavibe’.

The following git commands were used throughout development to push code to the remote repo:

`git add <file>` - This command was used to add the file(s) to the staging area before they are committed.

`git commit -m “commit message”` - This command was used to commit changes to the local repository queue ready for the final step.

`git push` - This command was used to push all committed code to the remote repository on github.
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Heroku Deployment

The site was deployed to Heroku. The steps to deploy are as follows:

1 - While in Heroku, navigate to dashboard and then click on the new button in the top right corner choosing: create new app.

2 - Input a name for your app (this name will need to be unique) and choose the correct region for where you are located. Click create app.

3 - Click on deploy tab. Select deploy method, in this case Git Hub. Confirm connection to git hub by searching for the correct repository and then connecting to it.

4 - To manually deploy project click 'Deploy Branch'. Once built a message will appear saying: Your app was successfully deployed. Click the view button to view the deployed page making a note of it's url

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Local Deployment

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

Install Dependencies:

`npm install`

Run Application:

`npm start`
<br>

#### How to Fork

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

1. Log in (or sign up) to Github.
2. Go to the selected repository.
3. Click the Fork button in the top right corner and select create a fork.
4. One can change the name of the fork and add description
5. Choose to copy only the main branch or all branches to the new fork.
6. Click Create a Fork. A repository should appear in your GitHub
   <br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### How to Clone

1. Log in (or sign up) to GitHub.
2. Go to the selected repository.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor or open command-line interface on your computer and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.
   - `$ git clone <your link>`
6. Press Enter. Your local clone will be created.

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Credits

This article was used to implement the simple star rating component:

- [awran5/react-simple-star-rating](https://github.com/awran5/react-simple-star-rating)

#### Content

Throughout the development of Pixavibe, a variety of resources have been utilized to ensure the platform is robust, user-friendly, and engaging. Below is a list of key documentation, blogs, tutorials, and guides that have been instrumental in crafting the features and functionality of Pixavibe:

- Logo used was created at
- [React Multiselect dropdown](https://www.npmjs.com/package/multiselect-react-dropdown), this library is used for handling hashtags. It helps keep the codebase cleaner and more maintainable.
- [css-validator](https://www.npmjs.com/package/css-validator) together with GPT was used to create `validate-css.js`. It was used to validate CSS.
- **Bootstrap**: Used for styling and responsive design, making the site accessible on a variety of devices - [Bootstrap documentation](https://getbootstrap.com/).
- **Sources of inspiration and guidance in general**:
  - X
  - Y
  - Z
  - This resources is only available to enrolled students at The Code Institute:
    - The Code Institute Diploma in Full Stack Software Development (Advanced Front-End) Walk-through project Moments (frontend)
- **Testing**: Used to learn how to create test cases
  - [How to write test cases for Django Rest Framework Applications](https://rajansahu713.medium.com/mastering-the-art-of-django-test-cases-fa7b0322c9fb)
  - [Django REST framwork, Testing](https://www.django-rest-framework.org/api-guide/testing/#testingDjango)
  - [django project, testing](https://docs.djangoproject.com/en/3.2/topics/testing/)
  - [Getting started with testing in Python](https://realpython.com/python-testing/)
  - [Testing in Django (Part 1) – Best Practices and Examples](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/)
  - [serie of videos - Django Testing Tutorial - What Is Testing?](https://youtu.be/qwypH3YvMKc?si=1OptYFWRajgREWh_)
  - [Unit Tests in Python || Python Tutorial || Learn Python Programming](https://youtu.be/1Lfv5tUGsn8?si=ZgIDWVjSQqTIUYYK)
  - [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) are used in test cases to validate that the application is behaving as expected under various conditions.

#### Acknowledgements

I would like to thank!

- My immediate and extended family, as well as my friends, who support and cheer me on!
- [Jonathan!](https://github.com/Jonathan97-web/) A very knowledgeable, kind, and helpful man, whose support meant a great deal. Without it, the project would have been in peril of never seeing the light of day!
- Code Institutes Tutor Support service, their help has been a source of immense relief when in total panic! Also yet another channel to gain more knowhow.
- To all engaged fellow students at all channels and a special shout out to CI slack channel #community-sweden!
- My mentor [Jubril Akolade](https://github.com/jubrillionaire/)

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_
