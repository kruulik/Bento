# Bentö

Bentö Heroku Link: Soon...


Bentö is a web-app clone of the popular design and artwork showcase platform Behance. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Minimum Viable Product

By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [X] Hosting on Heroku
- [X] New account creation, login, and guest/demo login
- [X] Project Viewing
- [X] Explore Projects
- [ ] Likes
- [ ] Comments

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: components.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md  


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 3: Projects Model, API, and components (4 days)

**Objective:** Projects can be created, viewed, edited and destroyed through the API. *Should split this up into Project Modal & Projects Gallery, as they are the main components of this app.*

### Phase 1: Comments Model, API, and Components (2 days)

**Objective:** Users can create comments and like projects. *delegating less time to this because it makes up a minor portion of the UX. Focus should be on Likes/Appreciations.*

### Phase 4: User Profiles (2 days)

**Objective:** Each user has a profile showcasing their projects.

### Bonus Features (TBD)
- [ ] Tags
- [ ] Follows
- [ ] Appreciations (*join tables to display total count on User Profiles.*)
- [ ] Views (*join tables to display total count on User Profiles.*)
