import { Resolver } from '@nestjs/graphql';
import { BoardArticleService } from './board-article.service';

@Resolver()
export class BoardArticleResolver {
  constructor(private readonly boarArticleService: BoardArticleService) {}
}
