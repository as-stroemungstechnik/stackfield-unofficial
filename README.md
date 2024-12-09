# Unofficial Stackfield API client

[Stackfield API](https://www.stackfield.com/developer-api) client for Node.js and the browser.

## Getting started

### Installation

```bash
$ npm install stackfield-unofficial
```

### Add a Webhook

Follow the [official documentation](https://www.stackfield.com/developer-api) to add a Webhook integration of the appropriate type.

### Usage

#### Send a chat message

```js
import * as stackfield from 'stackfield-unofficial';

const message: stackfield.ChatMessage = {
  title: 'Hello, world!',
};

await stackfield.sendChatMessage({
  webhookUrl: 'https://www.stackfield.com/apiwh/d4c7e4cf-2503-4d2c-99eb-7a5cf5f4b925',
  message: message,
});
```

#### Error handling

```js
import { sendChatMessage, StackfieldError } from 'stackfield-unofficial';

try {
  await sendChatMessage({
    webhookUrl: 'https://www.stackfield.com/apiwh/d4c7e4cf-2503-4d2c-99eb-7a5cf5f4b925',
    message: { title: 'Hello, world!' },
  });
} catch (err) {
  if (err instanceof StackfieldError) {
    console.log(`Stackfield responded with error code: ${err.errorCode}`);
  }
}
```

### Available methods

- `sendChatMessage`
- `createDiscussion`
- `createTask`
- `createPage`
- `uploadFile`
- `createEvent`
- ~~`createSnippet`~~ - endpoint has no official documentation and is therefore not supported

#### Enterprise features

_Enterprise_ features are not supported. We do not have access to the Enterprise features and therefore cannot reliably test them.
