# Program Diploma - Capstone Project

## Project Title

? -- A GitHub-themed Browser Game

GitBlast
GitClash
RepoRumble
CommitChaos
BranchBrawl
DevWar
MergeMayhem

## Author

## Cohort

## Project Overview

### Description

This is a browser game that incorporates the Git flow and Git commands, creating a fun and educational experience for users.
Git Clash is a casual dedicated deck card game that incorporates the Git flow and Git commands

### Problem

The game addresses the need for an engaging and interactive way to learn and reinforce Git commands and best practices.

### User Profile

The end users are developers, particularly those who are familiar with Git and want to enhance their understanding and proficiency. Or just want to have fun.

### Requirements: Use Cases and Features

- Game Lobby
- Game Mechanics
- Git Command Integration
- Real-time Multiplayer
- Score Tracking
- Game Chat

### Tech Stack and APIs

Technologies:

- React with TypeScript for the client-side
- Sass for styling
- Axios for API communication
- Mantine UI library for UI components
- Express for the server-side
- Socket.io for real-time communication
- SQL database for storing game data

APIs:

- jwt token

## Client-Side Implementation

### Site Map

- Home
- Lobby
- Game Board
- Profile

### Screen Details

- Home: A welcoming screen with a login form or user registration option.
- Lobby: A list of available game rooms, allowing users to join or create their own.
- Game Board: Displays the game state, including player hands, the discard pile, and the remaining deck.
- Profile: Shows the user's profile information, game statistics, and leaderboard.

## Server-Side Implementation

### End-Point Descriptions

- POST /api/users/register
- POST /api/users/login
- GET /api/rooms
- POST /api/rooms
- GET /api/rooms/:id
- POST /api/rooms/:id/join
- POST /api/rooms/:id/start
- POST /api/rooms/:id/play

### External APIs that will be consumed

### Database Structure

- Users table
- GameRooms table

### Authentication/Authorization and Security

- User authentication using JWT
- Passwords stored securely using hashing algorithms
- Authorization enforced for accessing game rooms and performing game actions.

## Project Roadmap

### Phase 1

- Create the database and design the necessary models
- Build the server boilerplate and establish the connection to the database
- Define and implement all necessary API endpoints in Express
- Build the overall structure of the React app and create high-level components
- Connect smart components to the API endpoints for data retrieval and manipulation
- Test and debug the end-to-end functionality of the application
- Implement basic styling and CSS
- Code cleanup, testing, and debugging
- Deployment
- Demo Day

### Phase 2 (Extra Features)

- Implement additional game features
- Enhance user experience with animations and sound effects
- Add social features
- Improve server-side performance and scalability
- Testing and bug fixing

### Phase 3 (Future Enhancements)

- Implement comprehensive tutorial or documentation section
- Expand the game to support more players
- Implement AI opponents
- Explore mobile compatibility options
