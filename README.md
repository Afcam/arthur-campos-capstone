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

Git Clash is a turn-based card game that draws inspiration from Git flow and Git commands. It offers a casual and dedicated gaming experience, allowing players to strategically compete using cards representing various Git actions.

<!-- This is a browser game that incorporates the Git flow and Git commands, creating a fun and educational experience for users.
Git Clash is a casual dedicated deck card game that incorporates the Git flow and Git commands -->

Git Clash is a dedicated turn-based card game that takes its inspiration from Git flow and Git commands. It offers players a casual and engaging experience, combining the world of version control with strategic gameplay.

In Git Clash, players assume the roles of Git developers and engage in battles against each other using a deck of cards. Each card represents a specific Git action or command, such as commit, push, pull, merge, branch, and more. Players strategically play these cards to gain control over repositories and outmaneuver their opponents.

The game follows a turn-based format, allowing players to carefully plan their moves and consider the consequences of each action. By strategically deploying their cards, players can hinder their opponents' progress, seize control of repositories, and ultimately achieve victory.

Git Clash provides an accessible and enjoyable gaming experience for both Git enthusiasts and casual players. It serves as a platform for players to reinforce their understanding of Git flow, commands, and branching strategies in a fun and interactive way. The game is designed to accommodate players of varying skill levels, making it accessible to both beginners and experienced Git users.

Through Git Clash, players can explore and experiment with different Git actions, learning how they impact the overall gameplay. The game's mechanics encourage players to strategize and consider the best course of action in order to achieve their objectives.

Whether you're a software developer looking for a unique way to reinforce your Git knowledge or simply someone who enjoys turn-based card games, Git Clash offers an immersive experience that combines learning and entertainment. Step into the world of version control, embrace the power of Git commands, and engage in strategic battles to claim victory.

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
