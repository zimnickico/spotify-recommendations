![banner](https://github.com/krzysztofzimnicki/spotify-recommendations/assets/47279613/0968f40a-5241-4d83-b006-9a5da95c395c)

## Using Spotify Recommendations
All you need to do is head to https://rects.app/ and type in your favourite song(s) to get some recommendations. If you're interested in new features or would like to simply follow the development journey, please take a look at the [Roadmap.](https://github.com/users/krzysztofzimnicki/projects/4/views/1)

## Deploying Your Own
You are also free to clone this repository and make any changes to personalize spotify-recommendations to your needs. The easiest way to do that is by following the guide below.
1. Clone the repository and run `bun install` inside the root directory to install the dependencies.
*Note: you're free to use any other package manager, but it might require additional setup.*

2. Create a developer account at [Spotify for Developers](https://developer.spotify.com/) and create a new app.

3. Create a file called `.env.local` inside the root folder and populate it with your Client ID and Client Secret, as seen in `.env.example`

4. Run `bunx vercel dev` to run the project locally and tinker from there ;)

## Tech Stack

- [Bun](https://bun.sh/) - Package Manager
- [Next.js](https://nextjs.org/docs/app) - App Router and Server Actions 
- [Vercel](https://vercel.com/) - Hosting
- [Spotify Web API](https://developer.spotify.com/documentation/web-api) - Recommendations Engine

## Author(s)
Spotify Recommendations and the Rects app are solo-made by [Krzysztof Zimnicki.](https://krzysztofzimnicki.com/) <br></br>
If you're interested in contributing, feel free to take a look at `CONTRIBUTING.md` or create a new issue.