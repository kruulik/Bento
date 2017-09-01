# Bentö

Bentö is a web-app clone of the popular design and artwork showcase platform Behance. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Project Ownerships

Projects can belong to more than one user, and this is demonstrated on the frontend by rendering either the single owner's name, or a list of multiple owners. 

### Modals

Projects are displayed using a react-modal component, which when opened will set overflow: hidden in order to prevent scrolling in the background. This created a challenge when implementing project-sidebar behavior (as per the design on Behance). Sidebar content was selectively positioned flex or absolute, depending on its position in relation the the viewport and tital height of the project modal. Both of these varied depending on the content and scroll distance and needed to be calculated using .getBoundingClientRect().

```javascript
getStickyTop() {
  let mod = document.querySelector('.ReactModal__Overlay');
  let modRec = mod.getBoundingClientRect();
  let sb = document.querySelector('.project-sidebar');
  let sbRec = sb.getBoundingClientRect();
  return Math.abs(sbRec.height - modRec.height);
}
handleScroll() {
  let sb = document.querySelector('.project-sidebar');
  let sbRec = sb.getBoundingClientRect();
  let mod = document.querySelector('.ReactModal__Overlay');
  let modRec = mod.getBoundingClientRect();

  if (sbRec.top < 1 && (sbRec.bottom - modRec.bottom) > 0) {
    this.setState({
      stickystyle: {
        position: 'fixed',
        top: 0
      }
    });
  } else {
    let pos = this.getStickyTop();
    if (sbRec.top < 1) {
      this.setState({
        stickystyle: {
          position: 'absolute',
          top: pos
        }
      });
    } else {
      this.setState({
        stickystyle: {
          position: 'absolute',
          top: 0
        }
      });
    }
  }
}
```

## Technologies

### Backend

- Ruby On Rails
- jBuilder
- PostgreSQL
- Heroku

### Frontend

- React/Redux
- JavaScript
- SCSS/CSS
- npm
- Webpack

### Storage

- Amazon Web Services for project images and user avatars.

## Future Features

### Create Project

User will be able to create "items" for each project; each item consists of either an image or text (the logic and validation for this is already implemented on the backend). The user will also be able to specify item order. Quill or a similar package may be used to create the markup text, allowing a user to specify text type.

### User Profile

Will display user's projects and liked projects.

### Search

Categorizing projects will allow users to search and filter through projects.





[live demo]: https://bentoo.herokuapp.com/
