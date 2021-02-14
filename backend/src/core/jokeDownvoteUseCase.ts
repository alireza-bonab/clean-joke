import { error, Result, success, UseCase } from '../types';
import { Joke } from './jokeEntity';
import { JokeService } from './jokeService';

export class JokeDownvoteUseCase implements UseCase<string, Joke> {
  constructor(private readonly jokeService: JokeService) {}

  public async execute(jokeId: string): Promise<Result<Error, Joke>> {
    try {
      const joke = await this.jokeService.downvote(jokeId);
      return success(joke);
    } catch (e) {
      return error(e);
    }
  }
}
