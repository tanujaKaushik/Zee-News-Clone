import React, {Component} from 'react';
import NewsContainer from './NewsContainer'
import '../Styles/FirstContainer.css';

export default class FirstContainer extends Component{

    articles=[{
        "source": {
            "id": null,
            "name": "STLtoday.com"
        },
        "author": "Steph Kukuljan, Annika Merrilees",
        "title": "Centene's cuts pleased investors, but may be 'disastrous' for St. Louis' office market - St. Louis Post-Dispatch",
        "description": "Centene brought an abrupt end to its plans for an East Coast headquarters, stunning local leaders there but pleasing Wall Street.",
        "url": "https://www.stltoday.com/business/local/centene-s-cuts-pleased-investors-but-may-be-disastrous-for-st-louis-office-market/article_34653cfc-1f8e-5101-9e92-154cf687dc2e.html",
        "urlToImage": "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/c/e4/ce4b6fa1-d40c-5c23-8fea-98f2fb46d4c0/630024b83fc7d.image.jpg?crop=1696%2C890%2C0%2C165&resize=1200%2C630&order=crop%2Cresize",
        "publishedAt": "2022-08-20T16:19:00Z",
        "content": "CLAYTON For decades, managed health care company Centene Corp. focused on scale. Now one of the largest in its industry, Centene is recalibrating for efficiency.\r\nThe shift in strategy brought an abr… [+4784 chars]"
    }];
    
    static defaultProps= {
        country : 'in',
        category : 'general'
    }

    constructor(props){
        super(props);
        console.log("constructor");
        this.state={
            articles: this.articles,
            // loading:false,
            // page:1,
             totalResults:0
        }
        document.title=this.props.category;
    }

    async componentDidMount(){
        let url='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b82f676494134fb88f0544a3867d8d27';
        // this.setState({loading:true});
        let data=await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles,
            totalResults: parsedData.totalResults,
            // loading:false
        })
    }

    render(){
        return(
        <div className="row">

        {/* ------------left conatainer-------------*/}
        <div className="col col-lg-3 ml-5">
                      {/* carousel */}
          <div className='carousel-container my-3'>
            <h4 className='text-center py-2'>VIDEO OF THE DAY</h4>
          <div className='carousel'>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="Images/news1.jpg" className="d-block " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <p className='fw-bold'></p>
                </div>
              </div>
              {
                 this.state.articles.slice(1,3).map((element)=>{
                    return(
                        <div className="carousel-item">
                            <img src={element.urlToImage} className="d-block" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <p className='fw-bold'>{element.title}</p>
                            </div>
                        </div>
                    )}
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
          </div>

        {/* left-news  */}
        <div className="list-group">
         {
            this.state.articles.slice(1,9).map((element)=>{
                return(
                <a href="/" className="list-group-item list-group-item-action border-0">
                    <NewsContainer title={element.title.slice(0,70)} imageUrl={element.urlToImage} font="fw-semibold"/>
                </a>)
            })
         }   
          {/* <a href="/" className="list-group-item list-group-item-action border-0"><NewsContainer imageUrl="Images/news.jpg" title ="YOU ARE DOING GREAT. KEEP IT UP...."/></a> */}
          {/* <a href="/" className="list-group-item list-group-item-action border-0"><NewsContainer/></a>
          <a href="/" className="list-group-item list-group-item-action border-0"><NewsContainer/></a>
          <a href="/" className="list-group-item list-group-item-action border-0"><NewsContainer/></a>
          <a href="/" className="list-group-item list-group-item-action border-0"><NewsContainer/></a>
          <a href="/" className="list-group-item list-group-item-action border-0"><NewsContainer/></a>
          <a href="/" className="list-group-item list-group-item-action border-0"><NewsContainer/></a>
          <a href="/" className="list-group-item list-group-item-action border-0 "><NewsContainer/></a> */}
        </div>
        </div>

      {/*--------------- middle news ------------------*/}
        <div className="col">
          {/* middle center news */}
            <div className='middle-main-news'>
              <img src={this.articles[0].urlToImage}  alt='' ></img>
              <p className='fw-bold text-white mx-5 fs-3'>{this.articles[0].title.slice(0,90)} . . .</p>
            </div>

            <ul className="list-group">
            {
                this.state.articles.slice(1,5).map((element)=>{
                    return(
                        <li className="list-group-item border-0">
                        <NewsContainer title={element.title} imageUrl={element.urlToImage} font="fw-semibold fs-5 px-3"/>
                    </li>)
                })
            } 
              {/* <li className="list-group-item border-0"><a href="/"><NewsContainer imageUrl="Images/news.jpg" title ="YOU ARE DOING GREAT. KEEP IT UP...."/></a></li> */}
              {/* <li className="list-group-item border-0"><a href="/"><NewsContainer/></a></li>
              <li className="list-group-item border-0"><a href="/"><NewsContainer/></a></li>
              <li className="list-group-item border-0"><a href="/"><NewsContainer/></a></li> */}
            </ul>
        </div>

      {/*------------- right corner news ---------------------*/}
        <div className="col col-lg-3">
              <img className='ad' src="Images/num1.jpg" alt=''/>

            <div className=' mt-3'>
            <div className="d-flex flex-row justify-content-between bd-highlight mt-5">
              <h5 className='my-2 text-danger fw-bold'>LIVE TV</h5>
              <button className='btn-sm btn btn-light mb-1'>More</button>
              </div>
              <div className="embed-responsive mx-1">
              <iframe className='video' src="https://www.youtube.com/embed/rS-cOg3Fh3E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>                
              </div>
            </div>
          </div>
        </div>
        );
    }
}