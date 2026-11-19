# Project plan


## Compare the concepts

### NeuroNet

**Gameplay loop.** Open the Patterns activity, predict the next number in five sequences, then submit your answers. For example, 2, 4, 8, 16 continues with 32 because each term doubles. Review the explanations, see your saved score, and return to the progress screen to find your next action. Past attempts are available in a private history.

**What makes it distinct.** The number challenge gives students a short practice loop. The progress screen adds a second design question: can students tell what they have finished and what to do next? The planned experiment compares a connected skill network with a labeled list using the same progress data and actions.

### Chemistry Alchemy

**Gameplay loop.** Pick two simulated ingredients, try the combination, and read the result. A new discovery goes into a private notebook. Review previous discoveries and use those clues to choose the next pair. For example, a player might combine two fictional ingredients to discover a glowing gel, then look for other combinations that produce a similar effect.

**What makes it distinct.** Players make predictions by choosing which combinations to try. Progress is a growing record of discoveries they can use to plan the next experiment. The main design challenge is writing enough outcomes and clues to make each choice feel purposeful.

**Choice.** NeuroNet gives introductory college students a complete practice loop with one five-question activity and a saved score. It also lets us compare the two progress interfaces without changing the challenge. Chemistry Alchemy would need a broader set of curated outcomes and clues before the discovery loop could be evaluated.

## Five user stories

1. As a student, I can register and sign in so I can return to my account.
2. As a student, I can finish the pattern challenge and see feedback.
3. As a student, I can save a scored attempt so my progress persists.
4. As a student, I can view my previous attempts on a private dashboard.
5. As a student, I can update my display name in account settings.

## Architecture

```text
Browser (HTML/CSS/JS)
  → Flask routes (session, validation, CSRF)
    → Account, scoring, and history logic
      → SQLite (users and attempts)
```

Flask hashes passwords and calculates scores from submitted answers using the server's answer key. Each attempt stores the session user's ID, activity ID, score, and completion time. Private queries and account updates use the authenticated identity. Completion is derived from saved attempts.

**Planned pytest checks.** Verify scoring, rejected invalid submissions, persistence across sessions, password hashing, and isolation between accounts. Verify that signed-out requests cannot use protected actions.

