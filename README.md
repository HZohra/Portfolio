# Zohra Haidary — Developer Portfolio

Personal software development portfolio built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Pages

- **/** — introduction, featured projects, about
- **/projects** — complete project list
- **/projects/[slug]** — project details (generated from `src/data/projects.ts`)
- **/experience** — skills, professional experience, leadership and coursework
- **/contact** — email, professional profiles and resume

Update projects and their verified links in `src/data/projects.ts`. In-progress work is clearly labeled. The header supports keyboard dismissal of its mobile navigation.

## Assets

The portrait is in `public/images/hero` and the resume in `public/resume.pdf`. Only publish assets you have permission to use.
