import React from "react";
import blog1 from '../images/blog-1.jpg'
import blog2 from '../images/blog-2.jpg'
import blog3 from '../images/blog-3.jpg'
import blog4 from '../images/blog-4.jpg'

export default function Blog(){
    return(
        <section id="blog-post">
        <h3 style={{fontFamily: 'Montserrat'}}><b>
            Recent Blog Posts <a href style={{fontFamily: 'Montserrat', color: 'red'}}>SHOW ALL</a></b>
        </h3>
        
        <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row row-cols-1 row-cols-lg-4 g-4 mt-3">
                <div className="col ">
                  <div className="card ">
                    <img src={blog1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">8 Tips to Keep Dogs and Cats Comfortable During Winters</h5>
                      <p>Winters are a time where we humans are most concerned about our health and do all the things possible to keep us safe from...</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card ">
                    <img src={blog2} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Dog Training: How To Completely Train Your Dog</h5>
                      <p>Are you ready to train your dog? Training dogs isn’t always easy if you’ve ever had a dog. It can be downright frustrating. However, if...</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={blog3} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">14 Reasons You Should Adopt A Greyhound</h5>
                      <p>Greyhounds are known for their exceptional speed. Other than speed, they make good friends and obedient ones too. Unfortunately,...</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={blog4} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">How And When To Switch From Puppy To Adult Dog Food</h5>
                      <p>A dog’s lifespan can be categorized into three age groups: puppyhood, adulthood, and senior years. As...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-1 row-cols-lg-4 g-4 mt-3">
                <div className="col ">
                  <div className="card ">
                    <img src={blog1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">8 Tips to Keep Dogs and Cats Comfortable During Winters</h5>
                      <p>Winters are a time where we humans are most concerned about our health and do all the things possible to keep us safe from...</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card ">
                    <img src={blog2} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Dog Training: How To Completely Train Your Dog</h5>
                      <p>Are you ready to train your dog? Training dogs isn’t always easy if you’ve ever had a dog. It can be downright frustrating. However, if...</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={blog3} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">14 Reasons You Should Adopt A Greyhound</h5>
                      <p>Greyhounds are known for their exceptional speed. Other than speed, they make good friends and obedient ones too. Unfortunately,...</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={blog4} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">How And When To Switch From Puppy To Adult Dog Food</h5>
                      <p>A dog’s lifespan can be categorized into three age groups: puppyhood, adulthood, and senior years. As...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-1 row-cols-lg-4 g-4 mt-3">
                <div className="col ">
                  <div className="card ">
                    <img src={blog1} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">8 Tips to Keep Dogs and Cats Comfortable During Winters</h5>
                      <p>Winters are a time where we humans are most concerned about our health and do all the things possible to keep us safe from...</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card ">
                    <img src={blog2} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Dog Training: How To Completely Train Your Dog</h5>
                      <p>Are you ready to train your dog? Training dogs isn’t always easy if you’ve ever had a dog. It can be downright frustrating. However, if...</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={blog3} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">14 Reasons You Should Adopt A Greyhound</h5>
                      <p>Greyhounds are known for their exceptional speed. Other than speed, they make good friends and obedient ones too. Unfortunately,...</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={blog4} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">How And When To Switch From Puppy To Adult Dog Food</h5>
                      <p>A dog’s lifespan can be categorized into three age groups: puppyhood, adulthood, and senior years. As...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
      </section>
    )
}