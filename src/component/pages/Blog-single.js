import React from 'react'
import Header from '../Common/header'
import Footer from '../Common/footer'
import { Link } from 'react-router-dom'

export default function Blogsingle() {
  return (
   <>
   
   <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: `url('../../images/bg_3.jpg')`}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div className="col-md-9 ftco-animate pb-5">
          	<p className="breadcrumbs"><span className="mr-2"><Link To="/">Home <i className="ion-ios-arrow-forward"></i></Link></span> <span className="mr-2"><Link To="blog.html">Blog <i className="ion-ios-arrow-forward"></i></Link></span> <span>Blog Single <i className="ion-ios-arrow-forward"></i></span></p>
            <h1 className="mb-3 bread">Read our blog</h1>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section ftco-degree-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ftco-animate">
            <h2 className="mb-3">It is a long established fact a reader be distracted</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
            <p>
              <image src="images/image_7.jpg" alt="" className="img-fluid"/>
            </p>
            <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
            <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
            <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
            <p>
              <image src="images/image_8.jpg" alt="" className="img-fluid"/>
            </p>
            <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
            <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
            <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
            <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                <Link To="#" className="tag-cloud-Link">Life</Link>
                <Link To="#" className="tag-cloud-Link">Sport</Link>
                <Link To="#" className="tag-cloud-Link">Tech</Link>
                <Link To="#" className="tag-cloud-Link">Travel</Link>
              </div>
            </div>
            
            <div className="about-author d-flex p-4 bg-light">
              <div className="bio mr-5">
                <image src="images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4"/>
              </div>
              <div className="desc">
                <h3>George Washington</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div>


            <div className="pt-5 mt-5">
              <h3 className="mb-5">6 Comments</h3>
              <ul className="comment-list">
                <li className="comment">
                  <div className="vcard bio">
                    <image src="images/person_1.jpg" alt="Image placeholder"/>
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">Oct. 29, 2019 at 1:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><Link To="#" className="reply">Reply</Link></p>
                  </div>
                </li>

                <li className="comment">
                  <div className="vcard bio">
                    <image src="images/person_1.jpg" alt="Image placeholder"/>
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">Oct. 29, 2019 at 1:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><Link To="#" className="reply">Reply</Link></p>
                  </div>

                  <ul className="children">
                    <li className="comment">
                      <div className="vcard bio">
                        <image src="images/person_1.jpg" alt="Image placeholder"/>
                      </div>
                      <div className="comment-body">
                        <h3>John Doe</h3>
                        <div className="meta">Oct. 29, 2019 at 1:21pm</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                        <p><Link To="#" className="reply">Reply</Link></p>
                      </div>


                      <ul className="children">
                        <li className="comment">
                          <div className="vcard bio">
                            <image src="images/person_1.jpg" alt="Image placeholder"/>
                          </div>
                          <div className="comment-body">
                            <h3>John Doe</h3>
                            <div className="meta">Oct. 29, 2019 at 1:21pm</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                            <p><Link To="#" className="reply">Reply</Link></p>
                          </div>

                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <image src="images/person_1.jpg" alt="Image placeholder"/>
                                </div>
                                <div className="comment-body">
                                  <h3>John Doe</h3>
                                  <div className="meta">Oct. 29, 2019 at 1:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><Link To="#" className="reply">Reply</Link></p>
                                </div>
                              </li>
                            </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="comment">
                  <div className="vcard bio">
                    <image src="images/person_1.jpg" alt="Image placeholder"/>
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">Oct. 29, 2019 at 1:21pm</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                    <p><Link To="#" className="reply">Reply</Link></p>
                  </div>
                </li>
              </ul>
              
              
              <div className="comment-form-wrap pt-5">
                <h3 className="mb-5">Leave a comment</h3>
                <form action="#" className="p-5 bg-light">
                  <div className="form-group">
                    <label for="name">Name *</label>
                    <input type="text" className="form-control" id="name"/>
                  </div>
                  <div className="form-group">
                    <label for="email">Email *</label>
                    <input type="email" className="form-control" id="email"/>
                  </div>
                  <div className="form-group">
                    <label for="website">Website</label>
                    <input type="url" className="form-control" id="website"/>
                  </div>

                  <div className="form-group">
                    <label for="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary"/>
                  </div>

                </form>
              </div>
            </div>

          </div> 
          <div className="col-md-4 sidebar ftco-animate">
            <div className="sidebar-box">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon icon-search"></span>
                  <input type="text" className="form-control" placeholder="Type a keyword and hit enter"/>
                </div>
              </form>
            </div>
            <div className="sidebar-box ftco-animate">
              <div className="categories">
                <h3>Categories</h3>
                <li><Link To="#">Ferrari <span>(12)</span></Link></li>
                <li><Link To="#">Cheverolet <span>(22)</span></Link></li>
                <li><Link To="#">Ford <span>(37)</span></Link></li>
                <li><Link To="#">Subaru <span>(42)</span></Link></li>
                <li><Link To="#">Toyota <span>(14)</span></Link></li>
                <li><Link To="#">Mistsubishi <span>(140)</span></Link></li>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Recent Blog</h3>
              <div className="block-21 mb-4 d-flex">
                <Link className="blog-img mr-4" style={{backgroundImage: `url('../../images/image_1.jpg')`}}></Link>
                <div className="text">
                  <h3 className="heading"><Link To="#">Why Lead Generation is Key for Business Growth</Link></h3>
                  <div className="meta">
                    <div><Link To="#"><span className="icon-calendar"></span>Oct. 29, 2019</Link></div>
                    <div><Link To="#"><span className="icon-person"></span> Admin</Link></div>
                    <div><Link To="#"><span className="icon-chat"></span> 19</Link></div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <Link className="blog-img mr-4" style={{backgroundImage: `url('../../images/image_2.jpg')`}}></Link>
                <div className="text">
                  <h3 className="heading"><Link To="#">Why Lead Generation is Key for Business Growth</Link></h3>
                  <div className="meta">
                    <div><Link To="#"><span className="icon-calendar"></span>Oct. 29, 2019</Link></div>
                    <div><Link To="#"><span className="icon-person"></span> Admin</Link></div>
                    <div><Link To="#"><span className="icon-chat"></span> 19</Link></div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <Link className="blog-img mr-4" style={{backgroundImage: `url('../../images/image_3.jpg')`}}></Link>
                <div className="text">
                  <h3 className="heading"><Link To="#">Why Lead Generation is Key for Business Growth</Link></h3>
                  <div className="meta">
                    <div><Link To="#"><span className="icon-calendar"></span>Oct. 29, 2019</Link></div>
                    <div><Link To="#"><span className="icon-person"></span> Admin</Link></div>
                    <div><Link To="#"><span className="icon-chat"></span> 19</Link></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>
              <div className="tagcloud">
                <Link To="#" className="tag-cloud-Link">dish</Link>
                <Link To="#" className="tag-cloud-Link">menu</Link>
                <Link To="#" className="tag-cloud-Link">food</Link>
                <Link To="#" className="tag-cloud-Link">sweet</Link>
                <Link To="#" className="tag-cloud-Link">tasty</Link>
                <Link To="#" className="tag-cloud-Link">delicious</Link>
                <Link To="#" className="tag-cloud-Link">desserts</Link>
                <Link To="#" className="tag-cloud-Link">drinks</Link>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>

        </div>
      </div>
    </section> 

   </>
  )
}
