# Architecture and implementation

## Tech Stack

## Frontend

- HTML
- CSS
- JavaScript

The frontend will handle the brain visualization, navigation, mini-game interfaces, feedback, and dashboard display.

## Backend

- Python
- Flask or FastAPI

The backend will handle authentication, game results, progress, and communication with the database.

## Database

- SQLite

SQLite is appropriate for the bounded scope of the project and provides persistent storage without requiring a separate database server.

## Testing

- pytest
- Unit tests for game logic
- Tests for score/result calculations
- Tests for account and persistence behavior
- Tests for important API/server behavior

## Version Control

- Git
- GitHub

---


## Architecture Sketch

```text
                         PLAYER
                           |
                           v
                  +------------------+
                  |   Browser/UI     |
                  |  HTML/CSS/JS     |
                  +--------+---------+
                           |
              +------------+------------+
              |                         |
              v                         v
       Interactive Brain          Mini-Games
              |                         |
              +------------+------------+
                           |
                           v
                  +------------------+
                  | Backend/API      |
                  | Python           |
                  +--------+---------+
                           |
            +--------------+--------------+
            |              |              |
            v              v              v
       Authentication   Game Logic    Dashboard
            |              |              |
            +--------------+--------------+
                           |
                           v
                  +------------------+
                  | SQLite Database  |
                  |                  |
                  | Users            |
                  | Game Results     |
                  | Progress         |
                  | Activity History |
                  +------------------+
```

The frontend is responsible for the interactive experience. The backend is responsible for security, validation, persistence, and game-related operations. The database stores user-specific results and history.

---


## Data Model

A simplified database design could include:

### Users

```text
id
username
email
password_hash
created_at
```

### Game Results

```text
id
user_id
game_id
skill
topic
score
difficulty
completed_at
```

### Progress

```text
id
user_id
skill
progress_value
last_played
```

The `user_id` connects saved results to the authenticated player so that another user cannot simply access someone else's history.

---


## Security and Persistence

The project will maintain the server-side security requirements from the existing IS218 instructions.

Important areas include:

- Passwords should not be stored as plain text.
- User input should be validated on the server.
- Saved records should be associated with the authenticated user.
- Dashboard queries should only return the current user's private history.
- Authentication should be required for protected pages/actions.
- Game results should not be trusted solely because the browser sends a score.

Testing will verify important authentication and authorization behavior.

---


## Planned Milestones

### Phase 1 — Research and Design

- Research game-based learning
- Research educational mini-games
- Compare research findings
- Finalize brain/network visual concept
- Define database structure

### Phase 2 — Core Application

- Build authentication
- Build brain landing page
- Build navigation between skills
- Build first mini-game
- Save game results

### Phase 3 — Expansion

- Add additional mini-games
- Add progress visualization
- Build dashboard
- Add account maintenance

### Phase 4 — Testing

- Write unit and integration tests
- Test authentication and private history
- Test game scoring
- Conduct peer review
- Document feedback in GitHub Issues

### Phase 5 — Refinement

- Implement accepted feedback
- Verify changes
- Close resolved issues
- Document remaining limitations and next steps

---


