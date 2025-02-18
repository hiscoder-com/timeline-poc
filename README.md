### timeline-poc

[![Netlify Status](https://api.netlify.com/api/v1/badges/45973e13-7f28-4458-ba44-9fe6cce84a15/deploy-status)](https://app.netlify.com/sites/tt-timeline-poc/deploys)

Library of components for convenient viewing of various biblical events (with or without reference to time).
Used plugins for vertical and horizontal timelines.
You need created a repository on [git.door43](https://git.door43.org/BSA/ru_timeline), manifest and tsv-files.

Components:

- HorizontalTimeline - uses a horizontal plugin @knight-lab/timelinejs
- VerticalTimeline - uses a vertical plugin @merc/react-timeline
- Timeline - extended version of the component, in which you can specify the type of timeline
- Manifest - a component that parses the manifest from the repository
- TimelineViewer - component that displays timelines from the repository

