```javascript

{
  entities:  {
      users: {
      1: {
        id: 1,
        username: guest,
        bio: Designer skilled in brand identity, living in southern Brazil.,
        member_since: JULY 10, 2011,
        occupation: Graphic Designer,
        focus: [Branding, Packaging, Graphic Design],
        location: San Juan, Brazil,
        contact: test@example.com,
        follows_ids: [2, 3, 4],
        appreciated: [2, 5, 6, 7, 8, 9]
      }
    },
    collections: {
      1: {
        id: 1,
        title: First Collection,
        user_id: 1,
        project_ids: [2, 5]
      }i
    },

    projects: {
      1: {
        id: 1,
        name: Sample Project,
        author_ids: [1],
        tags: [Branding, Packaging, Graphic Design],
        featured_collection_ids: [3],
        other_project_ids: [2, 3],
        comment_count: 7,
        comment_ids: [1, 2, 3, 4, 5, 6, 7],
        project_info: some text....,
        tags: [tag1, tag2, tag3] ,
        copyright_type: 1
      }
    }
    comments: {
      1: {
        id: 1,
        title: 'Very exciting comment,'
        body: 'Such praise. Please look at my portfolio. '
      }
    }
  }
  ui: {
    projectModal: 2,
    errors: {},  
  }
  session: {
    currentUser: {}
  }


}
