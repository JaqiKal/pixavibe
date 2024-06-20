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

<details>
<summary>MoSCow </summaryW
<br>
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
</details> <br>

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

<details>
<summary>List of existing features</summary>
<br>

**General Features**

- Authorization checks - Keeping It Secure

  - Strong Authorization Checks: We’ve got layers of protection with JWT tokens and CORS headers. Only authorized users get in!
  - Access Control: Unauthorized? Sorry, but you’ll be sent packing. We always check your credentials before you get to see any user data.

- Form validation - Smooth and Error-Free Forms

  - Data Validation: We make sure your data is good to go, both on the frontend and backend.
  - Image Control: No oversized images here! We have custom validators keeping those file sizes in check.
  - Safe Defaults: Default values and character limits keep things neat and tidy.
  - Backup and default values

- Ready for Anything

  - Profile Pics: Don’t worry about broken images—default profile pictures have got your back.
  - Auto Profiles: Every new user gets a profile automatically. No null references on our watch!

- Error pages or as better known Oops! Pages

  - Error Pages: If you wander into the unknown, a “Page Not Found” error will guide you back on track.

- Responsive Design: Looks Great Everywhere: Our site adjusts beautifully across all devices.
  Complete Control

- CRUD Operations: Create, read, update, and delete your content and profiles with ease.

-User Interaction - Get Involved: Like, comment, follow—get the full experience based on your authorization status. Pixavibe administrator have superuser authority and manages full CRUD.

- Create - users can register a new user account, authenticated users can create post(s) and create a comment(s)
- Read - authenticated users can view their posts, comments, and their profile image.
- Update - authenticated users can update their profile image, username and password, and edit and save comments, its title, and select/deselect category and save it.
- Delete - authenticated users can delete their own comments and posts.

**SignIn/SignUp Page** <br>
Join the Fun: Creating an account is easy-peasy. After signing up, you’ll be whisked to the sign-in page. Already signed in? You’ll head straight to the home page.

![X](/documentation/readme-image/existing_feat/signin.webp)

![X](/documentation/readme-image/existing_feat/signup.webp)

**Navigation Bar** <br>
Always There for You: The navigation bar adapts to whether you’re signed in or not, and it looks great on any screen size.

![x](/documentation/readme-image/existing_feat/iph-nav.webp)

![x](/documentation/readme-image/existing_feat/air-nav.webp)

**Profile Page**
<br>
Showcase Yourself: See detailed info about users, including posts, followers, and who they follow. If you follow them, it’s highlighted. Add personal touches with a dedicated info section. Follow or hide users unless it’s your own profile. All posts from the profile owner are displayed below. Click on the three dots and edit your profile, change username, change password

![x](/documentation/readme-image/existing_feat/profile_edit_dropdown.webp)

![x](/documentation/readme-image/existing_feat/full_profile_own.webp)

![x](/documentation/readme-image/existing_feat/edit_profile_bio.webp)

![x](/documentation/readme-image/existing_feat/edit_profile_name.webp)

![x](/documentation/readme-image/existing_feat/edit_profile_pw.webp)

Hide with Block button, hidden profile is not seen in feeds, and will not appear when searched on.
Sometimes one simply is in need of some mild curating. Hidden user is still able to see and interact with the blocker. In coming development iterations this feature will evolve to become a true block, where no interaction will be permitted from the blocked user.

![x](/documentation/readme-image/existing_feat/hide.webp)

**Profiles Sidebar**
<br>
Popular Profiles: Check out the most followed profiles. Follow or unfollow with a click, and enjoy a sidebar that fits perfectly on any screen.

![x](/documentation/readme-image/existing_feat/popular_profile.webp)

**Post List**
<br>
Endless Inspiration: Browse posts infinitely! Use the search bar to find posts by title or username. Use category to filter. See your personalized feed of posts from those you follow and liked posts. Blocked users won’t show up.

![x](/documentation/readme-image/existing_feat/postlist.webp)

Category filter

![x](/documentation/readme-image/existing_feat/category_before_after.webp)

Follow/unfollow

![x](/documentation/readme-image/existing_feat/follow_unfollow.webp)

Like/unlike

![x](/documentation/readme-image/existing_feat/like_nolike.webp)

Block/ unblock

!![x](/documentation/readme-image/existing_feat/hide.webp)

