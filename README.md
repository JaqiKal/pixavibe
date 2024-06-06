# Pixavibe

![Mockup](amiresponsive) §§§§§§§§§§§§§§§§§§§§§§§§§§

Pixavibe is a Full-Stack web application designed to facilitate content sharing among users, akin to a simplified version of Instagram. Utilizing and Django Rest Framework for the back-end and React for the front-end, the application provides a seamless user experience for browsing, posting, and interacting with content.
<br>
The live link can be found here: [Pixavibe](#) §§§§§§§§§§§§§§§§§§§§§§§§
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

[Pixavibe site]()

## API Backend

[Pixavibe API](https://github.com/JaqiKal/pixavibe-api)

## The Strategy Plane

### Development Goals mapped with User Stories

| Development Goals                                                                                                                              | Corresponding User Stories                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Primary Objective:**                                                                                                                         |                                                                                                                                                                                                                                            |
| To create a user-friendly, responsive platform that enables users to share and interact with various content types (photos, videos, text).     | **US-22:** Create New Posts<br>**US-23:** View Post Details<br>**US-24:** Like Posts<br>**US-25:** View Most Recent Posts                                                                                                                  |
| **Secondary Objectives:**                                                                                                                      |                                                                                                                                                                                                                                            |
| Implement essential social media features such as liking, commenting, and following.                                                           | **US-34:** Add Comments to Posts<br>**US-42:** Follow/Unfollow Users<br>**US-27:** View Liked Posts<br>**US-28:** View Followed Users' Posts<br>**US-30:** Add Tags to Posts<br>**US-47:** Block Users                                     |
| Ensure smooth and intuitive navigation for users.                                                                                              | **US-14:** Navbar View on Every Page<br>**US-15:** Seamless Page Navigation<br>**US-29:** Infinite Scroll<br>**US-32:** View Post Page                                                                                                     |
| Maintain high performance and scalability of the application.                                                                                  | **US-10:** Integrate Front-End and API                                                                                                                                                                                                     |
| **Developer Goals:**                                                                                                                           |                                                                                                                                                                                                                                            |
| Build a robust, scalable back-end using Django Rest Framework.                                                                                 | **US-7:** DRF - Set Up Django Project<br>**US-8:** DRF - Design Database Models<br>**US-9:** DRF - Implement API CRUD Operations                                                                                                           |
| Develop a dynamic, responsive front-end with React.js.                                                                                         | **US-5:** Design Responsive UI<br>**US-6:** Create Reusable Components                                                                                                                                                                     |
| Emphasize clean, maintainable code and efficient database usage.                                                                               | **US-3:** SP - Set Up Project Repositories                                                                                                                                                                                                 |
| Ensure secure user authentication and authorization mechanisms.                                                                                | **US-11:** DRF - Secure User Data<br>**US-16:** Sign Up for New Account<br>**US-17:** Sign In to Access Features<br>**US-18:** Logged In Status Check<br>**US-19:** Maintain Logged-In Status<br>**US-20:** Conditional Sign In/Up Options |
| Document the development process and deployment steps clearly in README files for both front-end and back-end repositories.                    | **US-4:** SP - Configure Dev Environment<br>**US-12:** Write React Component Tests<br>**US-13:** DRF - Write API Endpoint Tests                                                                                                            |
| **User-Centric Goals:**                                                                                                                        |                                                                                                                                                                                                                                            |
| Provide an intuitive interface for users to easily post, edit, and delete content.                                                             | **US-22:** Create New Posts<br>**US-33:** Edit My Post Details<br>**US-37:** Delete My Comments<br>**US-38:** Edit My Comment<br>**US-44:** Edit My Profile<br>**US-45:** Update Username and Password                                     |
| Enable social interactions through commenting, liking, and following other users.                                                              | **US-34:** Add Comments to Posts<br>**US-24:** Like Posts<br>**US-42:** Follow/Unfollow Users<br>**US-21:** View User Avatars<br>**US-36:** Read Comments on Posts<br>**US-35:** View Comment Dates                                        |
| Ensure easy navigation and content discovery through effective search and filter functionalities.                                              | **US-26:** Search Posts by Keywords<br>**US-31:** Search Posts by Tags<br>**US-43:** View All Posts by Specific User<br>**US-40:** View Most Followed Profiles<br>**US-41:** View User Stats                                               |
| Deliver a responsive design for optimal user experience across devices.                                                                        | **US-5:** Design Responsive UI                                                                                                                                                                                                             |
| **Learning Outcomes and Skill Development:**                                                                                                   |                                                                                                                                                                                                                                            |
| To master Full-Stack development by building a comprehensive web application from scratch.                                                     | **US-7:** DRF - Set Up Django Project<br>**US-10:** Integrate Front-End and API                                                                                                                                                            |
| To improve front-end skills with React.js, focusing on component-based architecture, state management, and responsive design.                  | **US-6:** Create Reusable Components<br>**US-5:** Design Responsive UI                                                                                                                                                                     |
| To refine back-end development abilities using Django Rest Framework, emphasizing API development, database design, and secure authentication. | **US-8:** DRF - Design Database Models<br>**US-11:** DRF - Secure User Data<br>**US-46:** DRF - Implement Blocking Functionality<br>**US-48:** DRF - Create Contact Form<br>**US-50:** DRF - Implement Post Tagging                        |
| To apply Agile methodologies for efficient project management, incorporating user feedback and adapting to changing requirements.              | **US-3:** SP - Set Up Project Repositories<br>**US-2:** SP - Identify Key Features                                                                                                                                                         |
| To develop essential technical skills in HTML, CSS, JavaScript, React.js, Bootstrap.js, Django Rest Framework, and Git.                        | **US-4:** SP - Configure Dev Environment                                                                                                                                                                                                   |
| To strengthen soft skills in problem-solving, documentation, and communication.                                                                | **US-1:** SP - Define Project Scope<br>**US-3:** SP - Set Up Project Repositories                                                                                                                                                          |
| **Remaining User Stories:**                                                                                                                    |                                                                                                                                                                                                                                            |
| View User Profiles                                                                                                                             | **US-39:** View User Profiles                                                                                                                                                                                                              |
| Send Feedback to Admins                                                                                                                        | **US-49:** Send Feedback to Admins                                                                                                                                                                                                         |

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Agile Planning and Development

Agile methodologies and principles guide the planning and creation of Pixavibe. While not adhering strictly to traditional Agile methodologies, such as scheduled sprints or scrums. The development process is inspired by Agile principles, focusing on flexibility, continuous improvement, and rapid adaptation to change. Sprints is not used as the project benefits more from focusing directly on larger goals and milestones, which are already well-defined with clear start and end dates. The approach is straightforward, development of features in a logical sequence, addressing core functionalities first before expanding to more complex features.

When encountering bugs or issues, rather than halting development, these are recorded as bug issues and added to the backlog. This allows to continue progressing in other areas while periodically revisiting and prioritizing the backlog based on severity and impact. This method ensures that development momentum is maintained while systematically addressing and resolving issues.

Feedback from users are actively sought and analyzed to identify areas for improvement, ensuring that the product continuously evolves to meet the needs and expectations of its users effectively

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Project Tracking (GitHub Projects)

- For details please follow link to: [Github Project board](#)

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Epics

- _Scope_: This Epic defines the overall scope of the frontend application, detailing the main functionalities, user interface design, and integration with the backend API.

- _Development_: This epic covers the initial setup of the React application, including the installation of dependencies, configuration of development tools, and setting up the project structure.

- _Navigation & Authentication_: This epic covers the implementation of the navigation bar, routing, and authentication mechanisms. It ensures users can navigate through the application and securely log in or register.

- _Adding & Liking Posts_: This epic covers the frontend functionality for creating new posts and liking existing posts. It enables users to interact with the backend API to perform these actions through the user interface.

- _Posts Page_: This epic covers the creation of the posts page where all posts are displayed. It includes fetching posts from the backend, displaying them in a user-friendly manner, and enabling interactions like liking and commenting.

- _Profile Page_: This epic covers the frontend creation of user profile pages. It allows users to view and edit their profiles, including personal information and their own posts.
  <br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### User Stories

<details>
<summary>User Story Table</summary>
SP =  Set up phase, aka inception /sprint zero, foundational tasks necessary before main development begins.
DRF = developing functionalities that are typically part of the Django REST Framework (DRF) phase
The unmarked are part of the development during Frontend phase. These are pivotal during the main development cycles and often follow the setup done in the IN phase.

| US-ID | Area                        | User story Title                       | Statement                                                                                                                                                               |
| ----- | --------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Scope                       | SP - Define Project Scope              | As a product owner, I want to define the project scope and vision so that all stakeholders have a clear understanding of the project's goals and objectives             |
| 2     | Scope                       | SP - Identify Key Features             | As a product owner, I want to identify key features and functionalities required for the application so that it meets user needs effectively                            |
| 3     | Development                 | SP - Set Up Project Repositories       | As a developer, I want to set up a project repository for the front-end and back-end so that I can manage the codebase efficiently                                      |
| 4     | Development                 | SP - Configure Dev Environment         | As a developer, I want to configure the development environment so that I can ensure consistent setup across different machines                                         |
| 5     | Development                 | Design Responsive UI                   | As a developer, I want to design a responsive user interface using React so that users have a seamless experience across devices                                        |
| 6     | Development                 | Create Reusable Components             | As a developer, I want to create reusable components in React so that the codebase is maintainable and scalable                                                         |
| 7     | Development                 | DRF - Set Up Django Project            | As a developer, I want to create a Django project and set up the Django Rest Framework so that I can build the API                                                      |
| 8     | Development                 | DRF - Design Database Models           | As a developer, I want to design database models so that the data is structured logically                                                                               |
| 9     | Development                 | DRF - Implement API CRUD Operations    | As a developer, I want to implement CRUD operations in the API so that users can manage their content                                                                   |
| 10    | Development                 | Integrate Front-End and API            | As a developer, I want to integrate the front-end with the back-end API so that data can be fetched and displayed dynamically                                           |
| 11    | Development                 | DRF - Secure User Data                 | As a developer, I want to secure user data by storing passwords hashed and ensuring sensitive information is protected                                                  |
| 12    | Development                 | Write React Component Tests            | As a developer, I want to write tests so that I can ensure the functionality of my React components                                                                     |
| 13    | Development                 | DRF - Write API Endpoint Tests         | As a developer, I want to write tests so that I can verify the correctness of the API endpoints                                                                         |
| 14    | Navigation & Authentication | Navbar View on Every Page              | As a user I can view a navbar from every page so that I can navigate easily between pages                                                                               |
| 15    | Navigation & Authentication | Seamless Page Navigation               | As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh                                                               |
| 16    | Navigation & Authentication | Sign Up for New Account                | As a user I can create a new account so that I can access all the features for signed up users                                                                          |
| 17    | Navigation & Authentication | Sign In to Access Features             | As a user I can sign in to the app so that I can access functionality for logged in users                                                                               |
| 18    | Navigation & Authentication | Logged In Status Check                 | As a user I can tell if I am logged in or not so that I can log in if I need to                                                                                         |
| 19    | Navigation & Authentication | Maintain Logged-In Status              | As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised                                                    |
| 20    | Navigation & Authentication | Conditional Sign In/Up Options         | Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up                                                        |
| 21    | Navigation & Authentication | View User Avatars                      | As a user I can view user's avatars so that I can easily identify users of the application                                                                              |
| 22    | Adding & Liking Posts       | Create New Posts                       | As a logged in user I can create posts so that I can share my images with the world!                                                                                    |
| 23    | Adding & Liking Posts       | View Post Details                      | As a user I can view the details of a single post so that I can learn more about it                                                                                     |
| 24    | Adding & Liking Posts       | Like Posts                             | As a logged in user I can like a post so that I can show my support for the posts that interest me                                                                      |
| 25    | The Posts Page              | View Most Recent Posts                 | As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content                                  |
| 26    | The Posts Page              | Search Posts by Keywords               | As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in                                                 |
| 27    | The Posts Page              | View Liked Posts                       | As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most                                                                          |
| 28    | The Posts Page              | View Followed Users' Posts             | As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about                                        |
| 29    | The Posts Page              | Infinite scroll                        | As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc                    |
| 30\*  | The Posts Page              | Add Tags to Posts                      | As a user, I want to add tags to my posts so that they are easier to find                                                                                               |
| 31\*  | The Posts Page              | Search Posts by Tags                   | As a user, I want to search for posts by tags so that I can find related content                                                                                        |
| 32    | The Post Page               | View Post Page                         | As a user I can view the posts page so that I can read the comments about the post                                                                                      |
| 33    | The Post Page               | Edit My Post Details                   | As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created                                          |
| 34    | The Post Page               | Add Comments to Posts                  | As a logged in user I can add comments to a post so that I can share my thoughts about the post                                                                         |
| 35    | The Post Page               | View Comment Dates                     | As a user I can see how long ago a comment was made so that I know how old a comment is                                                                                 |
| 36    | The Post Page               | Read Comments on Posts                 | As a user I can read comments on posts so that I can read what other users think about the posts                                                                        |
| 37    | The Post Page               | Delete My Comments                     | As an owner of a comment I can delete my comment so that I can control removal of my comment from the application                                                       |
| 38    | The Post Page               | Edit My comment                        | As an owner of a comment I can edit my comment so that I can fix or update my existing comment                                                                          |
| 39    | The Profile Page            | View User Profiles                     | As a user I can view other users profiles so that I can see their posts and learn more about them                                                                       |
| 40    | The Profile Page            | View Most Followed Profiles            | As a user I can see a list of the most followed profiles so that I can see which profiles are popular                                                                   |
| 41    | The Profile Page            | View User Stats                        | As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them                             |
| 42    | The Profile Page            | Follow/Unfollow Users                  | Follow/Unfollow a user: As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed                 |
| 43    | The Profile Page            | View All Posts by specific User        | As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them                                     |
| 44    | The Profile Page            | Edit My Profile                        | As a logged in user I can edit my profile so that I can change my profile picture and bio                                                                               |
| 45    | The Profile Page            | Update username and password           | As a logged in user I can update my username and password so that I can change my display name and keep my profile secure                                               |
| 46    | The Profile Page            | DRF - Implement Blocking Functionality | As a developer, I want to implement a blocking functionality so that users can manage their privacy effectively                                                         |
| 47    | The Profile Page            | Block Users                            | As a user, I want to be able to block other users so that they cannot interact with my content                                                                          |
| 48    | The Profile Page            | DRF - Create Contact Form              | As a developer, I want to create a contact form that stores user queries, complaints, or suggestions in the Contact model so that the platform can handle user feedback |
| 49    | The Profile Page            | Send Feedback to Admins                | As a user, I want to send feedback or queries to the platform administrators so that I can report issues or suggest improvements                                        |
| 50    | The Profile Page            | DRF - Implement Post Tagging           | As a developer, I want to implement tagging functionality for posts so that users can categorize their content                                                          |

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

<details>
<summary>Prioritized User stories </summary>

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

The background colour for individual components is black (#000000).

Icon, headings and border colours are gold (#cca53c).

Main text is white (#ffffff).

The main page background colour is an off shade of white (#f8f8f8).
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Typography

The main font used on the website is "DM Sans".
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

#### Imagery

The images on this website are §§§§§§§§§§§§§§§§
<br>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

### Technologies

#### Language

- [HTML](https://en.wikipedia.org/wiki/HTML) is used to structure the content of the application.
- [CSS](https://en.wikipedia.org/wiki/CSS) is applied to style the application, enhancing the user interface..
- [JavaScript](https://sv.wikipedia.org/wiki/Javascript) adds interactivity to web pages, improving the user experience.
- [JSX](https://legacy.reactjs.org/docs/faq-build.html#gatsby-focus-wrapper) & [Intro JSX](https://legacy.reactjs.org/docs/introducing-jsx.html)

#### Frameworks, libraries and dependencies

- [React 17.0.2](https://legacy.reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces. An older version was chosen to stay inline with all other dependencies used as part of the Moments walkthrough which provided a base that this project was then modelled on. Using the react framework really elevated this project, allowing pages such as focus to contain full crude functionality for 2 models as well as RUD for a third all within one view. Providing the user with a way to see and connect all their data together.
- [React bootstrap 1.6.6](https://react-bootstrap.github.io/) - A frontend framework built for react that provides common components. React bootstrap was chosen to help speed up the development of this project and allow time to focused elsewhere. In particular, the accordion component has been essential in providing mobile users with an uncluttered view while allowing quick and easy movement through different areas of their data.
- [React Router 5.3.4](https://github.com/remix-run/react-router) - A lightweight, fully-featured routing library for React. This library has allowed seamless navigation around the site to be provided for users.
- [Axios](https://axios-http.com/) - A simple promise based HTTP client for the browser and node.js. An essential component of this project providing connection between the frontend and backend.
- [jwt-decode 3.1.2](https://www.npmjs.com/package/jwt-decode) - Used to decode the JSON web tokens. Another essential component of this project in providing a secure passageway between the frontend and backend for users.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - Used to provide loading of next set of data on page scrolling where the data exceeds pagination limit. This has not been utilised, see [bug #7](#bugs-and-fixes).

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

Testing can be found in the [TESTING.md file](#) §§§§§§§§§§§§§§
<br>

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

- Logo used was taken from [x](#) §§§§§§§§§§§§§§§§§§
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

#### Acknowledgements

I would like to thank!

- The whole team at [Code Institute Slack community](https://code-institute-room.slack.com) for their teaching and support.
- To all engaged fellow students at all channels and a special shout out to slack channel [community sweden](https://app.slack.com/client/T0L30B202/C03J2BCURV3).
- My mentor [Jubril Akolade](https://github.com/jubrillionaire/)
- My immediate and extended family, as well as my friends, who support and cheer me on!

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_
