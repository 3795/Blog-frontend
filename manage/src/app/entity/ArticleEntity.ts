/**
 * Created By Q.Hao
 * Description: 文章实体对象
 * Created At 2019/3/14
 */
export class ArticleEntity {

  // 文章ID
  public id: number;

  // 文章标题
  public title: string;

  // 文章缩略图
  public img: string;

  // 文章分类名称
  public categoryName: string;

  // 文章摘要
  public summary: string;

  // 文章内容
  public content: string;

  // 文章状态
  public status: number;

  // 文章类型
  public type: number;

  constructor() {
  }

}
