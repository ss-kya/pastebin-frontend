export interface IPaste {
  post_id: number;
  post_title: string;
  post_desc: string;
}

export interface IProp {
  post: IPaste;
}

export interface CommentProp {
  comment_id: number;
  comment_desc: string;
  post_id: number;
}

export interface ListCommentProp {
  post: IPaste;
}