**Post Page**
<br>
Dive into Details: See all the nitty-gritty about a post, including comments. Edit or delete your posts easily. Tag posts with one category, and (once the bug’s fixed) multiple hashtags. The multi-hashtag feature is hidden for now due to [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68. Like the category tagging, it offers a predefined list to select/deselect multiple hashtags. However, once a post is saved, you can't change the hashtags during edits. To avoid a bad user experience, we've temporarily hidden this feature in the belly of our scrumptious app.

Just own poste(s), me, myself and I!

![x](/documentation/readme-image/existing_feat/postdetail.webp)

Edit Image, Title, Content, Category

![x](/documentation/readme-image/existing_feat/edit_postdetail.webp)

Select a category tag and add to post

![x](/documentation/readme-image/existing_feat/add_post_category_dropdown.webp)

Dropdown menu for edit and delete

![x](/documentation/readme-image/existing_feat/edit_delete.webp)

Edit Comments

![x](/documentation/readme-image/existing_feat/comment_suite.webp)

**Contact Form**
<br>
Get in Touch: Use our form to reach out. A friendly modal will thank you for your message, but just a heads up—this is a student project, so we’re not monitoring messages closely. Thanks for testing!

![x](/documentation/readme-image/existing_feat/contact.webp)

![x](/documentation/readme-image/existing_feat/contact_modal.webp)

</details>

### Future Features

<details>
<summary>The following will be added in future iterations of this project:</summary>
<br>

- **Hashtags**: Organize and filter content using hashtags to connect users. This feature is on hold due to [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68). The issue involves an inability to save new hashtags after editing a post, leading to the retention of the previous selection. The multi-select form for hashtags was removed to avoid confusion and disruption until a solution is found.
- **Admin Page Expansion**: Enhance the admin page to manage various tasks, such as handling messages sent through the contact form. This would allow admins to respond directly to users from a dedicated admin-only page.
- **Chat/Direct Messaging**: Introduce a chat or direct messaging function to facilitate user communication.
- **Alert Notifications**: Implement alert notifications for broadcasting messages to all users.
- **Block Feature Evolution**: Currently, blocking hides users. In the future, it will also prevent the blocked user from interacting with the blocker’s content.
- **Profile Customization**: Allow users to customize their profiles with themes, backgrounds, and additional information fields.
- **Content Recommendations**: Implement a recommendation system to suggest posts, users, or hashtags based on user activity and preferences.
- **Enhanced Search**: Improve search functionality to include advanced filters and sorting options, making it easier for users to find specific content.
- **Content Moderation Tools**: Provide tools for users to report inappropriate content and for admins to review and manage reports efficiently.
- **Integration with External Services**: Allow users to link their accounts with external services such as social media platforms for seamless content sharing and authentication.
</details>
<br>

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

This application emphasizes modularity and reusability. Each component is designed to function independently and can be easily repurposed in different contexts. Some components have multiple uses across the app and offer potential for further applications.

<details>

<summary>A selection of reusable components</summary>

<br>

**Asset component**

- Purpose: Display a media asset, such as images, spinner animations, and messages.
- Props: src, message, spinner
- Usage: `const Asset` is considered a reusable component and has been reused in: NotFound.js, PostCreateForm.js, PostPage.js, PostsPage.js, PopularProfiles.js, ProfilePage.js to display a spinner whenever content is loading.

**Avatar component**

- Purpose: Display user profile images.
- Props: profile, owner, image
  Usage: `const Avatar` is considered a reusable component and has been reused in: NavBar.js, Comment.js, CommentCreateForm.js, Post.js and Profile.js to handle and import the avatar for the user

**CategorySelect Component**

- Purpose: This component encompasses functionality that fetches categories from an API and displays them in a dropdown menu, allowing users to filter items based on the selected category. It can be reused in different situations where a dropdown list with filtering for categories is needed.
- Props: setFilter: Function to update the selected category filter, mobile: Boolean to indicate if the component is in mobile view.
- Usage: `const CategoryFilter` is considered a reusable component and has been reused in: PostsPage.js to render the Category filtering of posts.
- Potential uses: Filtering options in other lists or content sections.

**Comment**

- Purpose: This component is designed to display a comment with options to edit or delete it if the current user is the owner. This component can be reused in different contexts where similar functionality is needed such as blog post comments, forum threads or product reviews.
- Props: id, content, owner and more...
- Usage:`const Comment`is considered a reusable component and has been reused in: PostPage.js to fetch comments related to the specific post.
  Potential uses: The comment component could be easily reused on profile pages to display all comments made by a specific user.

**MoreDropdown Component**

- Purpose: Provide a dropdown menu for actions like editing and deleting items. Can be reused as a simple dropdown menu in different scenarios for when users need to edit a comment, post, photos etc.
- Props: handleEdit: Function to handle the edit action, handleDelete:
- Usage: `const MoreDropdown` is considered a reusable component and has been reused in Comment.js, Post.js and ProfilePage.js to render the dropdown menu the enable the user to edit their data.
- Potential uses: Context menus for various content types that support edit and delete actions.

**Navbar**

- Purpose: This component presents a form for users to update their passwords. It can be reused across different parts of the application where password updating functionality is needed.
  -Usage: `const NavBar` is considered a reusable component and has been reused in: App.js to render the navbar on the entire website no matter what url path the user is currently located at.
  Potential uses: Could be fitted onto a completely different app with small routing adjustments.

**Post**
Purpose: Display a specific post.
Props: id, title, content, owner and more.
Used in: `const Post` is considered a reusable component and has been reused in: PostPage.js and PostsPage.js to import all the data related to the specific post.Post feed, Post detail page, Profile page.
Potential uses: Could be used for a "featured post" component or a list of the most popular posts of all time. Forum threads or Portfolio showcases.

**ProfileDataContext and CurrentUserContext**

- Purpose: Manage user and profile data across the application.
- Usage:
  - CurrentUserContext: Provides current user data.
  - ProfileDataContext: Provides profile data, such as popular profiles.
- Used in: Various components requiring user or profile data.
- Potential uses: Any component that needs to access or manipulate user-related state efficiently.

**Profile**
Purpose: This component is designed to render a user profile with options for following/unfollowing and block/unblock based on the current user's interaction status with the profile.
Props: profile, owner, image
Usage: Can be used as a Community memeber widget, Author card in blog posts, Participant list in events pages.
From this component const Profile is considered a reusable component and has been reused in: PopularProfiles.js tho render the profiles in the popular profiles field.
Potential uses: Highly reusable, convenient to use anywhere where you need to show the profile/user associated with a piece of content.

</details>

### Technologies

<details>
<summary>List of technologies and Languages used</summary>
<br>

#### Language

- [HTML](https://en.wikipedia.org/wiki/HTML) is used to structure the content of the application.
- [CSS](https://en.wikipedia.org/wiki/CSS) is applied to style the application, enhancing the user interface..
- [JavaScript](https://sv.wikipedia.org/wiki/Javascript) adds interactivity to web pages, improving the user experience.
- [JSX](https://legacy.reactjs.org/docs/faq-build.html#gatsby-focus-wrapper) & [Intro JSX](https://legacy.reactjs.org/docs/introducing-jsx.html)

#### Frameworks, libraries and dependencies

- [Axios](https://axios-http.com/) - A promise-based HTTP client for both the browser and Node.js, Axios plays a key role in facilitating smooth communication between the frontend and backend. It was chosen for its ability to simplify HTTP requests to the REST API, eliminating the need to manually configure HTTP headers. Additionally, Axios supports 'interceptors', which are used to request a refresh token in the event of an HTTP 401 error. This feature enhances the user experience by keeping authenticated users signed in for up to 24 hours, rather than requiring them to sign in again after five minutes.
- [CSS Validator 0.11.0]() - A tool used to validate CSS code. It ensures that all CSS written for the project adheres to standard syntax rules and best practices. Using this validator helps in maintaining clean and error-free stylesheets, which is essential for consistent and predictable rendering across different browsers.
- [jwt-decode 3.1.2](https://www.npmjs.com/package/jwt-decode) - Used for decoding JSON web tokens, this tool has been essential for maintaining secure user authentication between the frontend and backend.
- [Multiselect React Dropdown 2.0.25]() - This component is used to provide a multi-select dropdown functionality in React applications. It allows users to select multiple options from a dropdown menu, enhancing the user interface by making it more interactive and user-friendly. This component is particularly useful for forms and filtering data where multiple selections are needed. It was chosen mostly because it is fun to try out. The functionality was proven, and very handy but unfortunately a bug in our code base is stopping us from showcasing it to users. It is going to be used for the Hashtag feature.
- [React 17.0.2](https://legacy.reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces. An older version was chosen to stay inline with all other dependencies used as part of the Moments walkthrough which provided a base that this project was then modelled on.
- [React bootstrap 1.6.6](https://react-bootstrap.github.io/) - A frontend framework built for react that provides common components. React bootstrap was chosen to help speed up the development of this project and allow time to focused elsewhere.
- [React Router 5.3.4](https://github.com/remix-run/react-router) - This fully-featured routing library for React allowed for seamless site navigation, greatly enhancing the user experience.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - Implemented to enable the loading of additional data sets upon scrolling, especially when data surpasses pagination limits.

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Tools and Services

<details>
<summary>List of Tools & Services</summary>

<br>

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

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Testing

For the test results we refer to the [TESTING.md file](https://github.com/JaqiKal/pixavibe-frontend/blob/main/TESTING.md).

<details>
<summary>Known and unsolved issues</summary>
<br>

- Hashtag Error [BUG#68](https://github.com/JaqiKal/pixavibe-frontend/issues/68): The errors indicate that the response data does not contain the expected 'hashtag_ids' field. Instead, the response contains an empty 'hashtags' array. This suggests that the hashtags are not being properly associated with the post. Trouble shooting activities have been undertaken, also by senior developers but solution has not been found yet. The feature has been moved to the BUG lane on the Kanban board and will be revisited in future improvements of the Pixavibe app. To maintain a smooth user experience, the hashtag feature is retained in the codebase, but the multiselect form has been removed from the PostCreateForm and PostEditForm.
- When loading certain pages, 401/400 errors occur due to the absence or expiration of an authorization token, or when invalid form input is provided. These instances include:

  - Mounting when not logged in
  - Redirecting a logged-in user away from the sign-up/sign-in page
  - Submitting a sign-in form without entering a username. Expired access token that is refreshed in the background, leading to eventual success

    ![x](/documentation/testing_image/401-error.png)

- Interface elements that depend on the user's authorization state sometimes fail to load without a page refresh. This behavior is consistent with the course material.
- (posts/views.py): django rest framework bug, in the Filter set fields list the Field filters label shows 'Invalid Name'.

  ![x](/documentation/testing_image/field-filters-label-invalid-name.png)

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

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Deployment

#### Version Control

The site was created using the Gitpod editor and pushed to github to the remote repository ‘pixavibe-frontend’.

The following git commands were used throughout development to push code to the remote repo:

`git add <file>` - This command was used to add the file(s) to the staging area before they are committed.

`git commit -m “commit message”` - This command was used to commit changes to the local repository queue ready for the final step.

`git push` - This command was used to push all committed code to the remote repository on github.
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Heroku Deployment

 <details>
 <summary>To deploy the project to Heroku, I took the following steps</summary>
 
 <br>

**Initial set-up**

- Sign up for a [Heroku](https://heroku.com/) account at Heroku's website.
- Download and install the Heroku Command Line Interface (CLI) to interact with Heroku from your local machine.
- Or use Heroku Web interface.

**Preparing the Application**

- Create and add the 'Procfile' to your application's root directory `echo web: node index.js > Procfile`. Heroku relies on this file to determine how to run your application, ensuring the correct setup of your web server. Use commands like web: `gunicorn PROJ_NAME.wsgi` in the 'Procfile' to instruct Heroku on starting your web server with Gunicorn
- Ensure you have a requirements.txt file listing all project dependencies.
- Set up necessary configuration variables in Heroku setting tab > Config Vars (eg. SECRET_KEY, DATABASE_URL, etc.).
- In your app's 'settings.py' add Heroku to ALLOWED_HOSTS

**Create Heroku App**

- Sign in or sign up to [Heroku](https://heroku.com/).
- Click the button that says "Create new app."
- Enter a unique app name.
- Choose your region from the dropdown menu.
- Click the "Create app" button.
- Scroll further down on the page, select Add Buildpack. The buildpacks will install further dependencies that are not included in the 'requirements.txt'. <br>
  It's crucial to arrange the build packs correctly! First, choose Python and then Node.js. If they're not in this sequence, you can reorder them by dragging.

**Deployment**

- Deploy by either push your code to Heroku or by connecting your GitHub repository to Heroku or using the Heroku CLI to deploy your application.
- (if applicable) Run database migrations using the Heroku CLI.
- For deploying this project, we're using GitHub as our method. After choosing GitHub, make sure to confirm the connection. Then, search for your repository name and once Heroku finds your repository - click "connect"
- Scroll down to the section "Automatic Deploys".
- Click "Enable automatic deploys" or choose "Deploy branch" and manually deploy.
- Click "Deploy branch" wait for the app to be built. Once this is done, a message should appear letting us know that the app was successfully deployed.
- Click the button "View" to see the app.

**Final Steps**

- Enable the Web Dyno, make sure the web dyno is up and running after deployment.
- Open your application from the Heroku dashboard or using the CLI command heroku open.

For more detailed instructions and troubleshooting, visit the [official Heroku Dev Center](https://devcenter.heroku.com/).

</details>

#### Local Deployment

<details>
<summary>How to clone:</summary>
<br>

Cloning a GitHub repository creates a local copy on your machine, allowing you to sync between the two locations. Here are the steps:

- Navigate to the GitHub Repository you want to clone to use locally:
- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- In your IDE or local coding environment use the link to open the repository.
  - For example: in VScode: <br>
    clicking on 'Clone Git Repository...' will bring up a box in which to paste the link. once vscode has the link, you will then be asked where you would like the repo saving. You should now be set up ready to work on the repository.
  - For example: in Gitpod <br>
    Click on the green Open button (next to 'Code'). Gitpod opens and start preparing the workspace.

Install Dependencies:

`npm install`

Run Application:

`npm start`

<br>
</details>
 
 <br>

<details>
<summary>How to Fork</summary>

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea. In order to protect the main branch while you work on something new, essential when working as part of a team or when you want to experiment with a new feature, you will need to fork a branch.

- Log in (or sign up) to Github.
- Go to the selected repository.
- Click the Fork button in the top right corner and select create a fork.
- One can change the name of the fork and add description
- Choose to copy only the main branch or all branches to the new fork.
- Click Create a Fork. A repository should appear in your GitHub

Instructions to fork directly from an issue:

- Click to view an issue, either from the issues list or from the project board. From the project board you will need to click once to bring up the issue and then again on the title to go into it fully.
- Partway down the right hand side (on desktop) you should see the heading 'Development' and under this a link to 'create a branch for this issue or link a pull request'.
- Click on the link to create a forked branch that is tied to the issue.

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Credits

#### Content

<details>
<summary>List of content</summary> 
<br>
Throughout the development of Pixavibe, a variety of resources have been utilized to ensure the platform is robust, user-friendly, and engaging. Below is a list of documentation, blogs, tutorials, and guides that have been instrumental in crafting the features and functionality of Pixavibe:

- Logo used was created at [Looka](https://looka.com/dashboard)
- [React Multiselect dropdown](https://www.npmjs.com/package/multiselect-react-dropdown), this library is used for handling hashtags. It helps keep the codebase cleaner and more maintainable.
- [css-validator](https://www.npmjs.com/package/css-validator) together with GPT was used to create `validate-css.js`. It was used to validate CSS.
- **Bootstrap**: Used for styling and responsive design, making the site accessible on a variety of devices - [Bootstrap documentation](https://getbootstrap.com/).
- **Sources of inspiration and guidance in general**:
  - This resources is only available to enrolled students at The Code Institute:
    - The Code Institute Diploma in Full Stack Software Development (Advanced Front-End) Walk-through project Moments (frontend)
  - [React](https://react.dev/learn) A goto place to learn.
  - [Django Rest framework](https://www.django-rest-framework.org/) A got place to learn
  - [Django & React Tutorial](https://youtu.be/JD-age0BPVo?si=vLYojx9J_rD8ZKyU), Tech with Tim, also a goto net source for inspo.
- **Testing**: Used to learn how to create test cases
  - [How to write test cases for Django Rest Framework Applications](https://rajansahu713.medium.com/mastering-the-art-of-django-test-cases-fa7b0322c9fb)
  - [Django REST framwork, Testing](https://www.django-rest-framework.org/api-guide/testing/#testingDjango)
  - [django project, testing](https://docs.djangoproject.com/en/3.2/topics/testing/)
  - [Getting started with testing in Python](https://realpython.com/python-testing/)
  - [Testing in Django (Part 1) – Best Practices and Examples](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/)
  - [serie of videos - Django Testing Tutorial - What Is Testing?](https://youtu.be/qwypH3YvMKc?si=1OptYFWRajgREWh_)
  - [Unit Tests in Python || Python Tutorial || Learn Python Programming](https://youtu.be/1Lfv5tUGsn8?si=ZgIDWVjSQqTIUYYK)
  - [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) are used in test cases to validate that the application is behaving as expected under various conditions.
  </details>

#### Acknowledgements

<details>
<summaryI would like to thank!</summary>
<br>

- My immediate and extended family, as well as my friends, who support and cheer me on!
- [Jonathan Zakrisson!](https://github.com/Jonathan97-web/) A very knowledgeable, kind, and helpful man, whose support meant a great deal. Without it, the project would have been in peril of never seeing the light of day!
- [Emil Jädersten](https://github.com/EmilionR/), for chairing the Sunday huddle and sharing knowhow, in so many ways.
- [Jörgen Jonsson](https://github.com/JorgenDIF/JorgenDIF), giving the community his time an energy, and being a cheerful guy in general.
- To all engaged fellow students at all channels and a special shout out to #community-sweden!
- Code Institutes Tutor Support service, their help has been a source of immense relief when in total panic! Also yet another channel to gain more knowhow.
- My mentor [Jubril Akolade](https://github.com/jubrillionaire/)

</details>

<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_
