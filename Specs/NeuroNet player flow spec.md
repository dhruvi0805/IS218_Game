# NeuroNet player flow spec

## Scope

This spec defines the intended flow from opening the site to starting a game. It supersedes the entry and region-selection steps in the [V2 concept notes](../docs/neuronet-v2.md).

## 1. Ask for a display name

On arrival, show a single required field labeled **Display name** and a **Continue** button. A blank or whitespace-only name keeps the player on this screen. A valid submission opens the brain map. Keep the display name available during the current play session.

## 2. Show the brain map

The brain map is the entire next screen. Region labels and selection cues belong on the map itself. Keep welcome text, tutorials, skill details, XP panels, and attempt history off this screen. Players can select a playable region by click, tap, or keyboard.

## 3. Open a separate game page

Selecting a playable brain region navigates to a dedicated page for that region's game. Once the page loads, the game starts immediately and shows its first prompt. The region selection is the start action. There is no region detail screen, confirmation, or additional **Start** button.

For the first playable slice, **Pattern Recognition** opens the existing five-question number-pattern challenge at question one. Regions without a game may appear on the map, visibly marked unavailable.

## Acceptance criteria

- Opening the site presents exactly one field, **Display name**.
- A blank or whitespace-only submission stays on the entry screen.
- A valid display name leads to a screen containing only the interactive brain map.
- Selecting **Pattern Recognition** changes the page URL and displays question one without another click.
- An unavailable region leaves the player on the map.
