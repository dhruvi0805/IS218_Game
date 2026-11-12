# Project plan

## Compare the concepts

**NeuroNet.** Solve one five-question number-pattern challenge, save the score, and revisit it in a private history. Compare a skill network with a labeled list using the same progress data.

**Chemistry Alchemy.** Try pairs from a small set of simulated ingredients and save discoveries to a private notebook. The discovery loop needs enough curated outcomes to reward exploration.

**Choice.** NeuroNet gives introductory college students a complete practice loop with one activity and lets us test the progress interface independently of the challenge.

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
