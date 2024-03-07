import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";
export type BlogDocument = Blog & Document;

export class Blog extends Document {
  @Prop({required: true})
  title: string;

  @Prop({required: true})
  content: string;

  @Prop({ required: true})
  creator: String;

  @Prop()
  createTime: Number;

  @Prop()
  updateTime: Number;

  @Prop()
  category: String;

  @Prop()
  tag: String
  
}

export const BlogSchema = SchemaFactory.createForClass(Blog);