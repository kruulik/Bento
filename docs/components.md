# Component Hierarchy

**HomeContainer**

- ProjectsIndex

**AuthContainer**

- Sign Up / Sign In Auth form 

**ProjectShowContainer**

- ProjectItem

  - ProjectItemDetails
  - ImagesIndex
  - CommentForm
  - CommentsIndex

    - CommentItem

**ProfileShowContainer**

- User Detail

# Routes

Path                     | Component
------------------------ | -------------------------
"/"                      | "HomeContainer (L/i)"
"/activity"              | "ActivityContainer (L/o)"
"/featured"              | "FeaturedContainer"
"/galleries"             | "GalleriesContainer"
"/projects/:id"          | "ProjectShow"
"/users/:id"             | "ProfileShow"
"/users/:id/collections" | "ProfileCollections"
"/users/:id/appreciated" | "ProfileAppreciated"
