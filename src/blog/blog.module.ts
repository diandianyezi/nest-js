import { Module } from "@nestjs/common";
import { BlogController } from './blog.controller'
import { BlogService } from './blog.service';
import { MongooseModule } from "@nestjs/mongoose";
import { BlogSchema } from "src/schema/blog.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: 'Blogs', schema: BlogSchema}])],
  controllers: [BlogController],
  providers: [BlogService]
})

export class BlogModule {}