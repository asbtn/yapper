Yapper is a React app for building and testing social features like posts, comments, and interactions. Basically a lightweight Twitter clone.

Currently in development — this repo covers the frontend only.

Ruby on Rails backend can be found [here](https://github.com/asbtn/yapper-api).

## Setup

```bash
# install dependencies
npm install

# start dev server
npm run dev

# lint / format (optional)
npm run lint
```

## Stack

- React 19
- Vite
- TypeScript
- React Router
- Tailwind CSS
- Context API
- Rails 8 API backend
- PostgreSQL (backend)

## Features (planned & in progress)

- [x] User signup/login (JWT-based auth via Rails API)
- [x] Create an account if it doesn’t exist
- [ ] View own profile with yaps (posts)
- [ ] Edit profile (profile picture, bio)
- [ ] Post new yaps
- [ ] View yaps from other users
- [ ] Follow/unfollow users
- [ ] See followers and following lists
- [ ] View a home timeline with yaps from followed accounts

- [ ] Reply to yaps (including own)
- [ ] Like/unlike yaps
- [ ] Change password and email in settings
- [ ] Receive notifications for likes

- [ ] Set profile to private (followers only)
- [ ] Block/unblock users
- [ ] Attach images to yaps
- [ ] Search for users by name or username
- [ ] Search for yaps
