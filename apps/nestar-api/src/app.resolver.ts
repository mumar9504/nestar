import {Query, Resolver} from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  public sayhello(): string {
    return 'GraphQL API Server';
  }
}