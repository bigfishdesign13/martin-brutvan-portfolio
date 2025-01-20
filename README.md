# Portfolio and résumé for Martin Brutvan

Hi, I'm Martin. Welcome to my portfolio and résumé.

## Background

This project was my first foray into NextJS. Without any previous experience
with NextJS, I opted to use the most recent version at the time, NextJS 15, not
long after it was released. While I was excited to work with the most up-to-date
version of the framework, I felt a little bit stranded at times when I hit
roadblocks as all my friends (my personal resources) who have been using NextJS
for years were versed in previous versions of the framework and didn't always
have answers.

Ultimately, all roadblocks were resolved and the site is live.

## Challenges

Along the way, I ran into the following challenges...

### Applying styles

I wanted this project to be one big learning opportunity, so it seemed
appropriate to use something new for handling the styles. I opted to use
Tailwind CSS, which NextJS semmed eager for me to install. I'd always heard so
mych about the CSS framework, but I had never used. So, off I went.

I was aiming to align design tokens in my app with the styles and tokens used in
the Figma designs. I was able wrangle Tailwind to do what I wanted, but I found
it odd that there didn't seem to be an foundational method to add design
primatives. I finally added custom objects to house the primatives in
`tailwind.config.ts` which then allowed me to use the primative values when
customizing and extending the Trailwind styles. It was a fine solution.

After working with the Trailwind methodologies for a while, I decided I did not
care for the overall approach. It felt too loose for me personally. I started
mixing the Trailwind styles with CSS modules and that felt a little better, but
now I had Trailwind style, native CSS, and CSS modules all mixed together. It
worked, but it didn't feel good and won't be tenable.

For a more focused style solution, I plan to eventually migrate to [Panda
CSS](https://panda-css.com).

## Designs

This site was designed using Figma.

- [site designs](https://www.figma.com/design/tolU6cQwZMoP2SpmQQrAcI/Martin-Brutvan-%7C-Design-Technologist?node-id=0-1&p=f&t=Nv0UpcMisOlkW3Ql-11)

## App info

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
