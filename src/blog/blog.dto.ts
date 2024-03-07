export class CreateBlogDto {
  readonly _id: string;
  readonly title: string;
  readonly content: string;
  readonly creator: string;
  readonly createTime: number;
  readonly updateTime: number;
  readonly category: string;
  readonly tag: string;
}

export class EditBlogDto {
  readonly _id: string;
  readonly title: string;
  readonly content: string;
  readonly creator: string;
  readonly createTime: number;
  readonly updateTime: number;
  readonly category: string;
  readonly tag: string;
}