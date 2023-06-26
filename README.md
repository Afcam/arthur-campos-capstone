# Git Clash - Capstone Project

## Project Overview

### 1.1 Description

**Short**

Git Clash is a turn-based card game that draws inspiration from Git flow and Git commands. It offers a casual and dedicated gaming experience, allowing players to strategically compete using cards representing various Git actions.

**Long**

Git Clash is a dedicated turn-based card game that takes its inspiration from Git flow and Git commands. It offers players a casual and engaging experience, combining the world of version control with strategic gameplay.

In Git Clash, players assume the roles of Git developers and engage in battles against each other using a deck of cards. Each card represents a specific Git action or command, such as commit, push, pull, merge, branch, and more. Players strategically play these cards to gain control over repositories and outmaneuver their opponents.

The game follows a turn-based format, allowing players to carefully plan their moves and consider the consequences of each action. By strategically deploying their cards, players can hinder their opponents' progress, seize control of repositories, and ultimately achieve victory.

Git Clash provides an accessible and enjoyable gaming experience for both Git enthusiasts and casual players. It serves as a platform for players to reinforce their understanding of Git flow, commands, and branching strategies in a fun and interactive way. The game is designed to accommodate players of varying skill levels, making it accessible to both beginners and experienced Git users.

Through Git Clash, players can explore and experiment with different Git actions, learning how they impact the overall gameplay. The game's mechanics encourage players to strategize and consider the best course of action in order to achieve their objectives.

Whether you're a software developer looking for a unique way to reinforce your Git knowledge or simply someone who enjoys turn-based card games, Git Clash offers an immersive experience that combines learning and entertainment. Step into the world of version control, embrace the power of Git commands, and engage in strategic battles to claim victory.

Git Clash is a turn-based card game that draws inspiration from Git flow and Git commands. It offers a casual and dedicated gaming experience, allowing players to strategically compete using cards representing various Git actions.

### 1.2 Problem

The game addresses the need for an engaging and interactive way to learn and reinforce Git commands and best practices.

### 1.3 User Profile

The end users are developers, particularly those who are familiar with Git and want to enhance their understanding and proficiency, or simply want to have fun.

### 1.4 Requirements: Use Cases and Features

- Home Page: A page where players can join or create game rooms.
- Game Page: A page where players actually play the game.
- Game Mechanics: Turn-based gameplay mechanics with strategic card actions.
- Git Command Integration: Cards representing various Git commands and actions.
- Real-time Multiplayer: Ability to play against other players in real-time.

### 1.5 Tech Stack and APIs

- Front-end: HTML5, CSS/SCSS, React.js with TypeScript, Mantine, Socket.io, Axios
- Back-end: Express.js, Socket.io, MySQL, Knex
- API: Axios for API calls and Socket.io for Web sockets.
- Libraries: Dicebear for generating random avatars, Mantine for component library, JWT token.
- Deployment: Netlify, Heroku
- Domain: Google Domains (gitclash.com)

## 2. Client-Side Implementation

### Site Map

- Home
- Lobby
- Game Board
- Rules

### Screen Details

- Home: A welcoming screen with a login form or user registration option.
- Lobby: A waiting area to wait for players to join.
- Game Board: Displays the game state, including player hands, the discard pile, and the remaining deck.

## 3. Server-Side Implementation

### 3.1 End-Point Descriptions

**REST Endpoints:**

- HTTP Method: POST
  - Endpoint: /api/rooms/create
  - Parameters:
    - `username` (string): The username of the player.
    - `avatar` (string): The avatar of the player.
  - Response:
    - `token` (string): The JWT token.
- HTTP Method: POST
  - Endpoint: /api/rooms/login
  - Parameters:
    - `room_uuid` (string): The UUID of the room.
    - `username` (string): The username of the player.
    - `avatar` (string): The avatar of the player.
  - Response:
    - `token` (string): The JWT token.

**Socket.IO Event Handlers:**

- Get Players in a Room

  - Event: getPlayers
  - Handler: getPlayersHandler
  - Parameters:
    - `room_uuid` (string): The UUID of the room.

- Join a Room

  - Event: join
  - Handler: joinHandler
  - Parameters:
    - `room_uuid` (string): The UUID of the room.
    - `username` (string): The username of the player.
    - `avatar` (string): The avatar of the player.

- Play a Card

  - Event: playCard
  - Handler: playCardHandler
  - Parameters:
    - `card` (object): The card object containing card information.

- Start the Game
  - Event: start
  - Handler: startGameHandler
  - Parameters: None

### 3.2 External APIs that will be consumed

None.

### 3.3 Database Structure

**Rooms Table**
Columns:

- `id` (integer, primary key)
- `uuid` (string, not nullable)
- `max_players` (integer, not nullable)

**Players Table**
Columns:

- `id` (integer, primary key)
- `room_id` (integer, unsigned, foreign key referencing `id` column of `rooms` table)
- `username` (string, not nullable)
- `uuid` (string, not nullable)
- `avatar` (string, not nullable)
- `online` (boolean, not nullable, default to false)

**Cards Table**
Columns:

- `id` (integer, primary key)
- `type` (string, not nullable)
- `action` (string, not nullable)
- `comment` (string, not nullable)

**RoomCards Table**
Columns:

- `id` (integer, primary key)
- `room_id` (integer, unsigned, foreign key referencing `id` column of `rooms` table)
- `card_id` (integer, unsigned, foreign key referencing `id` column of `cards` table)
- `player_id` (integer, unsigned, foreign key referencing `id` column of `players` table)

### 3.4 Authentication/Authorization and Security

- User authentication using JWT
- Authorization enforced for accessing game rooms and performing game actions.

## 4. Project Roadmap

**Phase 1**

- Create the database and design the necessary models
- Build the server boilerplate and establish the connection to the database
- Define and implement all necessary API endpoints in Express
- Build the overall structure of the React app and create high-level components
- Connect smart components to the API endpoints for data retrieval and manipulation
- Test and debug the end-to-end functionality of the application
- Code cleanup, testing, and debugging
- Deployment
- Demo Day

**Phase 2**

- Implement additional game features
- Enhance user experience with animations and sound effects
- Add social features
- Improve server-side performance and scalability
- Testing and bug fixing

**Phase 3**

- Implement comprehensive tutorial or documentation section
- Expand the game to support more players
- Implement AI opponents
- Explore mobile compatibility options
