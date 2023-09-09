export class TodoError extends Error {
  constructor(message: string, public code: number) {
    super(message);
  }
}
