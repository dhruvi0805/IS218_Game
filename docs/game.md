# How NeuroNet works

## Five User Stories

## Story 1 — Account Access

> As a player, I want to create an account and log in so that my learning progress can be saved privately.

## Story 2 — Explore the Brain

> As a player, I want to explore an interactive brain and select different skills or topics so that I can choose what I want to practice.

## Story 3 — Complete a Mini-Game

> As a player, I want to complete a mini-game that challenges a specific skill so that I can actively practice while receiving immediate feedback.

## Story 4 — Save My Progress

> As a player, I want my scores, completed activities, and progress to be saved so that I can see how my learning network develops over time.

## Story 5 — View and Manage My Account

> As a player, I want to view my previous activities on a private dashboard and update my account information so that I can manage my progress and account.

---


## Required Account → Interaction → Saved Record → Dashboard Flow

The project will support the following complete workflow:

```text
Create account / Log in
        |
        v
Interactive Brain
        |
        v
Choose skill or topic
        |
        v
Play mini-game
        |
        v
Receive score/result
        |
        v
Save result to database
        |
        v
Return to Brain
        |
        v
Progress visualization updates
        |
        v
Private Dashboard
        |
        v
View history + manage account
```

### Account access

Users will be able to register and log in.

### Useful interaction

Users can select skills/topics and play interactive mini-games.

### Saved result

The application will save information such as:

- User ID
- Mini-game completed
- Skill/category
- Topic
- Score
- Difficulty
- Completion date
- Time or attempt information, if implemented

### Private history/dashboard

The dashboard will show the user's own activity history and progress.

### Account maintenance

Users will have an account-management area where they can update appropriate account information.

---


## Progress Network

The main landing page will function as the player's visual map.

A simplified version could look like:

```text
                    MEMORY
                      |
                -----+-----
               /                         /                    LANGUAGE -------- PATTERNS
              \             /
               \           /
                    LOGIC
```

Each node represents an area of practice.

As the player completes activities, the corresponding node can change visually.

For example:

```text
Before:

        ○ MEMORY

   ○ LANGUAGE     ○ PATTERNS

          ○ LOGIC


After:

        ● MEMORY

   ○ LANGUAGE     ● PATTERNS

          ○ LOGIC
```

The exact visual treatment will be determined during implementation.

The network is a progress visualization, not a scientific model of the human brain.

---


## Planned Mini-Games

The first version will be intentionally bounded.

### Mini-game 1 — Memory

The player sees a sequence for a limited amount of time and then reproduces it.

Possible progression:

```text
Level 1 → 4 items
Level 2 → 5 items
Level 3 → 6 items
Level 4 → 7 items
```

### Mini-game 2 — Pattern Recognition

The player identifies the missing item in a numerical, visual, or symbolic pattern.

Example:

```text
2 → 4 → 8 → 16 → ?
```

### Mini-game 3 — Logic

The player solves a short rule-based puzzle.

### Mini-game 4 — Association

The player identifies relationships between concepts or words.

The project can expand later, but these activities are enough to demonstrate the core architecture.

---


## Scope

To keep the project achievable, the first completed version will focus on:

- Account registration/login
- Interactive brain landing page
- 3–4 mini-games
- Skill categories
- Basic topic association
- Saved scores/results
- Private activity history
- Dashboard
- Account update functionality
- Tests for important game and account behavior

The project will **not** attempt to model an actual human brain or prove that the game improves cognitive ability.

Advanced features such as multiplayer competition, large-scale content libraries, complex AI-generated lessons, or dozens of mini-games can remain future possibilities.

---


## Definition of Done

The project will be considered complete for the first version when a user can:

```text
Register
   ↓
Log in
   ↓
Open the brain
   ↓
Choose a skill
   ↓
Play a mini-game
   ↓
Receive a result
   ↓
Save the result
   ↓
Return to the brain
   ↓
See progress reflected
   ↓
Open private dashboard
   ↓
View previous results
   ↓
Update account information
```

The project will also have meaningful automated tests covering important game logic, persistence, authentication, and authorization behavior.

---


## Final Project Summary

NeuroNet is an interactive learning game built around the idea of a visual network of skills. Instead of presenting learning as a list of assignments, the player enters through an interactive brain, chooses a skill or topic, completes a short mini-game, receives feedback, and sees the result saved to their personal progress.

The central creative experiment is whether the brain/network metaphor can make learning progress feel more understandable and engaging than a conventional menu.

The project will combine game design, frontend interaction, backend persistence, account security, testing, and research into game-based learning while keeping the first version bounded enough to finish.


## First playable release

The first release is one five-question number-pattern challenge. Memory, logic, and association are expansion ideas. The interface uses a labeled Patterns node to open the challenge, and the private dashboard keeps a dated history of saved attempts.

- **Account.** Register, sign in, and update a display name from account settings.
- **Network.** Use a text label such as Ready or Completed alongside the visual state. Derive completion from saved attempts.
- **Challenge.** Present a sequence such as 2, 4, 8, 16 and ask for the next value. After submission, show the score and explain the rule behind each question.
- **Scoring and storage.** Flask validates answers and computes the score from its answer key. SQLite stores the score, challenge identifier, user identifier, and completion time.
- **Private dashboard.** Show the signed-in student's attempts in date order. Keep account updates and history scoped to the session user.

[Release plan](./plan.md) · [Architecture](./architecture.md) · [Experiment](./experiment.md)
