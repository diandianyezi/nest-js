import { Body, Controller, Get, Delete, Param, Post, Put } from "@nestjs/common";

import { CreateBlogDto, EditBlogDto } from "./blog.dto";
import { Blog } from "src/schema/blog.schema";
import { BlogService } from "./blog.service";


interface BlogResponse<T=unknown> {
    code: Number;
    data?:T;
    message: string;
}
@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) {}

    @Get('list')
    async findAll(): Promise<BlogResponse<Blog[]>> {
        console.info('有人请求blog/list接口了')
        return {
            code: 200,
            data: await this.blogService.findAll(),
            message: 'Success'
        }
    }
}