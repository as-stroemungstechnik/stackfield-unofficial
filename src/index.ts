import { StackfieldError } from './StackfieldError';
import { formatDate } from './utils';

export { StackfieldError } from './StackfieldError';

export type ChatMessage = {
  title: string;
};

export type SendChatMessageParams = {
  webhookUrl: string;
  message: ChatMessage;
};

export async function sendChatMessage(params: SendChatMessageParams) {
  const requestBody = {
    Title: params.message.title,
  };

  const res = await fetch(params.webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const resData = await res.json();

  if (resData.Result !== 'ok') {
    throw new StackfieldError({ errorCode: resData.Result, description: resData.ErrorText });
  }
}

export type Discussion = {
  title: string;
  content?: string;
};

export type CreateDiscussionParams = {
  webhookUrl: string;
  discussion: Discussion;
};

export async function createDiscussion(params: CreateDiscussionParams) {
  const requestBody = {
    Title: params.discussion.title,
    Content: params.discussion.content,
  };

  const res = await fetch(params.webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const resData = await res.json();

  if (resData.Result !== 'ok') {
    throw new StackfieldError({ errorCode: resData.Result, description: resData.ErrorText });
  }
}

export type Task = {
  title: string;
  content?: string;
  dateStart?: Date;
  dateEnd?: Date;
  users?: string[];
};

export type CreateTaskParams = {
  webhookUrl: string;
  task: Task;
};

export async function createTask(params: CreateTaskParams) {
  const startDate = params.task.dateStart ? formatDate(params.task.dateStart) : undefined;
  const endDate = params.task.dateEnd ? formatDate(params.task.dateEnd) : undefined;

  const requestBody = {
    Title: params.task.title,
    Content: params.task.content,
    DateStart: startDate,
    DateEnd: endDate,
    Users: params.task.users,
  };

  const res = await fetch(params.webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const resData = await res.json();

  if (resData.Result !== 'ok') {
    throw new StackfieldError({ errorCode: resData.Result, description: resData.ErrorText });
  }
}

export type Page = {
  title: string;
  content?: string;
};

export type CreatePageParams = {
  webhookUrl: string;
  page: Page;
};

export async function createPage(params: CreatePageParams) {
  const requestBody = {
    Title: params.page.title,
    Content: params.page.content,
  };

  const res = await fetch(params.webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const resData = await res.json();

  if (resData.Result !== 'ok') {
    throw new StackfieldError({ errorCode: resData.Result, description: resData.ErrorText });
  }
}

export type File = {
  file: Blob;
  fileName: string;
};

export type UploadFileParams = {
  webhookUrl: string;
  file: File;
};

export async function uploadFile(params: UploadFileParams) {
  const requestBody = new FormData();
  requestBody.set('File', params.file.file, params.file.fileName);

  const res = await fetch(params.webhookUrl, {
    method: 'POST',
    body: requestBody,
  });

  const resData = await res.json();

  if (resData.Result !== 'ok') {
    throw new StackfieldError({ errorCode: resData.Result, description: resData.ErrorText });
  }
}

export type Event = {
  title: string;
  content?: string;
  dateStart: Date;
  dateEnd: Date;
  users?: string[];
};

export type CreateEventParams = {
  webhookUrl: string;
  event: Event;
};

export async function createEvent(params: CreateEventParams) {
  const requestBody = {
    Title: params.event.title,
    Content: params.event.content,
    DateStart: params.event.dateStart,
    DateEnd: params.event.dateEnd,
    Users: params.event.users,
  };

  const res = await fetch(params.webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const resData = await res.json();

  if (resData.Result !== 'ok') {
    throw new StackfieldError({ errorCode: resData.Result, description: resData.ErrorText });
  }
}

export default {
  sendChatMessage,
  createDiscussion,
  createTask,
  createPage,
  uploadFile,
  createEvent,
  StackfieldError,
};
