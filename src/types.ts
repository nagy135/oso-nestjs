export type RequestWithUser = Request & {
  user: { name: string; sub: string };
};
