import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BlogDocument, Blog } from 'src/schema/blog.schema';
import { CreateBlogDto } from './blog.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Blogs') private readonly blogTest: Model<BlogDocument>) {}

  // 添加
  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const createBlog = new this.blogTest(createBlogDto);
    const temp = await createBlog.save();
    return temp;
  }

  // 查找
  async findAll(): Promise<Blog []>{
    const temp = await this.blogTest.find().exec();
    return temp;
  }

  async findOne(title: string): Promise<Blog[]> {
    const temp = await this.blogTest.find({title})
    return temp;
  }

  // 删除
  async delete(sid: number) {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.blogTest.deleteMany({ _id: sid });
    return temp;
  }

  // 修改
  async updateUser(sid: string, data: any) {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.blogTest.updateOne({ _id: sid }, { $set: data });
    return temp;
  }
}
