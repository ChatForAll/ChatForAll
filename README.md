# ChatForAll

ChatForAll is a simple real-time chat application created using [Next.js](https://nextjs.org/docs), [Tailwind CSS](https://tailwindcss.com/docs) and [Firebase](https://firebase.google.com/docs), designed for ease of use and accessibility without the need for user authentication.

## ✨ Features

- **No Login Required**: Enjoy hassle-free chatting without the need for user authentication. Simply visit the website and start chatting right away.

- **Dedicated Copy Button**: Streamlined user experience with a dedicated button for easily copying messages to the clipboard.

- **Auto Delete Messages**: Keep your chat environment clutter-free with an automatic message deletion feature. Messages older than 48 hours are automatically removed, ensuring a clean and organized chat space.

- **Keyboard Shortcuts**: Boost your productivity with intuitive keyboard shortcuts for quick actions within the chat interface.

- **Dark and Light Themes**: Personalize your chat experience with the option to switch between dark and light themes, catering to your preferences and enhancing visibility in different environments.

- **Simple and Minimal UI**: A clean and minimalistic user interface ensures an intuitive and distraction-free chatting experience.

## 🚀 Host your own site

To host your own version of ChatForAll, follow these steps:

- Fork the repository.
- Clone the forked repository.
- Run `npm install` in the project directory to install the necessary dependencies.
- Edit the Firebase configuration in the code to link to your Firebase project.
  - Remove the `.firebaserc` and `firebase.json` files from the project.
  - Ensure that [firebase-tools](https://www.npmjs.com/package/firebase-tools) are installed.
  - Run `firebase login` to log into your Firebase account.
  - Run `firebase init hosting` to initialize Firebase hosting.
  - Duplicate the `firebase-config-example.js` file in the `src` folder and rename it to `firebase-config.js`.
  - Edit the `firebaseConfig` and add values from your firebase project.
- Test your changes locally using `npm run dev`.
- Deploy the updated version using `npm run deploy`.

## 💬 Usage

Visit:

- [chatforall.web.app](https://chatforall.web.app/)
- [chat4all.web.app](https://chat4all.web.app/)
- [c4all.web.app](https://c4all.web.app/)

## ⌨️ Keyboard Shortcuts

- **Shift + Esc**: Focus chat input
- **Ctrl + Shift + C**: Copy last message
- **Ctrl + /**: To show shortcuts.

## 📄 License and Code of Conduct

ChatForAll is licensed under the [MIT License](LICENSE). Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a positive and inclusive community.

## ⚡️ Languages and Tools used:

[![next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=ffffff "Next.js")](https://nextjs.org/docs)
[![tailwindcss](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=ffffff "Tailwind CSS")](https://tailwindcss.com/docs/)
[![firebase](https://img.shields.io/badge/FIREBASE-FFCA28?style=for-the-badge&logo=firebase&logoColor=333333 "firebase")](https://firebase.google.com/docs)

## 🤝 Thanks

Special thanks to [Parthipan](https://github.com/parthipannb) for suggesting the idea of a chat app without the need for login authentication and the auto-delete message feature.
