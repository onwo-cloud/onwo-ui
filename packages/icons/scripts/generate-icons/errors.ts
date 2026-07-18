import { Data } from 'effect';

export class CliError extends Data.TaggedError("CliError")<{
  readonly message: string;
}> {}

export class GitError extends Data.TaggedError("GitError")<{
  readonly message: string;
  readonly cause?: unknown;
}> {}

export class FileSystemError extends Data.TaggedError("FileSystemError")<{
  readonly message: string;
  readonly cause?: unknown;
}> {}

export class JsonParseError extends Data.TaggedError("JsonParseError")<{
  readonly message: string;
  readonly cause?: unknown;
}> {}
