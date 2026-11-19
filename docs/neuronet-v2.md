# NeuroNet V2

[Play NeuroNet V2](https://dhruvi0805.github.io/IS218_Game/play/) · [Original game concept](./game) · [Original concept comparison](./concepts)

## Current MVP

Train a skill to build a brighter brain. NeuroNet presents skills as a playful game map. Region labels are fictional gameplay associations and make no claims about cognition or medical outcomes.

1. Enter a player name and display name. The lab uses the display name during the current session.
2. Explore the interactive 2D brain. Hover or focus a region to highlight it. Select one to see the associated skill, its XP, and training availability.
3. Select **Pattern Recognition**, then **Train this region**. Predict the next number in five sequences and review the rule after each answer.
4. See your score and XP reward. Each correct answer earns **50 XP**, up to **250 XP** per run.
5. Return to the brain and see your updated skill XP and overall glow. The MVP uses Pattern Recognition XP on a **1,000 XP** scale and caps the glow at 100%.

The player names, XP, and attempts live in the current page session and reset when the page reloads.

| Region skill | Training |
| --- | --- |
| Pattern Recognition | Five-question number sequence challenge, playable |
| Memory | Sequence recall, planned |
| Focus | Attention challenge, planned |
| Reaction Speed | Reaction-time challenge, planned |
| Problem Solving | Logic puzzle, planned |
| Numerical Reasoning | Estimation challenge, planned |
| Language | Word association, planned |
| Creativity | Divergent-thinking prompts, planned |
| Spatial Reasoning | Mental rotation, planned |
| Social / Emotional Skills | Perspective-taking scenarios, planned |

## Planned progression

The long-term game loop is to explore the brain, pick a skill, train, earn XP, see the brain brighten, unlock more activities, and return to train again. Once more regions have playable activities, overall brightness can reflect a bounded average across skills. For example, 70% Memory, 50% Focus, 90% Creativity, and 40% Reaction average to 62.5%. A future game-performance rating would describe play within NeuroNet. It would carry no clinical IQ meaning.

## Future roadmap

- **V3** adds minigames, region-specific progression, richer glow and player statistics.
- **V4** adds a rotatable, zoomable 3D brain with selectable regions and dynamic highlights.
- **V5** adds accounts, saved progression, player profiles and a global leaderboard. Achievements, streaks and multiplayer are later possibilities.
